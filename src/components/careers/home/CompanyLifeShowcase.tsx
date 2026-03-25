import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { useMemo } from "react";

// ── Facility image imports ──────────────────────────────────────────────────
import carromImg from "@/assets/CompanyLife/art-books.webp";
import chessImg from "@/assets/CompanyLife/chess-playing.webp";
import playstationImg from "@/assets/CompanyLife/chess.webp";
import gymImg from "@/assets/CompanyLife/good-vibes.webp";
import badmintonImg from "@/assets/CompanyLife/leg-press-machine.webp";
import loungeImg from "@/assets/CompanyLife/outdoor-garden.webp";
import rooftopImg from "@/assets/CompanyLife/play-station.webp";
import cafeImg from "@/assets/CompanyLife/playstation-vibe.webp";
import yogaImg from "@/assets/CompanyLife/playstation.webp";
import poolTableImg from "@/assets/CompanyLife/table-tenis-area.webp";
import terraceChatting from "@/assets/CompanyLife/terrace-chatting.webp";
import treadmill from "@/assets/CompanyLife/treadmill.webp";
import weightBench from "@/assets/CompanyLife/weight-bench.webp";
// import library from "@/assets/CompanyLife/libaray.webp";
// import librarySelection from "@/assets/CompanyLife/libray_selection.webp";

// ── Data ────────────────────────────────────────────────────────────────────
const facilityImages = [
  { src: carromImg, alt: "Art Books Corner" },
  { src: chessImg, alt: "Chess Playing Area" },
  { src: playstationImg, alt: "Chess Lounge" },
  { src: gymImg, alt: "Good Vibes Zone" },
  { src: badmintonImg, alt: "Leg Press Machine" },
  { src: loungeImg, alt: "Outdoor Garden" },
  { src: rooftopImg, alt: "PlayStation Station" },
  { src: cafeImg, alt: "PlayStation Vibe Area" },
  { src: yogaImg, alt: "PlayStation Corner" },
  { src: poolTableImg, alt: "Table Tennis Area" },
  { src: terraceChatting, alt: "Terrace Chatting Spot" },
  { src: treadmill, alt: "Treadmill Zone" },
  { src: weightBench, alt: "Weight Bench Area" },
  // { src: library, alt: "library" },
  // { src: librarySelection, alt: "Selected Books" },
];

// ── Shuffle helper ───────────────────────────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ── Component ───────────────────────────────────────────────────────────────
export function CompanyLifeShowcase() {
  // Shuffled once per mount/refresh, stable during the session
  const shuffledImages = useMemo(() => shuffleArray(facilityImages), []);

  return (
    <section className="bg-secondary py-12 overflow-hidden">
      {/* ── Header ── */}
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-[42px] font-bold text-center leading-tight mb-3">
              A Workplace That Actually Gets You
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl text-center max-w-2xl px-4">
              Recharge, connect, and play before the day ends
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* ── Single row marquee ── */}
      <div className="mt-8 relative overflow-hidden">
        <div className="inline-flex animate-marqueeCompany whitespace-nowrap will-change-transform">
          {[shuffledImages, shuffledImages, shuffledImages].map((set, si) =>
            set.map((img, i) => (
              <div
                key={`s${si}-${i}`}
                className="inline-flex flex-shrink-0 mx-4 sm:mx-5 md:mx-6 rounded-xl overflow-hidden"
                style={{ width: "480px", height: "320px" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )),
          )}
        </div>
      </div>

      <style>{`
        @keyframes marqueeCompany {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marqueeCompany {
          animation: marqueeCompany 150s linear infinite;
          will-change: transform;
        }
        .animate-marqueeCompany:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
