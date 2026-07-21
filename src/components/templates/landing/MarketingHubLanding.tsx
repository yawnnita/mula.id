import { Megaphone, ArrowRight, Phone, Mail, BarChart3, Target, Users, TrendingUp, CheckCircle2, Star, Globe } from "lucide-react";

export default function MarketingHubLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center"><Megaphone className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">BuzzMarketing</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#case-studies" className="hover:text-red-600 transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Free Consultation</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" /> #1 Marketing Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Kami buat brand Anda<br /><span className="text-red-600">tidak bisa diabaikan.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Marketing agency yang menghadirkan kampanye berdampak tinggi untuk brand Indonesia dan global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-red-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2">
              Konsultasi Gratis <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#case-studies" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-red-300 transition-colors">
              Lihat Hasil Kerja
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Kampanye" },
            { value: "3.2x", label: "Avg. ROAS" },
            { value: "50M+", label: "Impressions" },
            { value: "98%", label: "Client Retention" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-red-600">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-red-600 font-semibold mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Hasil nyata yang <span className="text-red-600">terbukti.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { brand: "TechFlow Indonesia", result: "+340% Lead Generation", desc: "Kampanye digital marketing yang mengubah TechFlow dari startup lokal menjadi pemain regional.", metrics: "6 bulan" },
              { brand: "FoodieBox", result: "+520% Online Sales", desc: "Strategi social media dan influencer marketing yang mendongkrak penjualan online FoodieBox.", metrics: "3 bulan" },
              { brand: "StyleHaus", result: "+280% Brand Awareness", desc: "Brand repositioning dan kampanye omnichannel untuk fashion brand premium Indonesia.", metrics: "12 bulan" },
            ].map((c) => (
              <div key={c.brand} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="text-3xl font-bold text-red-600 mb-3">{c.result}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{c.brand}</h3>
                <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
                <span className="text-xs text-gray-400">Duration: {c.metrics}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-red-600 font-semibold mb-4 text-center">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Layanan kami.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Globe, title: "Digital Marketing", desc: "SEO, SEM, Social Media Ads, dan Content Marketing yang terukur." },
              { icon: Target, title: "Brand Strategy", desc: "Brand positioning, messaging, dan identity yang kuat." },
              { icon: Users, title: "Influencer Marketing", desc: "Kolaborasi strategis dengan influencer yang tepat sasaran." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Dashboard real-time dan laporan kampanye yang transparan." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 border border-gray-100 flex gap-5">
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0"><s.icon className="h-6 w-6 text-red-600" /></div>
                <div><h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3><p className="text-sm text-gray-500">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-red-600 font-semibold mb-4 text-center">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Paket yang <span className="text-red-600">fleksibel.</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "Rp 3Jt", period: "/bulan", features: ["Social Media Management", "Basic SEO", "Monthly Report", "1 Platform"], popular: false },
              { name: "Growth", price: "Rp 8Jt", period: "/bulan", features: ["Everything in Starter", "Google Ads", "Content Creation", "3 Platforms", "Bi-weekly Calls"], popular: true },
              { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Growth", "Influencer Campaign", "Brand Strategy", "Unlimited Platforms", "Dedicated Manager"], popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "border-2 border-red-500 shadow-lg relative" : "border border-gray-200"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</span>}
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <div className="mb-6"><span className="text-3xl font-bold">{p.price}</span><span className="text-gray-400 text-sm">{p.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />{f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${p.popular ? "bg-red-600 text-white hover:bg-red-700" : "border border-gray-200 text-gray-700 hover:border-red-300"}`}>
                  Mulai Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Siap Meledakkan Marketing Anda?</h2>
          <p className="text-red-100 mb-8">Konsultasi gratis 30 menit dengan tim ahli kami.</p>
          <a href="#contact" className="bg-white text-red-600 px-8 py-3.5 rounded-lg font-medium hover:bg-red-50 transition-colors inline-flex items-center gap-2">
            Jadwalkan Konsultasi <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-red-600 font-semibold mb-4">Contact</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hubungi kami.</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><div className="h-10 w-10 bg-red-50 flex items-center justify-center rounded-lg"><Phone className="h-5 w-5 text-red-600" /></div><div><div className="text-xs text-gray-400">Phone</div><div className="font-medium">+62 812 3456 789</div></div></div>
              <div className="flex items-center gap-4"><div className="h-10 w-10 bg-red-50 flex items-center justify-center rounded-lg"><Mail className="h-5 w-5 text-red-600" /></div><div><div className="text-xs text-gray-400">Email</div><div className="font-medium">hello@buzzmarketing.co.id</div></div></div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all" />
            <input type="text" placeholder="Budget Range" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all" />
            <textarea rows={4} placeholder="Ceritakan goals marketing Anda..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">Kirim</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">&copy; 2026 BuzzMarketing. All rights reserved.</div>
      </footer>
    </div>
  );
}
