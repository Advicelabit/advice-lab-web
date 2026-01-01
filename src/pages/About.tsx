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
import aboutImg from "@/assets/About/about-img.jpg";
import missionImg from "@/assets/About/Mission-img.jpg";
import pradImg from "@/assets/About/Prad_img.jpg";

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
      <div className="overflow-x-hidden">
        {/* Hero */}
        <section className="py-0 gradient-primary">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-0 min-h-[200px]">
            <div className="py-16 px-4 lg:px-8 flex items-center">
              <div className="container mx-auto max-w-3xl">
                <ScrollAnimation animation="fade-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                    About Advice Lab
                  </h1>
                  <p className="text-xl text-primary-foreground/80">
                    Tagline: At Advice Lab, our culture is just like the work we
                    deliver, grounded in integrity, quality, initiative, and
                    teamwork. We're committed to two things: elevating
                    Australian financial advisers with dependable outsourced
                    solutions, and opening doors to rewarding careers in Sri
                    Lanka and the Philippines.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className="relative bg-gray-100 flex flex-col items-end justify-end h-full min-h-[00px] ">
              <ScrollAnimation animation="fade-left" delay={200}>
                <img
                  src={aboutImg}
                  alt="Advice Lab Team"
                  className="w-full h-full object-cover"
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal text-primary mb-4">
                  <span className="font-medium">
                    "Talent wins you games, but teamwork wins you championships"
                  </span>
                </h2>
                <p className="text-lg">— Michael Jordan</p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/*Mission */}
        <section className="py-0 bg-white">
          <div className="grid lg:grid-cols-2 gap-0">
            <ScrollAnimation animation="fade-right">
              <div className="relative h-full">
                <img
                  src={missionImg}
                  alt="Team collaboration"
                  className="w-full h-full object-cover max-h-[280px]"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="bg-gray-50 h-full flex items-center py-16 px-8 lg:px-16">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                    <span className="font-normal">Our Mission:</span>{" "}
                    <span className="font-medium text-primary">
                      Helping Australian Financial Advisers grow better
                    </span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Better growth beats bigger growth. Our back-office support
                    is built to elevate our clients' success, because a win for
                    them is a win for us
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/*Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 flex justify-center">
            <ScrollAnimation animation="fade-up">
              <div className="max-w-5xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-relaxed">
                  <span className="font-normal">Our Vision:</span>{" "}
                  <span className="font-medium text-primary">
                    To be a global leader in back-office solutions for the
                    financial planning industry.
                  </span>
                </h3>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Story */}
        <section className="py-0 bg-white">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-0 min-h-[250px]">
            <ScrollAnimation animation="fade-right">
              <div className="gradient-primary text-white py-8 px-8 lg:px-16 flex items-center h-full">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Prad's experience in the Australian financial planning
                    market revealed a clear gap in the industry. Advisers were
                    struggling to hire and retain skilled talent, making it
                    difficult to scale their practices efficiently. To bridge
                    that gap, Prad built Advice Lab — a dependable back-office
                    support partner designed to help advisory practices operate
                    smoothly, grow sustainably, and focus on delivering quality
                    financial advice.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative bg-white flex flex-col items-end justify-end h-full min-h-[250px] max-h-[400px]">
                <img
                  src={pradImg}
                  alt="Prad Navaratnam"
                  className="object-contain max-h-[400px] w-full mx-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white/80 py-4 text-center">
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
                  <span className="text-[36px]">OUR VALUES</span>
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
      </div>
    </Layout>
  );
};

export default About;
