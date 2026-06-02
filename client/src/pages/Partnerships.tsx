import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Briefcase, Building2, CheckCircle2 } from "lucide-react";
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

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a8c] via-[#162544] to-[#5d8abc]" />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#e91e8c]/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">Partnerships</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Partner With Us.{" "}
              <span className="text-gradient">Change Lives.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              None of this happens alone. Every partner, donor, mentor, and employer who joins us is directly responsible for giving a young person their second chance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-[#e91e8c] text-sm font-medium mb-4">Why Partner</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d5a8c] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why Partner With <span className="text-gradient">Steel Toes</span>?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Make Real Impact", desc: "Your support directly changes lives. Every dollar, every hour of mentorship, every open door means a young person gets the chance they deserve.", color: "from-[#e91e8c] to-[#c4177a]" },
              { icon: Briefcase, title: "Build Loyal Talent", desc: "Young adults who receive genuine support become dedicated employees. They understand the value of opportunity because someone finally gave them one.", color: "from-blue-500 to-blue-700" },
              { icon: Users, title: "Strengthen Community", desc: "When young adults find stability, families are strengthened, communities grow, and generational cycles of poverty are broken.", color: "from-emerald-500 to-emerald-700" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d5a8c] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#2d5a8c] relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03]"
          style={{ background: "conic-gradient(from 0deg, transparent, white, transparent, white, transparent)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-4">Opportunities</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ways to Partner
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mt-4 text-lg">
                There are many ways to be part of this mission. Choose the path that fits your capacity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Employer Partners",
                desc: "Open your doors to young adults who have been trained, mentored, and prepared to work hard.",
                items: ["Access to pre-trained, motivated young adults", "Ongoing support from our team during onboarding", "Recognition as a second-chance employer", "Reduced turnover through supported placement"],
                color: "from-blue-500 to-blue-700",
                icon: Briefcase,
              },
              {
                title: "Mentors & Volunteers",
                desc: "Give your time, experience, and belief. Walk beside a young person as they navigate their journey.",
                items: ["One-on-one mentorship opportunities", "Group workshop facilitation", "Career coaching and mock interviews", "Life skills training support"],
                color: "from-purple-500 to-purple-700",
                icon: Users,
              },
              {
                title: "Donors & Sponsors",
                desc: "Your financial support makes everything possible. Every contribution directly serves a young person in need.",
                items: ["Fund boots for new participants ($150 per pair)", "Sponsor a young adult's full training program", "Support transportation and wraparound services", "Corporate sponsorship with recognition"],
                color: "from-[#e91e8c] to-[#c4177a]",
                icon: Heart,
              },
              {
                title: "Community Partners",
                desc: "Schools, churches, nonprofits, and organizations that share our vision for empowering young adults.",
                items: ["Referral partnerships for young adults in need", "Co-hosted events and awareness campaigns", "Shared resources and wraparound support", "Joint grant applications and funding"],
                color: "from-emerald-500 to-emerald-700",
                icon: Building2,
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-6 sm:p-8 h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{card.title}</h3>
                  </div>
                  <p className="text-white/70 mb-5">{card.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#ff4db2] flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className={`w-full bg-gradient-to-r ${card.color} text-white border-0 rounded-full`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5a8c] tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Every partnership <span className="text-gradient">changes a life</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you can offer a job, an hour of mentorship, or financial support, you are part of the solution. Reach out and let's talk about how you can help.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] text-white rounded-full px-8 shadow-lg shadow-pink-500/25 border-0">
                  Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
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
