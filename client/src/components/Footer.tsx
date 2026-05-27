import { Link } from "wouter";
import { Facebook, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Steel Toes & Second Chances</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Breaking cycles of poverty. Giving second chances. Building futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/workforce" className="text-blue-100 hover:text-white transition text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-blue-100 hover:text-white transition text-sm">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/founder-message" className="text-blue-100 hover:text-white transition text-sm">
                  Founder's Message
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Partners</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mscafl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition text-sm"
                >
                  MSCA
                </a>
              </li>
              <li>
                <a
                  href="https://forgedpaths.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition text-sm"
                >
                  Forged Paths
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:Tiffany@steeltoesandsecondchances.org" className="text-blue-100 hover:text-white transition text-sm">
                  Tiffany@steeltoesandsecondchances.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+18632096615" className="text-blue-100 hover:text-white transition text-sm">
                  (863) 209-6615
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/steeltoesandsecondchances"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://linkedin.com/company/steel-toes-and-second-chances"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/steeltoesandsecondchances"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; {currentYear} Steel Toes & Second Chances. All rights reserved.</p>
          <p className="mt-2">
            Breaking cycles of poverty. Giving second chances. Building futures.
          </p>
        </div>
      </div>
    </footer>
  );
}
