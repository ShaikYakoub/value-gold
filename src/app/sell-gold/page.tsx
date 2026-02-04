"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";

export default function SellGoldPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    goldType: "jewelry",
    karats: "",
    estimatedWeight: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you shortly.");
  };

  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center py-8 md:py-12">
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">💰</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-200 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">⭐ 120+ Years of Trust & Excellence</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sell Your Gold Today</h1>
            <p className="text-xl mb-8 text-white/80 font-light">
              Get the best rates with instant payment and complete transparency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all border-2 border-blue-500 dark:border-amber-400"
              >
                Sell Gold Now
              </button>
              <button
                onClick={scrollToProcess}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border-2 border-white/70 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                Know More <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="process" className="py-10 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">Why Choose Us</span>
            <h2 className="text-4xl font-bold mb-6 text-foreground dark:text-foreground">
              Trust Meets <span className="text-blue-600 dark:text-amber-500">Technology</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
              For over 120 years, Value Gold has been the most trusted name in gold buying across India. As a proud subsidiary of CapsGold, we combine our rich heritage with cutting-edge technology to provide you with the most transparent, fair, and efficient gold selling experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We use advanced XRF (X-Ray Fluorescence) technology to test your gold&apos;s purity with scientific precision—right in front of your eyes. Our rates are linked to live international gold prices, ensuring you always get the best value. Plus, with instant bank transfers, your money reaches you within minutes, not days.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-10 bg-slate-50 dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Simple 4-Step Process</span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground">
              How It <span className="text-blue-600 dark:text-amber-500">Works</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Visit Us", desc: "Walk into any branch or request doorstep pickup" },
                { step: 2, title: "Test & Verify", desc: "XRF purity testing done in front of you" },
                { step: 3, title: "Get Quote", desc: "Instant valuation at live market rates" },
                { step: 4, title: "Receive Payment", desc: "Money transferred to your bank within minutes" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-10 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">📋 What You Need</span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground">
              Documents <span className="text-blue-600 dark:text-amber-500">Required</span>
            </h2>
            <div className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-8 border border-blue-100/50 dark:border-amber-500/20">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">Valid Government ID:</strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light"> Aadhar Card, PAN Card, Driving License, or Passport</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">PAN Card (Mandatory):</strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light"> Required for all transactions above ₹2 lakhs as per government regulations</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-amber-500 font-bold text-xl">✓</span>
                  <div>
                    <strong className="text-foreground dark:text-foreground">Bank Account Details:</strong>
                    <span className="text-gray-600 dark:text-gray-300 font-light"> For instant NEFT/RTGS transfer</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50/50 dark:bg-amber-500/5 rounded-lg border border-blue-100/50 dark:border-amber-500/20">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-blue-600 dark:text-amber-400">Important:</strong> Cash payments are not permitted for transactions above ₹2 lakhs. All payments will be made via bank transfer for security and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 bg-slate-50 dark:bg-black">
          <div className="max-w-3xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">❓ Got Questions?</span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground">
              Frequently Asked <span className="text-blue-600 dark:text-amber-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What types of gold do you accept?",
                  a: "We accept all forms of gold including jewelry (22K, 18K, 14K), coins, bars, broken jewelry, old ornaments, dental gold, and scrap gold. Each item is tested separately for accurate valuation.",
                },
                {
                  q: "Is there a minimum quantity required?",
                  a: "No! You can sell gold starting from just 1 gram. We accept all quantities without any minimum requirement.",
                },
                {
                  q: "Are there any deductions or hidden charges?",
                  a: "No hidden charges at all! The price you see is the price you get. We don't deduct for making charges, wastage, or stones. The only deduction is for impurities, which is clearly shown during XRF testing.",
                },
                {
                  q: "How is the gold rate determined?",
                  a: "Our rates are linked to live international gold prices and updated in real-time. We offer competitive rates based on current market value and purity of your gold.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="bg-card dark:bg-card rounded-xl shadow-sm border border-blue-50 dark:border-amber-500/20 overflow-hidden cursor-pointer hover:border-blue-200 dark:hover:border-amber-500/40 transition-colors"
                >
                  <div className="w-full flex justify-between items-center px-6 py-4 text-left">
                    <span className="font-semibold text-foreground dark:text-foreground pr-4">
                      {faq.q}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-amber-400 flex-shrink-0">
                      {openFaqIndex === i ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFaqIndex === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 font-light">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="py-10 bg-white dark:bg-black">
          <div className="max-w-2xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">📝 Quick Form</span>
            </span>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground">
              Ready to Sell? <span className="text-blue-600 dark:text-amber-500">Fill the Form</span>
            </h2>
            <form onSubmit={handleSubmit} className="bg-card dark:bg-card rounded-2xl p-8 border border-blue-100/50 dark:border-amber-500/20 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Gold Type *
                  </label>
                  <select
                    required
                    value={formData.goldType}
                    onChange={(e) => setFormData({ ...formData, goldType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value="jewelry">Jewelry</option>
                    <option value="coins">Coins</option>
                    <option value="bars">Bars</option>
                    <option value="scrap">Scrap/Broken</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Karats *
                  </label>
                  <select
                    required
                    value={formData.karats}
                    onChange={(e) => setFormData({ ...formData, karats: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select Karats</option>
                    <option value="24">24K</option>
                    <option value="22">22K</option>
                    <option value="18">18K</option>
                    <option value="14">14K</option>
                  </select>
                </div>
              </div>
              
              <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                    Estimated Weight (grams)
                  </label>
                  <input
                    type="number"
                    value={formData.estimatedWeight}
                    onChange={(e) => setFormData({ ...formData, estimatedWeight: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground dark:text-foreground">
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Any special requests or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all text-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}


