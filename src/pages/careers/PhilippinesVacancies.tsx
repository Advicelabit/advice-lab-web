import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "../Careers.module.css";

const philippinesRoles = [
  {
    title: "Senior Paraplanner",
    location: "Philippines",
    type: "Full-time",
    department: "Paraplanning",
  },
  {
    title: "Mortgage Processor",
    location: "Philippines",
    type: "Full-time",
    department: "Mortgage",
  },
  {
    title: "Quality Assurance Specialist",
    location: "Philippines",
    type: "Full-time",
    department: "Quality",
  },
];

const PhilippinesVacancies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Philippines Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Explore exciting career opportunities in the Philippines
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span
                className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
              >
                Opportunities
              </span>
              <h2
                className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}
              >
                Open Positions in Philippines
              </h2>
            </div>
          </ScrollAnimation>
          <div className="max-w-3xl mx-auto space-y-4">
            {philippinesRoles.map((role, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-display font-bold mb-2">
                      {role.title}
                    </h3>
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
                  <Button
                    variant="outline"
                    asChild
                    className="hover:scale-105 transition-transform"
                  >
                    <Link to="/contact">
                      Apply <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:scale-105 transition-transform"
            >
              <Link to="/careers">
                <ArrowLeft className="w-5 h-5" /> Back to Careers
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhilippinesVacancies;
