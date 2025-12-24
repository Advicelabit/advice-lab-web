import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./ClientLogos.module.css";

const logos = [
  { src: "/src/assets/CLImg/img1.jpg", alt: "Client Logo 1" },
  { src: "/src/assets/CLImg/img2.png", alt: "Client Logo 2" },
  { src: "/src/assets/CLImg/img3.jpg", alt: "Client Logo 3" },
  { src: "/src/assets/CLImg/img4.png", alt: "Client Logo 4" },
  { src: "/src/assets/CLImg/img5.png", alt: "Client Logo 5" },
  { src: "/src/assets/CLImg/img6.jpg", alt: "Client Logo 6" },
  { src: "/src/assets/CLImg/img7.png", alt: "Client Logo 7" },
  { src: "/src/assets/CLImg/img8.png", alt: "Client Logo 8" },
  { src: "/src/assets/CLImg/img9.png", alt: "Client Logo 9" },
  { src: "/src/assets/CLImg/img10.png", alt: "Client Logo 10" },
  { src: "/src/assets/CLImg/img11.png", alt: "Client Logo 11" },
  { src: "/src/assets/CLImg/img12.png", alt: "Client Logo 12" },
  { src: "/src/assets/CLImg/img13.jpg", alt: "Client Logo 13" },
  { src: "/src/assets/CLImg/img14.png", alt: "Client Logo 14" },
  { src: "/src/assets/CLImg/img16.png", alt: "Client Logo 16" },
];

export function ClientLogos() {
  return (
    <section className="gradient-primary py-6 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="flex items-center justify-center">
            <p className="text-primary-foreground text-[30px] font-bold whitespace-nowrap mr-8">
              Australian advisers grow their business with Advice Lab
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="mt-4 relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-14 w-44 h-12 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 max-w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
