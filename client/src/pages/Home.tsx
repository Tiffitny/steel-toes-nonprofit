import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Shield, Footprints } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'BD Supper' }}>
                Steel Toes & Second Chances
              </h1>
              <p className="text-lg sm:text-xl mb-4 text-blue-100">
                There's something powerful about handing a young person their very first pair of steel toe boots.
              </p>
              <p className="text-base sm:text-lg mb-8 text-blue-100">
                To most people, they're just work boots. But to some of these kids, they mean everything. They mean someone finally believed in them. They mean opportunity. They mean hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto">
                    Why This Matters <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/workforce">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                    Our Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/manus-storage/steeltoes-logo_46be094a.jpg"
                  alt="Steel Toes & Second Chances Logo"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Who We Serve
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            Young adults who have been overlooked. Some have aged out of systems that failed them. Some made mistakes. Some never had guidance, stability, transportation, or someone willing to open a door for them.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6" style={{ fontFamily: 'BD Supper' }}>
                The Crisis
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-600 pl-4">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">1 in 3</p>
                  <p className="text-gray-700">young adults without a high school diploma face chronic unemployment</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">67%</p>
                  <p className="text-gray-700">of incarcerated people had no stable employment before arrest</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">1.5M+</p>
                  <p className="text-gray-700">young adults disconnected from school and work annually</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 font-semibold italic">
                Without intervention, the path is predictable. With support, it's transformable.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'BD Supper' }}>
                How We Transform Lives
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Footprints, title: "Boots", desc: "A first pair of steel toe boots means dignity, confidence, and belonging" },
                  { icon: Shield, title: "Training", desc: "Real skills for real careers that provide stability and purpose" },
                  { icon: Users, title: "Mentorship", desc: "Guidance from people who believe in them and walk beside them" },
                  { icon: Heart, title: "Opportunity", desc: "Doors opened by employers who believe in second chances" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <item.icon className="h-8 w-8 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partners Matter */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Why You Matter
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            To every employer, mentor, donor, educator, partner, and supporter who believes in this vision: you are the reason second chances become real futures. None of this happens alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partnerships">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
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
