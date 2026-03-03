import Seo from "@/components/ui/Seo";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ContactPopup } from "@/components/ui/ContactPopup";
import {
  Calculator,
  ArrowRight,
  Clock,
  Zap,
  FileText,
  PieChart,
  Shield,
  TrendingUp,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  normalPrice: number;
  fastPrice: number;
  normalTurnaround: string;
  fastTurnaround: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "simple-soa",
    name: "Simple SOA",
    description: "Basic Statement of Advice for straightforward scenarios",
    icon: <FileText className="w-6 h-6" />,
    normalPrice: 180,
    fastPrice: 250,
    normalTurnaround: "3-5 days",
    fastTurnaround: "24-48 hours",
  },
  {
    id: "complex-soa",
    name: "Complex SOA",
    description: "Comprehensive advice for multiple strategies and products",
    icon: <PieChart className="w-6 h-6" />,
    normalPrice: 350,
    fastPrice: 480,
    normalTurnaround: "5-7 days",
    fastTurnaround: "48-72 hours",
  },
  {
    id: "roa",
    name: "Record of Advice (ROA)",
    description: "Review and update existing client advice",
    icon: <CheckCircle className="w-6 h-6" />,
    normalPrice: 120,
    fastPrice: 180,
    normalTurnaround: "2-3 days",
    fastTurnaround: "24 hours",
  },
  {
    id: "strategy-paper",
    name: "Strategy Paper",
    description: "Detailed strategy analysis and recommendations",
    icon: <TrendingUp className="w-6 h-6" />,
    normalPrice: 280,
    fastPrice: 380,
    normalTurnaround: "4-6 days",
    fastTurnaround: "48 hours",
  },
  {
    id: "compliance-review",
    name: "Compliance Review",
    description: "File review and compliance documentation check",
    icon: <Shield className="w-6 h-6" />,
    normalPrice: 150,
    fastPrice: 220,
    normalTurnaround: "3-4 days",
    fastTurnaround: "24-48 hours",
  },
];

type ServiceType = "normal" | "fast";

interface QuoteItem {
  category: ServiceCategory;
  serviceType: ServiceType;
  quantity: number;
}

const PricingCalculator = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [serviceType, setServiceType] = useState<ServiceType>("normal");
  const [quantity, setQuantity] = useState(1);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  const selectedCategoryData = useMemo(
    () => serviceCategories.find((cat) => cat.id === selectedCategory),
    [selectedCategory],
  );

  const handleAddToQuote = () => {
    if (!selectedCategoryData) return;

    const existingIndex = quoteItems.findIndex(
      (item) =>
        item.category.id === selectedCategory &&
        item.serviceType === serviceType,
    );

    if (existingIndex >= 0) {
      const updated = [...quoteItems];
      updated[existingIndex].quantity += quantity;
      setQuoteItems(updated);
    } else {
      setQuoteItems([
        ...quoteItems,
        {
          category: selectedCategoryData,
          serviceType,
          quantity,
        },
      ]);
    }

    setShowResults(true);
    // Reset quantity but keep category and service type for convenience
    setQuantity(1);
  };

  const handleRemoveItem = (index: number) => {
    const updated = quoteItems.filter((_, i) => i !== index);
    setQuoteItems(updated);
    if (updated.length === 0) {
      setShowResults(false);
    }
  };

  const calculateTotals = useMemo(() => {
    let totalNormal = 0;
    let totalFast = 0;

    quoteItems.forEach((item) => {
      totalNormal += item.category.normalPrice * item.quantity;
      totalFast += item.category.fastPrice * item.quantity;
    });

    const currentTotal = quoteItems.reduce((sum, item) => {
      const price =
        item.serviceType === "normal"
          ? item.category.normalPrice
          : item.category.fastPrice;
      return sum + price * item.quantity;
    }, 0);

    return { totalNormal, totalFast, currentTotal };
  }, [quoteItems]);

  const handleClearQuote = () => {
    setQuoteItems([]);
    setShowResults(false);
    setSelectedCategory("");
    setQuantity(1);
  };

  return (
    <Layout>
      <Seo
        title="Paraplanning Pricing Calculator | Advice Lab"
        description="Calculate the cost of our paraplanning services. Get instant quotes for SOA preparation, ROA, strategy papers, and compliance reviews."
        keywords="paraplanning pricing, SOA cost calculator, paraplanning rates, financial planning services pricing"
        pathname="/services/pricing-calculator"
      />

      {/* Hero */}
      <section className="py-16 md:py-20 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <Link
              to="/services/paraplanning"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Paraplanning
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 font-medium uppercase tracking-wider text-sm">
                  Pricing Tool
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Paraplanning{" "}
                <span className="text-white/90">Pricing Calculator</span>
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Get an instant estimate for our paraplanning services. Select
                your required services, choose your turnaround time, and see
                your custom quote in real-time.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Side - Calculator Controls */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-display font-bold text-foreground mb-6">
                    Build Your Quote
                  </h2>

                  {/* Category Selection */}
                  <div className="space-y-4 mb-8">
                    <label className="block text-sm font-semibold text-foreground uppercase tracking-wider">
                      Select Service Category
                    </label>
                    <div className="grid gap-3">
                      {serviceCategories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                            selectedCategory === category.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-100 hover:border-primary/30 hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                              selectedCategory === category.id
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">
                              {category.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {category.description}
                            </p>
                          </div>
                          {selectedCategory === category.id && (
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Type Selection */}
                  {selectedCategory && (
                    <ScrollAnimation animation="fade-up" delay={50}>
                      <div className="space-y-4 mb-8">
                        <label className="block text-sm font-semibold text-foreground uppercase tracking-wider">
                          Service Type
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            onClick={() => setServiceType("normal")}
                            className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                              serviceType === "normal"
                                ? "border-primary bg-primary/5"
                                : "border-gray-100 hover:border-primary/30"
                            }`}
                          >
                            <Clock className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                            <h3 className="font-semibold text-foreground">
                              Normal Service
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              {selectedCategoryData?.normalTurnaround}
                            </p>
                            <p className="text-lg font-bold text-primary mt-2">
                              ${selectedCategoryData?.normalPrice}
                            </p>
                          </button>
                          <button
                            onClick={() => setServiceType("fast")}
                            className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                              serviceType === "fast"
                                ? "border-amber-500 bg-amber-50"
                                : "border-gray-100 hover:border-amber-300"
                            }`}
                          >
                            <Zap className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                            <h3 className="font-semibold text-foreground">
                              Fast Service
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              {selectedCategoryData?.fastTurnaround}
                            </p>
                            <p className="text-lg font-bold text-amber-600 mt-2">
                              ${selectedCategoryData?.fastPrice}
                            </p>
                          </button>
                        </div>
                      </div>
                    </ScrollAnimation>
                  )}

                  {/* Quantity Selection */}
                  {selectedCategory && (
                    <ScrollAnimation animation="fade-up" delay={100}>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center">
                          <label className="block text-sm font-semibold text-foreground uppercase tracking-wider">
                            Quantity
                          </label>
                          <span className="text-2xl font-bold text-primary tabular-nums">
                            {quantity}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={20}
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, hsl(244, 98%, 51%) 0%, hsl(244, 98%, 51%) ${
                              ((quantity - 1) / 19) * 100
                            }%, #e5e7eb ${((quantity - 1) / 19) * 100}%, #e5e7eb 100%)`,
                          }}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>1</span>
                          <span>20</span>
                        </div>
                      </div>
                    </ScrollAnimation>
                  )}

                  {/* Add to Quote Button */}
                  <Button
                    onClick={handleAddToQuote}
                    disabled={!selectedCategory}
                    className="w-full h-12 gradient-primary text-primary-foreground font-semibold rounded-xl group disabled:opacity-50"
                  >
                    Add to Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Quote Summary */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-fit">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-display font-bold text-foreground">
                      Your Quote
                    </h2>
                    {quoteItems.length > 0 && (
                      <button
                        onClick={handleClearQuote}
                        className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {quoteItems.length === 0 ? (
                    <div className="text-center py-12">
                      <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-200" />
                      <p className="text-muted-foreground">
                        Select services on the left to build your quote
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Quote Items */}
                      <div className="space-y-3">
                        {quoteItems.map((item, index) => (
                          <div
                            key={`${item.category.id}-${item.serviceType}-${index}`}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-foreground">
                                  {item.category.name}
                                </h4>
                                {item.serviceType === "fast" && (
                                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                    Fast
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {item.quantity} x $
                                {item.serviceType === "normal"
                                  ? item.category.normalPrice
                                  : item.category.fastPrice}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-foreground">
                                $
                                {(item.serviceType === "normal"
                                  ? item.category.normalPrice
                                  : item.category.fastPrice) * item.quantity}
                              </span>
                              <button
                                onClick={() => handleRemoveItem(index)}
                                className="text-muted-foreground hover:text-destructive transition-colors"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 pt-4">
                        {/* Subtotals */}
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Normal Service Total
                            </span>
                            <span className="text-foreground">
                              ${calculateTotals.totalNormal}
                            </span>
                          </div>
                          {calculateTotals.totalFast > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Fast Service Total
                              </span>
                              <span className="text-amber-600 font-medium">
                                ${calculateTotals.totalFast}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Total */}
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl">
                          <span className="font-semibold text-foreground">
                            Estimated Total
                          </span>
                          <span className="text-2xl font-bold gradient-text">
                            ${calculateTotals.currentTotal}
                          </span>
                        </div>

                        {/* Savings Info */}
                        {calculateTotals.totalFast > 0 &&
                          quoteItems.some(
                            (item) => item.serviceType === "normal",
                          ) && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg">
                              <p className="text-sm text-green-700">
                                <span className="font-semibold">💡 Tip:</span>{" "}
                                You could save $
                                {calculateTotals.totalFast -
                                  calculateTotals.totalNormal}{" "}
                                by choosing Normal Service for all items.
                              </p>
                            </div>
                          )}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 space-y-3">
                        <Button
                          onClick={() => setIsContactPopupOpen(true)}
                          className="w-full h-12 gradient-primary text-primary-foreground font-semibold rounded-xl group"
                        >
                          Get Detailed Quote
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Prices are estimates. Contact us for volume discounts
                          and custom packages.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  What's Included
                </h2>
                <p className="text-muted-foreground">
                  All our paraplanning services come with these standard
                  inclusions
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Quality Assurance",
                  description:
                    "Every document undergoes rigorous QA before delivery",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Compliance Ready",
                  description:
                    "Documentation aligned with current regulatory standards",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "On-Time Delivery",
                  description: "Guaranteed turnaround times or your money back",
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Unlimited Revisions",
                  description: "We refine until you're completely satisfied",
                },
              ].map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="text-center p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Need a Custom Quote?
              </h2>
              <p className="text-white/80 mb-8">
                Every practice is different. Contact us for tailored pricing
                based on your specific needs, volume requirements, and ongoing
                support arrangements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => setIsContactPopupOpen(true)}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/services/paraplanning">
                    Learn More About Services
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <ContactPopup
        open={isContactPopupOpen}
        onOpenChange={setIsContactPopupOpen}
        title="Get Your Custom Quote"
        description="Share your requirements with us and we'll provide a detailed, tailored quote for your paraplanning needs."
      />

      {/* Slider styles */}
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(244, 98%, 51%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        input[type=range]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(244, 98%, 51%);
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </Layout>
  );
};

export default PricingCalculator;
