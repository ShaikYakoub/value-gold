export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border border-blue-200 dark:border-amber-500/30 rounded-xl text-center hover:border-blue-400 dark:hover:border-amber-500 transition-colors">
          <h3 className="font-bold mb-2 text-blue-600 dark:text-amber-400">📍 Head Office</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Banjara Hills, Hyderabad – 500034
          </p>
        </div>

        <div className="p-6 border border-blue-200 dark:border-amber-500/30 rounded-xl text-center hover:border-blue-400 dark:hover:border-amber-500 transition-colors">
          <h3 className="font-bold mb-2 text-blue-600 dark:text-amber-400">📞 Contact</h3>
          <a href="tel:+919477894778" className="block text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
            +91 94778 94778
          </a>
          <a href="tel:+914023318899" className="block text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
            +91 040 2331 8899
          </a>
        </div>

        <div className="p-6 border border-blue-200 dark:border-amber-500/30 rounded-xl text-center hover:border-blue-400 dark:hover:border-amber-500 transition-colors">
          <h3 className="font-bold mb-2 text-blue-600 dark:text-amber-400">🌐 Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/company/value-gold/" target="_blank" className="text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/value_gold_/" target="_blank" className="text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/valuegold.info" target="_blank" className="text-foreground hover:text-blue-600 dark:hover:text-amber-400 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}


