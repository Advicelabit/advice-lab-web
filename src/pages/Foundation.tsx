import Seo from "@/components/ui/Seo";
import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Heart, Users, Globe, Target } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Community Support",
    description:
      "We invest in communities through education, wellbeing, and meaningful initiatives.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "We create opportunities for individuals to grow, learn, and build careers.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We focus on long-term impact through responsible and sustainable practices.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every initiative we take is aligned with creating measurable positive change.",
  },
];

const Foundation = () => {
  const foundationSchema = {
    "@type": "WebPage",
    name: "Advice Lab Foundation",
    description:
      "Discover how Advice Lab Foundation creates meaningful social impact.",
    url: "https://advicelab.com.au/foundation",
  };

  return (
    <Layout>
      <Seo
        title="Advice Lab Foundation - Social Impact & Community Support"
        description="Learn how Advice Lab Foundation supports communities and creates sustainable impact."
        pathname="/foundation"
        schemaData={foundationSchema}
      />

      {/* Hero */}
      <section className="py-24 gradient-primary text-center">
        <ScrollAnimation animation="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Our Foundation
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            We are committed to creating meaningful impact through community
            support, empowerment, and sustainable initiatives.
          </p>
        </ScrollAnimation>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
          <ScrollAnimation animation="fade-right">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <span className="text-primary font-semibold text-sm uppercase">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-3">
                Making a Real Difference
              </h3>
              <p className="text-muted-foreground">
                Our mission is to empower communities by creating opportunities
                in education, careers, and social development.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-left">
            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl text-white shadow-md">
              <span className="font-semibold text-sm uppercase">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-3">
                A Better Future for All
              </h3>
              <p className="text-white/80">
                To build a future where businesses and communities grow together
                through meaningful and sustainable impact.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                What We Stand For
              </h2>
              <p className="text-muted-foreground mt-4">
                Our foundation is built on these principles.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary text-center">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Making an Impact
          </h2>
          <p className="text-white/80 mb-6">
            Together, we can create meaningful and lasting change.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:opacity-90">
            Get Involved
          </button>
        </ScrollAnimation>
      </section>
    </Layout>
  );
};

export default Foundation;
