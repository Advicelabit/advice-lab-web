import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactPopup } from "@/components/ui/ContactPopup";

import hero1 from "@/assets/HPImg/Cover_img4.jpg";
import hero2 from "@/assets/HPImg/Cover_img6.jpg";
import hero3 from "@/assets/HPImg/Cover_img3.jpg";
import hero4 from "@/assets/HPImg/Cover_img5.jpg";
import hero5 from "@/assets/HPImg/Cover_img1.jpg";

const slides = [
  {
    image: hero1,
    title: "Paraplanning Services ",
    subtitle: "Expert Assistance",
    description:
      "Quality, fast, compliant paraplanning – delivered by experienced offshore specialists from Sri Lanka and Philippines.  ",
    link: "/services/paraplanning",
    showLearnMore: true, // Show Learn More button
  },
  {
    image: hero2,
    title: "Client Support Officers",
    subtitle: "Financial Precision",
    description:
      "Reliable offshore client support that keeps your practice moving.  ",
    link: "/services/clientsupport",
    showLearnMore: true, // Show Learn More button
  },
  {
    image: hero3,
    title: "Accounting & Bookkeeping",
    subtitle: "Property Finance",
    description:
      "Financial management services delivered by experienced accounting specialists.",
    link: "/services/mortgage",
    showLearnMore: false, // Don't show Learn More button
  },
  {
    image: hero4,
    title: "SMSF",
    subtitle: "Scale your SMSF operations with dependable offshore expertise ",
    description:
      "Scale your SMSF operations with dependable offshore expertise ",
    link: "/services/mortgage",
    showLearnMore: false, // Don't show Learn More button
  },
  {
    image: hero5,
    title: "Mortgage Support ",
    subtitle: "Property Finance",
    description:
      "Streamlined mortgage support that speeds up lodgments and approvals. ",
    link: "/services/mortgage",
    showLearnMore: false, // Don't show Learn More button
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

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
    <section className="relative min-h-[89vh] h-[89vh] md:min-h-[600px] md:h-[90vh] overflow-hidden">
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
        <div className="max-w-2xl w-full px-2">
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight text-balance animate-slide-up">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up delay-150">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                    {/* Conditionally render Learn More button */}
                    {slide.showLearnMore && (
                      <Button variant="heroOutline" size="lg" asChild>
                        <Link to={slide.link}>
                          Learn More <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    )}
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact-us">Get in Touch</Link>
                    </Button>
                    {/* <Button
                      variant="hero"
                      size="lg"
                      onClick={() => setIsContactPopupOpen(true)}
                    >
                      Get in Touch
                    </Button> */}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}

      {/* Contact Popup */}
      <ContactPopup
        open={isContactPopupOpen}
        onOpenChange={setIsContactPopupOpen}
        title="Contact Us"
        description="Ttest description "
      />
    </section>
  );
}
