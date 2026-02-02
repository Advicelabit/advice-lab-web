import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, Upload } from "lucide-react";

const API_BASE_URL =
  "https://n54lm5igkl.execute-api.ap-southeast-2.amazonaws.com/dev";

interface ApplicationFormProps {
  jobTitle: string;
  jobId: string;
  onClose: () => void;
}

export const ApplicationForm = ({
  jobTitle,
  jobId,
  onClose,
}: ApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(file.type)) {
        setFormData((prev) => ({
          ...prev,
          resume: file,
        }));
        setFileName(file.name);
      } else {
        alert("Please upload a PDF, DOC, or DOCX file");
        e.target.value = "";
      }
    }
  };

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.coverLetter.trim() ||
      !formData.resume
    ) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields with valid information");
      return;
    }

    setLoading(true);

    try {
      // Create a plain text email body for the resume submission
      const emailBody = `
ADVICELAB - NEW JOB APPLICATION
===============================

Applicant Details:
------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Position Applied: ${jobTitle}

Cover Letter:
-------------
${formData.coverLetter}

Resume Attached:
----------------
${formData.resume?.name || "No file attached"}

---
This application was submitted through the AdviceLab Careers page.
      `;

      // Convert resume file to base64 for attachment
      let attachmentData = null;
      if (formData.resume) {
        const reader = new FileReader();
        attachmentData = await new Promise<string | null>((resolve) => {
          reader.onload = () => {
            const base64String = reader.result as string;
            // Extract the base64 data portion (remove data:application/pdf;base64, prefix)
            const base64Data = base64String.split(",")[1] || base64String;
            resolve(base64Data);
          };
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(formData.resume!);
        });
      }

      // Send the email with attachment via the API
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: formData.email,
          subject: `Application Received: ${jobTitle} - ${formData.fullName}`,
          body: emailBody,
          attachment: attachmentData
            ? {
                filename: formData.resume?.name,
                contentType: formData.resume?.type,
                data: attachmentData,
              }
            : null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitted(true);
      // Scroll to the top of the form content area to show the success message
      setTimeout(() => {
        const contentSection =
          document.getElementById("submit-resume-content") ||
          document.getElementById("job-detail-content") ||
          document.querySelector('section[class*="bg-secondary"]');
        if (contentSection) {
          contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-3xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground max-w-md">
          Thank you for applying for the {jobTitle} position. We'll review your
          application and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-4xl font-bold mb-8">Apply for this position</h3>
        <p className="text-lg text-muted-foreground mb-6">{jobTitle}</p>
      </div>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <Label
            htmlFor="fullName"
            className="text-base font-semibold mb-2 block"
          >
            Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="h-12"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-base font-semibold mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="h-12"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="h-12"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <Label
            htmlFor="coverLetter"
            className="text-base font-semibold mb-2 block"
          >
            Cover Letter *
          </Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Tell us why you're interested in this position and what makes you a great fit for the role..."
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={6}
            required
            className="resize-none"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <Label
            htmlFor="resume"
            className="text-base font-semibold mb-2 block"
          >
            Upload CV/Resume *
          </Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label htmlFor="resume" className="cursor-pointer block">
              <div className="flex justify-center mb-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
              </div>
              {formData.resume ? (
                <div>
                  <p className="font-semibold text-primary">
                    {formData.resume.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click to change file
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-semibold">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    PDF, DOC or DOCX (max. 5MB)
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Agreement */}
        <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
          <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <label className="flex items-start gap-2 cursor-pointer flex-1">
            <input type="checkbox" required className="mt-1 accent-primary" />
            <span className="text-sm text-muted-foreground">
              By using this form you agree with the storage and handling of your
              data by this website. <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1 h-12"
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 h-12"
          disabled={loading || !validateForm()}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};
