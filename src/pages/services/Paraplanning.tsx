import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";
import styles from "./Paraplanning.module.css";

const features = [
  "Statement of Advice (SOA) preparation",
  "Record of Advice (ROA) drafting",
  "Client file management and organization",
  "Research and investment analysis",
  "Portfolio reviews and reporting",
  "Fee disclosure statements",
  "Compliance documentation",
  "Client onboarding support",
];

const benefits = [
  {
    title: "Save 20+ Hours Weekly",
    description: "Free up your time to focus on client relationships and business development.",
  },
  {
    title: "Reduce Operational Costs",
    description: "Access skilled professionals at a fraction of local hiring costs.",
  },
  {
    title: "Scale On Demand",
    description: "Easily adjust your team size based on workload and business needs.",
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
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/80 font-medium">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Paraplanning & Admin Support
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Expert paraplanning professionals dedicated to supporting your financial advisory practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" size="lg" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}>What We Offer</span>
              <h2 className={`font-display font-bold mt-2 mb-6 text-muted-foreground ${styles.mainHeader}`}>
                Comprehensive Paraplanning Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Our trained paraplanning professionals handle the documentation and administrative tasks that take you away from client-facing work.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-secondary overflow-hidden">
                <div className="w-full h-full gradient-primary opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}>Benefits</span>
            <h2 className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}>Why Partner With Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="text-lg font-display font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Try our paraplanning services free for one week. No commitment required.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Paraplanning;
