import { Kanban, ArrowRight, Check, Globe, Zap, Users, Clock, BarChart3, MessageSquare, FileText } from "lucide-react";

export default function ProjectManagerLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center"><Kanban className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">TaskFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#usecases" className="hover:text-violet-600 transition-colors">Use Cases</a>
            <a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-sm text-gray-500 hover:text-violet-600 transition-colors">Sign In</a>
            <a href="#pricing" className="bg-violet-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">Try Free</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" /> New: AI Task Suggestions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Manage projects<br /><span className="text-violet-600">without the chaos.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">TaskFlow membantu tim Anda tetap terorganisir dengan kanban boards, timeline, dan otomasi cerdas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-violet-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-violet-700 transition-colors inline-flex items-center justify-center gap-2">Start Free <ArrowRight className="h-4 w-4" /></a>
            <a href="#features" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-violet-300 transition-colors">Watch Demo</a>
          </div>
          <p className="text-xs text-gray-400 mt-4">Free for teams up to 5. No credit card required.</p>
        </div>
      </section>

      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 mb-8">Trusted by 3,000+ teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {["Shopify", "GitLab", "Notion", "Figma", "Vercel"].map((name) => <span key={name} className="text-xl font-bold text-gray-400">{name}</span>)}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything your team needs.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Fitur lengkap untuk mengelola proyek dari awal hingga selesai.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Kanban, title: "Kanban Boards", desc: "Visual workflow management dengan drag & drop yang intuitif." },
              { icon: Clock, title: "Timeline View", desc: "Gantt chart interaktif untuk perencanaan proyek jangka panjang." },
              { icon: MessageSquare, title: "Team Chat", desc: "Komunikasi real-time dalam konteks tugas dan proyek." },
              { icon: BarChart3, title: "Progress Reports", desc: "Dashboard otomatis untuk tracking progress dan velocity tim." },
              { icon: FileText, title: "Document Hub", desc: "File sharing dan document management terintegrasi." },
              { icon: Zap, title: "Automations", desc: "Otomasi repetitive tasks dengan rules engine yang powerful." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-6 hover:bg-violet-50 transition-colors">
                <f.icon className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="usecases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for every team.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Engineering Teams", desc: "Sprint planning, bug tracking, and release management with GitHub/GitLab integration.", icon: "🛠️" },
              { title: "Marketing Teams", desc: "Campaign planning, content calendars, and approval workflows.", icon: "📢" },
              { title: "Product Teams", desc: "Roadmap planning, feature prioritization, and stakeholder alignment.", icon: "🎯" },
            ].map((u) => (
              <div key={u.title} className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-4xl mb-4">{u.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple pricing.</h2>
            <p className="text-gray-500">Start free, scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Free", price: "Rp 0", period: "/bulan", features: ["Up to 5 members", "3 projects", "Kanban boards", "Basic reports"], popular: false },
              { name: "Pro", price: "Rp 199,000", period: "/bulan", features: ["Unlimited members", "Unlimited projects", "Timeline view", "Automations", "Priority support"], popular: true },
              { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "SSO & SAML", "Custom integrations", "Dedicated support", "SLA guarantee"], popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "border-2 border-violet-600 shadow-lg relative" : "border border-gray-200"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <div className="mb-6"><span className="text-3xl font-bold">{p.price}</span><span className="text-gray-400 text-sm">{p.period}</span></div>
                <ul className="space-y-3 mb-8">{p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="h-4 w-4 text-violet-500 shrink-0" />{f}</li>)}</ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${p.popular ? "bg-violet-600 text-white hover:bg-violet-700" : "border border-gray-200 text-gray-700 hover:border-violet-300"}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-violet-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start managing smarter today.</h2>
          <p className="text-violet-100 mb-8">Bergabung dengan 3,000+ tim yang sudah menggunakan TaskFlow.</p>
          <a href="#pricing" className="bg-white text-violet-600 px-8 py-3.5 rounded-lg font-medium hover:bg-violet-50 transition-colors inline-flex items-center gap-2">Start Free <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">&copy; 2026 TaskFlow. All rights reserved.</div>
      </footer>
    </div>
  );
}
