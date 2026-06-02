import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Loader2, Check, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useSearch } from "wouter";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const GIVING_LEVELS = [
  {
    id: "gloves-glasses",
    amount: 5000,
    label: "$50",
    title: "Work Gloves & Safety Glasses",
    description: "Equip one young person with the basic safety gear they need on day one.",
    icon: "🧤",
  },
  {
    id: "boots",
    amount: 15000,
    label: "$150",
    title: "Steel Toe Boots",
    description: "Put a brand new pair of steel toe boots on a young person's feet. The thing that started it all.",
    icon: "👢",
    featured: true,
  },
  {
    id: "training",
    amount: 50000,
    label: "$500",
    title: "Sponsor One Youth's Training",
    description: "Cover the cost of workforce training, certifications, and job placement support for one young person.",
    icon: "📋",
  },
  {
    id: "full-program",
    amount: 100000,
    label: "$1,000",
    title: "Full Program Sponsorship",
    description: "Fund everything: boots, gear, training, mentorship, transportation, and placement for one young person.",
    icon: "🌟",
  },
];

export default function Donate() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const search = useSearch();

  const createCheckout = trpc.donation.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      if (data.url) {
        toast.success("Redirecting you to our secure checkout page...");
        window.open(data.url, "_blank");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  // Handle success/cancel redirects from Stripe
  useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.get("success") === "true") {
      toast.success("Thank you for your generous donation! You are making a real difference.");
    }
    if (params.get("canceled") === "true") {
      toast.info("Donation was canceled. No worries, you can try again anytime.");
    }
  }, [search]);

  const handleDonate = () => {
    let amount: number;
    let givingLevel: string | undefined;

    if (isCustom) {
      const parsed = parseFloat(customAmount);
      if (isNaN(parsed) || parsed < 1) {
        toast.error("Please enter a valid amount of at least $1.00");
        return;
      }
      amount = Math.round(parsed * 100); // Convert to cents
      givingLevel = undefined;
    } else if (selectedLevel) {
      const level = GIVING_LEVELS.find((l) => l.id === selectedLevel);
      if (!level) return;
      amount = level.amount;
      givingLevel = level.title;
    } else {
      toast.error("Please select a giving level or enter a custom amount.");
      return;
    }

    createCheckout.mutate({
      amount,
      givingLevel,
      donorEmail: donorEmail || undefined,
      donorName: donorName || undefined,
    });
  };

  const selectLevel = (id: string) => {
    setSelectedLevel(id);
    setIsCustom(false);
    setCustomAmount("");
  };

  const selectCustom = () => {
    setIsCustom(true);
    setSelectedLevel(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a8c] via-[#3d6a9c] to-[#5d8abc]" />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#e91e8c]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#e91e8c]/5 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">
              Make a Difference
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Give a Young Person Their <span className="text-gradient">First Step</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Every dollar you give puts real tools in real hands. Boots on real feet. Training in a real trade. A real shot at a real future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giving Levels */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Choose Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every giving level is tied to something real. You will know exactly what your money does.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {GIVING_LEVELS.map((level, index) => (
              <AnimatedSection key={level.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectLevel(level.id)}
                  className={`relative cursor-pointer rounded-2xl p-6 transition-all border-2 ${
                    selectedLevel === level.id
                      ? "border-[#e91e8c] bg-pink-50/50 shadow-lg shadow-pink-200/30"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  } ${level.featured ? "ring-2 ring-[#e91e8c]/20" : ""}`}
                >
                  {level.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#e91e8c] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-3">{level.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {level.label}
                  </div>
                  <div className="text-sm font-semibold text-[#e91e8c] mb-2">{level.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{level.description}</p>
                  {selectedLevel === level.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 w-6 h-6 bg-[#e91e8c] rounded-full flex items-center justify-center"
                    >
                      <Check className="h-3.5 w-3.5 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom Amount */}
          <AnimatedSection delay={0.4} className="max-w-md mx-auto mb-10">
            <motion.div
              whileHover={{ y: -2 }}
              onClick={selectCustom}
              className={`cursor-pointer rounded-2xl p-6 transition-all border-2 text-center ${
                isCustom
                  ? "border-[#e91e8c] bg-pink-50/50 shadow-lg shadow-pink-200/30"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-sm font-semibold text-gray-700 mb-3">Or enter a custom amount</div>
              <div className="relative max-w-[200px] mx-auto">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">$</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                    setSelectedLevel(null);
                  }}
                  onFocus={selectCustom}
                  placeholder="0"
                  className="w-full pl-10 pr-4 py-3 text-2xl font-bold text-center border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e91e8c]/50 focus:border-[#e91e8c]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Optional Donor Info */}
          <AnimatedSection delay={0.5} className="max-w-md mx-auto mb-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Optional: Your Information</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e91e8c]/50 focus:border-[#e91e8c]"
                />
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="Your email (for receipt)"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e91e8c]/50 focus:border-[#e91e8c]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Donate Button */}
          <AnimatedSection delay={0.6} className="text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={handleDonate}
                disabled={createCheckout.isPending || (!selectedLevel && !isCustom)}
                className="bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] hover:from-[#c4177a] hover:to-[#e91e8c] text-white text-lg px-10 py-6 rounded-full shadow-xl shadow-pink-500/25 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {createCheckout.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
              <Shield className="h-4 w-4" />
              Secure payment powered by Stripe
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#2d5a8c] via-[#3d6a9c] to-[#5d8abc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Where Your Money Goes
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We are not a faceless charity. We are a team that shows up at 5 AM to hand-deliver boots. Here is what your donation funds.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gear & Equipment",
                description: "Steel toe boots, work gloves, safety glasses, hard hats. The things employers require on day one that most young people cannot afford.",
                stat: "40%",
              },
              {
                title: "Training & Certifications",
                description: "Forklift certification, OSHA 10, warehouse operations, manufacturing basics. Real credentials that open real doors.",
                stat: "35%",
              },
              {
                title: "Support Services",
                description: "Transportation to job sites, mentorship, life skills coaching, interview prep. The stuff that keeps someone from falling through the cracks.",
                stat: "25%",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-3xl font-bold text-[#ff4db2] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xl text-gray-700 leading-relaxed italic mb-6">
              "I started this because I watched a 19-year-old show up to a job site with his work boots held together by tape. That was the moment. That was the whole reason."
            </p>
            <p className="text-sm font-semibold text-[#e91e8c]">Tiffany Johnson, Founder</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
