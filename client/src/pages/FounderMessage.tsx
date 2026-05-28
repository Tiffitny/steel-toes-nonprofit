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
              The moment that started it all.
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
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      I need to tell you something.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I was in workforce development. I loved it. I believed in it. But I kept running into the same wall. The young adults who needed the most help were the ones falling through every crack the system had. Aged out of foster care. Released from juvenile detention. Couch surfing. Sleeping in cars. Walking into job fairs with no ID, no address, no references, no guidance.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      And I kept thinking, something has to change. This cannot be how it ends for them.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      Then one day I met him.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      He was 18. Quiet. Would not look me in the eye. His shoes were held together with tape. Not duct tape. Clear packing tape, like he was trying to hide it. He had aged out of foster care with nowhere to go. No family. No support. Sleeping in his car for weeks. He told me he had applied to over 40 jobs. Not one person called him back. Not one.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I was able to give him a job. But the night before his first day, he called me. And I could hear it in his voice. He was not going to go.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I asked him what size shoe he wore.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      He went quiet. For a long time. Then he said, "Why?" Like no one had ever asked him something that simple with the intention of actually helping.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I went and bought him a pair of steel toe boots that night. I told him to meet me in the parking lot at 5 AM before his shift.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#0f1b2d] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#e91e8c]"
                    >
                      I did not know if he would come.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      It was still dark outside. And he was there. Standing by his car, waiting. I handed him the box. He just held it for a while. Didn't say anything. Just stared at them like he couldn't believe they were real. Then he put them on, laced them up, and walked in.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      The next day, he texted me. Just a few words. But they broke me.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      He said he had already decided he was not going to show up that morning. That he was done. But he came because I asked him to. Because I showed up. Because nobody had ever done that for him before. He said I believed in him when no one else did. That I helped him when I did not have to. And that he was going to make me proud.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I sat in my car after reading that text and cried. And cried. And cried. Until my chest hurt and I could not catch my breath.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#0f1b2d] leading-relaxed text-xl font-bold pl-6 border-l-4 border-[#e91e8c]"
                    >
                      Because it hit me all at once.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      This was not one kid. This was thousands of kids. Right here. In our communities. Sleeping in cars. Aging out of systems with nothing. Walking out of facilities with a trash bag and no plan, just to end up right back on the streets. Invisible. Overlooked. Forgotten. All of them one pair of boots away from a completely different life. One person showing up away from believing they are worth something. One "I believe in you" away from becoming who they were always meant to be.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      And there was no program for this. No organization catching them at this exact moment. The moment between getting a chance and giving up because of shame. The moment where one person showing up could change the entire direction of a life.
                    </p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-[#e91e8c] leading-relaxed text-2xl font-bold pl-6 border-l-4 border-[#0f1b2d]"
                    >
                      So I built one.
                    </motion.p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      I did not have funding. I did not have a board. I did not have a building. I had a receipt for a pair of boots.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      That young man? He almost did not make it.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      There were weeks where he stopped answering my calls. Weeks where I drove around looking for his car at night. Checking parking lots. Gas stations. The places you go when you have nowhere else.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      One night I found him parked behind a gas station. I did not knock on his window with a speech. I did not show up with a plan. I just parked next to him. Sat in my car. And stayed.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      He did not say a word for a long time. And neither did I. I just let him know someone still believed in him. That he was not invisible to me.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      He came back. Slowly.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      He showed up to a training I set up. Then another. Then he got his certification. Then his first real paycheck. Then his own apartment.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Last month he called me and asked how he could give back. He wants to mentor the next kid who walks in with taped shoes and no hope.
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-gradient-to-r from-[#0f1b2d] to-[#1e3a5f] rounded-xl p-6 text-white"
                    >
                      <p className="italic text-lg leading-relaxed">
                        That is what this is about.
                      </p>
                    </motion.div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Not every story ends like his. Some of these young people are so deep in survival mode that they cannot receive help yet. Some disappear. Some break my heart in ways I do not talk about publicly.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      And that is exactly why I keep going. Because the ones who are ready, the ones who just need one person, one chance, one pair of boots, they deserve someone who will not give up on them.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      If you are reading this and something in your chest is tightening, listen to that. That is the same feeling I had sitting in my car reading that text message. That is the feeling that built this organization from nothing.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Whether you can offer a job, an hour of your time, a financial gift, or simply your belief that these young people deserve better, there is a place for you here.
                    </p>

                    <p className="text-[#e91e8c] leading-relaxed text-xl font-bold">
                      We are just getting started.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <p className="text-gray-600 italic mb-4">With love and purpose,</p>
                    <img
                      src="/manus-storage/tiffany_signature_v3_2a585e6b.png"
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
