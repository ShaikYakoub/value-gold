"use client";

import { useState, useEffect } from "react";

export default function PledgedGoldCalculator() {
  const [institute, setInstitute] = useState("SBI");
  const [customInstitute, setCustomInstitute] = useState("");
  const [weight, setWeight] = useState(10);
  const [loanAmount, setLoanAmount] = useState(0);
  const [purity, setPurity] = useState(22);
  const [result, setResult] = useState<{
    type: "error" | "success" | "no-release";
    message: string;
    value?: number;
  } | null>(null);

  const goldRate = 6850; // This would come from GoldRateCard in production

  const institutes = ["SBI", "HDFC", "ICICI", "Muthoot", "Manappuram", "Other"];

  useEffect(() => {
    setResult(null);
  }, [institute, customInstitute, weight, loanAmount, purity]);

  const calculate = () => {
    // Validation
    if (institute === "Other" && !customInstitute.trim()) {
      setResult({
        type: "error",
        message: "Please enter the financial institute name",
      });
      return;
    }

    if (weight < 1 || weight > 100000) {
      setResult({
        type: "error",
        message: "Please enter weight between 1 and 100,000 grams",
      });
      return;
    }

    if (loanAmount <= 0) {
      setResult({
        type: "error",
        message: "Please enter a valid loan amount",
      });
      return;
    }

    // Calculate expected value
    const expectedValue = goldRate * (purity / 24) * weight;

    // Check if loan amount is unrealistic (>120% of gold value)
    if (loanAmount > expectedValue * 1.2) {
      setResult({
        type: "error",
        message:
          "Loan amount seems too high for the given gold weight and purity. Please verify your inputs.",
      });
      return;
    }

    // Check if loan exceeds gold value
    if (loanAmount > expectedValue) {
      setResult({
        type: "no-release",
        message:
          "Your loan amount exceeds the current gold value. No release value available.",
      });
      return;
    }

    // Calculate release value
    const releaseValue = expectedValue - loanAmount;
    setResult({
      type: "success",
      message: `You can receive approximately ₹${releaseValue.toLocaleString(
        "en-IN"
      )} after loan repayment`,
      value: Math.round(releaseValue),
    });
  };

  return (
    <section id="pledged-calculator" className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600 dark:text-amber-400">
          Pledged Gold Release Calculator
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Calculate how much you&apos;ll receive after loan repayment
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Financial Institute */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Financial Institute
              </label>
              <select
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none"
              >
                {institutes.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Institute Name */}
            {institute === "Other" && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Institute Name *
                </label>
                <input
                  type="text"
                  value={customInstitute}
                  onChange={(e) => setCustomInstitute(e.target.value)}
                  placeholder="Enter institute name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {/* Gold Weight */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Gold Weight (grams)
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
              />
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                min={0}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            {/* Gold Purity */}
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
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Calculate Release Value
          </button>

          {/* Result */}
          {result && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                result.type === "error"
                  ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  : result.type === "no-release"
                  ? "bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800"
                  : "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
              }`}
            >
              <p
                className={`text-center font-medium ${
                  result.type === "error"
                    ? "text-red-700 dark:text-red-300"
                    : result.type === "no-release"
                    ? "text-orange-700 dark:text-orange-300"
                    : "text-green-700 dark:text-green-300"
                }`}
              >
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


