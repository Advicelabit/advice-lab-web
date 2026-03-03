import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  Calculator,
  ArrowRight,
  DollarSign,
  Clock,
  Zap,
  CheckCircle,
  FileText,
  PieChart,
  Shield,
  TrendingUp,
  Sparkles,
  BarChart3,
} from "lucide-react";

import newCastleEmpoweredWealth from "@/assets/CLImg/new-castle-empowered-wealth.png";
import abacusWealthSolution from "@/assets/CLImg/abacus-wealth-solution.png";
import accountplan from "@/assets/CLImg/accountplan.png";
import atlasWealthAdvisory from "@/assets/CLImg/atlas-wealth-advisory.png";

interface PricingFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

const features: PricingFeature[] = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Transparent Pricing",
    description:
      "Get upfront costs for all our paraplanning services with no hidden fees",
    highlight: "No surprises",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Flexible Turnaround",
    description:
      "Choose between Normal and Fast service options to match your deadlines",
    highlight: "On-time delivery",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Volume Savings",
    description:
      "Calculate costs for multiple documents and unlock bulk pricing discounts",
    highlight: "Save up to 20%",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "All-Inclusive Service",
    description:
      "Every quote includes QA review, compliance checks, and unlimited revisions",
    highlight: "Quality assured",
  },
];

const serviceCategories = [
  {
    icon: <FileText className="w-5 h-5" />,
    name: "Simple SOA",
    price: "From $180",
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    name: "Complex SOA",
    price: "From $350",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    name: "ROA",
    price: "From $120",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    name: "Strategy Papers",
    price: "From $280",
  },
];

export function PricingCalculatorCTA() {
  return (
    <section className="py-24 bg-muted-foreground/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">
                Get Instant Pricing
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Calculate Your{" "}
                <span className="gradient-text">Paraplanning Costs</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Plan your budget with confidence. Our interactive pricing
                calculator gives you instant, accurate quotes tailored to your
                specific needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - CTA Card */}
            <ScrollAnimation animation="fade-right">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      Pricing Calculator
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get your quote in seconds
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you need a simple Statement of Advice or complex
                    strategy documentation, our calculator helps you:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Compare Normal vs Fast service options",
                      "Estimate costs for multiple documents",
                      "See volume discount opportunities",
                      "Plan your monthly paraplanning budget",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Price Preview */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-5 mb-8 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Starting Prices
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceCategories.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {service.icon}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {service.name}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {service.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 gradient-primary text-primary-foreground hover:opacity-90 font-semibold rounded-xl group shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl"
                  asChild
                >
                  <Link to="/services/pricing-calculator">
                    <Calculator className="mr-2 w-5 h-5" />
                    Open Pricing Calculator
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <p className="text-center text-muted-foreground/60 text-xs mt-4">
                  Free to use • No registration required • Instant results
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Side - Features Grid */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center text-primary group-hover:from-primary/20 group-hover:to-blue-600/20 transition-colors flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">
                            {feature.title}
                          </h4>
                          {feature.highlight && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {feature.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Trust Badge */}
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {/* Replace this array with your actual client images */}
                      {[
                        newCastleEmpoweredWealth,
                        abacusWealthSolution,
                        accountplan,
                        atlasWealthAdvisory,
                      ].map((src, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 border-2 border-white overflow-hidden"
                        >
                          <img
                            src={src}
                            alt={`Client ${i + 1}`}
                            className="w-20% h-20% object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Trusted by 70+ Financial Advisers
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Across Australia who use our calculator monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Stats */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mt-16 relative">
              {/* Connecting line behind cards */}
              <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 pointer-events-none" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    value: "$180",
                    label: "Starting Price",
                    sub: "Per document",
                    icon: <DollarSign className="w-5 h-5" />,
                    color: "from-emerald-500/10 to-emerald-600/5",
                    iconColor: "text-emerald-600",
                    iconBg: "bg-emerald-50",
                  },
                  {
                    value: "24-48h",
                    label: "Fast Turnaround",
                    sub: "Express service",
                    icon: <Zap className="w-5 h-5" />,
                    color: "from-amber-500/10 to-amber-600/5",
                    iconColor: "text-amber-600",
                    iconBg: "bg-amber-50",
                  },
                  {
                    value: "20%",
                    label: "Volume Discount",
                    sub: "Bulk orders",
                    icon: <TrendingUp className="w-5 h-5" />,
                    color: "from-blue-500/10 to-blue-600/5",
                    iconColor: "text-blue-600",
                    iconBg: "bg-blue-50",
                  },
                  {
                    value: "100%",
                    label: "Satisfaction",
                    sub: "Guaranteed",
                    icon: <Sparkles className="w-5 h-5" />,
                    color: "from-primary/10 to-primary/5",
                    iconColor: "text-primary",
                    iconBg: "bg-primary/10",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background gradient blob */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Top-right decorative dot */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-primary/40 transition-colors duration-300" />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.icon}
                      </div>

                      {/* Value */}
                      <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-0.5 leading-none">
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {stat.label}
                      </p>

                      {/* Sub-label */}
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        {stat.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
