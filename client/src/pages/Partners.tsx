import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Partners() {
  return (
    <div className="min h screen flex flex col bg white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg gradient to r from blue 900 to blue 800 text white py 12 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h1 className="text 5xl font bold mb 4">Our Partners</h1>
          <p className="text xl text blue 100">
            Strategic partnerships that amplify our mission to transform lives and break cycles of poverty.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <div className="grid grid cols 1 md:grid cols 2 gap 12 mb 16">
            {/* Forged Paths */}
            <Card className="p 8 border 0 shadow lg hover:shadow xl transition">
              <div className="mb 6">
                <div className="w 24 h 24 bg gradient to br from blue 900 to pink 600 rounded lg flex items center justify center text white font bold text 2xl mb 4">
                  FP
                </div>
                <h2 className="text 3xl font bold text blue 900 mb 2">Forged Paths</h2>
                <p className="text gray 600 text lg">Empowering Second Chances</p>
              </div>
              <p className="text gray 700 mb 4">
                Forged Paths is a nonprofit organization dedicated to breaking cycles of poverty and incarceration by providing education, training, and support services to young adults facing barriers to employment.
              </p>
              <p className="text gray 700 mb 6">
                Our partnership with Forged Paths ensures that our programs reach those who need them most, providing wraparound support services including case management, mental health resources, and financial literacy training.
              </p>
              <h4 className="font bold text blue 900 mb 3">Partnership Focus:</h4>
              <ul className="space y 2 mb 6">
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Serving justice involved young adults and those with barriers to employment</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Holistic support services and case management</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Coordinated career pathways and job placement</span>
                </li>
              </ul>
              <a
                href="https://forgedpaths.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w full bg blue 900 hover:bg blue 800">
                  Visit Forged Paths <ExternalLink className="ml 2 h 4 w 4" />
                </Button>
              </a>
            </Card>

            {/* MSCA */}
            <Card className="p 8 border 0 shadow lg hover:shadow xl transition">
              <div className="mb 6">
                <div className="w 24 h 24 bg gradient to br from pink 600 to blue 900 rounded lg flex items center justify center text white font bold text xl mb 4">
                  MSCA
                </div>
                <h2 className="text 3xl font bold text blue 900 mb 2">MSCA</h2>
                <p className="text gray 600 text lg">Manufacturing & Supply Chain Alliance</p>
              </div>
              <p className="text gray 700 mb 4">
                The Manufacturing and Supply Chain Alliance connects manufacturers, suppliers, and service providers to strengthen the industrial ecosystem.
              </p>
              <p className="text gray 700 mb 6">
                Our partnership with MSCA helps us connect young adults with employers and industry leaders who believe in second chances and are committed to supporting their growth.
              </p>
              <h4 className="font bold text blue 900 mb 3">Partnership Focus:</h4>
              <ul className="space y 2 mb 6">
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Industry networking and business development</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Strategic partnership programs and sponsorships</span>
                </li>
                <li className="flex items start">
                  <span className="text pink 600 font bold mr 2">•</span>
                  <span className="text gray 700">Employer engagement and job placement</span>
                </li>
              </ul>
              <a
                href="https://mscafl.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w full bg blue 900 hover:bg blue 800">
                  Visit MSCA <ExternalLink className="ml 2 h 4 w 4" />
                </Button>
              </a>
            </Card>
          </div>


        </div>
      </section>

      {/* Employer Partners */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gray 50">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Our Employer Partners</h2>
          <p className="text center text gray 700 text lg mb 12 max w 3xl mx auto">
            We work with employers across the country who are committed to hiring young adults and supporting their long-term success.
          </p>
          <div className="grid grid cols 2 md:grid cols 4 gap 6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <Card key={idx} className="p 6 border 0 shadow md flex items center justify center h 32 bg white">
                <div className="text center">
                  <div className="w 12 h 12 bg gradient to br from blue 900 to pink 600 rounded full mx auto mb 2"></div>
                  <p className="text sm font bold text gray 900">Partner {idx}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Partnership Opportunities</h2>
          <div className="grid grid cols 1 md:grid cols 3 gap 8">
            <Card className="p 6 border 0 shadow md">
              <h3 className="text 2xl font bold text blue 900 mb 3">For Employers</h3>
              <p className="text gray 700 mb 4">
                Access to a pipeline of trained, certified professionals ready to contribute to your team.
              </p>
              <ul className="space y 2 text sm text gray 700">
                <li>• Customized recruitment support</li>
                <li>• Job fair participation</li>
                <li>• Internship programs</li>
                <li>• Training partnerships</li>
              </ul>
            </Card>

            <Card className="p 6 border 0 shadow md">
              <h3 className="text 2xl font bold text blue 900 mb 3">For Organizations</h3>
              <p className="text gray 700 mb 4">
                Collaborate with us to expand our mission of breaking cycles of poverty and creating pathways to opportunity nationwide.
              </p>
              <ul className="space y 2 text sm text gray 700">
                <li>• Co branded programs</li>
                <li>• Resource sharing</li>
                <li>• Joint initiatives</li>
                <li>• Community impact</li>
              </ul>
            </Card>

            <Card className="p 6 border 0 shadow md">
              <h3 className="text 2xl font bold text blue 900 mb 3">For Sponsors</h3>
              <p className="text gray 700 mb 4">
                Invest in workforce development while building brand visibility and community leadership.
              </p>
              <ul className="space y 2 text sm text gray 700">
                <li>• Strategic partnerships</li>
                <li>• Event sponsorships</li>
                <li>• Program support</li>
                <li>• Thought leadership</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gradient to r from blue 900 to pink 600 text white">
        <div className="max w 4xl mx auto text center">
          <h2 className="text 4xl font bold mb 6">Interested in Partnering?</h2>
          <p className="text xl mb 8 text blue 100">
            We're always looking for organizations and partners who share our mission to transform lives and empower young adults.
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
