"use client";

import Link from "next/link";

export default function LegacyOverview() {
  return (
    <section id="legacy" className="py-10 bg-slate-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">🏆 Since 1901</span>
          <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
            Our <span className="text-blue-600 dark:text-amber-500">Legacy</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Over <span className="font-semibold text-blue-600 dark:text-amber-400">120 years</span> of trust and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Heritage */}
          <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              Rich Heritage
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
              Founded in 1901, Value Gold is a proud subsidiary of CapsGold, one of India&apos;s most respected names in the gold industry. For over 120 years, we have been serving generations of families with integrity and trust.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">
              Core Values
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Transparency, integrity, and customer-first approach form the foundation of everything we do. We believe in fair pricing, honest dealings, and building lasting relationships with our customers.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-card dark:bg-card p-8 rounded-2xl border-2 border-blue-400 dark:border-amber-500 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-amber-400">Our Vision</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                To empower every Indian family to unlock the value of their gold assets with dignity and ease, while expanding our reach across India and excelling in service quality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-amber-400">Our Mission</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                Driven by integrity, innovation, and unwavering commitment, we strive to be the most trusted gold buying partner in India through fair pricing and exceptional customer service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/legacy"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all"
          >
            Explore Our Complete Legacy →
          </Link>
        </div>
      </div>
    </section>
  );
}


