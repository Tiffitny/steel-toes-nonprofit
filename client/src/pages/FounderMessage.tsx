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

export default function FounderMessage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#162544] to-[#1e3a5f]" />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#e91e8c]/8 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">From the Heart</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              A Message from Our <span className="text-gradient">Founder</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Tiffany Johnson's vision for breaking cycles of poverty and giving young people second chances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <AnimatedSection className="lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="sticky top-32"
              >
                <div className="rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                  <img
                    src="/manus-storage/tiffany_johnson_20647943.jpg"
                    alt="Tiffany Johnson, Founder & President"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-bold text-[#0f1b2d] text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tiffany Johnson</p>
                  <p className="text-gray-500 text-sm">Founder & President</p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Message */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      There's something powerful about handing a young person their very first pair of steel toe boots.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      To most people, they're just work boots.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#0f1b2d] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#e91e8c]"
                    >
                      But to some of these kids, they mean everything.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      They mean someone finally believed in them enough to invest in their future. They mean a chance to walk onto a jobsite with dignity, purpose, and the confidence to stand a little taller. For many of the young people we work with, nobody has ever looked them in the eyes and said, "You are capable. You matter. You deserve a future."
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I've seen what happens when a young man or young woman puts those boots on for the first time. Something changes. It's not just footwear. It's hope. It's identity. It's responsibility. It's the beginning of believing they can build a life they're proud of.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#e91e8c] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#0f1b2d]"
                    >
                      That's why Steel Toes & Second Chances was created.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Not because these young people are broken, but because too many have simply been overlooked.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Some have aged out of systems that failed them. Some have made mistakes. Some never had guidance, stability, transportation, support, or someone willing to open a door for them. But I refuse to believe a hard beginning has to define the rest of someone's life.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      This organization was built to create real pathways into the workforce, into mentorship, into purpose, and into a future that once felt out of reach.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#0f1b2d] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#e91e8c]"
                    >
                      And none of this happens alone.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      To every employer, mentor, donor, educator, partner, and supporter who has believed in this vision from the beginning, thank you. Thank you for seeing the value in these young people. Thank you for understanding that workforce development is not just about filling jobs. It's about changing lives, strengthening families, and building stronger communities for generations to come.
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] rounded-xl p-6 text-white"
                    >
                      <p className="italic text-lg leading-relaxed">
                        "Every pair of boots. Every opportunity. Every conversation. Every second chance matters."
                      </p>
                    </motion.div>

                    <p className="text-[#e91e8c] leading-relaxed text-xl font-bold">
                      And we're just getting started.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <img
                      src="/manus-storage/tiffany_signature_v2_b09d51a8.png"
                      alt="Tiffany Johnson signature"
                      className="h-16 sm:h-20 w-auto mb-2"
                    />
                    <p className="text-gray-600 text-sm">Founder & President</p>
                    <p className="text-gray-600 text-sm">Steel Toes & Second Chances</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
