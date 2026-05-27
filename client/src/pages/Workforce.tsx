import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Footprints, Users, Heart, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Workforce() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            More Than a Program. A Lifeline.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            We don't just train young adults for jobs. We walk beside them as they rebuild their confidence, discover their potential, and step into futures they once thought were impossible.
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            What We Provide
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            Our approach is holistic. We address the whole person, not just their resume.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <Footprints className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Steel Toe Boots</h3>
              <p className="text-gray-700 text-sm">
                A first pair of boots represents belonging, dignity, and the start of something new. We provide them free of charge to every participant.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <Shield className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Workforce Training</h3>
              <p className="text-gray-700 text-sm">
                Industry-aligned certifications in manufacturing, construction, logistics, and skilled trades. Real skills for real careers.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <Users className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Mentorship</h3>
              <p className="text-gray-700 text-sm">
                One-on-one guidance from mentors who believe in them. Someone who shows up, listens, and walks beside them through the process.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <Heart className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Life Skills</h3>
              <p className="text-gray-700 text-sm">
                Financial literacy, conflict resolution, communication, time management, and the soft skills that make the difference between surviving and thriving.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <CheckCircle className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Transportation</h3>
              <p className="text-gray-700 text-sm">
                Getting to work shouldn't be the barrier. We help solve transportation challenges so young adults can show up and succeed.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <ArrowRight className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'BD Supper' }}>Job Placement</h3>
              <p className="text-gray-700 text-sm">
                Direct connections to employers who believe in second chances and are committed to supporting the growth of our participants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            The Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="w-0.5 h-full bg-pink-200 mt-2"></div>
              </div>
              <div className="pb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Intake & Assessment</h3>
                <p className="text-gray-700">We meet young adults where they are. We learn their story, their goals, and what barriers stand in their way. No judgment. Just support.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="w-0.5 h-full bg-pink-200 mt-2"></div>
              </div>
              <div className="pb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Boots & Training</h3>
                <p className="text-gray-700">They receive their first pair of steel toe boots and begin hands-on training. Certifications, safety protocols, and real skills for real careers.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="w-0.5 h-full bg-pink-200 mt-2"></div>
              </div>
              <div className="pb-4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Mentorship & Life Skills</h3>
                <p className="text-gray-700">Paired with a mentor who walks beside them. Financial literacy, conflict resolution, communication, and the confidence to keep going.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Placement & Ongoing Support</h3>
                <p className="text-gray-700">Connected to employers who believe in second chances. But the support doesn't end at placement. We stay connected and continue walking with them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Who This Is For
          </h2>
          <p className="text-center text-gray-600 mb-10 text-base sm:text-lg">
            If you're a young adult who's been told you don't have options, this is for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Young adults aged 16-30 facing barriers to employment",
              "Those who have aged out of foster care",
              "Young people with justice system involvement",
              "Those without stable housing or transportation",
              "Young adults without a high school diploma or GED",
              "Anyone ready for a second chance and willing to show up"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Ready to Take the First Step?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Whether you're a young adult looking for opportunity, a mentor ready to give back, or an employer who believes in second chances, reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/partnerships">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
