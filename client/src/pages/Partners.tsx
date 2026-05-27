import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            Our Partners
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            We are grateful for the organizations who share our vision and walk alongside us in this mission.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Forged Paths */}
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  FP
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Forged Paths</h2>
                <p className="text-gray-600">Empowering Second Chances</p>
              </div>
              <p className="text-gray-700 mb-4">
                Forged Paths is a nonprofit organization dedicated to breaking cycles of poverty and incarceration by providing education, training, and support services to young adults facing barriers to employment.
              </p>
              <p className="text-gray-700 mb-6">
                Our partnership with Forged Paths ensures that our programs reach those who need them most, providing wraparound support services including case management, mental health resources, and life skills training.
              </p>
              <h4 className="font-bold text-blue-900 mb-3">Partnership Focus:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Serving justice-involved young adults and those with barriers to employment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Holistic support services and case management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Coordinated career pathways and job placement</span>
                </li>
              </ul>
              <a
                href="https://forgedpaths.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Visit Forged Paths <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>

            {/* MSCA */}
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                  MSCA
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'BD Supper' }}>MSCA</h2>
                <p className="text-gray-600">Manufacturing & Supply Chain Alliance</p>
              </div>
              <p className="text-gray-700 mb-4">
                The Manufacturing and Supply Chain Alliance (MSCA) is a strategic partnership organization that brings together manufacturers, suppliers, and service providers to strengthen the industrial ecosystem.
              </p>
              <p className="text-gray-700 mb-6">
                Through our partnership with MSCA, Steel Toes & Second Chances connects young adults to real employer networks and industry opportunities that lead to stable, well-paying careers.
              </p>
              <h4 className="font-bold text-blue-900 mb-3">Partnership Focus:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Industry networking and employer engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Strategic partnership programs and events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2022;</span>
                  <span className="text-gray-700 text-sm">Direct connections to employers who believe in second chances</span>
                </li>
              </ul>
              <a
                href="https://mscafl.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Visit MSCA <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Want to Join Our Mission?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            We are always looking for partners who share our commitment to empowering young adults and creating pathways to opportunity.
          </p>
          <Link href="/partnerships">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Learn About Partnership Opportunities
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
