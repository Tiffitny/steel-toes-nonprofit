import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, AlertCircle } from "lucide-react";
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
                There's something powerful about handing a young person their very first pair of steel toe boots.
              </p>
              <p className="text-lg mb-8 text-blue-100">
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
                  src="https://3000-iumgq6lzlt9xjp0j0h642-0c53f917.us2.manus.computer/manus-storage/steeltoes-logo_46be094a.jpg"
                  alt="Steel Toes & Second Chances Logo"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Young adults who have been overlooked. Some have aged out of systems that failed them. Some made mistakes. Some never had guidance, stability, transportation, or someone willing to open a door for them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                They're not broken. They're just waiting for someone to believe in them.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Barriers They Face</p>
                    <p className="text-gray-700 text-sm mt-1">Lack of transportation, unstable housing, limited access to quality training, no professional network, and a world that has already written them off.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">What Changes Everything</p>
                    <p className="text-gray-700 text-sm mt-1">Training. Mentorship. Transportation. Someone who looks them in the eyes and says: You matter. You're capable. You deserve a future.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-pink-50">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">The Crisis</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-pink-600">1 in 3</p>
                  <p className="text-gray-700">Young adults without a high school diploma face chronic unemployment</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-900">67%</p>
                  <p className="text-gray-700">Of incarcerated individuals had no stable employment before arrest</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-600">1.5M+</p>
                  <p className="text-gray-700">Young adults disconnected from school and work annually</p>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-gray-700 italic">
                    Without intervention, the path is predictable. With support, it's transformable.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How Transformation Happens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How Transformation Happens</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="text-4xl mb-4">👢</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Boots and Basics</h3>
              <p className="text-gray-700">We provide the tools, resources, and support they need to walk forward with dignity and confidence.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Real Training</h3>
              <p className="text-gray-700">Industry certifications and skills that lead to real jobs and real wages.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Mentorship</h3>
              <p className="text-gray-700">Someone who believes in them. Someone who's been there. Someone who won't give up on them.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Opportunity</h3>
              <p className="text-gray-700">A pathway to stable employment, financial independence, and a future they can be proud of.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partners Matter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why You Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-md">
              <Users className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Employers</h3>
              <p className="text-gray-700 mb-4">
                You hire young adults who are hungry to prove themselves. You get loyal, motivated employees. You build a stronger team.
              </p>
              <p className="text-sm text-gray-600 italic">You're not just hiring. You're changing a life.</p>
            </Card>
            <Card className="p-8 border-0 shadow-md">
              <Heart className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Mentors and Donors</h3>
              <p className="text-gray-700 mb-4">
                Your time, your guidance, your support directly transforms someone's trajectory. You're the difference between a young person giving up and believing in themselves.
              </p>
              <p className="text-sm text-gray-600 italic">You're not just helping. You're saving.</p>
            </Card>
            <Card className="p-8 border-0 shadow-md">
              <ArrowRight className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">Partners</h3>
              <p className="text-gray-700 mb-4">
                You're part of a movement to break cycles of poverty and give young people a real shot at building stable, dignified lives.
              </p>
              <p className="text-sm text-gray-600 italic">You're not just partnering. You're leading.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Be Part of This?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're a young adult ready for your second chance, an employer looking for loyal talent, a mentor with wisdom to share, or someone who believes in this mission, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workforce">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                Explore Programs
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Get Involved
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
