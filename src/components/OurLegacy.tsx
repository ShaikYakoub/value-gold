export default function OurLegacy() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-600 dark:text-amber-400">
        Our Story & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl border border-blue-200 dark:border-amber-500/30 bg-yellow-50 dark:bg-black hover:border-blue-400 dark:hover:border-amber-500 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-amber-400">🏆 Our Heritage</h3>
          <p className="mb-4">
            Value Gold carries forward the 125+ year legacy of CapsGold,
            built on trust, transparency, and scientific valuation.
          </p>
          <ul className="space-y-2">
            <li>✓ 125+ years of reliability</li>
            <li>✓ Scientific testing methods</li>
            <li>✓ Complete disclosure</li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl border border-blue-200 dark:border-amber-500/30 bg-yellow-50 dark:bg-black hover:border-blue-400 dark:hover:border-amber-500 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-amber-400">📊 Our Experience</h3>
          <p className="mb-4">
            With multiple branches across Telangana and Andhra Pradesh,
            we’ve served over 50,000 customers with 100% transparency.
          </p>
          <ul className="space-y-2">
            <li>✓ 50K+ customers</li>
            <li>✓ ₹500Cr+ gold purchased</li>
            <li>✓ Instant payments</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


