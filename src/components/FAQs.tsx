"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What documents are required to sell gold?",
    a: "Aadhaar Card, PAN Card, address proof, and bank details for instant transfer.",
  },
  {
    q: "How fast is the payment?",
    a: "Payments are made instantly via IMPS or NEFT directly to your bank account.",
  },
  {
    q: "Is the process transparent?",
    a: "Yes. Testing, weighing, and valuation are done in front of you.",
  },
  {
    q: "What is the minimum gold quantity?",
    a: "You can sell gold starting from just 1 gram.",
  },
  {
    q: "How is gold purity tested?",
    a: "We use advanced XRF (Karat Meter) technology — non-destructive and accurate.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-600 dark:text-amber-400">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            className="border border-blue-200 dark:border-amber-500/30 rounded-xl overflow-hidden bg-white dark:bg-black cursor-pointer hover:border-blue-400 dark:hover:border-amber-500 transition-colors"
          >
            <div
              className="w-full flex justify-between items-center px-6 py-4 font-semibold"
            >
              <span>{faq.q}</span>
              <span className="text-xl text-blue-600 dark:text-amber-400">{open === i ? "−" : "+"}</span>
            </div>

            <div
              className={`transition-all duration-300 ${
                open === i
                  ? "max-h-40 opacity-100 px-6 pb-4"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


