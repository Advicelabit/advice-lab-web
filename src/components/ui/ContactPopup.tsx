import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, X } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

const API_BASE_URL =
  "https://oxch4uog7g.execute-api.ap-southeast-2.amazonaws.com/dev";

const serviceOptions = [
  { id: "paraplanning", label: "Paraplanning Services" },
  { id: "client-support", label: "Client Support Services" },
  { id: "smsf-accounting", label: "SMSF & Accounting Services" },
  { id: "mortgage-support", label: "Mortgage Support Services" },
];

interface ContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export function ContactPopup({
  open,
  onOpenChange,
  title = "Get in Touch",
  description = "Ready to scale your practice? Let's discuss how we can help.",
}: ContactPopupProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interests: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    company?: string;
    interests?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    company?: boolean;
  }>({});

  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\d+$/.test(value))
          return "Phone number must contain numbers only";
        break;
      case "company":
        if (!value.trim()) return "Company is required";
        break;
    }
    return undefined;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interestId]
        : prev.interests.filter((id) => id !== interestId),
    }));
    if (checked) {
      setErrors((prev) => ({ ...prev, interests: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    const nameError = validateField("name", formData.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateField("email", formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validateField("phone", formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const companyError = validateField("company", formData.company);
    if (companyError) newErrors.company = companyError;

    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one service";
    }

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
      phone: true,
      company: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const submissionDate = new Date().toLocaleString("en-AU", {
      timeZone: userTimeZone,
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const selectedServices = formData.interests
      .map((id) => serviceOptions.find((opt) => opt.id === id)?.label)
      .filter(Boolean);

    const emailBody = `
ADVICELAB - NEW PRODUCT INTEREST LEAD
=========================================

A user has expressed interest in the following services:

Interested Services:
----------------------------------------
${
  selectedServices.length > 0
    ? selectedServices
        .map((service, index) => `${index + 1}. ${service}`)
        .join("\n")
    : "None selected"
}
----------------------------------------

Contact Details:
----------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}

Message:
--------
${formData.message}

Submission Details:
-------------------
Date: ${submissionDate}
Timezone: ${userTimeZone}

---
This inquiry was submitted through the AdviceLab Popup Form.
    `;

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "n4wSKrdsls7LO2vpHj78Qa9sR28ozfxS4qcCK9fL",
        },
        body: JSON.stringify({
          sender: "noreply@advicegenie.com.au",
          recipient: "shahanshaeek@advicelab.com.au",
          subject: `New Product Interested Form Submission: ${formData.name}`,
          body: emailBody,
          is_html: false,
          attachments: [],
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      try {
        trackFormSubmission("contact_popup_form", {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interests: formData.interests,
        });
      } catch (err) {
        // swallow analytics errors
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interests: [],
      });
      setSubmitted(false);
      setErrors({});
      setTouched({});
    }, 200);
  };

  // Handle backdrop click — only close if clicking the overlay itself
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="contact-popup-title"
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-[520px] bg-background rounded-xl shadow-2xl flex flex-col"
        style={{ maxHeight: "95dvh" }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-6">
          {/* Header */}
          <div className="space-y-1.5 pb-4 text-center">
            <h2
              id="contact-popup-title"
              className="text-xl font-display font-bold text-primary"
            >
              {title}
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle className="w-14 h-14 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold mb-1.5">Message Sent!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Thank you for your interest in{" "}
                <span className="font-semibold text-primary">Advice Lab</span>.
                We've received your enquiry and a member of our team will
                contact you shortly.
              </p>
              <Button
                onClick={handleClose}
                className="mt-5 gradient-primary text-primary-foreground"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              {/* Service Interest Checkboxes */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell us what you're interested in{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {serviceOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={option.id}
                        checked={formData.interests.includes(option.id)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(option.id, checked as boolean)
                        }
                        className="h-4 w-4 shrink-0"
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm cursor-pointer leading-snug"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.interests && (
                  <p className="text-xs text-red-500 mt-1.5">
                    {errors.interests}
                  </p>
                )}
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`h-9 ${
                      errors.name && touched.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`h-9 ${
                      errors.email && touched.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`h-9 ${
                      errors.company && touched.company
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                  />
                  {errors.company && touched.company && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`h-9 ${
                      errors.phone && touched.phone
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your needs..."
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`resize-none ${
                    errors.message && touched.message
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity h-10"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
