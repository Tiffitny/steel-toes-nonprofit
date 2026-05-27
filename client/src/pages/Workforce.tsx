import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Workforce() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'BD Supper' }}>
            Empowering Young People. Changing Lives.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
            Comprehensive support for underserved youth: training, mentorship, life coaching, and genuine opportunity to build stable careers and break cycles of poverty.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
                More Than Training. Life Transformation.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                We serve young people from underserved communities who face barriers to opportunity. Our program provides comprehensive support that goes beyond job training: mentorship, life coaching, financial literacy, emotional support, and genuine pathways to stable, well-paying careers.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                We work with employers who share our commitment to youth empowerment and second chances. Our participants don't just get jobs—they get careers, mentors, and the support they need to succeed and build better futures for themselves and their families.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3">
                  Get Started Today
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-6 sm:p-8 rounded-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'BD Supper' }}>
                Why Choose Our Programs?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">Industry-aligned curriculum and certifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">Hands-on training with modern equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">Mentorship and career guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">Direct job placement support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">Ongoing professional development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            What We Provide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Industry Training</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Real certifications and hands-on skills training that lead to real jobs, real wages, and real stability.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Mentorship</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                One-on-one guidance from professionals who believe in them and won't give up on them.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Life Skills</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Financial literacy, resume building, interview prep, and the confidence to walk into any room.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Transportation Support</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We remove barriers. Transportation, childcare support, and flexible scheduling when needed.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Emotional Support</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Counseling, trauma-informed care, and someone who believes in them when they don't believe in themselves.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Job Placement</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Connections with employers who value second chances and are committed to supporting growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 leading-relaxed">
            Join young adults who are transforming their lives through training, mentorship, and genuine opportunity.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
