import { Layout } from "@/components/layout/Layout";
import { Users, Target, Award, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./About.module.css";

const stats = [
  { value: "150+", label: "Australian Advisors" },
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Team Members" },
  { value: "99%", label: "Client Retention" },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "James Chen",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Thompson",
    role: "Client Success Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Paraplanning",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We deliver exceptional quality in every task, exceeding expectations consistently.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We become an extension of your team, aligned with your goals and values.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Transparency and honesty guide every interaction and decision.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "We continuously evolve our processes to deliver better results.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              About Advice Lab
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're on a mission to help Australian financial advisors scale
              their practices through expert offshore support.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation
                key={index}
                animation="scale"
                delay={index * 100}
              >
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-display font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span
                  className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
                >
                  Our Story
                </span>
                <h2
                  className={`font-display font-bold mt-2 mb-6 text-muted-foreground ${styles.mainHeader}`}
                >
                  Built by Advisors, for Advisors
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2014, Advice Lab was born from a simple
                  observation: Australian financial advisors were spending too
                  much time on administrative tasks and not enough time with
                  their clients.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founders, having worked in the financial advisory space
                  for decades, set out to create a solution that would give
                  advisors back their most valuable resource—time.
                </p>
                <p className="text-muted-foreground">
                  Today, we've grown to support over 150 advisory practices
                  across Australia, with a dedicated team of 500+ professionals
                  delivering paraplanning, accounting, and mortgage support
                  services.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-primary opacity-20 absolute inset-0" />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-3xl w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span
                className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
              >
                Our Values
              </span>
              <h2
                className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}
              >
                What Drives Us
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center p-6 hover-lift rounded-2xl transition-all duration-300 hover:bg-secondary/50">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span
                className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
              >
                Meet Our Team
              </span>
              <h2
                className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}
              >
                Leadership
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollAnimation
                key={index}
                animation="scale"
                delay={index * 100}
              >
                <div className="text-center group">
                  <div className="relative mb-6 overflow-hidden rounded-3xl hover-lift">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-display font-bold">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
