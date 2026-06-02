import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
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

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#1a2d4a] to-[#1e3a5f]" />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#e91e8c]/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">Our Network</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              We are grateful for the organizations who share our vision and walk alongside us in this mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Forged Paths */}
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f1b2d] to-[#e91e8c] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">FP</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0f1b2d]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Forged Paths</h2>
                    <p className="text-gray-500 text-sm">Empowering Second Chances</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Forged Paths is a nonprofit organization dedicated to breaking cycles of poverty and incarceration by providing education, training, and support services to young adults facing barriers to employment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our partnership ensures that our programs reach those who need them most, providing wraparound support services including case management, mental health resources, and life skills training.
                </p>
                <h4 className="font-bold text-[#0f1b2d] text-sm uppercase tracking-wider mb-3">Partnership Focus</h4>
                <ul className="space-y-2 mb-8">
                  {["Serving justice-involved young adults and those with barriers", "Holistic support services and case management", "Coordinated career pathways and job placement"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#e91e8c] mt-1">&#x2022;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://forgedpaths.org" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] text-white rounded-full border-0">
                      Visit Forged Paths <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </AnimatedSection>

            {/* MSCA */}
            <AnimatedSection delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e91e8c] to-[#0f1b2d] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">MSCA</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0f1b2d]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MSCA</h2>
                    <p className="text-gray-500 text-sm">Manufacturing & Supply Chain Alliance</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Manufacturing and Supply Chain Alliance (MSCA) is a strategic partnership organization that brings together manufacturers, suppliers, and service providers to strengthen the industrial ecosystem.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Through our partnership with MSCA, Steel Toes & Second Chances connects young adults to real employer networks and industry opportunities that lead to stable, well-paying careers.
                </p>
                <h4 className="font-bold text-[#0f1b2d] text-sm uppercase tracking-wider mb-3">Partnership Focus</h4>
                <ul className="space-y-2 mb-8">
                  {["Industry networking and employer engagement", "Strategic partnership programs and events", "Direct connections to employers who believe in second chances"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#e91e8c] mt-1">&#x2022;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://mscafl.com" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] text-white rounded-full border-0">
                      Visit MSCA <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e91e8c]/5 via-transparent to-blue-500/5" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b2d] tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Want to join our <span className="text-gradient">mission</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We are always looking for partners who share our commitment to empowering young adults and creating pathways to opportunity.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] text-white rounded-full px-8 shadow-lg border-0">
                  Learn About Partnership Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}
