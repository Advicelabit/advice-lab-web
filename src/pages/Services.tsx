import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calculator,
  Home,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const services = [
  {
    icon: FileText,
    title: "Paraplanning",
    description:
      "Comprehensive support for financial planning documentation and client administration.",
    features: [
      "Statement of Advice preparation",
      "Client file management",
      "Research and analysis",
      "Portfolio reviews",
      "Compliance documentation",
    ],
    link: "/services/paraplanning",
  },
  {
    icon: Calculator,
    title: "Client Service Officers",
    description:
      "Professional bookkeeping and financial reporting services for advisory practices.",
    features: [
      "Daily bookkeeping",
      "Financial reporting",
      "BAS preparation",
      "Payroll processing",
      "Reconciliations",
    ],
    link: "/services/ClientSupport",
  },
  // {
  //   icon: Home,
  //   title: "Mortgage Support",
  //   description: "End-to-end mortgage processing and documentation assistance.",
  //   features: [
  //     "Loan application processing",
  //     "Document verification",
  //     "Lender communication",
  //     "Settlement coordination",
  //     "Post-settlement support",
  //   ],
  //   link: "/services/mortgage",
  // },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Expert offshore support tailored to Australian financial advisory
              practices.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 md:gap-14 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <ScrollAnimation
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""} text-center md:text-left`}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8 max-w-xl mx-auto md:mx-0 text-left">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="hover:scale-105 transition-transform w-full sm:w-auto justify-center"
                    >
                      <Link to={service.link}>
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  animation={index % 2 === 0 ? "fade-left" : "fade-right"}
                  delay={200}
                >
                  <div
                    className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="aspect-[16/10] sm:aspect-[4/3] rounded-3xl bg-secondary overflow-hidden hover-lift max-w-2xl mx-auto w-full">
                      <div className="w-full h-full gradient-primary opacity-10" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
