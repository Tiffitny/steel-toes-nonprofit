import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Partnerships() {
  const tiers = [
    {
      name: "Iron",
      subtitle: "The Foundation Partner",
      investment: { manufacturer: "$3,500", supplier: "$5,000" },
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-300",
      benefits: [
        "1 seat at 2 Lunch & Learn events",
        "Hole/Station sponsorship at tournaments",
        "Enhanced directory listing",
        "Social media recognition",
        "Monthly newsletter mention",
      ],
    },
    {
      name: "Steel",
      subtitle: "The Growth Accelerator",
      investment: { manufacturer: "$7,500", supplier: "$10,000" },
      color: "text-blue-900",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      featured: true,
      benefits: [
        "2 seats at 4 Lunch & Learn events",
        "2 player spots at Golf & Clay Shoot tournaments",
        "Enhanced digital visibility (website & newsletter)",
        "Social media highlights and features",
        "Quarterly business development meetings",
        "Co-branded marketing materials",
      ],
    },
    {
      name: "Titanium",
      subtitle: "The Industry Leader",
      investment: { manufacturer: "$15,500", supplier: "$20,000" },
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300",
      benefits: [
        "Unlimited event access (one seat at every MSCA event)",
        "Premier tournament packages (foursome at Golf & Clay Shoot)",
        "Strategic cross-RMA promotion",
        "Keynote thought leadership slot",
        "Dedicated relationship manager",
        "Exclusive networking dinners",
        "Custom co-marketing campaigns",
        "Annual strategic partnership review",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Strategic Partnership Program</h1>
          <p className="text-xl text-blue-100">
            Exclusive opportunities to invest in Mid-Florida's manufacturing future and position your organization as an industry leader.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Exclusive Access</h3>
              <p className="text-gray-700">
                Only one slot per tier per category. Your investment guarantees maximum visibility and competitive advantage.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Direct ROI</h3>
              <p className="text-gray-700">
                Access to a highly qualified, targeted customer base—manufacturing decision-makers of Mid-Florida.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Year-Round Engagement</h3>
              <p className="text-gray-700">
                This is not a one-time event sponsorship. It's a comprehensive platform for continuous business development.
              </p>
            </Card>
          </div>

          {/* Exclusivity Note */}
          <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-6 text-center mb-12">
            <p className="text-lg font-bold text-pink-600">
              ⚡ EXCLUSIVE: Only one slot available per tier for both Manufacturers and Suppliers
            </p>
            <p className="text-gray-700 mt-2">
              Positions fill quickly. Contact us today to secure your strategic partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Partnership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`border-2 shadow-lg transition-transform hover:scale-105 ${
                  tier.featured ? "md:scale-105 md:shadow-2xl" : ""
                } ${tier.borderColor}`}
              >
                {tier.featured && (
                  <div className="bg-pink-600 text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 ${tier.bgColor}`}>
                  <h3 className={`text-3xl font-bold mb-2 ${tier.color}`}>{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.subtitle}</p>

                  <div className="mb-6 pb-6 border-b">
                    <p className="text-sm text-gray-600 mb-2">Annual Investment</p>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-900">
                        Manufacturer: {tier.investment.manufacturer}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        Supplier: {tier.investment.supplier}
                      </p>
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start">
                        <Check className="h-5 w-5 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        tier.featured
                          ? "bg-pink-600 hover:bg-pink-700"
                          : "bg-blue-900 hover:bg-blue-800"
                      }`}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Sponsor Value */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">For Bank Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Regional Economic Impact</h3>
              <p className="text-lg text-gray-700 mb-4">
                By partnering with Steel Toes & Second Chances, your institution isn't just buying visibility—you're investing in the stability and growth of the regional economy.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">→</span>
                  <span className="text-gray-700"><strong>Trained, high-wage workforce</strong> drives bank deposits and commercial lending opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">→</span>
                  <span className="text-gray-700"><strong>Stable manufacturing base</strong> strengthens mortgage growth and financial stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-3">→</span>
                  <span className="text-gray-700"><strong>Community leadership</strong> positions your bank as a champion of economic development</span>
                </li>
              </ul>
            </div>
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-pink-50">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Partnership ROI</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">Direct Access</p>
                  <p className="text-gray-700 text-sm">Connect with 40+ manufacturing employers and industry leaders</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Brand Visibility</p>
                  <p className="text-gray-700 text-sm">Prominent placement across all MSCA and Steel Toes platforms</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Thought Leadership</p>
                  <p className="text-gray-700 text-sm">Keynote opportunities and strategic networking events</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Community Impact</p>
                  <p className="text-gray-700 text-sm">Demonstrate commitment to workforce development and regional growth</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Exclusive Position Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            With only one slot available per tier, positions fill quickly. Contact us to discuss which partnership level is right for your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
