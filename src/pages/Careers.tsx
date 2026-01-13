import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./Careers.module.css";

const openRoles = [
  {
    title: "Senior Paraplanner",
    location: "Philippines",
    type: "Full-time",
    department: "Paraplanning",
  },
  {
    title: "Financial Analyst",
    location: "Sri Lanka",
    type: "Full-time",
    department: "Accounting",
  },
  {
    title: "Mortgage Processor",
    location: "Philippines",
    type: "Full-time",
    department: "Mortgage",
  },
  {
    title: "Client Success Manager",
    location: "Australia (Remote)",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Quality Assurance Specialist",
    location: "Philippines",
    type: "Full-time",
    department: "Quality",
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
                <span
                  className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
                >
                  Why Work With Us
                </span>
                <h2
                  className={`font-display font-bold mt-2 mb-6 text-muted-foreground ${styles.mainHeader}`}
                >
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
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    size="lg"
                    asChild
                    className="hover:scale-105 transition-transform"
                  >
                    <Link to="/careers/philippines">
                      Explore Philippines Vacancies{" "}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="hover:scale-105 transition-transform"
                  >
                    <Link to="/careers/srilanka">
                      Explore Sri Lanka Vacancies{" "}
                      <ArrowRight className="w-5 h-5" />
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

      {/* Open Roles
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}>Opportunities</span>
              <h2 className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}>Open Positions</h2>
            </div>
          </ScrollAnimation>
          <div className="max-w-3xl mx-auto space-y-4">
            {openRoles.map((role, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-display font-bold mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {role.department}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                    <Link to="/contact">
                      Apply <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}

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
              style={{ position: 'relative' }}
            >
              <iframe 
                src="https://www.juicer.io/api/feeds/advice-lab-270a837c-9b66-449e-8c6c-23d850295bef/iframe" 
                frameBorder="0" 
                width="100%" 
                height="700" 
                style={{ display: 'block', margin: '0 auto' }}
              ></iframe>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))', pointerEvents: 'none' }}></div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hover:scale-105 transition-transform"
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
              className="hover:scale-105 transition-transform"
            >
              <Link to="/contact">
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
