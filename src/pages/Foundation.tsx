import Seo from "@/components/ui/Seo";
import { Layout } from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Droplets,
  PawPrint,
  TreePine,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

import cyclone from "@/assets/FoundationImg/cyclone.webp";
import cycloneRelief from "@/assets/FoundationImg/cyclone-relief.webp";
import charityRun from "@/assets/FoundationImg/charity-run.webp";
import charityPacks from "@/assets/FoundationImg/charity-packs.webp";
import puppyAdopt from "@/assets/FoundationImg/puppy-adopt.jpg";
import animalFocus from "@/assets/FoundationImg/animal-focus.webp";
import puppyAdoption from "@/assets/FoundationImg/puppy-adoption.webp";
import childHomeFront from "@/assets/FoundationImg/child-home-front.webp";
import childHomeHall from "@/assets/FoundationImg/child-home-hall.webp";
import childHome from "@/assets/FoundationImg/child-home.webp";
import teamWithChild from "@/assets/FoundationImg/team-with-child.webp";

type Initiative = {
  year: string;
  month: string;
  day: string;
  title: string;
  subtitle: string;
  images: string[];
};

const focusAreas = [
  {
    icon: TreePine,
    title: "Environment",
    subtitle:
      "Supporting projects that protect nature and promote a cleaner, greener planet",
  },
  {
    icon: GraduationCap,
    title: "Children",
    subtitle:
      "Helping provide safety, education, and opportunities for every child’s future",
  },

  {
    icon: Handshake,
    title: "Inclusivity",
    subtitle:
      "Creating spaces and initiatives where everyone is valued, respected, and empowered",
  },
  {
    icon: PawPrint,
    title: "Animals",
    subtitle:
      "Caring for animals through protection, rescue, and compassionate support",
  },
];

const initiatives = [
  {
    year: "2025",
    month: "Mar",
    day: "14",
    title: "Women in need - cyclone ditwah  releif ",
    subtitle:
      "As an organization rooted in Sri Lanka, we believe in standing together when our communities need us most. In the aftermath of Cyclone Ditwa, many families were left facing significant hardship, and we were committed to offering meaningful support. \n\n Every member of our team contributed generously, enabling us to prepare and donate 50+ care packs containing essential items for affected families. This initiative was carried out in collaboration with Women In Need, Sri Lanka, ensuring that our contributions reached those who needed assistance the most. Through this effort, we continue to uphold our commitment to community resilience and to helping rebuild hope across our nation.",
    images: [cycloneRelief, cyclone],
  },
  {
    year: "2025",
    month: "Oct",
    day: "22",
    title: "Race 4 change charity run",
    subtitle:
      "We were proud to take part in Race 4 Change, a 5km charity run organized by Interact District 3220 in support of the Lady Ridgeway Children’s Hospital. A dedicated team from our company participated in the event, contributing to a meaningful cause that supports improved healthcare and facilities for children in need. This initiative reflects our ongoing commitment to community welfare and our willingness to actively participate in efforts that create a positive social impact.",
    images: [charityRun, charityPacks],
  },
  {
    year: "2024",
    month: "Mar",
    day: "26",
    title: "Puppy Adoption Day with Embark",
    subtitle:
      "We hosted an Adoption Day at Advice Lab in collaboration with Embark, reinforcing our commitment to supporting animal welfare initiatives. The Embark team joined us with 10–12 rescue puppies, creating an engaging and compassionate environment for our staff and visitors. The event included a dedicated puppy‑petting session, allowing participants to interact with the puppies and learn more about responsible pet adoption. Those who were interested were given the opportunity to adopt a puppy and provide a safe, loving home. In addition to hosting the event, we made a donation to the Embark Foundation to further support their ongoing efforts in rescuing, rehabilitating, and rehoming street dogs across the country. This initiative reflects our dedication to meaningful community partnerships and promoting positive social impact.",
    images: [puppyAdoption, puppyAdopt, animalFocus],
  },
  {
    year: "2024",
    month: "Jun",
    day: "15",
    title: "Spent a day at Prithipura special needs Children's home",
    subtitle:
      "Our team spent a meaningful and joy-filled day with the children, creating an unforgettable experience for everyone involved. We brought along a live band, filling the day with music, dancing, and laughter. To support their daily needs, we also donated lunch for all the children, along with essential items such as sanitary products (pampers), cleaning supplies, and dry rations. Adding a creative touch to the day, we organized a drawing and painting session that allowed the children to express themselves through art. It was a heartwarming experience that strengthened our commitment to making a positive impact in the community.",
    images: [teamWithChild, childHomeFront, childHomeHall, childHome],
  },
  {
    year: "2024",
    month: "Nov",
    day: "23",
    title: "Beach clean up with Pearl Protectors",
    subtitle:
      "Our team spent a meaningful and joy-filled day with the children, creating an unforgettable experience for everyone involved. We brought along a live band, filling the day with music, dancing, and laughter. To support their daily needs, we also donated lunch for all the children, along with essential items such as sanitary products (pampers), cleaning supplies, and dry rations. Adding a creative touch to the day, we organized a drawing and painting session that allowed the children to express themselves through art. It was a heartwarming experience that strengthened our commitment to making a positive impact in the community.",
    images: [teamWithChild, childHomeFront, childHomeHall, childHome],
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
    "@type": "Organization",
    name: "Advice Lab Foundation",
    description:
      "The Advice Lab Foundation is dedicated to uplifting and supporting communities through flood relief, animal welfare, environmental protection, and education initiatives across Sri Lanka and the Philippines.",
    url: "https://advicelab.com.au/al-foundation",
    logo: "https://advicelab.com.au/og-image.png",
    sameAs: [
      "https://www.facebook.com/advicelab",
      "https://www.instagram.com/advicelab",
    ],
    areaServed: ["Sri Lanka", "Philippines", "Australia"],
    parentOrganization: {
      "@type": "Organization",
      name: "Advice Lab",
      url: "https://advicelab.com.au",
    },
  };

  // Group initiatives by year, preserving insertion order
  const groupedInitiatives = initiatives.reduce<Record<string, Initiative[]>>(
    (acc, item) => {
      if (!acc[item.year]) acc[item.year] = [];
      acc[item.year].push(item);
      return acc;
    },
    {},
  );

  return (
    <Layout>
      <Seo
        title="Advice Lab Foundation Supporting Communities"
        description="Discover how Advice Lab gives back — through flood relief, animal rescue, reforestation, and education initiatives across Sri Lanka and the Philippines."
        keywords="Advice Lab Foundation, social responsibility, flood relief, animal welfare, reforestation, scholarship, community, Sri Lanka, Philippines"
        pathname="/al-foundation"
        schemaData={foundationSchema}
      />

      {/* ── Hero ── */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Advice Lab Foundation
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl text-center">
              The Advice Lab Foundation(AL Foundation) is dedicated to uplifting
              communities through focused initiatives in women’s empowerment,
              child well‑being, environmental sustainability, and mental health
              advocacy. We work to create safer spaces, stronger futures, and
              lasting positive impact across Sri Lanka. Our programs are
              designed to inspire resilience, educate, and enable meaningful
              change. Together, we strive to build a more compassionate and
              sustainable society.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-8 bg-white">
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
      </section>

      {/* ── Focus Areas ── */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
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
      </section>

      {/* ── Initiatives ── */}
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

          {/* GLOBAL INDEX FIX */}
          {(() => {
            let globalIndex = 0;

            return (
              <div className="space-y-20 md:space-y-28">
                {Object.entries(groupedInitiatives).map(([year, items]) => (
                  <div key={year}>
                    {/* ── Year Header ── */}
                    <ScrollAnimation animation="fade-up">
                      <div className="flex items-center gap-4 mb-12">
                        <span className="text-7xl sm:text-8xl font-display font-black text-primary/10 leading-none select-none">
                          {year}
                        </span>

                        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/25 to-transparent rounded-full" />

                        {items.length > 1 && (
                          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 bg-primary/8 border border-primary/20 rounded-full px-3 py-1.5 whitespace-nowrap">
                            {items.length} initiatives
                          </span>
                        )}
                      </div>
                    </ScrollAnimation>

                    {/* ── Initiatives ── */}
                    <div className="space-y-16 md:space-y-20">
                      {items.map((item, index) => {
                        const isEven = globalIndex % 2 === 0;
                        globalIndex++;

                        return (
                          <div key={index}>
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                              {/* TEXT */}
                              <ScrollAnimation
                                animation={isEven ? "fade-right" : "fade-left"}
                                className={!isEven ? "lg:order-2" : ""}
                              >
                                <div className="space-y-5">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-[64px] rounded-2xl overflow-hidden shadow-lg border border-primary/15 ring-1 ring-black/5">
                                      {/* Month strip */}
                                      <div className="gradient-primary py-[5px] text-center">
                                        <span className="block text-[9px] font-extrabold tracking-[0.18em] text-primary-foreground uppercase leading-none">
                                          {item.month}
                                        </span>
                                      </div>
                                      {/* Day */}
                                      <div className="bg-white py-2 text-center">
                                        <span className="block text-[28px] font-black text-foreground leading-none tabular-nums">
                                          {item.day}
                                        </span>
                                      </div>
                                    </div>
                                    {/* <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-xl px-3 py-2">
                                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                                        {item.month}
                                      </span>
                                      <span className="text-xl font-black text-primary">
                                        {item.day}
                                      </span>
                                    </div> */}
                                    <div className="h-[2px] w-8 bg-primary/40 rounded-full" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                                      Initiative
                                    </span>
                                  </div>

                                  <div className="relative pl-5 border-l-4 border-primary/30">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                                      {item.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                      {item.subtitle}
                                    </p>
                                  </div>

                                  {/* <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group">
                                    Read Full Story
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </button> */}
                                </div>
                              </ScrollAnimation>

                              {/* IMAGE */}
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
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── ALian Voices ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(219,234,254,0.3)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(219,234,254,0.2)_0%,_transparent_60%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {volunteers.map((v, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/60 rounded-t-2xl" />

                  <span
                    className="absolute top-4 right-5 text-7xl font-serif italic text-blue-100 leading-none select-none"
                    aria-hidden="true"
                  >
                    "
                  </span>

                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-1 relative z-10">
                    {v.quote}
                  </p>

                  <div className="w-8 h-[2px] bg-primary rounded-full mb-5" />

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
