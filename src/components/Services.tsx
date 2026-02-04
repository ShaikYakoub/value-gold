export default function Services() {
  const services = [
    {
      emoji: "💰",
      title: "Sell Gold",
      description:
        "Get instant cash for your gold jewelry, coins, or bars at the best market rates with complete transparency.",
      cta: "Sell Now",
    },
    {
      emoji: "🔓",
      title: "Release Pledged Gold",
      description:
        "Close your gold loans from any bank or financial institution. We pay off your loan and give you the balance instantly.",
      cta: "Calculate Release Value",
    },
    {
      emoji: "🚗",
      title: "Vehicle Dispatcher",
      description:
        "Safe and secure doorstep pickup service. Our trained professionals will collect your gold from your location.",
      cta: "Request Pickup",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600 dark:text-amber-400">
          Our Services
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 font-light mb-12">
          Comprehensive gold solutions tailored to your needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-blue-200 dark:border-amber-500/30 hover:border-blue-400 dark:hover:border-amber-500"
            >
              <div className="text-5xl mb-4">{service.emoji}</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-amber-400">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-block text-blue-600 dark:text-amber-400 font-semibold hover:underline"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


