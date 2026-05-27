import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            Partner With Us. Change Lives.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            None of this happens alone. Every partner, donor, mentor, and employer who joins us is directly responsible for giving a young person their second chance.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Why Partner With Steel Toes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 border-0 shadow-md">
              <Heart className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'BD Supper' }}>Make Real Impact</h3>
              <p className="text-gray-700 text-sm">
                Your support directly changes lives. Every dollar, every hour of mentorship, every open door means a young person gets the chance they deserve.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <Briefcase className="h-10 w-10 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'BD Supper' }}>Build Loyal Talent</h3>
              <p className="text-gray-700 text-sm">
                Young adults who receive genuine support become dedicated employees. They understand the value of opportunity because someone finally gave them one.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <Users className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'BD Supper' }}>Strengthen Community</h3>
              <p className="text-gray-700 text-sm">
                When young adults find stability, families are strengthened, communities grow, and generational cycles of poverty are broken.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Ways to Partner
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
            There are many ways to be part of this mission. Choose the path that fits your capacity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Employer Partners */}
            <Card className="p-6 sm:p-8 border-2 border-blue-200 shadow-lg">
              <div className="bg-blue-900 text-white text-center py-2 px-4 rounded-md mb-6">
                <h3 className="text-lg font-bold">Employer Partners</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Open your doors to young adults who have been trained, mentored, and prepared to work hard. Provide internships, apprenticeships, or full-time positions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Access to pre-trained, motivated young adults</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Ongoing support from our team during onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Recognition as a second-chance employer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Reduced turnover through supported placement</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Become an Employer Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            {/* Mentors */}
            <Card className="p-6 sm:p-8 border-2 border-pink-200 shadow-lg">
              <div className="bg-pink-600 text-white text-center py-2 px-4 rounded-md mb-6">
                <h3 className="text-lg font-bold">Mentors & Volunteers</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Give your time, experience, and belief. Walk beside a young person as they navigate their journey. Sometimes all it takes is one person who shows up.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">One-on-one mentorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Group workshop facilitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Career coaching and mock interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Life skills training support</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Become a Mentor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            {/* Donors */}
            <Card className="p-6 sm:p-8 border-2 border-blue-200 shadow-lg">
              <div className="bg-blue-900 text-white text-center py-2 px-4 rounded-md mb-6">
                <h3 className="text-lg font-bold">Donors & Sponsors</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Your financial support makes everything possible. From boots to training materials to transportation, every contribution directly serves a young person in need.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Fund boots for new participants ($150 per pair)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Sponsor a young adult's full training program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Support transportation and wraparound services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Corporate sponsorship with recognition</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Make a Contribution <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>

            {/* Community Partners */}
            <Card className="p-6 sm:p-8 border-2 border-pink-200 shadow-lg">
              <div className="bg-pink-600 text-white text-center py-2 px-4 rounded-md mb-6">
                <h3 className="text-lg font-bold">Community Partners</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Schools, churches, nonprofits, government agencies, and community organizations that share our vision for empowering young adults.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Referral partnerships for young adults in need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Co-hosted events and awareness campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Shared resources and wraparound support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Joint grant applications and funding</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'BD Supper' }}>
            Every Partnership Changes a Life
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Whether you can offer a job, an hour of mentorship, or financial support, you are part of the solution. Reach out and let's talk about how you can help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
