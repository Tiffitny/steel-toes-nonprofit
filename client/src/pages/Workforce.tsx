import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Users, Briefcase, Award, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Workforce() {
  return (
    <div className="min h screen flex flex col bg white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg gradient to r from blue 900 to blue 800 text white py 12 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h1 className="text 5xl font bold mb 4">Empowering Young People. Changing Lives.</h1>
          <p className="text xl text blue 100">
            Comprehensive support for underserved youth: training, mentorship, life coaching, and genuine opportunity to build stable careers and break cycles of poverty.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <div className="grid grid cols 1 md:grid cols 2 gap 12 items center">
            <div>
              <h2 className="text 4xl font bold mb 6 text gray 900">More Than Training Life Transformation</h2>
              <p className="text lg text gray 700 mb 4">
                We serve young people from underserved communities who face barriers to opportunity. Our program provides comprehensive support that goes beyond job training: mentorship, life coaching, financial literacy, emotional support, and genuine pathways to stable, well paying careers.
              </p>
              <p className="text lg text gray 700 mb 6">
                We work with employers who share our commitment to youth empowerment and second chances. Our participants don't just get jobs they get careers, mentors, and the support they need to succeed and build better futures for themselves and their families.
              </p>
              <Link href="/contact">
                <Button className="bg blue 900 hover:bg blue 800">Get Started Today</Button>
              </Link>
            </div>
            <div className="bg gradient to br from blue 50 to pink 50 p 8 rounded lg">
              <h3 className="text 2xl font bold text blue 900 mb 6">Why Choose Our Programs?</h3>
              <ul className="space y 3">
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 1 flex shrink 0" />
                  <span className="text gray 700">Industry aligned curriculum and certifications</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 1 flex shrink 0" />
                  <span className="text gray 700">Hands on training with modern equipment</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 1 flex shrink 0" />
                  <span className="text gray 700">Mentorship and career guidance</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 1 flex shrink 0" />
                  <span className="text gray 700">Direct job placement support</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 1 flex shrink 0" />
                  <span className="text gray 700">Ongoing professional development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gray 50">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Our Training Programs</h2>
          <div className="grid grid cols 1 md:grid cols 2 lg:grid cols 3 gap 8">
            {/* Program 1 */}
            <Card className="p 6 border 0 shadow md hover:shadow lg transition">
              <BookOpen className="h 12 w 12 text blue 900 mb 4" />
              <h3 className="text 2xl font bold text gray 900 mb 3">Learn & Earn</h3>
              <p className="text gray 700 mb 4">
                A progressive certification program that allows workers to build skills while earning. Participants progress through multiple certifications in manufacturing fundamentals, CNC operations, and advanced systems.
              </p>
              <ul className="text sm text gray 600 space y 2">
                <li>• 12 16 week modules</li>
                <li>• Flexible scheduling</li>
                <li>• Paid internships</li>
              </ul>
            </Card>

            {/* Program 2 */}
            <Card className="p 6 border 0 shadow md hover:shadow lg transition">
              <Briefcase className="h 12 w 12 text pink 600 mb 4" />
              <h3 className="text 2xl font bold text gray 900 mb 3">Advanced Manufacturing</h3>
              <p className="text gray 700 mb 4">
                For experienced workers seeking to advance their careers. This program covers advanced CNC programming, automation, quality control, and leadership skills.
              </p>
              <ul className="text sm text gray 600 space y 2">
                <li>• 20 24 week program</li>
                <li>• Advanced certifications</li>
                <li>• Leadership training</li>
              </ul>
            </Card>

            {/* Program 3 */}
            <Card className="p 6 border 0 shadow md hover:shadow lg transition">
              <TrendingUp className="h 12 w 12 text blue 900 mb 4" />
              <h3 className="text 2xl font bold text gray 900 mb 3">Supply Chain Excellence</h3>
              <p className="text gray 700 mb 4">
                Specialized training in logistics, inventory management, procurement, and supply chain optimization. Perfect for those interested in non production roles.
              </p>
              <ul className="text sm text gray 600 space y 2">
                <li>• 16 20 week program</li>
                <li>• Industry certifications</li>
                <li>• Real world projects</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Career Pathways</h2>
          <div className="grid grid cols 1 md:grid cols 2 gap 8">
            <Card className="p 8 border 0 shadow md">
              <Award className="h 12 w 12 text blue 900 mb 4" />
              <h3 className="text 2xl font bold text gray 900 mb 4">Entry Level to Specialist</h3>
              <div className="space y 3">
                <div className="flex items center space x 3">
                  <div className="w 8 h 8 bg blue 900 text white rounded full flex items center justify center text sm font bold">1</div>
                  <span className="text gray 700">Manufacturing Fundamentals Certification</span>
                </div>
                <div className="flex items center space x 3">
                  <div className="w 8 h 8 bg blue 900 text white rounded full flex items center justify center text sm font bold">2</div>
                  <span className="text gray 700">CNC Operations Certification</span>
                </div>
                <div className="flex items center space x 3">
                  <div className="w 8 h 8 bg pink 600 text white rounded full flex items center justify center text sm font bold">3</div>
                  <span className="text gray 700">Advanced CNC Programming</span>
                </div>
                <div className="flex items center space x 3">
                  <div className="w 8 h 8 bg pink 600 text white rounded full flex items center justify center text sm font bold">4</div>
                  <span className="text gray 700">Supervisory Leadership Track</span>
                </div>
              </div>
            </Card>

            <Card className="p 8 border 0 shadow md">
              <Users className="h 12 w 12 text pink 600 mb 4" />
              <h3 className="text 2xl font bold text gray 900 mb 4">Support & Resources</h3>
              <ul className="space y 3 text gray 700">
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 3">•</span>
                  <span>One on one career coaching and mentorship</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 3">•</span>
                  <span>Job search assistance and interview prep</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 3">•</span>
                  <span>Employer networking events and job fairs</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 3">•</span>
                  <span>Ongoing professional development</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 3">•</span>
                  <span>Alumni support and advancement opportunities</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gray 50">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Success Stories</h2>
          <div className="grid grid cols 1 md:grid cols 2 gap 8">
            <Card className="p 8 border 0 shadow md">
              <p className="text gray 700 mb 4 italic">
                "Steel Toes & Second Chances gave me the confidence and skills I needed to start a new career. The hands on training and mentorship made all the difference. I'm now working as a CNC operator and earning more than I ever thought possible."
              </p>
              <div className="font bold text blue 900">  Maria, CNC Operator</div>
            </Card>
            <Card className="p 8 border 0 shadow md">
              <p className="text gray 700 mb 4 italic">
                "After years of struggling to find stable work, this program opened doors I didn't know existed. The job placement support was incredible, and my employer values the training I received. I'm proud of what I've accomplished."
              </p>
              <div className="font bold text blue 900">  James, Manufacturing Technician</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gradient to r from blue 900 to pink 600 text white">
        <div className="max w 4xl mx auto text center">
          <h2 className="text 4xl font bold mb 6">Ready to Start Your Journey?</h2>
          <p className="text xl mb 8 text blue 100">
            Join hundreds of participants who have transformed their careers through our programs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg white text blue 900 hover:bg gray 100">
              Enroll Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
