export default function OurLegacy() {
  return (
    <div className="contents">
      {/* Heritage Section */}
      <section className="relative md:min-h-auto py-8 md:py-12 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-amber-600 dark:to-amber-800 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center text-white mb-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-amber-400/20 text-white/90 dark:text-amber-100 text-sm font-medium rounded-full mb-4 border border-white/20 dark:border-amber-400/40">🏆 Since 1901</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🏛️ Our Heritage</h2>
            <p className="text-xl text-white/70 font-light">A heritage of trust spanning over a century</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/20 dark:border-amber-400/30">
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
              Established in 1901, Caps Gold has built a proud legacy as one of India&apos;s most trusted gold and silver bullion merchants. Continuing this legacy, we founded Value Gold—a company that offers modern financial solutions while staying true to the values that have guided us for over a century. Our commitment to quality and customer satisfaction has made us a leader in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Values, Vision & Mission Section */}
      <section className="py-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Values */}
            <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We stand for trust, transparency, and fairness. Every customer who walks in is treated with dignity, and every gram of gold is evaluated with honesty, accuracy, and respect.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">Vision</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Empower</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Be the most trusted gold buying partner</span>
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Expand</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Build a nationwide network with standardized processes</span>
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Excel</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Set benchmarks in the gold buying industry</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50/50 to-white dark:from-amber-500/5 dark:to-black p-8 rounded-2xl border border-blue-100/50 dark:border-amber-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-amber-400">Mission</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Integrity</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Transparent pricing with no hidden conditions</span>
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Innovation</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Advanced tools for accuracy and speed</span>
                </div>
                <div>
                  <strong className="text-blue-600 dark:text-amber-400">Commitment</strong>
                  <span className="text-gray-600 dark:text-gray-300"> – Put customers first with simple, respectful service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-8 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Leadership</span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            👔 Management <span className="text-blue-600 dark:text-amber-500">Team</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Leadership driving innovation and excellence
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Mr. Chanda Abhishek",
                title: "Managing Director",
                image: "👤",
                bio: "Inspired by a rich family legacy, Mr. Abhishek Chanda, son of Chanda Sreenivas Rao, joined the business in 2011, bringing in Change Management and pioneering technological advancements to align with the evolving market. His leadership was instrumental in expanding the bullion business to Karnataka and Tamil Nadu, reinforcing Caps Gold's presence in South India.",
              },
              {
                name: "Mr. Chanda Akhil",
                title: "Director",
                image: "👤",
                bio: "Being motivated by the footsteps of his forefathers, Chanda Akhil, son of Chanda Venkatesh, joined Caps Gold in 2020. Under his leadership, Caps Gold is undergoing major transformations to become more user-friendly and accessible to a larger audience. He has been instrumental in expanding Bullion Delivery branches in Vizag, Mumbai, and Abids.",
              },
              {
                name: "Mrs. Sowmya Chanda",
                title: "Director",
                image: "👤",
                bio: "Sowmya Chanda, Director of Value Gold Private Limited and Vasavi Group, is a dynamic leader recognized for her vision, innovation, and transformative leadership. As the eldest daughter of Yerram Vijay Kumar, Chairman of the prestigious Vasavi Group, she upholds a strong legacy built on values of diligence, integrity, and compassion.",
              },
              {
                name: "Mrs. Ashika Chanda",
                title: "Director",
                image: "👤",
                bio: "Ashika Chanda, Director of Value Gold Private Limited, leads the company's digital marketing and brand-building initiatives. She plays a key role in shaping Value Gold's online presence, driving innovative strategies that connect with customers, build trust, and position the brand as a leader in the gold-buying sector.",
              },
            ].map((person, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-blue-200 dark:border-amber-500/30">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-6xl mx-auto md:mx-0">{person.image}</div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {person.name}
                    </h4>
                    <p className="text-blue-600 dark:text-amber-400 font-semibold mb-4">
                      {person.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-light">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Quality Assured</span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            📜 Certifications & <span className="text-blue-600 dark:text-amber-500">Credentials</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Recognized for quality and excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📜", name: "EGAC Accredited", subtitle: "CAB#118005" },
              { icon: "🌐", name: "IAF Member", subtitle: "Multilateral Recognition" },
              { icon: "✓", name: "ISO 9001:2015", subtitle: "Certified Company" },
              { icon: "⭐", name: "MMS Certified", subtitle: "Quality Assured" },
            ].map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50/50 dark:bg-amber-500/5 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors"
              >
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h3 className="font-semibold text-blue-600 dark:text-amber-400 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-8 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center mb-4">
            <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-amber-500/10 text-blue-600 dark:text-amber-400 text-sm font-medium rounded-full">Recognition</span>
          </span>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            🏆 Awards & <span className="text-blue-600 dark:text-amber-500">Recognition</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 font-light">
            Honoring our commitment to excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2025", name: "Big Impact Awards" },
              { year: "2025", name: "Successpreneur Awards" },
              { year: "2025", name: "Radio City Icon Awards" },
              { year: "2023", name: "Times Business Awards" },
            ].map((award, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50/50 dark:bg-amber-500/5 rounded-xl border border-blue-100/50 dark:border-amber-500/20 hover:border-blue-300 dark:hover:border-amber-500/40 transition-colors"
              >
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="font-semibold text-blue-600 dark:text-amber-400 mb-1">{award.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-light">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


