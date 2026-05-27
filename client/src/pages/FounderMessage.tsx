import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function FounderMessage() {
  return (
    <div className="min h screen flex flex col bg white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg gradient to r from blue 900 to blue 800 text white py 12 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <h1 className="text 5xl font bold mb 4">A Message from Our Founder</h1>
          <p className="text xl text blue 100">
            Tiffany Johnson's vision for transforming lives through second chances
          </p>
        </div>
      </section>

      {/* Founder Message Content */}
      <section className="py 16 px 4 sm:px 6 lg:px 8">
        <div className="max w 6xl mx auto">
          <div className="grid grid cols 1 md:grid cols 2 gap 12 items start">
            {/* Founder Photo */}
            <div className="flex justify center">
              <Card className="p 0 border 0 shadow lg overflow hidden">
                <img
                  src="/manus storage/tiffany_johnson_20647943.jpg"
                  alt="Tiffany Johnson, Founder & President"
                  className="w full h auto object cover rounded lg"
                />
              </Card>
            </div>

            {/* Message Text */}
            <div className="space y 6">
              <div className="prose prose lg max w none">
                <p className="text gray 700 text lg leading relaxed">
                  There's something powerful about handing a young person their very first pair of steel toe boots.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  To most people, they're just work boots.
                </p>

                <p className="text gray 700 text lg leading relaxed font semibold text blue 900">
                  But to some of these kids, they mean everything.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  They mean someone finally believed in them enough to invest in their future. They mean a chance to walk onto a jobsite with dignity, purpose, and the confidence to stand a little taller. For many of the young people we work with, nobody has ever looked them in the eyes and said, "You are capable. You matter. You deserve a future."
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  I've seen what happens when a young man or young woman puts those boots on for the first time. Something changes. It's not just footwear. It's hope. It's identity. It's responsibility. It's the beginning of believing they can build a life they're proud of.
                </p>

                <p className="text gray 700 text lg leading relaxed font semibold text pink 600">
                  That's why Steel Toes & Second Chances was created.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  Not because these young people are broken, but because too many have simply been overlooked.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  Some have aged out of systems that failed them. Some have made mistakes. Some never had guidance, stability, transportation, support, or someone willing to open a door for them. But I refuse to believe a hard beginning has to define the rest of someone's life.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  This organization was built to create real pathways into the workforce, into mentorship, into purpose, and into a future that once felt out of reach.
                </p>

                <p className="text gray 700 text lg leading relaxed font semibold">
                  And none of this happens alone.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  To every employer, mentor, donor, educator, partner, and supporter who has believed in this vision from the beginning, thank you. Thank you for seeing the value in these young people. Thank you for understanding that workforce development is not just about filling jobs. It's about changing lives, strengthening families, and building stronger communities for generations to come.
                </p>

                <p className="text gray 700 text lg leading relaxed font semibold text blue 900">
                  Every pair of boots. Every opportunity. Every conversation. Every second chance matters.
                </p>

                <p className="text gray 700 text lg leading relaxed">
                  And we're just getting started.
                </p>
              </div>

              {/* Signature */}
              <div className="pt 8 border t 2 border gray 200">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663299071501/nMZjm3quZ3Skm63XHyWcpr/tiffany_signature TdxJSZaERiKgZGzbkkQ7Su.webp"
                  alt="Tiffany Johnson Signature"
                  className="h 24 w auto mb 2"
                />
                <p className="text gray 900 font bold text lg">Tiffany Johnson</p>
                <p className="text gray 700">Founder & President</p>
                <p className="text gray 700">Steel Toes & Second Chances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py 16 px 4 sm:px 6 lg:px 8 bg gradient to r from blue 50 to pink 50">
        <div className="max w 6xl mx auto">
          <h2 className="text 4xl font bold text center mb 12 text gray 900">Our Mission in Action</h2>
          <div className="grid grid cols 1 md:grid cols 3 gap 8">
            <Card className="p 8 border 0 shadow md text center">
              <div className="text 5xl font bold text pink 600 mb 4">500+</div>
              <p className="text gray 700 text lg font semibold">Young Adults Served</p>
              <p className="text gray 600 mt 2">Empowered through training and mentorship</p>
            </Card>

            <Card className="p 8 border 0 shadow md text center">
              <div className="text 5xl font bold text blue 900 mb 4">85%</div>
              <p className="text gray 700 text lg font semibold">Employment Success Rate</p>
              <p className="text gray 600 mt 2">Building stable careers and futures</p>
            </Card>

            <Card className="p 8 border 0 shadow md text center">
              <div className="text 5xl font bold text pink 600 mb 4">$2.5M+</div>
              <p className="text gray 700 text lg font semibold">Wages Earned</p>
              <p className="text gray 600 mt 2">Economic impact in our communities</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
