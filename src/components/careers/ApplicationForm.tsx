import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

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
      // Simulate form submission - replace with actual API call
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("jobTitle", jobTitle);
      formDataToSend.append("jobId", jobId);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      // Replace with your actual API endpoint
      // const response = await fetch("/api/applications", {
      //   method: "POST",
      //   body: formDataToSend,
      // });
      // if (!response.ok) throw new Error("Failed to submit application");

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
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
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
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
        <h3 className="text-xl font-bold mb-1">Apply for this position</h3>
        <p className="text-sm text-muted-foreground">{jobTitle}</p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Cover Letter */}
        <div className="space-y-2">
          <Label htmlFor="coverLetter">
            Cover Letter <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Tell us why you're interested in this position and what makes you a great fit for the role..."
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={5}
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <Label htmlFor="resume">
            Upload CV/Resume <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center justify-between p-4 border-2 border-dashed border-border rounded-lg hover:border-primary transition-colors">
            <div className="flex-1">
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="resume"
                className="cursor-pointer flex items-center gap-2"
              >
                <span className="text-sm text-muted-foreground">
                  {fileName || "No file chosen"}
                </span>
              </label>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("resume")?.click()}
            >
              Choose File
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Allowed Type(s): .pdf, .doc, .docx
          </p>
        </div>

        {/* Agreement */}
        <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
          <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <label className="flex items-start gap-2 cursor-pointer flex-1">
            <input type="checkbox" required className="mt-1 accent-primary" />
            <span className="text-xs text-muted-foreground">
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
          className="flex-1"
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1"
          disabled={loading || !validateForm()}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};
