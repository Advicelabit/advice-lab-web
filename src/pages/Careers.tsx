import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TrainingPartnersLogos } from "@/components/home/TrainingPartnersLogos";
import {
  BookOpen,
  Download,
  Calculator,
  FileText,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Offshoring Guide",
    description:
      "Everything you need to know about starting with offshore support.",
    type: "Guide",
    link: "#",
  },
  {
    icon: Calculator,
    title: "Pricing Calculator",
    description: "Calculate your potential savings with our pricing tool.",
    type: "Tool",
    link: "#",
  },
  {
    icon: FileText,
    title: "Paraplanning Playbook",
    description: "Best practices for working with offshore paraplanning teams.",
    type: "Playbook",
    link: "#",
  },
  {
    icon: Download,
    title: "One Week Free Trial",
    description: "Try our paraplanning services free for one week.",
    type: "Offer",
    link: "/contact",
  },
];

const benefits = [
  "Competitive salary packages",
  "Health and wellness benefits",
  "Professional development programs",
  "Flexible working arrangements",
  "Career growth opportunities",
  "Collaborative team culture",
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Build your career with a team that's transforming the financial
              advisory industry.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                  Why Work With Us
                </span>
                <h2 className="font-display font-bold mt-2 mb-6 text-muted-foreground text-2xl md:text-3xl">
                  A Great Place to Grow
                </h2>
                <p className="text-muted-foreground mb-8">
                  At Advice Lab, we're building a team of talented professionals
                  who are passionate about delivering excellence.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button
                    size="sm"
                    asChild
                    className="h-12 px-12 text-md w-full sm:w-auto sm:min-w-[190px] transition-transform hover:scale-105"
                  >
                    <Link
                      to="/careers/srilanka"
                      className="flex items-center gap-2"
                    >
                      Explore Sri Lanka
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="h-12 px-12 text-md  w-full sm:w-auto sm:min-w-[190px] transition-transform hover:scale-105"
                  >
                    <Link
                      to="/careers/philippines"
                      className="flex items-center gap-2"
                    >
                      Explore Philippines
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-secondary overflow-hidden hover-lift">
                  <div className="w-full h-full gradient-primary opacity-10" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                Follow Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Life at <span className="gradient-text">Advice Lab</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See what it's like to be part of our team
              </p>
            </div>
          </ScrollAnimation>

          {/* Instagram Feed Widget Container */}
          <div className="max-w-6xl mx-auto ">
            <div
              className="instagram-feed-widget bg-white rounded-2xl p-4 flex items-center justify-center"
              id="instagram-feed-container"
              style={{ position: "relative" }}
            >
              <iframe
                src="https://www.juicer.io/api/feeds/advice-lab-270a837c-9b66-449e-8c6c-23d850295bef/iframe"
                frameBorder="0"
                width="100%"
                height="700"
                style={{ display: "block", margin: "0 auto" }}
              ></iframe>

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "50px",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
                  pointerEvents: "none",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "200px",
                  background:
                    "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover:scale-105 transition-transform h-14 w-full sm:w-auto sm:min-w-[240px]"
            >
              <a
                href="https://www.instagram.com/advice.lab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See more <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold uppercase tracking-wider tracking-tight">
                Free Resources
              </span>
              <h2 className="font-display font-bold mt-2 text-muted-foreground text-2xl md:text-3xl">
                Download & Learn
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <Link
                  to={resource.link}
                  className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover-lift h-full"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                    <resource.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-display font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <TrainingPartnersLogos />

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="scale">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <Button
              size="lg"
              asChild
              className="hover:scale-105 transition-transform h-14 w-full sm:w-auto sm:min-w-[240px]"
            >
              <Link to="/careers/submit-resume">
                Submit Your Resume <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
