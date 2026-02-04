import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
// import GoldRateCard from "@/components/GoldRateCard";
// import GoldCalculator from "@/components/GoldCalculator";
// import PledgedGoldCalculator from "@/components/PledgedGoldCalculator";
import ServicesOverview from "@/components/ServicesOverview";
import Footer2 from "@/components/Footer2";
import ComparisonTable2 from "@/components/ComparisonTable2";
import FAQs2 from "@/components/FAQs2";
import LegacyOverview from "@/components/LegacyOverview";
import ContactSection2 from "@/components/ContactSection2";
import FloatingActions2 from "@/components/FloatingActions2";
import PremiumAutoScroller from "@/components/PremiumAutoScroller";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 rounded-full text-sm font-medium border border-blue-200/50 dark:border-amber-500/30">
                ⭐ <span className="font-bold">120+</span> Years of Trust & Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-foreground tracking-tight">
              Best Gold Buyers in India
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Live gold prices, instant valuation, complete transparency.
              Experience the legacy of CapsGold with XRF testing and immediate
              bank transfers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/sell-gold#form"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Sell Gold Now
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-background dark:bg-background hover:bg-blue-50 dark:hover:bg-amber-500/10 text-blue-600 dark:text-amber-400 font-bold rounded-lg shadow-md border-2 border-blue-400 dark:border-amber-500 transition-all text-lg"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Hero Image Slider */}
        <HeroSlider />

        {/* Stats Band */}
        <section className="no-top-radius no-bottom-radius bg-slate-50 dark:bg-black py-10 border-y border-blue-100/50 dark:border-amber-500/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  120+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Years Heritage
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  50K+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  ₹500Cr+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Gold Purchased
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-amber-400 mb-2">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light">
                  Transparency
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Partner Scroller */}
        <PremiumAutoScroller />

        {/* Live Gold Rate - Hidden for now */}
        {/* <div className="max-w-6xl mx-auto px-6">
          <GoldRateCard />
        </div> */}

        {/* Sell Gold Calculator - Hidden for now */}
        {/* <section id="calculator">
          <div id="sell-gold-calculator" className="max-w-6xl mx-auto px-6">
            <GoldCalculator />
          </div>
        </section> */}

        {/* Pledged Gold Calculator - Hidden for now */}
        {/* <section id="pledged-calculator" className="bg-gray-50 dark:bg-black py-16">
          <div id="pledged-gold-calculator" className="max-w-6xl mx-auto px-6">
            <PledgedGoldCalculator />
          </div>
        </section> */}

        <ServicesOverview />
        
        {/* Branches Overview */}
        <section id="branches" className="py-12 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full mb-4">📍 Our Locations</span>
              <h2 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground">
                Visit Us at Our <span className="text-blue-600 dark:text-amber-500">Branches</span>
              </h2>
              <p className="text-xl text-blue-600 dark:text-amber-400 mb-2">
                <span className="font-semibold">19+</span> branches including mobile branches across Andhra Pradesh and Telangana
              </p>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Experience our trusted service at any of our conveniently located branches. Each location is equipped with state-of-the-art XRF testing machines and staffed by experienced professionals ready to serve you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">Fixed Branches</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">Permanent locations in Hyderabad, Vijayawada, Visakhapatnam, and more major cities</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">🚐</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">Mobile Branches</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">Our mobile units bring our services to your neighborhood for your convenience</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-6 rounded-xl border border-blue-100/50 dark:border-amber-500/20 text-center hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-amber-400">Extended Hours</h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">Open 6 days a week with convenient timing from 10 AM to 7 PM</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/branches"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-gray-900 font-bold rounded-lg shadow-lg transition-all"
              >
                Find a Branch Near You →
              </a>
            </div>
          </div>
        </section>

        <ComparisonTable2 />
        <FAQs2 />
        <LegacyOverview />
        <ContactSection2 />
      </main>

      <FloatingActions2 />
      <Footer2 />
    </>
  );
}


