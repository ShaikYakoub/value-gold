"use client";

import { useEffect, useState } from "react";

export default function GoldRateCard() {
  const [city, setCity] = useState("Hyderabad");
  const [rate, setRate] = useState(6850);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const cities = [
    "Hyderabad",
    "Vijayawada",
    "Visakhapatnam",
    "Mumbai",
    "Delhi",
    "Bangalore",
  ];

  useEffect(() => {
    // Simulate live rate with small random variation
    const baseRate = 6850;
    const variation = Math.floor(Math.random() * 50) - 25; // ±25
    setRate(baseRate + variation);
    setLastUpdate(new Date());

    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      const newVariation = Math.floor(Math.random() * 50) - 25;
      setRate(baseRate + newVariation);
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, [city]);

  return (
    <section id="gold-rate" className="py-12">
      <div className="max-w-2xl mx-auto bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-amber-500/30">
        {/* Live Indicator */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-blink" />
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-amber-400">
            Live Gold Rate
          </span>
        </div>

        {/* City Selector */}
        <div className="mb-6">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Gold Price */}
        <div className="text-center mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            24K Gold (per gram)
          </div>
          <div className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            ₹{rate.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>
          Last updated: {lastUpdate.toLocaleTimeString("en-IN")}
        </div>
      </div>
    </section>
  );
}


