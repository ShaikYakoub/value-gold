export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "Gold Rate",
      valueGold: "Live market-linked",
      others: "Lower / Fixed rates",
    },
    {
      feature: "Testing Method",
      valueGold: "XRF Technology",
      others: "Manual methods",
    },
    {
      feature: "Deductions",
      valueGold: "No hidden charges",
      others: "Heavy deductions",
    },
    {
      feature: "Minimum Quantity",
      valueGold: "From 1 gram",
      others: "5–10 grams minimum",
    },
    {
      feature: "Payment Speed",
      valueGold: "Instant bank transfer",
      others: "Delays / Cash only",
    },
    {
      feature: "Transparency",
      valueGold: "100% visible process",
      others: "Opaque procedures",
    },
    {
      feature: "Legacy",
      valueGold: "120+ years heritage",
      others: "Limited experience",
    },
  ];

  return (
    <section id="comparison" className="py-12 bg-slate-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <span className="block text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Compare & Decide</span>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground">
          Why <span className="text-blue-600 dark:text-amber-500">Value Gold</span> Over Others
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 font-light mb-12">
          See the difference for yourself
        </p>

        <div className="bg-card dark:bg-card rounded-2xl shadow-sm overflow-hidden border border-blue-100/50 dark:border-amber-500/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50 dark:bg-amber-500/10">
                <tr>
                  <th className="px-6 py-4 text-left text-blue-700 dark:text-amber-300 font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-blue-700 dark:text-amber-300 font-semibold">
                    Value Gold
                  </th>
                  <th className="px-6 py-4 text-left text-blue-700 dark:text-amber-300 font-semibold">
                    Other Buyers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 dark:divide-amber-500/10">
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 dark:hover:bg-amber-500/10 transition-colors"
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 dark:text-gray-300">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-blue-600 dark:text-amber-400">
                      <span className="inline-flex items-center gap-2">
                        <span className="text-blue-600 dark:text-amber-400 font-bold">
                          ✓
                        </span>
                        {row.valueGold}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-red-600 dark:text-red-400">
                      <span className="inline-flex items-center gap-2">
                        <span className="text-red-600 dark:text-red-400 font-bold">
                          ✗
                        </span>
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}


