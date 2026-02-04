"use client";

import { useState, useEffect } from "react";

export default function GoldCalculator() {
  const [purity, setPurity] = useState(24);
  const [weight, setWeight] = useState(1);
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);
  const goldRate = 6850; // This would come from GoldRateCard in production

  useEffect(() => {
    if (weight >= 1 && weight <= 100000) {
      const purityMultiplier = purity / 24;
      const value = goldRate * purityMultiplier * weight;
      setEstimatedValue(Math.round(value));
    } else {
      setEstimatedValue(null);
    }
  }, [purity, weight]);

  return (
    <section id="calculator" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600 dark:text-amber-400">
          Sell Gold Calculator
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Get instant valuation of your gold
        </p>

        <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Purity Select */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Gold Purity
              </label>
              <select
                value={purity}
                onChange={(e) => setPurity(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none"
              >
                <option value={24}>24K</option>
                <option value={22}>22K</option>
                <option value={18}>18K</option>
                <option value={14}>14K</option>
              </select>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Weight (grams)
              </label>
              <input
                type="number"
                min={1}
                max={100000}
                value={weight}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '' || val === '0') {
                    setWeight(1);
                  } else {
                    setWeight(Number(val));
                  }
                }}
                onFocus={(e) => e.target.select()}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter weight"
              />
            </div>
          </div>

          {/* Result */}
          {estimatedValue !== null && (
            <div className="bg-white dark:bg-black rounded-xl p-6 text-center border-2 border-blue-500 dark:border-yellow-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Estimated Value
              </div>
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                ₹{estimatedValue.toLocaleString("en-IN")}
              </div>
            </div>
          )}

          {weight < 1 || weight > 100000 ? (
            <div className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
              Please enter weight between 1 and 100,000 grams
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}


