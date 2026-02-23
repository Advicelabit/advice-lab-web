import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const ServicesHero = () => {
  return (
    <section className="py-10 md:py-14 lg:py-16 gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation animation="fade-right">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
                Empowering Your Advisory Practice with Expert Support
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From paraplanning to mortgage support, we provide comprehensive
                offshore solutions that help Australian financial advisers scale
                efficiently and focus on what matters most — their clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="white"
                  asChild
                  className="hover:scale-105 transition-transform group"
                >
                  <Link to="/pricing-calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Pricing Calculator
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content - Optimized Image Placeholder */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="relative">
              {/* Main image container with aspect ratio */}
              <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                {/* Placeholder image with optimization attributes */}
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Professional financial advisory services team collaboration"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  width="1200"
                  height="900"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Save up to
                    </p>
                    <p className="text-lg font-bold text-primary">
                      60% on costs
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-xl hidden lg:block">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs text-center">
                    30+
                    <br />
                    <span className="text-[10px]">Years</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
