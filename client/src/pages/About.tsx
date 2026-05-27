import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            Why This Matters
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Because a hard beginning should never define the rest of someone's life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>Our Mission</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Steel Toes & Second Chances empowers underserved youth and young adults through workforce development, mentorship, life skills training, and second chance opportunities that create pathways to stability, employment, and long term success.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>Our Vision</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A world where every young person, regardless of their background, has access to the tools, support, and belief they need to build a life of dignity, purpose, and stability. Where second chances are not the exception but the standard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Barriers */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            The Barriers They Face
          </h2>
          <p className="text-center text-gray-600 mb-10 text-base sm:text-lg">
            The young adults we serve are not broken. They have simply been overlooked.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Aged out of foster care with no support system",
              "No stable housing or transportation",
              "No guidance, mentorship, or role models",
              "Involvement with the justice system",
              "Generational poverty with no visible way out",
              "Lack of access to education or job training",
              "No one who ever said 'you are capable'",
              "Trauma, instability, and survival mode"
            ].map((barrier, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-pink-600 font-bold text-lg flex-shrink-0">&#x2022;</span>
                <p className="text-gray-700">{barrier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Steel Toes & Second Chances was created not because these young people are broken, but because too many have simply been overlooked.
            </p>
            <p>
              We saw young adults from difficult backgrounds facing impossible barriers with no clear pathway forward. Meanwhile, industries needed skilled workers. We recognized an opportunity to bridge that gap and transform lives in the process.
            </p>
            <p>
              But this is not a staffing organization. This is a movement. We provide boots, training, mentorship, transportation, life coaching, emotional support, and most importantly, belief. We walk beside young adults as they rebuild their confidence, discover their potential, and step into futures they once thought were out of reach.
            </p>
            <p>
              The name says it all: Steel Toes represent the strength and resilience of these young people. Second Chances represent what every one of them deserves before the world writes them off.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-pink-600 mb-3" style={{ fontFamily: 'BD Supper' }}>Dignity</h3>
              <p className="text-gray-700 text-sm">
                Every young person deserves to be seen, valued, and treated with respect.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'BD Supper' }}>Belief</h3>
              <p className="text-gray-700 text-sm">
                We believe in their potential before they believe in themselves.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-pink-600 mb-3" style={{ fontFamily: 'BD Supper' }}>Opportunity</h3>
              <p className="text-gray-700 text-sm">
                Creating real pathways, not just programs, that lead to lasting change.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'BD Supper' }}>Community</h3>
              <p className="text-gray-700 text-sm">
                Building stronger families and communities for generations to come.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
