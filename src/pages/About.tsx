import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Users, Target, Award, Globe, Shield, CheckCircle, FileText, Zap } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

import hero1 from "@/assets/HPImg/Cover_img4.jpg";
import hero2 from "@/assets/HPImg/Cover_img6.jpg";
import hero3 from "@/assets/HPImg/Cover_img3.jpg";
import hero4 from "@/assets/HPImg/Cover_img5.jpg";
import hero5 from "@/assets/HPImg/Cover_img1.jpg";
import hero6 from "@/assets/HPImg/Cover_img8.jpg";
import missionImg from "@/assets/About/Mission-img.jpg";
import pradImg from "@/assets/About/Prad_img.jpg";

// const stats = [
//   { value: "150+", label: "Australian Advisors" },
//   { value: "10+", label: "Years Experience" },
//   { value: "500+", label: "Team Members" },
//   { value: "99%", label: "Client Retention" },
// ];

const team = [
  {
    name: "Team Paraplanning",
    image: hero1,
  },
  {
    name: "Team Client Support",
    image: hero2,
  },
  // {
  //   name: "Accounting & Bookkeeping",
  //   image: hero3,
  // },
  {
    name: "Team Quality Assurance",
    image: hero4,
  },
  {
    name: "Leadership Team",
    image: hero5,
  },
  {
    name: "Team Compliance & Training",
    image: hero6,
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We do the right thing, always. Trust, honesty, and security are the core of everything we delivery.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description:
      "We take ownership of our work. You can rely on us to follow through and stand behind the outcomes we deliver.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We prioritize getting it right. Every piece of work is completed with care , accuracy, and attention to detail.",
  },
  {
    icon: FileText,
    title: "Compliance",
    description:
      "We respect the rules of the industry. There are no shortcuts, we work within regulatory requirements to protect you and your businesses.",
  },
    {
    icon: Zap,
    title: "Initiative",
    description:
      "We go beyond the brief. We look ahead, anticipate needs,and proactively add value wherever we can.",
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
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-justify">
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
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal text-primary mb-4 w-full">
                <span className="font-medium">
                  "Talent wins you games, but teamwork wins you championships."
                </span>
              </h2>
              <p className="text-lg">— Michael Jordan</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/*Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <ScrollAnimation animation="fade-right">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={missionImg}
                    alt="Team collaboration"
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Content Side */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="space-y-10">
                {/* Mission */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div> */}
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Our Mission
                      </h3>
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                        Helping Australian Financial Advisers{" "}
                        <span className="gradient-text">grow better</span>
                      </h4>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Better growth beats bigger growth. Our back-office support
                    is built to elevate our clients' success, because a win for
                    them is a win for us.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    {/* <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div> */}
                    <div>
                      <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
                        Our Vision
                      </h3>
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                        To be a global leader in back-office solutions for the
                        financial planning industry.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats
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
      </section> */}

      {/* Story
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[250px]">
          <ScrollAnimation animation="fade-right">
            <div className="gradient-primary text-white py-8 px-8 lg:px-16 flex items-center h-full">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
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
      </section> */}

      {/* Story */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Content Side */}
            <ScrollAnimation animation="fade-right">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                    Our Story
                  </span>
                  {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                    Built by Advisors,{" "}
                    <span className="gradient-text">for Advisors</span>
                  </h2> */}
                </div>

                <div className="relative pl-6 border-l-4 border-primary/30">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    Prad's experience in the Australian financial planning
                    market revealed a clear gap in the industry. Advisers were
                    struggling to hire and retain skilled talent, making it
                    difficult to scale their practices efficiently.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To bridge that gap, Prad built{" "}
                    <span className="font-semibold text-primary">
                      Advice Lab
                    </span>{" "}
                    a dependable back-office support partner designed to help
                    advisory practices operate smoothly, grow sustainably, and
                    focus on delivering quality financial advice.
                  </p>
                </div>

                {/* Founder signature card */}
                {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 inline-block">
                  <p className="text-2xl font-display font-semibold text-foreground mb-1">
                    Prad Navaratnam
                  </p>
                  <p className="text-sm text-primary font-medium uppercase tracking-wider">
                    Managing Director & Founder
                  </p>
                </div> */}
              </div>
            </ScrollAnimation>

            {/* Image Side */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative group">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="relative">
  
             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-3">
                    <img
                      src={pradImg}
                      alt="Prad Navaratnam"
                      className="rounded-2xl w-3.9/5 h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 max-h-[350px] mx-auto"
                    />
                  </div>
                </div>

                {/* Accent quote */}
                <div className="absolute -bottom-4 left-8 right-8 bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-2 shadow-xl">
                  <p className="text-white text-md font-medium  text-center">
                    Managing Director & Founder - Prad Navaratnam
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                What <span className="gradient-text">Drives Us</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These value shape how we support advice businesses.
              </p>
            </div>
          </ScrollAnimation>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <value.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="py-24 bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
              Our Teams
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Meet Our {" "}
              <span className="text-blue-300">Teams</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The experts behind our service excellence.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image Area with Dot Indicators inside */}
            <div className="relative h-[80vh] min-h-[400px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentTeamSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Team Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Dot Indicators inside image bottom */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3 z-20">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTeamSlide
                        ? "w-9 h-2 bg-white"
                        : "w-2 h-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Team Grid Preview */}
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {team.map((member, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeamSlide(index)}
                className={`relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 ${
                  index === currentTeamSlide
                    ? "ring-4 ring-white/50 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="aspect-[3/4] h-48 md:h-64 lg:h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs font-semibold text-center leading-tight">
                      {member.name}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
