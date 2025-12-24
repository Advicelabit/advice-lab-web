import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    image: "/src/assets/HPImg/Cover_img4.jpg",
    title: "Paraplanning Services ",
    subtitle: "Expert Assistance",
    description:
      "Quality, fast, compliant paraplanning – delivered by experienced offshore specialists from Sri Lanka and Philippines.  ",
    link: "/services/paraplanning",
  },
  {
    image: "/src/assets/HPImg/Cover_img6.jpg",
    title: "Client Support Officers",
    subtitle: "Financial Precision",
    description:
      "Reliable offshore client support that keeps your practice moving.  ",
    link: "/services/accounting",
  },
  {
    image: "/src/assets/HPImg/Cover_img3.jpg",
    title: "Accounting & Bookkeeping",
    subtitle: "Property Finance",
    description:
      "Financial management services delivered by experienced accounting specialists.",
    link: "/services/mortgage",
  },
  {
    image: "/src/assets/HPImg/Cover_img5.jpg",
    title: "SMSF",
    subtitle: "Scale your SMSF operations with dependable offshore expertise ",
    description:
      "Scale your SMSF operations with dependable offshore expertise ",
    link: "/services/mortgage",
  },
  {
    image: "/src/assets/HPImg/Cover_img1.jpg",
    title: "Mortgage Support ",
    subtitle: "Property Finance",
    description:
      "Streamlined mortgage support that speeds up lodgments and approvals. ",
    link: "/services/mortgage",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4 lg:px-8">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  {/* <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
                    {slide.subtitle}
                  </span> */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-slide-up">
                    {slide.title}
                  </h1>
                  <p
                    className={`text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up ${styles.animationDelay1}`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`flex flex-col sm:flex-row gap-4 animate-slide-up ${styles.animationDelay2}`}
                  >
                    <Button variant="heroOutline" size="lg" asChild>
                      <Link to="/services">
                        Learn More <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary-foreground w-8"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
