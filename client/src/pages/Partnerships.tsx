import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Partnerships() {
  return (
    <div className="min h screen flex flex col bg white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg gradient to r from blue 900 to blue 800 text white py 12 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h1 className="text 5xl font bold mb 4">Get Involved</h1>
          <p className="text xl text blue 100">
            Join us in transforming lives and empowering young adults to build their futures
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Ways to Support Our Mission</h2>
          
          <div className="grid grid cols 1 md:grid cols 3 gap 8 mb 16">
            {/* Employers */}
            <Card className="p 8 border 0 shadow lg hover:shadow xl transition">
              <div className="mb 6">
                <div className="w 16 h 16 bg gradient to br from blue 900 to pink 600 rounded lg flex items center justify center text white font bold text 2xl mb 4">
                  💼
                </div>
                <h3 className="text 2xl font bold text blue 900 mb 2">For Employers</h3>
              </div>
              <p className="text gray 700 mb 6">
                Hire trained, motivated young adults ready to contribute to your team and grow within your organization.
              </p>
              <ul className="space y 3 mb 6">
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Access to qualified candidates</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Customized recruitment support</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Internship and training partnerships</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Build your brand as a community leader</span>
                </li>
              </ul>
              <a href="mailto:info@steeltoesandchances.org">
                <Button className="w full bg blue 900 hover:bg blue 800">
                  Partner With Us
                </Button>
              </a>
            </Card>

            {/* Mentors */}
            <Card className="p 8 border 0 shadow lg hover:shadow xl transition">
              <div className="mb 6">
                <div className="w 16 h 16 bg gradient to br from pink 600 to blue 900 rounded lg flex items center justify center text white font bold text 2xl mb 4">
                  🤝
                </div>
                <h3 className="text 2xl font bold text blue 900 mb 2">For Mentors</h3>
              </div>
              <p className="text gray 700 mb 6">
                Share your experience and guide young adults through their journey to success and stability.
              </p>
              <ul className="space y 3 mb 6">
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Make a real difference in a young person's life</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Flexible mentoring opportunities</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Training and support for mentors</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Build meaningful connections</span>
                </li>
              </ul>
              <a href="mailto:info@steeltoesandchances.org">
                <Button className="w full bg blue 900 hover:bg blue 800">
                  Become a Mentor
                </Button>
              </a>
            </Card>

            {/* Donors */}
            <Card className="p 8 border 0 shadow lg hover:shadow xl transition">
              <div className="mb 6">
                <div className="w 16 h 16 bg gradient to br from blue 900 to pink 600 rounded lg flex items center justify center text white font bold text 2xl mb 4">
                  ❤️
                </div>
                <h3 className="text 2xl font bold text blue 900 mb 2">For Donors</h3>
              </div>
              <p className="text gray 700 mb 6">
                Your support directly funds training, mentorship, and life changing opportunities for young adults.
              </p>
              <ul className="space y 3 mb 6">
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Fund training programs and certifications</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Support mentorship and life coaching</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Impact lives and transform futures</span>
                </li>
                <li className="flex items start">
                  <CheckCircle className="h 5 w 5 text pink 600 mr 3 mt 0.5 flex shrink 0" />
                  <span className="text gray 700">Tax deductible contributions</span>
                </li>
              </ul>
              <Button className="w full bg pink 600 hover:bg pink 700">
                Make a Donation
              </Button>
            </Card>
          </div>

          {/* Impact of Support */}
          <div className="bg gradient to r from blue 50 to pink 50 p 12 rounded lg">
            <h3 className="text 3xl font bold text center mb 8 text gray 900">Your Impact</h3>
            <div className="grid grid cols 1 md:grid cols 4 gap 6">
              <div className="text center">
                <p className="text 4xl font bold text blue 900 mb 2">$500</p>
                <p className="text gray 700">Provides training materials for one young adult</p>
              </div>
              <div className="text center">
                <p className="text 4xl font bold text pink 600 mb 2">$1,500</p>
                <p className="text gray 700">Covers certification program costs</p>
              </div>
              <div className="text center">
                <p className="text 4xl font bold text blue 900 mb 2">$5,000</p>
                <p className="text gray 700">Supports mentorship for 10 young adults</p>
              </div>
              <div className="text center">
                <p className="text 4xl font bold text pink 600 mb 2">$10,000</p>
                <p className="text gray 700">Funds a complete training cohort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gradient to r from blue 900 to pink 600 text white">
        <div className="max w 4xl mx auto text center">
          <h2 className="text 4xl font bold mb 6">Ready to Make a Difference?</h2>
          <p className="text xl mb 8 text blue 100">
            Every contribution, partnership, and mentoring hour changes a young person's life.
          </p>
          <a href="mailto:info@steeltoesandchances.org">
            <Button size="lg" className="bg white text blue 900 hover:bg gray 100">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
