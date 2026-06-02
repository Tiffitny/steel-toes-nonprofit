import { Link } from "wouter";
import { Facebook, Linkedin, Twitter, Mail, Phone, ArrowUpRight, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative bg-[#0f1b2d] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e91e8c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section - Brand + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 pb-12 border-b border-white/10"
        >
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Steel Toes & Second Chances
            </h3>
            <p className="text-white/60 leading-relaxed">
              Breaking cycles of poverty. Giving second chances. Building futures through boots, training, mentorship, and unconditional support.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com/steeltoesandsecondchances" },
              { icon: Linkedin, href: "https://linkedin.com/company/steel-toes-and-second-chances" },
              { icon: Twitter, href: "https://twitter.com/steeltoesandsecondchances" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Programs", href: "/workforce" },
                { label: "Partners", href: "/partners" },
                { label: "Founder's Story", href: "/founder-message" },
                { label: "Contact", href: "/contact" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Partners</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://mscafl.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  MSCA <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://forgedpaths.org" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                  Forged Paths <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:Tiffany@steeltoesandsecondchances.org" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                <Mail size={14} className="flex-shrink-0" />
                Tiffany@steeltoesandsecondchances.org
              </a>
              <a href="tel:+18632096615" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                <Phone size={14} className="flex-shrink-0" />
                (863) 209-6615
              </a>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Our Promise</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Your donations help equip youth with boots, training, housing support, and mentorship. Building real futures one young person at a time.
            </p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Steel Toes & Second Chances. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-[#e91e8c] fill-[#e91e8c]" /> for every youth who deserves a second chance.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
