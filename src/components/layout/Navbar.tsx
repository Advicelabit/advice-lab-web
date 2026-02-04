import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/advicelab-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services/paraplanning",
    children: [
      { name: "Paraplanning", href: "/services/paraplanning" },
      { name: "Client Support Officers", href: "/services/ClientSupport" },
      // { name: "Accounting", href: "/services/mortgage" },
      // { name: "SMSF", href: "/services/mortgage" },
      // { name: "Mortgage Support", href: "/services/mortgage" },
    ],
  },
  {
    name: "Resources",
    href: "/resources/blog",
    children: [
      // {
      //   name: "Adviser's Guide for Outsourcing",
      //   href: "/resources#advisers-guide-for-outsourcing",
      // },
      // { name: "Pricing Calculator", href: "/resources#pricing-calculator" },
      // {
      //   name: "Accountant's Offshoring Playbook",
      //   href: "/resources#accountants-offshoring-playbook",
      // },
      // {
      //   name: "Virtual CSO Task Library",
      //   href: "/resources#virtual-cso-task-library",
      // },
      // {
      //   name: "SMSF Trustee Education Kit",
      //   href: "/resources#smsf-trustee-education-kit",
      // },
      { name: "Blog", href: "/resources/blog" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-[1.2em] px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Advice Lab" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-background rounded-2xl shadow-xl border border-border p-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-sm leading-[0.9rem] text-muted-foreground hover:text-primary hover:bg-secondary rounded-xl transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild className="w-40">
            <Link to="/services">Explore Services</Link>
          </Button>
          <Button size="sm" asChild className="w-40">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[76px] left-0 right-0 bg-background border-t border-border transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto py-4 px-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className={`block py-3 text-base font-medium ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="block py-2 text-sm leading-[0.9rem] text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="outline" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Explore Services
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
