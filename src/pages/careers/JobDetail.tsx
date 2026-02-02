import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowLeft,
  AlertCircle,
  Upload,
  Check,
} from "lucide-react";
import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import jobVacancies from "@/data/jobVacancies.json";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  keyResponsibilities: string[];
  mustHaves: string[];
  skillsWeValue: string[];
  benefits: string[];
}

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  console.log("jobId:", jobId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const job = (jobVacancies as Job[]).find((j) => j.id === jobId);

  if (!job) {
    return (
      <Layout>
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Job Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The job you're looking for doesn't exist.
              </p>
              <Button onClick={() => navigate("/careers")} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      // Scroll to the top of the content area to show the success message
      const contentSection = document.getElementById("job-detail-content");
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setTimeout(() => {
        navigate("/careers");
      }, 2000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-primary-foreground/90">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {job.type}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                {job.category}
              </span>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section id="job-detail-content" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <ScrollAnimation animation="fade-up">
                <div className="bg-background rounded-2xl border border-green-500/30 p-12 text-center">
                  <div className="flex justify-center mb-4">
                    <Check className="w-16 h-16 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">
                    Application Submitted!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for applying to {job.title}. We'll review your
                    application and get back to you soon.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Redirecting you back...
                  </p>
                </div>
              </ScrollAnimation>
            ) : (
              <>
                {/* About the Role */}
                <ScrollAnimation animation="fade-up">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-6">About the Role</h2>
                    <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Key Responsibilities */}
                <ScrollAnimation animation="fade-up" delay={100}>
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8">
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-4">
                      {job.keyResponsibilities.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-4 text-lg text-muted-foreground"
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                {/* Must-Haves */}
                <ScrollAnimation animation="fade-up" delay={200}>
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8">Must-Haves</h2>
                    <ul className="space-y-4">
                      {job.mustHaves.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-4 text-lg text-muted-foreground"
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                {/* Skills We Value */}
                <ScrollAnimation animation="fade-up" delay={300}>
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8">Skills We Value</h2>
                    <ul className="space-y-4">
                      {job.skillsWeValue.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-4 text-lg text-muted-foreground"
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                {/* What's in It for You */}
                <ScrollAnimation animation="fade-up" delay={400}>
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8">
                      What's in It for You
                    </h2>
                    <ul className="space-y-4">
                      {job.benefits.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-4 text-lg text-muted-foreground"
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                {/* Application Form */}
                <ScrollAnimation animation="fade-up" delay={500}>
                  <div className="mb-12 bg-background rounded-2xl border border-border p-8">
                    <h2 className="text-4xl font-bold mb-8">
                      Apply for this Position
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          required
                          className="h-12"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-base font-semibold mb-2 block"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-12"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-base font-semibold mb-2 block"
                        >
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
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
                          placeholder="Tell us why you're a great fit for this role..."
                          value={formData.coverLetter}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coverLetter: e.target.value,
                            })
                          }
                          required
                          rows={6}
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
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                resume: e.target.files?.[0] || null,
                              })
                            }
                            required
                            className="hidden"
                          />
                          <label
                            htmlFor="resume"
                            className="cursor-pointer block"
                          >
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

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full h-12 mt-8"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? "Submitting..."
                          : "Apply for this Position"}
                      </Button>
                    </form>
                  </div>
                </ScrollAnimation>

                {/* Back Button */}
                <ScrollAnimation animation="fade-up" delay={600}>
                  <div className="text-center mb-8">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => navigate(-1)}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
                    </Button>
                  </div>
                </ScrollAnimation>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetail;
