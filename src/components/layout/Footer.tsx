import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import logo from "@/assets/advicelab-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Paraplanning ", href: "/services/paraplanning" },
    { name: "Client Support Officers ", href: "/services/ClientSupport" },
    // { name: "Accounting ", href: "/services/mortgage" },
    // { name: "SMSF ", href: "/services/accounting" },
    // { name: "Mortgage Support  ", href: "/services/mortgage" },
  ],
  resources: [
    // { name: "Adviser’s Guide for Outsourcing ", href: "/resources" },
    // { name: "Pricing Calculator ", href: "/resources#case-studies" },
    // { name: "Accountant’s Offshoring Playbook ", href: "/resources#pricing" },
    // { name: "Virtual CSO Task Library ", href: "/resources#guide" },
    // { name: "SMSF Trustee Education Kit  ", href: "/resources#pricing" },
    { name: "Blog  ", href: "/resources/blog" },
  ],
};

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function Footer() {
  const { pathname } = useLocation();
  const hideCta = pathname.startsWith("/careers");
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation();

  return (
    <footer className="bg-white text-foreground">
      {/* CTA Section */}
      {!hideCta && (
        <div className="gradient-primary py-16">
          <div
            ref={ctaRef}
            className={`container mx-auto px-4 lg:px-8 text-center transition-all duration-700 ${
              ctaVisible ? "scroll-fade-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 text-primary-foreground leading-tight max-w-3xl mx-auto">
              Ready to Scale Your Practice?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Trusted by Australian advisers who rely on Advice Lab daily for
              their offshore support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center h-12 w-full sm:w-48 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 w-full sm:w-48 rounded-xl bg-background text-foreground font-semibold hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="py-16">
        <div
          ref={mainRef}
          className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
            mainVisible ? "scroll-fade-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 stagger-children ${
              mainVisible ? "animate" : ""
            }`}
          >
            {/* Brand */}
            <div className="lg:col-span-2">
              <img src={logo} alt="Advice Lab" className="h-10 w-auto mb-6" />
              <p className="text-muted-foreground mb-6 max-w-sm">
                Expert offshore support for Australian financial advisors. Scale
                your practice with our dedicated team.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>hello@advicelab.com.au</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>1300 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Sydney, Australia</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold mb-4 text-foreground">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display font-semibold mb-4 text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-display font-semibold mb-4 text-foreground">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Advice Lab. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/advice-intel/"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/advice.lab/"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@advicelab"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
