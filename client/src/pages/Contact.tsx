import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    organization: string;
    inquiryType: "general" | "training" | "partnership" | "employment" | "donation";
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "general",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We received your inquiry and will respond soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        inquiryType: "general" as const,
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit inquiry. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 border-0 shadow-md text-center">
              <Mail className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@steeltoesandchances.org" className="text-blue-900 hover:text-pink-600 font-semibold">
                info@steeltoesandchances.org
              </a>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <Phone className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+18635551234" className="text-blue-900 hover:text-pink-600 font-semibold">
                (863) 555-1234
              </a>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <MapPin className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">
                Lakeland, FL<br />Mid-Florida Region
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md text-center">
              <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-700">
                Mon - Fri<br />9:00 AM - 5:00 PM
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Inquiry Type *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="training">Training Programs</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="employment">Employment</option>
                    <option value="donation">Donation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>

            {/* Sidebar CTAs */}
            <div className="space-y-8">
              {/* Explore Programs */}
              <Card className="p-8 border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Explore Our Programs</h3>
                <p className="text-gray-700 mb-6">
                  Interested in joining one of our training programs? Learn more about our comprehensive workforce development initiatives.
                </p>
                <a href="/workforce">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    View Programs
                  </Button>
                </a>
              </Card>

              {/* Partnership Opportunities */}
              <Card className="p-8 border-0 shadow-md bg-gradient-to-br from-pink-50 to-pink-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Strategic Partnerships</h3>
                <p className="text-gray-700 mb-6">
                  Ready to invest in workforce development? Explore our exclusive partnership tiers and secure your position as an industry leader.
                </p>
                <a href="/partnerships">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Learn About Partnerships
                  </Button>
                </a>
              </Card>

              {/* Support Our Mission */}
              <Card className="p-8 border-0 shadow-md bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Support Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  Your donation helps us provide training, mentorship, and opportunity to individuals seeking to transform their lives.
                </p>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Make a Donation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How do I apply for a training program?</h3>
              <p className="text-gray-700">
                Contact us via email or phone to discuss your background and goals. We'll help match you with the right program and guide you through the application process.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What are the program costs?</h3>
              <p className="text-gray-700">
                Most of our programs are subsidized or free for eligible participants. We work with various funding sources to make training accessible.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How long are the programs?</h3>
              <p className="text-gray-700">
                Program lengths vary from 12 to 24 weeks depending on the track. We offer flexible scheduling to accommodate working individuals.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What job placement support do you provide?</h3>
              <p className="text-gray-700">
                We provide comprehensive job search assistance, interview preparation, employer connections, and ongoing career support to ensure your success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
