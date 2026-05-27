import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'BD Supper' }}>
            About Steel Toes & Second Chances
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
            Our story, mission, and commitment to transforming lives through training, mentorship, and opportunity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To break cycles of poverty by empowering underserved youth and young adults from difficult backgrounds with comprehensive training, mentorship, and genuine opportunity to build stable, well-paying careers and transform their lives.
              </p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: 'BD Supper' }}>
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                A world where young people from underserved communities have genuine pathways to opportunity, where their potential is recognized and nurtured, and where they can build futures of stability, dignity, and hope for themselves and their families.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed">
              Steel Toes & Second Chances was born from a deep commitment to justice and opportunity. We saw young people from underserved communities facing systemic barriers: poverty, lack of mentorship, limited access to quality training, with no clear pathway to stable careers. Meanwhile, the manufacturing industry needed skilled workers. We recognized an opportunity to bridge this gap and transform lives.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              We created a comprehensive program that goes far beyond job training. We provide mentorship, life coaching, financial literacy, and emotional support. We help young people overcome trauma, build confidence, and develop the resilience they need to succeed. We connect them with employers who believe in second chances and are committed to supporting their growth.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Every young adult we work with deserves to be seen, valued, and believed in. That's what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'BD Supper' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Dignity</h3>
              <p className="text-gray-700 text-sm sm:text-base">Every young person deserves to be treated with respect, seen for their potential, and given a genuine chance to build a better life.</p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Opportunity</h3>
              <p className="text-gray-700 text-sm sm:text-base">We create real pathways to stable employment, financial independence, and futures that once felt impossible.</p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Mentorship</h3>
              <p className="text-gray-700 text-sm sm:text-base">We believe in the power of relationships. Our mentors provide guidance, support, and belief when it matters most.</p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Transformation</h3>
              <p className="text-gray-700 text-sm sm:text-base">We don't just place people in jobs. We help them transform their lives, build confidence, and believe in their own potential.</p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Justice</h3>
              <p className="text-gray-700 text-sm sm:text-base">We work to break cycles of poverty and create equity for young people who have been overlooked by the system.</p>
            </Card>
            <Card className="p-6 sm:p-8 border-0 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Community</h3>
              <p className="text-gray-700 text-sm sm:text-base">We believe change happens together. Employers, mentors, donors, and partners are all part of this movement.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
