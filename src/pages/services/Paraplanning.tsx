import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";
import styles from "./Paraplanning.module.css";

const offerings = [
  {
    title: "Statement of Advice preparation",
    description:
      "Our experienced paraplanners prepare clear, well-structured Statements of Advice (SoAs) across a broad range of advice scenarios, from simple cases to comprehensive strategies. We operate as an extension of your team, following your templates, preferences, and advice style.",
    helps: [
      "Receive well-structured plans that are ready to present",
      "Spend less time reviewing and refining documents",
      "Maintain consistency across all client advice",
    ],
  },
  {
    title: "Consistent and fast turnaround times",
    description:
      "Our established workflows and experienced paraplanning team deliver plans within clear timeframes so you can manage client expectations and advice schedules with confidence.",
    helps: [
      "Keep advice moving without unnecessary delays",
      "Plan meetings and reviews with greater certainty",
      "Reduce pressure caused by last-minute documentation",
    ],
  },
  {
    title: "Accuracy you can rely on",
    description:
      "Every plan is reviewed by our dedicated QA team with a strong focus on accuracy and consistency. We pay close attention to detail so you're not fixing avoidable errors or inconsistencies.",
    helps: [
      "Fewer revisions after delivery",
      "Cleaner, more reliable advice documents",
      "Greater confidence when presenting to clients",
    ],
  },
  {
    title: "Support aligned with current compliance standards",
    description:
      "Our paraplanners stay aligned with current professional and regulatory expectations, ensuring your documentation supports compliance obligations without becoming overly complex.",
    helps: [
      "Reduce compliance-related concerns",
      "Be better prepared for audits and file reviews",
      "Maintain professional standards across your advice documents",
    ],
  },
  {
    title: "Cost-efficient paraplanning with built-in flexibility",
    description:
      "Our paraplanning service is an efficient alternative to in-house hiring, helping you reduce overheads without sacrificing quality. Engage a dedicated paraplanner on a part-time or full-time basis and match support with your workload.",
    helps: [
      "Reduce staffing and operational costs compared to in-house resourcing",
      "Access a dedicated paraplanner without long-term employment commitments",
      "Scale support easily as advice volumes increase or slow",
      "Maintain consistent quality while keeping paraplanning costs under control",
    ],
  },
  {
    title: "Extended support across two time zones",
    description:
      "We offer paraplanning support from teams in Sri Lanka and the Philippines so your work progresses beyond standard business hours. Choose one location or combine both for extended coverage and faster turnaround.",
    helps: [
      "Improve efficiency with work progressing across extended hours",
      "Reduce turnaround times without increasing in-house pressure",
      "Choose support from Sri Lanka, the Philippines, or both",
      "Maintain consistency and quality across all plans, regardless of location",
    ],
  },
];

const trustIndicators = [
  {
    title: "Three decades of advice-industry experience",
    description:
      "With over 30 years of combined experience in the financial planning industry, we understand the realities advisers face. Our paraplanning support is shaped by hands-on knowledge of advice practices, regulatory requirements, and quality to provide you the precise support you need.",
  },
  {
    title: "Driven by people, not just process.",
    description:
      "We're a people-driven team that values learning and accountability. Our paraplanners receive ongoing training and regular updates to stay aligned with industry changes, supported by a strong working culture that encourages efficiency, collaboration, and quality outcomes for advisers.",
  },
  {
    title: "ISO27001 certified for information security",
    description:
      "Advice Lab is ISO 27001 certified, giving you the peace of mind, confirming that we prioritize data privacy and applies strong security measures across all paraplanning activities.",
  },
  {
    title: "Extended coverage across two locations",
    description:
      "Our teams in Sri Lanka and the Philippines allows to support advice delivery across extended hours. This means work can continue beyond your day, helping reduce delays and maintain momentum.",
  },
];

const benefits = [
  {
    title: "Save 20+ Hours Weekly",
    description:
      "Free up your time to focus on client relationships and business development.",
  },
  {
    title: "Reduce Operational Costs",
    description:
      "Access skilled professionals at a fraction of local hiring costs.",
  },
  {
    title: "Scale On Demand",
    description:
      "Easily adjust your team size based on workload and business needs.",
  },
  {
    title: "Quality Assured",
    description: "All work undergoes rigorous quality checks before delivery.",
  },
];

const Paraplanning = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              {/* <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/80 font-medium">
                Services
              </span> */}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Paraplanning
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Providing you accurate, compliant plans with fast turnaround times
              with consistent quality, giving you hours back to focus more on
              your clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              {/* <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Pricing</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="w-full text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
              Our Offering
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              Explore How Our Paraplanners{" "}
              <span className="gradient-text">Can Support You</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive paraplanning solutions tailored to your practice
              needs
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {offerings.map((offering, index) => (
                <AccordionItem
                  key={offering.title}
                  value={`offering-${index}`}
                  className="group rounded-2xl border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient accent bar */}
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-500"></div>

                  <div className="px-8">
                    <AccordionTrigger className="text-left text-lg md:text-xl font-display font-bold py-6 hover:text-primary transition-colors group-hover:no-underline">
                      <div className="flex items-start gap-4 pr-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:from-primary/20 group-hover:to-blue-600/20 transition-colors">
                          <span className="text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <span>{offering.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pb-8">
                      {/* Description */}
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                      Benefits card
                      <div className="ml-12 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-xl p-6 border border-blue-100/50">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm font-bold uppercase tracking-wide text-primary">
                            How this helps you
                          </p>
                        </div>
                        <ul className="space-y-3">
                          {offering.helps.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-blue-600 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-foreground leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA hint */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium text-muted-foreground">
                Click each item to learn more about how we support your practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
              Why Choose Us
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Why Partner With <span className="gradient-text">Advice Lab</span>
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our paraplanning service combines deep industry knowledge with
              robust processes and security
            </p> */}
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="group relative">
                {/* Decorative background glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Number badge with icon background */}
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 mb-6 group-hover:from-primary/20 group-hover:to-blue-600/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="relative text-2xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {indicator.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {indicator.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Corner accent dot */}
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                Trusted by 150+ Australian financial advisers
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Paraplanning;
