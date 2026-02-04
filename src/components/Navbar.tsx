"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    
    // If no saved theme, default to light mode explicitly
    const isDarkMode = savedTheme === "dark";
    
    setIsDark(isDarkMode);
    
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      html.classList.remove("light");
      html.setAttribute("data-theme", "dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
      html.style.colorScheme = "light";
      // Save light as default if nothing was saved
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    setIsDark(newIsDark);
    
    // Force class change immediately
    if (newIsDark) {
      html.classList.remove("light");
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
      html.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      html.setAttribute("data-theme", "light");
      html.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
    
    // Force re-render
    document.body.style.transition = "none";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 0);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md ${
        scrolled
          ? "shadow-md border-b border-blue-100/50 dark:border-amber-500/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            VALUE GOLD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div 
              className="relative group"
            >
              <button
                className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                  <Link
                    href="/sell-gold"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Sell Gold
                  </Link>
                  <Link
                    href="/release-gold"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Release Pledged Gold
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              href="/branches"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Branches
            </Link>
            
            <Link
              href="/legacy"
              className="text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Our Legacy
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors border border-gray-300 dark:border-gray-600"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center top-1 ${
                  isDark ? "left-9" : "left-1"
                }`}
              >
                <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground dark:text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-blue-200 dark:border-amber-500/30 pt-4">
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/sell-gold"
                    onClick={() => setIsOpen(false)}
                    className="block text-secondary-foreground dark:text-secondary-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                  >
                    Sell Gold
                  </Link>
                  <Link
                    href="/release-gold"
                    onClick={() => setIsOpen(false)}
                    className="block text-secondary-foreground dark:text-secondary-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                  >
                    Release Pledged Gold
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/branches"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Branches
            </Link>
            
            <Link
              href="/legacy"
              onClick={() => setIsOpen(false)}
              className="block text-foreground dark:text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              Our Legacy
            </Link>
            
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-foreground dark:text-foreground"
            >
              <span>{isDark ? "🌙" : "☀️"}</span>
              <span>Toggle {isDark ? "Light" : "Dark"} Mode</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}


