import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ fontFamily: 'BD Supper' }}>
                Steel Toes & Second Chances
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                There's something powerful about handing a young person their very first pair of steel toe boots.
              </p>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                To most people, they're just work boots. But to some of these kids, they mean everything. They mean someone finally believed in them. They mean opportunity. They mean hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
              <img 
                src="https://3000-iumgq6lzlt9xjp0j0h642-0c53f917.us2.manus.computer/manus-storage/steeltoes-logo_46be094a.jpg"
                alt="Steel Toes & Second Chances Logo"
                className="w-full max-w-sm h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Young adults who have been overlooked. Some have aged out of systems that failed them. Some made mistakes. Some never had guidance, stability, transportation, or someone willing to open a door for them.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold text-blue-900">
                We refuse to believe a hard beginning has to define the rest of someone's life.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">The Crisis</h3>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-gray-700"><span className="text-3xl font-bold text-pink-600">1 in 3</span> young adults without a high school diploma face chronic unemployment</p>
                <p className="text-base sm:text-lg text-gray-700"><span className="text-3xl font-bold text-pink-600">67%</span> of incarcerated individuals had no stable employment before arrest</p>
                <p className="text-base sm:text-lg text-gray-700"><span className="text-3xl font-bold text-pink-600">1.5M+</span> young adults disconnected from school and work annually</p>
              </div>
              <p className="text-base sm:text-lg text-gray-700 font-semibold italic pt-4">
                Without intervention, the path is predictable. With support, it's transformable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Transform Lives Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            How Transformation Happens
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Boots", desc: "Dignity and readiness to step into opportunity" },
              { title: "Training", desc: "Real skills for real jobs in growing industries" },
              { title: "Mentorship", desc: "Someone who believes in them and guides their path" },
              { title: "Opportunity", desc: "A genuine chance to build a life they're proud of" }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center space-y-3">
                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partners Matter Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Why Partners Matter
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Employers, mentors, donors, and supporters are critical to making this happen. Every partnership, every opportunity, every conversation changes the direction of a young person's life.
          </p>
          <Link href="/partnerships">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
