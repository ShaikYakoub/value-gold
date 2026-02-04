"use client";

import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";
import BranchLocator from "@/components/BranchLocator";

export default function BranchesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[400px] bg-gradient-to-br from-blue-600 to-blue-800 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="text-6xl mb-4">📍</div>
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">🏢 <span className="font-semibold">19+</span> Locations</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Us Near You</h1>
            <p className="text-xl mb-4 text-white/80 font-light">
              <span className="font-bold">19+</span> branches including mobile branches across Andhra Pradesh and Telangana
            </p>
            <p className="text-lg text-white/70 font-light">
              Visit any of our convenient locations for gold buying, selling, and loan release services
            </p>
          </div>
        </section>

        {/* Branch Locator */}
        <section className="py-10 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <BranchLocator />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-10 bg-gray-50 dark:bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <span className="block text-center mb-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Why Visit Us</span>
            </span>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Why Visit Our <span className="text-blue-600 dark:text-amber-500">Branches</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">XRF Testing</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Advanced technology for accurate purity testing right in front of you
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">Instant Payment</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  Get your money within minutes via NEFT/RTGS or cash (up to ₹2 lakhs)
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-amber-400">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  <span className="font-semibold text-blue-600 dark:text-amber-400">120+</span> years of experience in gold valuation and customer service
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}


