import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            About Steel Toes & Second Chances
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Breaking cycles of poverty and giving young adults the opportunity to build futures they're proud of
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Steel Toes & Second Chances empowers underserved young adults through workforce development, mentorship, life skills training, and second chance opportunities that create pathways to stability, employment, and long term success.
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              A world where young adults from difficult backgrounds are seen for their potential, not their past. Where opportunity is not determined by circumstance. Where every young person has access to mentorship, training, and genuine pathways to meaningful work and stable futures.
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Dignity", desc: "Every young adult deserves to be treated with respect and seen for their potential" },
                { title: "Second Chances", desc: "Past mistakes don't define future possibilities. Everyone deserves a fresh start" },
                { title: "Holistic Support", desc: "We address the whole person: skills, mentorship, life coaching, and emotional support" },
                { title: "Transformation", desc: "We believe in the power of opportunity to change the direction of a life" }
              ].map((value, i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
