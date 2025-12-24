import { Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./Testimonials.module.css";
import clientVideo from "@/assets/CLVideo.mp4";

const testimonials = [
  {
    quote:
      "We have grown our business from zero clients to several hundred clients in 3 ½ years thanks to the support we have from Advice Lab.",
    author: " Harry Flaskas",
    company: "Atlas Wealth Advisory ",
    rating: 5,
  },
  {
    quote:
      "Ever since we've partnered with Advice Lab, we've never looked back.",
    author: "Louella Jorge",
    company: "Principal Adviser",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span
              className={`text-primary font-semibold uppercase ${styles.subHeader}`}
            >
              Customer Reviews
            </span>
            <h2
              className={`font-display font-bold text-muted-foreground mt-2 mb-4 ${styles.mainHeader}`}
            >
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For the past 10 years, we've been providing outstanding service to
              our customers.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Client Testimonials */}
          <ScrollAnimation animation="fade-right">
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-muted/50 rounded-3xl border border-border backdrop-blur-sm hover-lift"
                >
                  {/* <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div> */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Right Side - Video */}
          <ScrollAnimation animation="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <video className="w-full h-full object-cover" controls poster="">
                <source src={clientVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
