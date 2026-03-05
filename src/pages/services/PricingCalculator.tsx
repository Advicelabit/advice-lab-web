import { useState, useMemo } from "react";
import Seo from "@/components/ui/Seo";
import { Layout } from "@/components/layout/Layout";
import {
  CheckCircle2,
  AlertCircle,
  PiggyBank,
  BarChart2,
  Calendar,
  ShieldCheck,
  Users,
  Heart,
  Clock,
  Zap,
  ChevronDown,
  ChevronUp,
  X,
  HandCoins,
  TrendingUp,
  Umbrella,
  Building2,
  HeartHandshake,
} from "lucide-react";

const STRATEGIES = {
  superannuation: {
    label: "Superannuation",
    items: [
      "Make a Non-Concessional Contribution",
      "Make a Concessional Contribution",
      "Establish/Continue Salary Sacrifice contribution",
      "Make a spouse contribution",
      "Cashout and recontribute",
      "Government co contribution",
      "Downsizer contribution",
      "First Home Super Saver Scheme",
      "Withdrawal from super",
      "Rollover Super",
      "Retain super",
      "Switch and rebalance super",
      "Establish super",
    ],
  },
  investment: {
    label: "Investment",
    items: [
      "Rollover Investment portfolio",
      "Withdraw from Investment portfolio",
      "Retain investment portfolio",
      "Rebalance investment",
      "Establish investment portfolio",
      "Establish an investment loan (i.e. gearing)",
      "Establish Family Trust",
      "Purchase an investment bond",
      "Retain Investment bond",
      "Invest through the Managed Portfolio Service",
      "Purchase Funeral bond",
    ],
  },
  retirementPlanning: {
    label: "Retirement Planning",
    items: [
      "Withdraw from pension",
      "Retain pension product",
      "Rebalance pension",
      "Commence ABP",
      "Purchase annuity (with super/non super money)",
      "Convert TTR pension to an ABP",
    ],
  },
  insurance: {
    label: "Insurance",
    items: [
      "Apply for Life with Linked TPD Insurance",
      "Apply for Income Protection and Trauma insurance",
      "Adjust the existing personal insurance cover (Increase or Decrease cover)",
      "Maintain personal insurance strategy",
    ],
  },
  smsf: {
    label: "Setting up an SMSF",
    items: [
      "Setting up an SMSF",
      "Establish a limited recourse borrowing arrangement within your SMSF",
      "Investment of funds for your SMSF",
      "Commence an ABP for SMSF",
      "Wind up SMSF",
      "Retain SMSF",
      "Review SMSF trust deed",
    ],
  },
  agedCare: {
    label: "Aged Care",
    items: ["Aged care services & accommodation"],
  },
};

const CATEGORY_ICONS = {
  superannuation: HandCoins,
  investment: TrendingUp,
  retirementPlanning: Users,
  insurance: Umbrella,
  smsf: Building2,
  agedCare: HeartHandshake,
};

const CATEGORY_COLORS = {
  superannuation: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
  investment: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
  retirementPlanning: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
  insurance: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
  smsf: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
  agedCare: {
    bg: "hsl(var(--primary)/10%)",
    accent: "hsl(var(--primary))",
    light: "hsl(var(--primary)/20%)",
  },
};

const CUSTOM_TOOLS = ["XTOOLS", "Wealthsolver"];

const SOA_TIERS = [
  { max: 1, name: "Simple SoA", regular: 250, urgent: 375 },
  { max: 3, name: "Standard SoA", regular: 350, urgent: 525 },
  { max: 6, name: "Comprehensive SoA", regular: 500, urgent: 750 },
  { max: Infinity, name: "Complex Comprehensive", regular: 650, urgent: 975 },
];

const ROA_TIERS = [
  { max: 2, name: "RoA", regular: 90, urgent: 135 },
  { max: Infinity, name: "RoA Extended", regular: 120, urgent: 180 },
];

function getPrice(adviceType, strategyCount, urgent) {
  if (strategyCount === 0) return null;
  const tiers = adviceType === "SOA" ? SOA_TIERS : ROA_TIERS;
  const tier =
    tiers.find((t) => strategyCount <= t.max) || tiers[tiers.length - 1];
  return { tier, price: urgent ? tier.urgent : tier.regular };
}

// ─── Category Card ─────────────────────────────────────────────────────────────
function CategoryCard({ groupKey, group, checked, onToggle }) {
  const [expanded, setExpanded] = useState(true);
  const Icon = CATEGORY_ICONS[groupKey];
  const colors = CATEGORY_COLORS[groupKey];
  const selectedCount = group.items.filter(
    (item) => checked[`${groupKey}__${item}`],
  ).length;
  const progress = (selectedCount / group.items.length) * 100;

  return (
    <div
      style={{
        borderColor: selectedCount > 0 ? colors.accent : "hsl(var(--border))",
      }}
      className="rounded-xl border-2 bg-white overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
    >
      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full flex items-center justify-between p-3 sm:p-4 text-left"
        style={{ background: selectedCount > 0 ? colors.bg : "#FAFAFA" }}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: colors.light }}
          >
            <Icon
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: colors.accent }}
            />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm">
              {group.label}
            </p>
            <p className="text-xs text-muted-foreground">
              {selectedCount > 0
                ? `${selectedCount} / ${group.items.length} selected`
                : `${group.items.length} strategies`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {selectedCount > 0 && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
              style={{ background: colors.accent }}
            >
              {selectedCount}
            </span>
          )}
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {selectedCount > 0 && (
        <div className="h-1 w-full bg-border">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, background: colors.accent }}
          />
        </div>
      )}

      {expanded && (
        <div className="p-2 sm:p-3 space-y-0.5">
          {group.items.map((item) => {
            const key = `${groupKey}__${item}`;
            const isChecked = !!checked[key];
            return (
              <label
                key={key}
                className="flex items-start gap-3 p-2 rounded-lg cursor-pointer hover:bg-secondary/30 group transition-colors active:opacity-75"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggle(key);
                }}
              >
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    id={key}
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    className="sr-only"
                    tabIndex={-1}
                  />
                  <div
                    className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150 pointer-events-none"
                    style={
                      isChecked
                        ? {
                            background: colors.accent,
                            borderColor: colors.accent,
                          }
                        : {
                            background: "white",
                            borderColor: "hsl(var(--border))",
                          }
                    }
                  >
                    {isChecked && (
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className="text-xs sm:text-sm leading-relaxed transition-colors flex-1 select-none"
                  style={{
                    color: isChecked ? colors.accent : "hsl(var(--foreground))",
                  }}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Selected Pills ────────────────────────────────────────────────────────────
function SelectedPills({ checked, onRemove }) {
  const selected = Object.entries(checked)
    .filter(([, v]) => v)
    .map(([k]) => {
      const [groupKey, ...rest] = k.split("__");
      return { key: k, groupKey, label: rest.join("__") };
    });
  if (selected.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {selected.map(({ key, groupKey, label }) => {
        const colors = CATEGORY_COLORS[groupKey] || {
          accent: "hsl(var(--primary))",
          light: "hsl(var(--primary)/10%)",
        };
        return (
          <span
            key={key}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
            style={{ background: colors.light, color: colors.accent }}
          >
            {label}
            <button
              onClick={() => onRemove(key)}
              className="ml-0.5 hover:opacity-70 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        );
      })}
    </div>
  );
}

// ─── Live Price Card ───────────────────────────────────────────────────────────
function LivePriceCard({ adviceType, strategyCount, urgency }) {
  const isUrgent = urgency === "Fast Track";
  const result = getPrice(adviceType, strategyCount, isUrgent);

  if (!result) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border p-6 sm:p-8 text-center bg-secondary/30">
        <CheckCircle2 className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-muted-foreground text-sm font-medium">
          Select strategies above to see live pricing
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
      <div className="gradient-primary px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
          <div>
            <p className="text-primary-foreground/80 text-xs font-bold uppercase tracking-widest mb-1">
              Live Quote
            </p>
            <p className="text-primary-foreground font-black text-lg sm:text-xl leading-tight">
              {adviceType === "SOA" ? "SOA" : "ROA"}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-primary-foreground/80 text-xs">
              {strategyCount} strateg{strategyCount === 1 ? "y" : "ies"}
            </p>
            <p className="text-primary-foreground/70 text-xs mt-0.5">
              {adviceType} · {urgency}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 sm:px-6 py-4 sm:py-5">
        <p className="text-muted-foreground text-xs mb-1">Total Price</p>
        <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
          <span className="text-4xl sm:text-5xl font-black text-foreground">
            {/* ${result.price.toLocaleString()} */}
            0.000
          </span>
          <span className="text-muted-foreground text-sm mb-1">exc. GST</span>
        </div>
        {isUrgent && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
            <Zap className="w-3 h-3" /> Fast Track surcharge applied
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function PricingCalculator() {
  const [adviceType, setAdviceType] = useState("SOA");
  const [urgency, setUrgency] = useState("Standard");
  const [checked, setChecked] = useState({});
  const [customTools, setCustomTools] = useState({});

  const toggleStrategy = (key) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleTool = (key) =>
    setCustomTools((prev) => ({ ...prev, [key]: !prev[key] }));
  const clearAll = () => setChecked({});

  const strategyCount = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked],
  );

  // Real-time pricing calculation - updates instantly as user interacts
  const calculated = useMemo(() => {
    if (strategyCount === 0) return null;
    return getPrice(adviceType, strategyCount, urgency === "Fast Track");
  }, [adviceType, strategyCount, urgency]);

  return (
    <Layout>
      <Seo
        title="Pricing Calculator - Advice Lab"
        description="Transparent pricing for Statements or Records of Advice—select strategies and see live costs. Fast-track options and strategy-based fees."
        keywords="pricing calculator, soa pricing, roa pricing, advice costs, financial advice calculator"
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <div className="gradient-primary px-4 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Pricing Calculator
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-center">
            Transparent, strategy-based pricing — updates live as you select
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          {/* Step 1 & 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* Advice Type */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
              <h2 className="text-lg font-black text-foreground">
                Step 1 · Advice Type
              </h2>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { type: "SOA", full: "Statement of Advice" },
                  { type: "ROA", full: "Record of Advice" },
                ].map(({ type, full }) => (
                  <button
                    key={type}
                    onClick={() => setAdviceType(type)}
                    className="relative rounded-xl border-2 p-3 sm:p-4 text-left transition-all duration-150 cursor-pointer hover:border-primary"
                    style={
                      adviceType === type
                        ? {
                            borderColor: "hsl(var(--primary))",
                            background: "hsl(var(--primary)/10%)",
                          }
                        : {
                            borderColor: "hsl(var(--border))",
                            background: "white",
                          }
                    }
                  >
                    {adviceType === type && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <p className="font-black text-base sm:text-lg text-foreground">
                      {type}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {full}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Turnaround */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
              <h2 className="text-lg font-black text-foreground">
                Step 2 · Turnaround
              </h2>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: "Standard", Icon: Clock, desc: "Regular timeline" },
                  { label: "Fast Track", Icon: Zap, desc: "1.5× price" },
                ].map(({ label, Icon, desc }) => (
                  <button
                    key={label}
                    onClick={() => setUrgency(label)}
                    className="relative rounded-xl border-2 p-3 sm:p-4 text-left transition-all duration-150 cursor-pointer hover:border-primary"
                    style={
                      urgency === label
                        ? {
                            borderColor: "hsl(var(--primary))",
                            background: "hsl(var(--primary)/10%)",
                          }
                        : {
                            borderColor: "hsl(var(--border))",
                            background: "white",
                          }
                    }
                  >
                    {urgency === label && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5 mb-1 text-primary" />
                    <p className="font-bold text-foreground text-sm">{label}</p>
                    {/* <p className="text-xs text-muted-foreground">{desc}</p> */}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main 2-col layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Strategies */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <div>
                  <h2 className="text-lg font-black text-foreground">
                    Step 3 · Select Strategies
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Price updates live as you tick strategies
                  </p>
                </div>
                {strategyCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-destructive hover:text-destructive/90 font-semibold flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-destructive/10 transition-colors self-start sm:self-auto"
                  >
                    <X className="w-3.5 h-3.5" /> Clear all
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(STRATEGIES).map(([groupKey, group]) => (
                  <CategoryCard
                    key={groupKey}
                    groupKey={groupKey}
                    group={group}
                    checked={checked}
                    onToggle={toggleStrategy}
                  />
                ))}
              </div>

              {/* Custom tools */}
              <div className="rounded-xl border-2 border-dashed border-accent bg-accent/5 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm mb-0.5 sm:mb-1">
                      Custom Strategies
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2 sm:mb-3">
                      Do you have any additional custom strategies not mentioned
                      above, please select if this may require the use of
                      Wealthsolver or Xtools.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {CUSTOM_TOOLS.map((tool) => {
                        const isOn = !!customTools[tool];
                        return (
                          <label
                            key={tool}
                            className="flex items-center gap-2 cursor-pointer select-none"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleTool(tool);
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all pointer-events-none"
                              style={
                                isOn
                                  ? {
                                      background: "hsl(var(--accent))",
                                      borderColor: "hsl(var(--accent))",
                                    }
                                  : {
                                      background: "white",
                                      borderColor: "hsl(var(--accent))",
                                    }
                              }
                            >
                              {isOn && (
                                <svg
                                  className="w-2.5 h-2.5 text-white"
                                  fill="none"
                                  viewBox="0 0 12 12"
                                >
                                  <path
                                    d="M2 6l3 3 5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-sm font-semibold text-foreground">
                              {tool}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Selected pills */}
              {/* {
            strategyCount > 0 && (
              <div className="bg-white rounded-xl border border-border p-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                  Selected ({strategyCount}) — click × to remove
                </p>
                <SelectedPills checked={checked} onRemove={toggleStrategy} />
              </div>
            )} */}
            </div>

            {/* Right: Sticky price */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-6 space-y-4">
                <LivePriceCard
                  adviceType={adviceType}
                  strategyCount={strategyCount}
                  urgency={urgency}
                />

                {/* Summary */}
                <div className="bg-muted-foreground/5 rounded-2xl border border-border shadow-sm p-4 sm:p-5 space-y-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Summary
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        label: "Type",
                        value:
                          adviceType === "SOA"
                            ? "Statement of Advice"
                            : "Record of Advice",
                      },
                      { label: "Turnaround", value: urgency },
                      {
                        label: "Strategies",
                        value: `${strategyCount} selected`,
                      },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info - Hidden on mobile */}
                <div className="space-y-3 hidden sm:block">
                  {[
                    {
                      Icon: CheckCircle2,
                      title: "Transparent Pricing",
                      body: "No hidden fees. Complexity-based tiers.",
                    },
                    {
                      Icon: Zap,
                      title: "Flexible Turnaround",
                      body: "Standard or Fast Track available.",
                    },
                    {
                      Icon: ShieldCheck,
                      title: "Expert Support",
                      body: "Quality solutions for advisory practices.",
                    },
                  ].map(({ Icon, title, body }) => (
                    <div
                      key={title}
                      className="bg-white rounded-xl border border-border p-4 flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
