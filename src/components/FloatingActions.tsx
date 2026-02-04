"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919477894778?text=Hi,%20I%20have%20a%20gold%20enquiry."
        target="_blank"
        className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        WA
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 dark:bg-yellow-500 rounded-full text-white"
        >
          ↑
        </button>
      )}
    </>
  );
}


