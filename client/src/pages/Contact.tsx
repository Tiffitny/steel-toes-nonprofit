import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Loader2, ArrowRight, Send } from "lucide-react";
import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";

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

export default function Contact() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    organization: string;
    inquiryType: "general" | "training" | "partnership" | "employment" | "donation";
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "general",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We received your message and will respond soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        inquiryType: "general" as const,
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b2d] via-[#162544] to-[#1e3a5f]" />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#e91e8c]/10 rounded-full blur-3xl"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#ff4db2] text-sm font-medium mb-6">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Whether you're a young adult looking for opportunity, a mentor ready to give back, or a partner who wants to make a difference, we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Mail, title: "Email", value: "Tiffany@steeltoesandsecondchances.org", href: "mailto:Tiffany@steeltoesandsecondchances.org", color: "from-blue-500 to-blue-700" },
              { icon: Phone, title: "Phone", value: "(863) 209-6615", href: "tel:+18632096615", color: "from-[#e91e8c] to-[#c4177a]" },
              { icon: Clock, title: "Hours", value: "Mon - Fri, 9AM - 5PM", href: null, color: "from-emerald-500 to-emerald-700" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0f1b2d] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-gray-600 hover:text-[#e91e8c] transition-colors text-sm break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0f1b2d] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Send a Message</h2>
                <p className="text-gray-600 mb-8">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50"
                        placeholder="Company or organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="training">Training Program</option>
                      <option value="partnership">Partnership</option>
                      <option value="employment">Employment</option>
                      <option value="donation">Donation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all outline-none text-sm bg-gray-50/50 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={submitMutation.isPending}
                      className="w-full bg-gradient-to-r from-[#e91e8c] to-[#ff4db2] text-white rounded-full py-6 text-base font-medium shadow-lg shadow-pink-500/25 border-0"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick links */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-[#0f1b2d] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="/workforce" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">View Our Programs</span>
                    </Link>
                    <Link href="/founder-message" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-purple-600 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">Founder's Message</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-gradient-to-br from-[#0f1b2d] to-[#1e3a5f] rounded-2xl p-6 text-white"
                >
                  <p className="text-white/80 italic leading-relaxed mb-4">
                    "Every message we receive is a potential life changed. Don't hesitate. Reach out. We're here for you."
                  </p>
                  <p className="text-[#ff4db2] font-medium text-sm">Tiffany Johnson, Founder</p>
                </motion.div>

                {/* Direct contact */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-[#0f1b2d] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prefer to call?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tiffany is available Monday through Friday, 9AM to 5PM. Don't be a stranger.
                  </p>
                  <a href="tel:+18632096615">
                    <Button variant="outline" className="w-full rounded-full border-[#0f1b2d]/20 text-[#0f1b2d] hover:bg-[#0f1b2d] hover:text-white">
                      <Phone className="mr-2 h-4 w-4" /> (863) 209-6615
                    </Button>
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
