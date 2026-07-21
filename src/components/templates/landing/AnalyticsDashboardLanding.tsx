import { BarChart3, ArrowRight, Check, Globe, Lock, Zap, Users, Mail, TrendingUp, PieChart } from "lucide-react";

export default function AnalyticsDashboardLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center"><BarChart3 className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold">DataPulse</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Sign In</a>
            <a href="#pricing" className="bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">Start Free</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" /> Real-time Analytics Platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            See your data<br /><span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">like never before.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">Platform analytics real-time yang membantu Anda membuat keputusan bisnis berdasarkan data.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-emerald-600 transition-colors inline-flex items-center justify-center gap-2">Start Free <ArrowRight className="h-4 w-4" /></a>
            <a href="#features" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors">See Features</a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Free tier available. No credit card required.</p>
        </div>
      </section>

      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10M+", label: "Data Points/Day" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "500ms", label: "Avg Query Time" },
            { value: "2,500+", label: "Active Teams" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-emerald-400 mb-4 text-center">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Powerful analytics, <span className="text-emerald-400">simple interface.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Real-time Dashboards", desc: "Visualisasi data real-time dengan refresh rate sub-second." },
              { icon: PieChart, title: "Custom Reports", desc: "Buat laporan kustom dengan drag-and-drop report builder." },
              { icon: Lock, title: "Data Security", desc: "Enkripsi AES-256 dan SOC 2 compliance." },
              { icon: Globe, title: "Multi-source", desc: "Hubungkan database, API, dan file CSV dalam satu dashboard." },
              { icon: Zap, title: "AI Insights", desc: "Anomali detection dan predictive analytics dengan AI." },
              { icon: Users, title: "Team Sharing", desc: "Share dashboard dan laporan dengan tim Anda." },
            ].map((f) => (
              <div key={f.title} className="border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors"><f.icon className="h-6 w-6 text-emerald-400" /></div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-emerald-400 mb-4 text-center">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Simple, transparent <span className="text-emerald-400">pricing.</span></h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "Rp 0", period: "/bulan", features: ["3 Dashboards", "100K data points/day", "7-day retention", "Email support"], popular: false },
              { name: "Pro", price: "Rp 499,000", period: "/bulan", features: ["Unlimited Dashboards", "10M data points/day", "90-day retention", "Priority support", "AI Insights"], popular: true },
              { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "Unlimited data", "1-year retention", "SSO & SAML", "Dedicated CSM", "Custom SLA"], popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "border-2 border-emerald-500 bg-slate-900/80 relative" : "border border-white/10"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <div className="mb-6"><span className="text-3xl font-bold">{p.price}</span><span className="text-gray-400 text-sm">{p.period}</span></div>
                <ul className="space-y-3 mb-8">{p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-gray-300"><Check className="h-4 w-4 text-emerald-400 shrink-0" />{f}</li>)}</ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${p.popular ? "bg-emerald-500 text-white hover:bg-emerald-600" : "border border-white/20 text-white hover:bg-white/5"}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-emerald-400 mb-4">API & Docs</p>
            <h2 className="text-3xl font-bold mb-6">Built for developers.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">REST API lengkap dengan dokumentasi interaktif. SDK untuk Python, Node.js, Go, dan Java. Webhook support untuk integrasi real-time.</p>
            <a href="#" className="text-emerald-400 text-sm font-medium hover:underline inline-flex items-center gap-1">Read the docs <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-white/10 font-mono text-sm">
            <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed"><span className="text-gray-500"># Quick start</span>{'\n'}<span className="text-emerald-400">curl</span> -X POST https://api.datapulse.id/v1/query {'\\'}{'\n'}  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; {'\\'}{'\n'}  -d &apos;{`{"query": "SELECT * FROM events"}`}&apos;</pre>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl py-16 px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to see your data clearly?</h2>
          <p className="text-emerald-100 mb-8">Mulai gratis, upgrade kapan saja.</p>
          <a href="#pricing" className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-medium hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">Start Free <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">&copy; 2026 DataPulse. All rights reserved.</div>
      </footer>
    </div>
  );
}
