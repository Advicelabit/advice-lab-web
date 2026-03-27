import Seo from "@/components/ui/Seo";
import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Droplets,
  PawPrint,
  TreePine,
  GraduationCap,
  ExternalLink,
  CalendarDays,
  Tag,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
//
const focusAreas = [
  {
    icon: Droplets,
    title: "Flood Relief",
    subtitle: "Mobilising fast when communities need it most",
  },
  {
    icon: PawPrint,
    title: "Animal Welfare",
    subtitle: "Rescuing and rehoming vulnerable animals",
  },
  {
    icon: TreePine,
    title: "Environmental Care",
    subtitle: "Reforestation, clean-ups, and sustainable futures",
  },
  {
    icon: GraduationCap,
    title: "Education & Youth",
    subtitle: "Scholarships and mentorship for the next generation",
  },
];

const initiatives = [
  {
    year: "2019",
    title: "Flood Relief Drive — Batticaloa",
    subtitle:
      "After devastating monsoon floods swept through Batticaloa, our team mobilised within 48 hours — coordinating food packs, clean water, and temporary shelter for over 300 displaced families. What started as an internal fundraiser became our founding act of community purpose.",
    images: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&q=80",
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=900&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80",
    ],
  },
  {
    year: "2021",
    title: "Saving Sri Lanka's Street Dogs",
    subtitle:
      "Partnering with local shelters, we funded spay-neuter programmes, vaccination drives, and adoption days across Colombo and Gampaha. Over 400 dogs received medical care, and 120 found forever homes — driven entirely by the compassion of people who showed up on weekends.",
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=80",
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=900&q=80",
    ],
  },
  {
    year: "2022",
    title: "10,000 Trees — Central Highlands",
    subtitle:
      "In response to deforestation in Sri Lanka's central highlands, our team and volunteers planted 10,000 native trees across degraded hillsides. The project also trained 60 local farmers in sustainable agroforestry — turning conservation into livelihood.",
    images: [
      "https://images.unsplash.com/photo-1542601906897-d4bba5df4a80?w=900&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=80",
    ],
  },
  {
    year: "2024",
    title: "Bright Futures Scholarship Fund",
    subtitle:
      "We launched a merit-and-need scholarship programme for underprivileged students in the Philippines and Sri Lanka. In its first year, 35 students received full support — covering tuition, books, and direct mentorship from Advice Lab professionals.",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80",
    ],
  },
];

const volunteers = [
  {
    name: "Kavindi Perera",
    role: "Flood Relief Lead · Colombo",
    quote:
      "Seeing families rebuild after the floods reminded me why we do this. It wasn't just a campaign — it was us showing up.",
    initial: "K",
  },
  {
    name: "Marco Santos",
    role: "Animal Welfare · Manila",
    quote:
      "Every dog we rescued gave our whole team an extra reason to come to work. This is what Advice Lab culture looks like outside the office.",
    initial: "M",
  },
  {
    name: "Tharushi Silva",
    role: "Reforestation Coordinator",
    quote:
      "Planting 10,000 trees felt impossible — until it wasn't. That's the spirit here: we commit, and we follow through.",
    initial: "T",
  },
];

// ─── Image Carousel ────────────────────────────────────────────────────────────
function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % images.length),
      4500,
    );
    return () => clearInterval(t);
  }, [images.length]);

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 aspect-[4/3]">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform"
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
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next"
      >
        <svg
          className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
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

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-9 h-2 bg-white"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const Foundation = () => {
  const foundationSchema = {
    "@type": "WebPage",
    name: "Advice Lab Foundation",
    description:
      "Discover how Advice Lab gives back to communities through flood relief, animal welfare, environmental projects and education initiatives.",
    url: "https://advicelab.com.au/foundation",
  };

  return (
    <Layout>
      <Seo
        title="Foundation — Advice Lab | Giving Back"
        description="Discover how Advice Lab gives back — through flood relief, animal rescue, reforestation, and education initiatives across Sri Lanka and the Philippines."
        keywords="Advice Lab Foundation, social responsibility, flood relief, animal welfare, reforestation, scholarship, community, Sri Lanka, Philippines"
        pathname="/foundation"
        schemaData={foundationSchema}
      />

      {/* ── Hero ── */}
      {/* <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Advice Lab Foundation
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-center">
              Being part of Advice Lab means more than delivering great work. It
              means showing up for communities, for animals, for the planet —
              because the same integrity and care we bring to our clients, we
              bring to the world around us.
            </p>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* ── Quote ── */}
      {/* <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal text-primary mb-4 w-full">
                <span className="font-medium">
                  "We make a living by what we get, but we make a life by what
                  we give."
                </span>
              </h2>
              <p className="text-lg">— Winston Churchill</p>
            </div>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* ── Focus Areas ── */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                How We Give Back
              </span>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four pillars that guide every initiative we run.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {focusAreas.map((area, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group relative h-full">
                  <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                          <area.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {area.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.subtitle}
                      </p>

                      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-blue-600 rounded-full group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Initiatives ── */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                Our Initiatives
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Stories from Advice Lab
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real campaigns, real impact — led by the people of Advice Lab.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-28">
            {initiatives.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text side */}
                    <ScrollAnimation
                      animation={isEven ? "fade-right" : "fade-left"}
                      className={!isEven ? "lg:order-2" : ""}
                    >
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-baseline gap-2 sm:gap-4">
                            {/* Year */}
                            <span className="text-7xl sm:text-8xl xs:text-xl font-display font-black text-primary/10 leading-none select-none">
                              {item.year}
                            </span>

                            {/* Month + Date */}
                            <span className="text-3xl sm:text-4xl font-display font-black text-primary/10 leading-none select-none">
                              March 22nd
                            </span>
                          </div>
                          <div className="flex items-center gap-3 -mt-4">
                            <div className="h-1 w-10 bg-primary rounded-full" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                              Initiative
                            </span>
                          </div>
                        </div>

                        <div className="relative pl-6 border-l-4 border-primary/30">
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>

                        <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </ScrollAnimation>

                    {/* Carousel side */}
                    <ScrollAnimation
                      animation={isEven ? "fade-left" : "fade-right"}
                      delay={200}
                      className={!isEven ? "lg:order-1" : ""}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div className="relative">
                          <ImageCarousel images={item.images} />
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ALian Voices ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(219,234,254,0.3)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(219,234,254,0.2)_0%,_transparent_60%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                Voices
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                The people behind the projects
              </h2>

              <p className="text-lg text-gray-400 font-light">
                Hear from those who showed up and made it real.
              </p>
            </div>
          </ScrollAnimation>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {volunteers.map((v, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl" />

                  {/* Decorative quote mark */}

                  <span
                    className="absolute top-4 right-5 text-7xl font-serif italic text-blue-100 leading-none select-none"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  {/* Quote */}
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-1 relative z-10">
                    {v.quote}
                  </p>

                  {/* Divider accent */}
                  <div className="w-8 h-[2px] bg-primary rounded-full mb-5" />

                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center ring-2 ring-primary/20 flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm leading-none">
                        {v.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {v.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">{v.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Foundation;
