import Seo from "@/components/ui/Seo";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const offerings = [
  {
    title: "SMSF Setup & Establishment",
    description:
      "Our team manages the end-to-end establishment of Self-Managed Super Funds, including trust deed preparation, ATO registration, ABN and TFN applications, and member documentation. We ensure every fund is correctly structured and compliantly set up from day one.",
    helps: [
      "Receive a fully established and ATO-registered SMSF",
      "Reduce time spent on complex paperwork and regulatory steps",
      "Ensure correct trustee structures and documentation from the start",
    ],
  },
  {
    title: "SMSF Administration & Compliance",
    description:
      "We handle all ongoing SMSF administration including annual financial statements, member statements, trustee minutes, contribution tracking and pension commencement documentation. Our team ensures your funds remain compliant and audit-ready throughout the year.",
    helps: [
      "Maintain accurate and up-to-date SMSF records year-round",
      "Reduce compliance risk with thorough documentation management",
      "Free up adviser time from routine fund administration tasks",
    ],
  },
  {
    title: "Tax Returns & BAS Preparation",
    description:
      "Our accounting specialists prepare SMSF annual returns, individual and business tax returns, and Business Activity Statements (BAS) with accuracy and efficiency. We manage all required schedules, calculations and lodgements to keep your clients on time and compliant.",
    helps: [
      "Accurate, lodgement-ready tax returns prepared to your standards",
      "Timely BAS preparation to avoid penalties and interest",
      "Reduction in adviser workload across tax season",
    ],
  },
  {
    title: "Financial Statements & Reporting",
    description:
      "We prepare comprehensive financial statements for SMSFs and accounting clients, including balance sheets, income statements, and notes to accounts. All reports are prepared in accordance with relevant accounting standards and are ready for audit review.",
    helps: [
      "Professionally prepared statements aligned to your practice standards",
      "Audit-ready financials delivered on time",
      "Consistent and accurate reporting across all clients",
    ],
  },
  {
    title: "Audit Support & Coordination",
    description:
      "Our team coordinates directly with SMSF auditors, preparing and packaging all required documentation, responding to auditor queries and managing the audit process from start to finish. We ensure smooth audit completion without adding to adviser workload.",
    helps: [
      "Reduce time spent preparing and responding to auditor requests",
      "Ensure all documentation is complete and accurate before submission",
      "Keep the audit process progressing without delays",
    ],
  },
  {
    title: "Bookkeeping & Reconciliation",
    description:
      "We provide accurate bookkeeping, bank reconciliations, accounts payable and receivable management, and payroll processing for your accounting clients. Our team uses leading platforms including Xero, MYOB and QuickBooks to maintain clean, reliable financial records.",
    helps: [
      "Maintain accurate books without increasing in-house admin",
      "Reduce errors through consistent reconciliation processes",
      "Support clients with timely, reliable financial data",
    ],
  },
  {
    title: "Payroll Processing & Superannuation",
    description:
      "Our specialists manage end-to-end payroll processing including pay runs, superannuation calculations, Single Touch Payroll (STP) lodgements and leave management. We ensure your clients' payroll obligations are met accurately and on time every period.",
    helps: [
      "Error-free payroll processing delivered each pay cycle",
      "Timely STP lodgements and super payment management",
      "Reduced compliance risk for your business clients",
    ],
  },
];

const trustIndicators = [
  {
    title: "Deep SMSF and accounting expertise",
    description:
      "Our team brings specialist knowledge in SMSF administration and accounting, developed through years of hands-on experience across a wide range of fund types and client structures. We understand the nuances of superannuation legislation and apply that knowledge to every fund we manage.",
  },
  {
    title: "Technology-enabled and platform agnostic",
    description:
      "We work across leading SMSF and accounting platforms including BGL, Class Super, Xero, MYOB and QuickBooks. Our team adapts to your existing workflows and systems, meaning no disruption and immediate productivity.",
  },
  {
    title: "ISO27001 certified for information security",
    description:
      "Advice Lab is ISO 27001 certified, giving you confidence that your clients' sensitive financial data is handled with the highest standards of information security and privacy across all SMSF and accounting tasks.",
  },
  {
    title: "Extended coverage across two locations",
    description:
      "Our teams in Sri Lanka and the Philippines allow us to support your accounting and SMSF work across extended hours. This means work continues beyond your business day, reducing turnaround times and keeping your practice moving.",
  },
];

const SMSFAccounting = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (!isMobile) setOpenIndex(idx);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setOpenIndex(null);
  };
  const handleClick = (idx: number) => {
    if (isMobile) setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Layout>
      <Seo
        title="SMSF & Accounting Support | Advice Lab"
        description="Expert SMSF administration and accounting support for financial advisers and accountants. Tax returns, BAS preparation, financial statements, audit coordination and more."
        keywords="SMSF administration, accounting support, tax returns, BAS preparation, financial statements, SMSF audit, bookkeeping, payroll, superannuation, BGL, Class Super, Xero"
        pathname="/services/smsf-accounting"
        schemaData={{
          "@type": "LocalBusiness",
          name: "Advice Lab SMSF & Accounting Support",
          description:
            "Expert SMSF administration and accounting support for financial advisers and accountants",
          url: "https://advicelab.com.au/services/smsf-accounting",
        }}
      />

      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <ScrollAnimation animation="fade-up" className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6"></div>
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              SMSF & Accounting Support
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Specialist SMSF administration and accounting support that keeps
              your practice compliant, efficient and client-focused.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg" asChild>
                <Link to="/contact-us">Get in Touch</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation
            animation="fade-up"
            className="w-full text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
              Our Offering
            </span>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SMSF and accounting services that elevate your practice
            </p>
          </ScrollAnimation>

          <div className="mx-auto">
            <div className="space-y-4">
              {offerings.map((offering, index) => (
                <ScrollAnimation
                  key={offering.title}
                  animation="fade-up"
                  delay={index * 120}
                >
                  <div
                    className="group rounded-2xl border-0 bg-white shadow-md transition-all duration-300 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-500"></div>

                    <div className="px-8">
                      <div
                        className="text-left text-lg md:text-xl font-display font-bold py-6 hover:text-primary transition-colors group-hover:no-underline cursor-pointer select-none flex items-start gap-4 pr-4"
                        onClick={() => handleClick(index)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:from-primary/20 group-hover:to-blue-600/20 transition-colors">
                          <span className="text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <span>{offering.title}</span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openIndex === index
                            ? "max-h-[1000px] opacity-100 py-8 space-y-6"
                            : "max-h-0 opacity-0 py-0"
                        }`}
                        style={{
                          transitionProperty: "max-height, opacity, padding",
                        }}
                      >
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {offering.description}
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-xl p-6 border border-blue-100/50">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-[5px] bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-white" />
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
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Why Partner With Advice Lab
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mx-auto">
            {trustIndicators.map((indicator, index) => (
              <ScrollAnimation
                key={indicator.title}
                animation="fade-up"
                delay={index * 140}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-md transition-all duration-300 border border-gray-100 h-full">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 mb-6 group-hover:from-primary/20 group-hover:to-blue-600/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="relative text-2xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {indicator.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {indicator.description}
                  </p>

                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SMSFAccounting;
