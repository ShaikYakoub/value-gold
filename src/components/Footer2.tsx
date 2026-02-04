export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-black text-slate-700 dark:text-gray-300 pt-16 pb-8 border-t border-blue-100/50 dark:border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-amber-400 mb-4">
              VALUE GOLD
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-light">
              India&apos;s most trusted gold buyers with <span className="font-semibold text-blue-600 dark:text-amber-400">120+</span> years of heritage.
              Transparent pricing, instant payment, and XRF testing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#calculator" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Sell Gold
                </a>
              </li>
              <li>
                <a href="#pledged-calculator" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Release Pledged Gold
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Vehicle Dispatcher
                </a>
              </li>
              <li>
                <a href="#gold-rate" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Live Gold Rates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#legacy" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Branches
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-blue-600 dark:text-amber-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919477894778" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  +91 94778 94778
                </a>
              </li>
              <li>
                <a href="tel:+914040129999" className="hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
                  +91 40 4012 9999
                </a>
              </li>
              <li className="pt-2">
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Banjara Hills, Hyderabad
                  <br />
                  Telangana - 500073
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100/50 dark:border-amber-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Value Gold. All rights reserved.</p>
          <p className="text-gray-600 dark:text-gray-300">A CapsGold Pvt. Ltd. Company</p>
        </div>
      </div>
    </footer>
  );
}


