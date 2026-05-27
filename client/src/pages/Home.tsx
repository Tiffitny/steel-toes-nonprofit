import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Zap, Award } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Steel Toes & Second Chances
              </h1>
              <p className="text-xl mb-4 text-blue-100">
                Empowering the next generation of manufacturing leaders through workforce development, training, and opportunity.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                We bridge the gap between industry needs and talent development in Mid-Florida's manufacturing ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/workforce">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/partnerships">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="https://3000-iumgq6lzlt9xjp0j0h642-0c53f917.us2.manus.computer/manus-storage/steeltoes-logo_46be094a.jpg"
                  alt="Steel Toes & Second Chances Logo"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 shadow-md">
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Participants Trained</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md">
              <Zap className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Employment Rate</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md">
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">40+</h3>
              <p className="text-gray-600">Partner Employers</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md">
              <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$2.5M</h3>
              <p className="text-gray-600">Wages Generated</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                Steel Toes & Second Chances is dedicated to transforming lives and strengthening Mid-Florida's manufacturing workforce through innovative training programs, strategic partnerships, and genuine opportunity.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe everyone deserves a second chance and the skills to succeed in a rewarding career. By connecting ambitious individuals with industry leaders, we're building a more resilient, skilled, and inclusive manufacturing ecosystem.
              </p>
              <Link href="/about">
                <Button className="bg-blue-900 hover:bg-blue-800">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Opportunity:</strong> Creating pathways to meaningful employment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Excellence:</strong> Delivering world-class training and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Partnership:</strong> Collaborating with industry and community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">•</span>
                  <span className="text-gray-700"><strong>Inclusion:</strong> Welcoming diverse backgrounds and experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're seeking training, looking to hire talent, or wanting to support our mission, we have a path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workforce">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                Explore Training Programs
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
