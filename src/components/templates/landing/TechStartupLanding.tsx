import { Zap, ArrowRight, Check, Globe, Lock, BarChart3, Cpu, Users, Mail, ChevronDown, Star } from "lucide-react";

export default function TechStartupLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Fitur</a>
            <a href="#pricing" className="hover:text-white transition-colors">Harga</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Masuk</a>
            <a href="#pricing" className="bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors">
              Mulai Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            v3.0 — Now with AI Automation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automate Your<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Workflow Today</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            FlowSync menghubungkan semua tools Anda dalam satu platform.
            Otomasi workflow, tingkatkan produktivitas 10x lipat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-cyan-500 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-cyan-600 transition-colors inline-flex items-center justify-center gap-2">
              Mulai Gratis <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors">
              Lihat Demo
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Tidak perlu kartu kredit. Free selamanya untuk plan basic.</p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">Dipercaya oleh 2,000+ tim di seluruh dunia</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {["Google", "Microsoft", "Spotify", "Slack", "Notion"].map((name) => (
              <span key={name} className="text-xl font-bold text-gray-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Unggulan</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Semua yang Anda butuhkan untuk mengotomasi workflow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "100+ Integrations", desc: "Hubungkan dengan tools favorit Anda: Slack, Jira, GitHub, dan lainnya." },
              { icon: Cpu, title: "AI Automation", desc: "Gunakan AI untuk mengotomasi tugas repetitif dan meningkatkan efisiensi." },
              { icon: Lock, title: "Enterprise Security", desc: "Enkripsi end-to-end, SSO, dan compliance SOC 2 Type II." },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Monitor performa workflow dengan dashboard real-time yang detail." },
              { icon: Users, title: "Team Collaboration", desc: "Kolaborasi tim dengan role-based access dan komentar in-context." },
              { icon: Zap, title: "Instant Setup", desc: "Mulai dalam 5 menit tanpa setup rumit. Zero config, maximum power." },
            ].map((f) => (
              <div key={f.title} className="border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <f.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Harga Sederhana</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Pilih plan yang sesuai untuk tim Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free", price: "Rp 0", period: "/bulan", desc: "Cocok untuk personal", features: ["5 Workflow", "100 Runs/bulan", "1 Integrasi", "Email Support"], cta: "Mulai Gratis", popular: false },
              { name: "Pro", price: "Rp 299,000", period: "/bulan", desc: "Untuk tim kecil", features: ["Unlimited Workflows", "10,000 Runs/bulan", "50+ Integrasi", "Priority Support", "Analytics"], cta: "Mulai Trial", popular: true },
              { name: "Enterprise", price: "Custom", period: "", desc: "Untuk organisasi besar", features: ["Everything in Pro", "Unlimited Runs", "SSO & SAML", "Dedicated Manager", "SLA 99.9%"], cta: "Hubungi Sales", popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "border-2 border-cyan-500 bg-slate-900/80 relative" : "border border-white/10"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">Paling Populer</span>}
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-gray-400 text-sm">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${p.popular ? "bg-cyan-500 text-white hover:bg-cyan-600" : "border border-white/20 text-white hover:bg-white/5"}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Mereka</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Andi Pratama", role: "CTO, TechFlow", content: "FlowSync mengubah cara tim kami bekerja. Produktivitas meningkat 3x lipat dalam sebulan." },
              { name: "Sari Dewi", role: "PM, StartupHub", content: "Integrasi yang mulus dengan tools yang sudah kami pakai. Setup hanya butuh 10 menit." },
              { name: "Rizky Mahendra", role: "Founder, DevStack", content: "AI automation-nya luar biasa. Tugas yang tadinya 2 jam sekarang selesai dalam 5 menit." },
            ].map((t) => (
              <div key={t.name} className="border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold text-cyan-400">{t.name[0]}</div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Apakah ada free trial?", a: "Ya! Plan Pro tersedia free trial 14 hari tanpa kartu kredit." },
              { q: "Bisa integrasi dengan tools apa saja?", a: "Kami mendukung 100+ integrasi termasuk Slack, GitHub, Jira, Google Workspace, dan banyak lagi." },
              { q: "Bagaimana dengan keamanan data?", a: "Kami menggunakan enkripsi end-to-end dan comply dengan SOC 2 Type II, GDPR, dan ISO 27001." },
              { q: "Bisa upgrade atau downgrade plan kapan saja?", a: "Tentu bisa. Perubahan plan akan diberlakukan di billing cycle berikutnya." },
            ].map((faq) => (
              <div key={faq.q} className="border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-semibold text-sm">{faq.q}</h3>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl py-16 px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Otomasi Workflow?</h2>
          <p className="text-cyan-100 mb-8 max-w-xl mx-auto">Bergabung dengan 2,000+ tim yang sudah meningkatkan produktivitas mereka.</p>
          <a href="#pricing" className="bg-white text-cyan-600 px-8 py-3.5 rounded-lg font-medium hover:bg-cyan-50 transition-colors inline-flex items-center gap-2">
            Mulai Gratis Sekarang <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-cyan-500 flex items-center justify-center"><Zap className="h-4 w-4 text-white" /></div>
              <span className="font-bold">FlowSync</span>
            </div>
            <p className="text-sm text-gray-400">Workflow automation untuk tim modern.</p>
          </div>
          <div><h4 className="font-semibold text-sm mb-3">Product</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white transition-colors">Fitur</a></li><li><a href="#" className="hover:text-white transition-colors">Harga</a></li><li><a href="#" className="hover:text-white transition-colors">Integrasi</a></li></ul></div>
          <div><h4 className="font-semibold text-sm mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white transition-colors">Tentang</a></li><li><a href="#" className="hover:text-white transition-colors">Blog</a></li><li><a href="#" className="hover:text-white transition-colors">Karir</a></li></ul></div>
          <div><h4 className="font-semibold text-sm mb-3">Support</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white transition-colors">Dokumentasi</a></li><li><a href="#" className="hover:text-white transition-colors">Help Center</a></li><li><a href="#" className="hover:text-white transition-colors">Status</a></li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 text-center text-sm text-gray-500">&copy; 2026 FlowSync. All rights reserved.</div>
      </footer>
    </div>
  );
}
