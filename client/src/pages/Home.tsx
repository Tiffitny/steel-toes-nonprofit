import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield, Footprints, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

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

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="inline-block"
    >
      {target}{suffix}
    </motion.span>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero Section - Full viewport with parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#1a2d4a] to-[#243b5c]">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e91e8c]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm mb-8"
                >
                  <Sparkles className="h-4 w-4 text-[#ff4db2]" />
                  <span>Empowering Youth. Rebuilding Futures.</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Steel Toes &{" "}
                  <span className="text-gradient">Second Chances</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="text-lg sm:text-xl text-white/70 mb-4 max-w-lg leading-relaxed"
                >
                  There's something powerful about handing a young person their very first pair of steel toe boots.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="text-base sm:text-lg text-white/60 mb-10 max-w-lg"
                >
                  To most people, they're just work boots. But to some of these kids, they mean everything. They mean someone finally believed in them.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/about">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button size="lg" className="bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] hover:from-[#c4177a] hover:to-[#e91e8c] text-white border-0 rounded-full px-8 shadow-lg shadow-pink-500/25 w-full sm:w-auto">
                        Why This Matters <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/workforce">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 w-full sm:w-auto">
                        Our Programs
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Logo with floating animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-[#e91e8c]/20 rounded-3xl blur-3xl scale-110" />
                  <img
                    src="/logo-transparent.png"
                    alt="Steel Toes & Second Chances Logo"
                    className="relative w-full max-w-sm h-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/50"
          >
            <span className="text-xs mb-2 uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Horizontal band */}
      <section className="relative -mt-1 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-light rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp target="1 in 3" />
              </p>
              <p className="text-gray-600 text-sm mt-1">youth face chronic unemployment</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#e91e8c]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp target="67%" />
              </p>
              <p className="text-gray-600 text-sm mt-1">had no stable job before arrest</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#0f1b2d]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <CountUp target="1.5M+" />
              </p>
              <p className="text-gray-600 text-sm mt-1">disconnected youth annually</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">Who We Serve</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1b2d] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Young adults who have been{" "}
                <span className="text-gradient">overlooked</span>.
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                Some have aged out of systems that failed them. Some made mistakes. Some never had guidance, stability, or someone willing to open a door for them.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Footprints, title: "Boots", desc: "A first pair of steel toe boots means dignity, confidence, and belonging", color: "from-blue-500 to-blue-700" },
              { icon: Shield, title: "Training", desc: "Real skills for real careers that provide stability and purpose", color: "from-emerald-500 to-emerald-700" },
              { icon: Users, title: "Mentorship", desc: "Guidance from people who believe in them and walk beside them", color: "from-purple-500 to-purple-700" },
              { icon: Heart, title: "Opportunity", desc: "Doors opened by employers who believe in second chances", color: "from-[#e91e8c] to-[#c4177a]" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#0f1b2d] text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Crisis - Bold statement section */}
      <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0f1b2d] relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]"
          style={{
            background: "conic-gradient(from 0deg, transparent, white, transparent, white, transparent)"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-4">The Reality</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Without intervention, the path is predictable.
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg">
                With support, it's transformable.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { stat: "1 in 3", label: "young adults without a diploma face chronic unemployment" },
              { stat: "67%", label: "of incarcerated people had no stable employment before arrest" },
              { stat: "1.5M+", label: "young adults disconnected from school and work annually" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "rgba(233, 30, 140, 0.5)" }}
                  className="glass rounded-2xl p-8 text-center transition-all duration-300"
                >
                  <p className="text-4xl sm:text-5xl font-bold text-gradient mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.stat}
                  </p>
                  <p className="text-white/70 leading-relaxed">{item.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <blockquote className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-white/80 italic leading-relaxed">
                "These aren't statistics. These are young people with immense potential who were dealt a difficult hand."
              </p>
              <footer className="mt-4 text-[#ff4db2] font-medium">Tiffany Johnson, Founder</footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Why You Matter - CTA */}
      <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e91e8c]/5 via-transparent to-blue-500/5" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">Join the Movement</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1b2d] tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why <span className="text-gradient">You</span> Matter
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              To every employer, mentor, donor, and supporter who believes in this vision: you are the reason second chances become real futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnerships">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] hover:from-[#1a2d4a] hover:to-[#243b5c] text-white rounded-full px-8 shadow-lg shadow-blue-900/20 w-full sm:w-auto">
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-[#0f1b2d]/20 text-[#0f1b2d] hover:bg-[#0f1b2d] hover:text-white rounded-full px-8 w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
