import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

import a from "@/assets/TrainingPartnersImg/acca-professional-development.png";
import b from "@/assets/TrainingPartnersImg/acca-trainee-development-gold.png";
import c from "@/assets/TrainingPartnersImg/aicpa-and-cima.png";
import d from "@/assets/TrainingPartnersImg/sliit-campus-logo.png";
import e from "@/assets/TrainingPartnersImg/royal-institute-of-colombo.png";
import f from "@/assets/TrainingPartnersImg/nsbm-university.png";
import g from "@/assets/TrainingPartnersImg/bms-Logo.png";
import h from "@/assets/TrainingPartnersImg/nibm-logo.png";

const universityLogos = [
  { src: a, alt: "ACCA Professional Development" },
  { src: b, alt: "ACCA Trainee Development Gold" },
  { src: c, alt: "AICPA and CIMA" },
  { src: d, alt: "SLIIT Campus" },
  { src: e, alt: "Royal Institute of Colombo" },
  { src: f, alt: "NSBM University" },
  { src: g, alt: "BMS Campus" },
  { src: h, alt: "NIBM Campus" },
];

export function TrainingPartnersLogos() {
  return (
    <section className="bg-secondary py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-[42px] font-bold text-center leading-tight mb-3">
              Our Training and University Partners
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl text-center max-w-2xl px-4">
              We support your journey every step of the way
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="mt-8 relative overflow-hidden">
        <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-10">
          {/* Original logos */}
          {universityLogos.map((logo, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 w-44 h-28 p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center sm:w-56 sm:h-32 sm:p-5 md:w-64 md:h-36 md:p-6"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}

          {/* Duplicate logos for seamless loop */}
          {universityLogos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-44 h-28 p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center sm:w-56 sm:h-32 sm:p-5 md:w-64 md:h-36 md:p-6"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          flex-wrap: nowrap;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
