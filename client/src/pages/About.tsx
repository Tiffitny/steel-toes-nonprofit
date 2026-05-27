import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Steel Toes & Second Chances</h1>
          <p className="text-xl text-blue-100">
            Our story, mission, and commitment to transforming lives through workforce development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower individuals with the skills, knowledge, and confidence to build rewarding careers in manufacturing and supply chain industries, while strengthening Mid-Florida's industrial workforce and economic resilience.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A thriving Mid-Florida manufacturing ecosystem where opportunity is accessible to all, talent pipelines are robust and diverse, and industry leaders and workers grow together in partnership and mutual respect.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              Steel Toes & Second Chances was born from a simple observation: Mid-Florida's manufacturing sector was growing, but the talent pipeline was shrinking. Employers struggled to find skilled workers, and many individuals—especially those facing barriers to traditional employment—had no clear path into these high-wage, stable careers.
            </p>
            <p>
              We recognized an opportunity to bridge this gap. By partnering with industry leaders, educational institutions, and community organizations, we created a comprehensive workforce development program that doesn't just teach skills—it transforms lives.
            </p>
            <p>
              The name "Steel Toes & Second Chances" reflects our core philosophy: we celebrate the strength and resilience of manufacturing workers, and we believe everyone deserves a second chance to build a better future. Whether someone is entering the workforce for the first time or pivoting after a setback, we're here to support their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-pink-600 mb-3">Opportunity</h3>
              <p className="text-gray-700">
                Creating accessible pathways to meaningful, well-paying employment for all.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Excellence</h3>
              <p className="text-gray-700">
                Delivering world-class training, mentorship, and support to ensure success.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-pink-600 mb-3">Partnership</h3>
              <p className="text-gray-700">
                Collaborating with industry, education, and community to achieve shared goals.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Inclusion</h3>
              <p className="text-gray-700">
                Welcoming diverse backgrounds, experiences, and perspectives in everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-pink-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Director</h3>
              <p className="text-gray-600">Leading our mission and strategic vision</p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-600 to-blue-900 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Program Director</h3>
              <p className="text-gray-600">Overseeing training and participant support</p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-pink-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Manager</h3>
              <p className="text-gray-600">Building and nurturing industry relationships</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
