import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FounderMessage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'BD Supper' }}>
            A Message from Our Founder
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Tiffany Johnson's vision for breaking cycles of poverty and giving young people second chances
          </p>
        </div>
      </section>

      {/* Founder Message Content */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/manus-storage/tiffany_johnson_20647943.jpg"
                  alt="Tiffany Johnson, Founder & President"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  There's something powerful about handing a young person their very first pair of steel toe boots.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  To most people, they're just work boots.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold text-blue-900">
                  But to some of these kids, they mean everything.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  They mean someone finally believed in them enough to invest in their future. They mean a chance to walk onto a jobsite with dignity, purpose, and the confidence to stand a little taller. For many of the young people we work with, nobody has ever looked them in the eyes and said, "You are capable. You matter. You deserve a future."
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  I've seen what happens when a young man or young woman puts those boots on for the first time. Something changes. It's not just footwear. It's hope. It's identity. It's responsibility. It's the beginning of believing they can build a life they're proud of.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold text-pink-600">
                  That's why Steel Toes & Second Chances was created.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Not because these young people are broken, but because too many have simply been overlooked.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Some have aged out of systems that failed them. Some have made mistakes. Some never had guidance, stability, transportation, support, or someone willing to open a door for them. But I refuse to believe a hard beginning has to define the rest of someone's life.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  This organization was built to create real pathways into the workforce, into mentorship, into purpose, and into a future that once felt out of reach.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold text-blue-900">
                  And none of this happens alone.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  To every employer, mentor, donor, educator, partner, and supporter who has believed in this vision from the beginning, thank you. Thank you for seeing the value in these young people. Thank you for understanding that workforce development is not just about filling jobs. It's about changing lives, strengthening families, and building stronger communities for generations to come.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold italic text-blue-900">
                  Every pair of boots. Every opportunity. Every conversation. Every second chance matters.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-bold text-pink-600">
                  And we're just getting started.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8 border-t border-gray-200">
                <img
                  src="/manus-storage/tiffany_signature_34cf5659.png"
                  alt="Tiffany Johnson signature"
                  className="h-16 sm:h-20 w-auto mb-2"
                />
                <p className="text-gray-600 text-sm sm:text-base">Founder & President</p>
                <p className="text-gray-600 text-sm sm:text-base">Steel Toes & Second Chances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
