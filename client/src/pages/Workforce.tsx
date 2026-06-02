import { Button } from "@/components/ui/button";
import { ArrowRight, Footprints, GraduationCap, Users, Heart, Car, Briefcase, CheckCircle2 } from "lucide-react";
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

export default function Workforce() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#1a2d4a] to-[#1e3a5f]" />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">Our Programs</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              More Than a Program.{" "}
              <span className="text-gradient">A Lifeline.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              We don't just train young adults for jobs. We walk beside them as they rebuild their confidence, discover their potential, and step into futures they once thought were impossible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">What We Provide</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b2d] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Everything they need to <span className="text-gradient">succeed</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                Our approach is holistic. We address the whole person, not just their resume.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Footprints, title: "Steel Toe Boots & Work Gear", desc: "A first pair of boots represents belonging, dignity, and the start of something new. We provide them free to every participant.", color: "from-blue-500 to-blue-700" },
              { icon: GraduationCap, title: "Workforce Training", desc: "Industry-aligned certifications in manufacturing, construction, logistics, and skilled trades. Real skills for real careers.", color: "from-emerald-500 to-emerald-700" },
              { icon: Users, title: "Mentorship", desc: "One-on-one guidance from mentors who believe in them. Someone who shows up, listens, and walks beside them.", color: "from-purple-500 to-purple-700" },
              { icon: Heart, title: "Life Skills", desc: "Financial literacy, conflict resolution, communication, time management, and the soft skills that make the difference.", color: "from-[#e91e8c] to-[#c4177a]" },
              { icon: Car, title: "Transportation", desc: "Getting to work shouldn't be the barrier. We help solve transportation challenges so young adults can show up and succeed.", color: "from-amber-500 to-orange-600" },
              { icon: Briefcase, title: "Job Placement", desc: "Direct connections to employers who believe in second chances and are committed to supporting the growth of our participants.", color: "from-cyan-500 to-cyan-700" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden h-full"
                >
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

      {/* The Journey - Timeline */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f1b2d] relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
          style={{ background: "conic-gradient(from 0deg, transparent, white, transparent, white, transparent)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-4">The Journey</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                From day one to career launch
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              { step: "01", title: "Intake & Assessment", desc: "We meet young adults where they are. We learn their story, their goals, and what barriers stand in their way. No judgment. Just support." },
              { step: "02", title: "Boots & Training", desc: "They receive their first pair of steel toe boots and begin hands-on training. Certifications, safety protocols, and real skills for real careers." },
              { step: "03", title: "Mentorship & Life Skills", desc: "Paired with a mentor who walks beside them. Financial literacy, conflict resolution, communication, and the confidence to keep going." },
              { step: "04", title: "Placement & Ongoing Support", desc: "Connected to employers who believe in second chances. But the support doesn't end at placement. We stay connected and continue walking with them." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-6 sm:p-8 flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#ff4db2] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">Eligibility</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b2d] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Who This Is For
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                If you're a young adult who's been told you don't have options, this is for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Young adults aged 16-30 facing barriers to employment",
              "Those who have aged out of foster care",
              "Young people with justice system involvement",
              "Those without stable housing or transportation",
              "Young adults without a high school diploma or GED",
              "Anyone ready for a second chance and willing to show up",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#e91e8c] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e91e8c]/5 via-transparent to-blue-500/5" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d] tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to take the <span className="text-gradient">first step</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a young adult looking for opportunity, a mentor ready to give back, or an employer who believes in second chances, reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] text-white rounded-full px-8 shadow-lg shadow-pink-500/25 border-0 w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-[#0f1b2d]/20 text-[#0f1b2d] hover:bg-[#0f1b2d] hover:text-white rounded-full px-8 w-full sm:w-auto">
                    Become a Partner
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
