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
                      I want to tell you about a moment I will never forget.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      A young man walked into our program with his head down, wearing shoes held together with tape. He was 19 years old. He had aged out of foster care six months earlier with nothing. No family to call. No bed to sleep in. No one checking on him. He told me he had been sleeping in his car for weeks, and that he had applied to 47 jobs and heard back from none of them.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      When I handed him his first pair of steel toe boots, he just stared at them. Then he looked up at me and said:
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#0f1b2d] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#e91e8c]"
                    >
                      "No one has ever given me anything and expected me to succeed before."
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      That sentence broke me open. And it built this entire organization.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      To most people, steel toe boots are just work boots. But to the young adults we serve, they represent something that many of them have never experienced: someone believing in them. Someone investing in their future. Someone saying, "You are capable. You matter. You deserve a real shot at life."
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I have watched young men and women put those boots on for the first time and stand a little taller. I have watched their eyes change. Something shifts. It is not just footwear. It is hope. It is identity. It is the first time they have ever felt like they belonged somewhere.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#e91e8c] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#0f1b2d]"
                    >
                      That is why Steel Toes & Second Chances exists.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Not because these young people are broken. They are not. They are resilient, brilliant, and full of potential that the world has refused to see. They have simply been overlooked, underfunded, and written off before they ever had a fair chance.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Some have aged out of systems that were supposed to protect them. Some have made mistakes that follow them like shadows. Some have never had a stable home, a mentor, reliable transportation, or a single adult who showed up for them consistently. But I refuse to accept that a difficult beginning has to write the ending of someone's story.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      This organization was built to change that narrative. We create real pathways into the workforce, into mentorship, into purpose, and into a future that once felt impossible. We do not just hand out resources. We walk beside these young adults. We show up. We stay.
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
                      To every employer who gave one of our young adults a chance when their resume was empty. To every mentor who answered a phone call at midnight. To every donor who believed in a vision before there were results to show. Thank you. You saw what I see every single day: that these young people are worth fighting for.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      That young man with the taped shoes? He is now a certified welder. He has his own apartment. He calls me on holidays. And last month, he asked how he could volunteer to mentor the next group coming through.
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] rounded-xl p-6 text-white"
                    >
                      <p className="italic text-lg leading-relaxed">
                        "Every pair of boots we give is a promise. Every second chance we offer is a declaration that someone's past does not get to decide their future."
                      </p>
                    </motion.div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      If you are reading this and you feel something stirring in your heart, listen to it. Whether you can offer a job, an hour of your time, a financial gift, or simply your belief that these young people deserve better, there is a place for you here.
                    </p>

                    <p className="text-[#e91e8c] leading-relaxed text-xl font-bold">
                      We are just getting started. And the best is yet to come.
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
