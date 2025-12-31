import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./ClientLogos.module.css";

import img1 from "@/assets/CLImg/img1.png";
import img2 from "@/assets/CLImg/img2.png";
import img3 from "@/assets/CLImg/img3.png";
import img4 from "@/assets/CLImg/img4.png";
import img5 from "@/assets/CLImg/img5.png";
import img6 from "@/assets/CLImg/img6.png";
import img7 from "@/assets/CLImg/img7.png";
import img8 from "@/assets/CLImg/img8.png";
import img9 from "@/assets/CLImg/img9.png";
import img10 from "@/assets/CLImg/img10.png";
import img11 from "@/assets/CLImg/img11.png";
import img12 from "@/assets/CLImg/img12.png";
import img13 from "@/assets/CLImg/img13.png";
import img14 from "@/assets/CLImg/img14.png";
import img16 from "@/assets/CLImg/img16.png";

const logos = [
  { src: img1, alt: "Client Logo 1" },
  { src: img2, alt: "Client Logo 2" },
  { src: img3, alt: "Client Logo 3" },
  { src: img4, alt: "Client Logo 4" },
  { src: img5, alt: "Client Logo 5" },
  { src: img6, alt: "Client Logo 6" },
  { src: img7, alt: "Client Logo 7" },
  { src: img8, alt: "Client Logo 8" },
  { src: img9, alt: "Client Logo 9" },
  { src: img10, alt: "Client Logo 10" },
  { src: img11, alt: "Client Logo 11" },
  { src: img12, alt: "Client Logo 12" },
  { src: img13, alt: "Client Logo 13" },
  { src: img14, alt: "Client Logo 14" },
  { src: img16, alt: "Client Logo 16" },
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
              className="flex-shrink-0 mx-14 w-44 h-12 p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 max-w-22 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
