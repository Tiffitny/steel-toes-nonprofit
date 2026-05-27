import { Link } from "wouter";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
                <Link href="/about" className="text-blue-100 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/workforce" className="text-blue-100 hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-blue-100 hover:text-white transition">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition">
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
                  className="text-blue-100 hover:text-white transition"
                >
                  MSCA
                </a>
              </li>
              <li>
                <a
                  href="https://forgedpaths.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition"
                >
                  Forged Paths
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:863-209-6615" className="text-blue-100 hover:text-white transition text-sm">
                  (863) 209-6615
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:Tiffany@steeltoesandsecondchances.org" className="text-blue-100 hover:text-white transition text-sm break-all">
                  Tiffany@steeltoesandsecondchances.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-blue-100 text-sm">
            <p>&copy; {currentYear} Steel Toes & Second Chances. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
