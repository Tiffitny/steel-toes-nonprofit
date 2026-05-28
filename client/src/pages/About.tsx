import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Compass, Lightbulb, Zap } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
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

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#162544] to-[#1e3a5f]" />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#e91e8c]/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why We <span className="text-gradient">Exist</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Steel Toes & Second Chances was born from a simple belief: every young person deserves someone in their corner, and every second chance deserves real support behind it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0f1b2d] to-[#1e3a5f] flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f1b2d] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To equip youth and young adults with the essential resources needed for a successful transition into employment. This includes clothing, boots, housing assistance, vehicle support, and any other critical aid that fosters a strong foundation for their future.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#ff4db2] flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f1b2d] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To remove barriers from vulnerable youth populations by providing pathways to employability, services, and stability so that no young person is left behind simply because they lacked resources or support.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Barriers */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f1b2d] relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
          style={{ background: "conic-gradient(from 0deg, transparent, white, transparent, white, transparent)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-4">The Challenge</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The Barriers They Face
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mt-4 text-lg">
                The young adults we serve are not broken. They have simply been overlooked.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Aged out of foster care with no support system",
              "No stable housing or transportation",
              "No guidance, mentorship, or role models",
              "Involvement with the justice system",
              "Generational poverty with no visible way out",
              "Lack of access to education or job training",
              "No one who ever said 'you are capable'",
              "Trauma, instability, and survival mode",
            ].map((barrier, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "rgba(233, 30, 140, 0.4)" }}
                  className="glass rounded-xl p-5 transition-all duration-300"
                >
                  <p className="text-white/80 text-sm leading-relaxed">{barrier}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b2d] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Born from <span className="text-gradient">lived experience</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Steel Toes & Second Chances was created not because these young people are broken, but because too many have simply been overlooked. We saw young adults from difficult backgrounds facing impossible barriers with no clear pathway forward.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Meanwhile, industries needed skilled workers. We recognized an opportunity to bridge that gap and transform lives in the process. But this is not a staffing organization. This is a movement.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We provide boots, training, mentorship, transportation, life coaching, emotional support, and most importantly, belief. We walk beside young adults as they rebuild their confidence, discover their potential, and step into futures they once thought were out of reach.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
                The name says it all: Steel Toes represent the strength and resilience of these young people. Second Chances represent what every one of them deserves before the world writes them off.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafbfd] to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">What Drives Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b2d] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Core Values
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Compass, title: "Direction", desc: "Providing a clear, structured roadmap for life and vocational success.", color: "from-blue-500 to-blue-700" },
              { icon: Lightbulb, title: "Purpose", desc: "Helping youth discover their unique talents and self-worth.", color: "from-amber-500 to-orange-600" },
              { icon: Zap, title: "Transformation", desc: "Witnessing lives change completely, from survival to thriving stability.", color: "from-[#e91e8c] to-[#c4177a]" },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f1b2d] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d] tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to make a <span className="text-gradient">difference</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're an employer, mentor, donor, or simply someone who believes in second chances, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnerships">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] text-white rounded-full px-8 shadow-lg shadow-pink-500/25 border-0 w-full sm:w-auto">
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/founder-message">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-[#0f1b2d]/20 text-[#0f1b2d] hover:bg-[#0f1b2d] hover:text-white rounded-full px-8 w-full sm:w-auto">
                    Read Tiffany's Story
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
