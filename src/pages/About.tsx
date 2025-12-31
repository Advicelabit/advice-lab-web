import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Users,
  ThumbsUp,
  UserCircle,
  FileText,
  Trophy,
  Briefcase,
  Settings,
  MessageCircle,
  Heart,
  Handshake,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./About.module.css";

import hero1 from "@/assets/HPImg/Cover_img4.jpg";
import hero2 from "@/assets/HPImg/Cover_img6.jpg";
import hero3 from "@/assets/HPImg/Cover_img3.jpg";
import hero4 from "@/assets/HPImg/Cover_img5.jpg";
import hero5 from "@/assets/HPImg/Cover_img1.jpg";

const stats = [
  { value: "150+", label: "Australian Advisors" },
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Team Members" },
  { value: "99%", label: "Client Retention" },
];

const team = [
  {
    name: "Paraplanning Services",
    image: hero1,
  },
  {
    name: "Client Support Officers",
    image: hero2,
  },
  {
    name: "Accounting & Bookkeeping",
    image: hero3,
  },
  {
    name: "SMSF",
    image: hero4,
  },
  {
    name: "Mortgage Support",
    image: hero5,
  },
];

const values = [
  {
    icon: Handshake,
    title: "Integrity",
  },
  {
    icon: ThumbsUp,
    title: "Quality",
  },
  {
    icon: UserCircle,
    title: "Accountability",
  },
  {
    icon: FileText,
    title: "Compliance",
  },
  {
    icon: Trophy,
    title: "Initiative",
  },
  {
    icon: Users,
    title: "Team Work",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurial",
  },
  {
    icon: Settings,
    title: "Adaptability",
  },
  {
    icon: MessageCircle,
    title: "Communication",
  },
  {
    icon: Heart,
    title: "Passion",
  },
];

const About = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentTeamSlide((prev) => (prev + 1) % team.length);
  const prevSlide = () =>
    setCurrentTeamSlide((prev) => (prev - 1 + team.length) % team.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              At Advice Lab, our culture is just like the work we deliver,
              grounded in integrity, quality, initiative, and teamwork. We're
              committed to two things: elevating Australian financial advisers
              with dependable outsourced solutions, and opening doors to
              rewarding careers in Sri Lanka and the Philippines.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-10 bg-blue-100">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-foreground mb-4">
                Talent wins you games, but teamwork wins you championships
              </h2>
              <p className="text-lg text-muted-foreground">Michael Jordan</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/*Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
            <ScrollAnimation animation="fade-right">
              <div className="relative max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div>
                <h3 className="text-xl md:text-2xl font-display mb-6">
                  <span className="font-bold text-foreground">
                    Our Mission:
                  </span>{" "}
                  <span className="text-primary text-2xl md:text-3xl font-bold">
                    Helping Australian Financial Advisers grow better
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Better growth beats bigger growth. Our back-office support is
                  built to elevate our clients' success, because a win for them
                  is a win for us
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/*Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-5xl">
              <h3 className="text-2xl md:text-3xl font-display font-normal whitespace-nowrap">
                Our vision:
              </h3>
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                  Our Vision, to be a global leader in back-office solutions for
                  the financial planning industry.
                </p>
                <div className="h-1 bg-primary w-full mt-4"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Story */}
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          <ScrollAnimation animation="fade-right">
            <div className="gradient-primary text-white py-16 px-4 lg:px-8 flex items-center h-full">
              <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Our Story
                </h2>
                <p className="text-lg leading-relaxed">
                  Prad's experience in the Australian financial planning market
                  revealed a clear gap in the industry. Advisers were struggling
                  to hire and retain skilled talent, making it difficult to
                  scale their practices efficiently. To bridge that gap, Prad
                  built Advice Lab — a dependable back-office support partner
                  designed to help advisory practices operate smoothly, grow
                  sustainably, and focus on delivering quality financial advice.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="relative bg-gray-100 flex items-end justify-center py-8 px-4 lg:px-8 h-full">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                  alt="Prad Navaratnam"
                  className="w-80 h-96 object-cover object-top rounded-2xl mx-auto mb-4"
                />
                <p className="text-xl font-display font-normal text-foreground">
                  Prad Navaratnam - Managing Director
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                OUR VALUES
              </h2>
              <p className="text-xl text-muted-foreground">What Drives Us</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-normal text-foreground">
                    {value.title}
                  </h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 gap-0 relative h-[50vh] min-h-[30px]">
          {/* Left side - Blue background with team member name */}
          <div className="gradient-primary text-white flex items-center justify-center px-4 lg:px-8">
            <div className="container mx-auto max-w-2xl">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentTeamSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute"
                  }`}
                >
                  {index === currentTeamSlide && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium">
                      Team {member.name}
                    </h2>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Team member image */}
          <div className="relative bg-gray-100 overflow-hidden">
            {team.map((member, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentTeamSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
