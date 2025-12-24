import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Download,
  Calculator,
  FileText,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./Resources.module.css";

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

const blogPosts = [
  {
    title: "How to Scale Your Advisory Practice with Offshore Support",
    excerpt:
      "Learn the strategies top advisors use to grow their practices efficiently.",
    date: "Dec 15, 2024",
    category: "Growth",
  },
  {
    title: "5 Ways to Improve Your Paraplanning Efficiency",
    excerpt:
      "Discover practical tips to streamline your paraplanning workflow.",
    date: "Dec 10, 2024",
    category: "Productivity",
  },
  {
    title: "The Complete Guide to Mortgage Processing Outsourcing",
    excerpt: "Everything you need to know about offshore mortgage support.",
    date: "Dec 5, 2024",
    category: "Mortgage",
  },
];

const resourceAnchors = [
  "advisers-guide-for-outsourcing",
  "pricing-calculator",
  "accountants-offshoring-playbook",
  "virtual-cso-task-library",
  "smsf-trustee-education-kit",
];

const Resources = () => {
  return (
    <Layout>
      <div className="sr-only" aria-hidden>
        {resourceAnchors.map((id) => (
          <span key={id} id={id} />
        ))}
      </div>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Resources
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Guides, tools, and insights to help you get the most from offshore
              support.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span
                className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
              >
                Free Resources
              </span>
              <h2
                className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}
              >
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

      {/* Blog */}
      <section id="blog" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span
                className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
              >
                Blog
              </span>
              <h2
                className={`font-display font-bold mt-2 text-muted-foreground ${styles.mainHeader}`}
              >
                Latest Insights
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 150}
              >
                <article className="bg-background rounded-2xl overflow-hidden border border-border hover-lift h-full">
                  <div className="aspect-[16/9] bg-secondary">
                    <div className="w-full h-full gradient-primary opacity-10" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium text-primary uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="scale">
            <span
              className={`text-primary font-semibold uppercase tracking-wider ${styles.subHeader}`}
            >
              Case Studies
            </span>
            <h2
              className={`font-display font-bold mt-2 mb-6 text-muted-foreground ${styles.mainHeader}`}
            >
              Success Stories
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how Australian advisors have transformed their practices with
              Advice Lab.
            </p>
            <Button
              size="lg"
              asChild
              className="hover:scale-105 transition-transform"
            >
              <Link to="/contact">
                Get Case Studies <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
