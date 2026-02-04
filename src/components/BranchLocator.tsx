"use client";

import { useState } from "react";
import { branches } from "@/data/branches";

const STATES = ["Andhra Pradesh", "Telangana"] as const;

export default function BranchLocator() {
  const [openState, setOpenState] = useState<string | null>(null);

  return (
    <section id="branches" className="space-y-6">
      <h2 className="text-3xl font-semibold text-center text-blue-600 dark:text-amber-400">
        Branch Locator
      </h2>

      {STATES.map(state => (
        <div key={state} className="border border-blue-100/50 dark:border-amber-500/20 rounded-xl">
          <button
            onClick={() =>
              setOpenState(openState === state ? null : state)
            }
            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg hover:bg-blue-50 dark:hover:bg-amber-500/10 transition-colors rounded-xl"
          >
            <span className="text-blue-600 dark:text-amber-400">📍 {state}</span>
            <span className="text-blue-600 dark:text-amber-400">{openState === state ? "−" : "+"}</span>
          </button>

          {openState === state && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {branches
                .filter(b => b.state === state)
                .map(branch => (
                  <div
                    key={branch.id}
                    className="bg-secondary/50 dark:bg-secondary/30 border border-blue-100 dark:border-amber-500/20 rounded-xl p-5 hover:border-blue-300 dark:hover:border-amber-500/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {branch.name}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-amber-400 font-medium">
                          {branch.city}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {branch.address}
                        </p>
                        <a
                          href={branch.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-amber-400 text-sm font-semibold hover:underline mt-3"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}


