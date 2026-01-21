import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";


const features = [
  "Loan application processing",
  "Document collection and verification",
  "Lender submission and follow-up",
  "Compliance and regulatory checks",
  "Settlement coordination",
  "Post-settlement support",
  "Serviceability calculations",
  "Broker support services",
];

const Mortgage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up" className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/80 font-medium">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Mortgage Support
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              End-to-end mortgage processing support to help you close more loans, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" size="lg" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Pricing</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider">What We Offer</span>
                <h2 className="font-display font-bold mt-2 mb-6 text-muted-foreground">
                  Streamlined Mortgage Processing
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our mortgage support team handles the time-consuming aspects of loan processing, so you can focus on client relationships.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <li key={feature}>
                      <ScrollAnimation
                        animation="fade-up"
                        delay={index * 60}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </ScrollAnimation>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={150}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-secondary overflow-hidden">
                  <div className="w-full h-full gradient-primary opacity-10" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Speed up your loan processing with our dedicated mortgage support team.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Mortgage;
