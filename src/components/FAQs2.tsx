"use client";

import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What documents are required to sell gold?",
      answer:
        "You need a valid government ID (Aadhar, PAN card, Driving License, or Passport). For transactions above ₹2 lakhs, PAN card is mandatory as per government regulations.",
    },
    {
      question: "How quickly do I get paid and how long does the process take?",
      answer:
        "Payment is instant! The complete process from testing to payment typically takes 15-20 minutes. This includes purity testing via XRF, weighing, documentation, and bank transfer. Once completed, the amount is transferred directly to your bank account via NEFT/RTGS within minutes.",
    },
    {
      question: "How do you ensure transparency in testing and what is XRF testing?",
      answer:
        "We use XRF (X-Ray Fluorescence) technology - a non-destructive, highly accurate scientific method to determine gold purity. The entire process is done in front of you, and results are displayed on screen instantly. You can verify the purity yourself. This technology gives instant results without damaging your jewelry and is certified by hallmarking authorities worldwide.",
    },
    {
      question: "Are there any hidden charges or deductions?",
      answer:
        "No hidden charges at all! The price you see is the price you get. We don't deduct for making charges, wastage, or stones. The only deduction is for impurities if the gold is not pure, which is clearly shown during XRF testing.",
    },
  ];

  return (
    <section id="faqs" className="py-10 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <span className="block text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">❓ Got Questions?</span>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground">
          Frequently Asked <span className="text-blue-600 dark:text-amber-500">Questions</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 font-light mb-12">
          Got questions? We&apos;ve got answers
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
                      <div
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="bg-card dark:bg-card rounded-xl shadow-sm border border-blue-50 dark:border-amber-500/20 overflow-hidden cursor-pointer hover:border-blue-200 dark:hover:border-amber-500/40 transition-colors"
                      >
                        <div
                          className="w-full flex justify-between items-center px-6 py-4 text-left"
                        >
                          <span className="font-semibold text-foreground dark:text-foreground pr-4">
                            {faq.question}
                          </span>
                          <span className="text-2xl font-bold text-blue-600 dark:text-amber-400 flex-shrink-0">
                            {openIndex === index ? "−" : "+"}
                          </span>
                        </div>              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


