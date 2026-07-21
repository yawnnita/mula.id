import { Users, ArrowRight, Check, Globe, Lock, Zap, BarChart3, Phone, Mail, MessageSquare } from "lucide-react";

export default function CrmPlatformLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center"><Users className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">RelateCRM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#pipeline" className="hover:text-blue-600 transition-colors">Pipeline</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-500 hover:text-blue-600 transition-colors">Sign In</a>
            <a href="#pricing" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Start Free Trial</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" /> CRM #1 untuk UMKM Indonesia
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Close more deals,<br /><span className="text-blue-600">faster.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">CRM yang dirancang untuk bisnis Indonesia. Kelola leads, pipeline, dan customer relationships dalam satu platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">Free 14-Day Trial <ArrowRight className="h-4 w-4" /></a>
            <a href="#features" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-blue-300 transition-colors">Watch Demo</a>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5,000+", label: "Businesses" },
            { value: "Rp 2.5T", label: "Deals Closed" },
            { value: "35%", label: "More Conversions" },
            { value: "4.9/5", label: "User Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur lengkap untuk bisnis Anda.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Semua yang Anda butuhkan untuk mengelola customer relationships.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Sales Pipeline", desc: "Visual pipeline management dengan drag & drop untuk closing deals lebih cepat." },
              { icon: Phone, title: "Call Tracking", desc: "Rekam dan lacak semua panggilan dengan integrasi VoIP." },
              { icon: Mail, title: "Email Integration", desc: "Sinkronisasi email otomatis dengan Gmail dan Outlook." },
              { icon: MessageSquare, title: "WhatsApp Integration", desc: "Kirim dan terima WhatsApp langsung dari CRM." },
              { icon: Lock, title: "Contact Management", desc: "Database kontak lengkap dengan riwayat interaksi." },
              { icon: Globe, title: "Landing Page Builder", desc: "Buat landing page untuk menangkap leads secara otomatis." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <f.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-blue-600 font-semibold mb-4">Visual Pipeline</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">See every deal at a glance.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Drag and drop deals through your sales pipeline. Filter by stage, value, or assignee. Never lose track of an opportunity again.</p>
            <ul className="space-y-3 mb-8">
              {["Custom pipeline stages", "Deal value tracking", "Activity logging", "Automated follow-ups"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-blue-500 shrink-0" />{item}</li>
              ))}
            </ul>
            <a href="#pricing" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">Try It Free <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex gap-4 overflow-hidden">
              {["Lead", "Proposal", "Negotiation", "Closed Won"].map((stage, i) => (
                <div key={stage} className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-400 uppercase mb-3">{stage}</div>
                  <div className="space-y-2">
                    {[...Array(i === 3 ? 2 : i + 1)].map((_, j) => (
                      <div key={j} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-blue-100 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Harga yang sesuai bisnis Anda.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "Rp 99,000", period: "/user/bulan", features: ["500 contacts", "Basic pipeline", "Email integration", "Mobile app"], popular: false },
              { name: "Growth", price: "Rp 249,000", period: "/user/bulan", features: ["Unlimited contacts", "Custom pipelines", "WhatsApp integration", "Reports & analytics", "Automations"], popular: true },
              { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Growth", "API access", "Custom integrations", "Dedicated support", "SSO & SAML"], popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "border-2 border-blue-600 shadow-lg relative" : "border border-gray-200"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <div className="mb-6"><span className="text-3xl font-bold">{p.price}</span><span className="text-gray-400 text-sm">{p.period}</span></div>
                <ul className="space-y-3 mb-8">{p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-blue-500 shrink-0" />{f}</li>)}</ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${p.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-gray-200 text-gray-700 hover:border-blue-300"}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap tingkatkan penjualan?</h2>
          <p className="text-blue-100 mb-8">Mulai free trial 14 hari. Tanpa kartu kredit.</p>
          <a href="#pricing" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2">Start Free Trial <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">&copy; 2026 RelateCRM. All rights reserved.</div>
      </footer>
    </div>
  );
}
