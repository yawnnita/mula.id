import { Building2, Phone, Mail, MapPin, ArrowRight, Globe, Users, Shield, TrendingUp, Award, FileText } from "lucide-react";

export default function EnterpriseCorpLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-900 flex items-center justify-center"><Building2 className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">Pinnacle Group</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
            <a href="#investors" className="hover:text-blue-900 transition-colors">Investors</a>
            <a href="#subsidiaries" className="hover:text-blue-900 transition-colors">Subsidiaries</a>
            <a href="#csr" className="hover:text-blue-900 transition-colors">CSR</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-blue-900 text-white px-5 py-2 text-sm font-medium hover:bg-blue-800 transition-colors">Investor Relations</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm text-blue-900 font-semibold tracking-wider uppercase mb-4">Pinnacle Group Indonesia</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building the future of <span className="text-blue-900">Indonesian industry.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10">
              Sejak 1995, Pinnacle Group telah menjadi pemimpin dalam transformasi industri di Indonesia.
              Dengan portofolio bisnis yang luas, kami terus berinovasi untuk masa depan yang lebih baik.
            </p>
            <div className="flex gap-4">
              <a href="#investors" className="bg-blue-900 text-white px-8 py-3.5 rounded font-medium hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
                Annual Report <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded font-medium hover:border-blue-900 hover:text-blue-900 transition-colors">
                Company Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { value: "Rp 45T", label: "Revenue" },
            { value: "12,000+", label: "Employees" },
            { value: "8", label: "Subsidiaries" },
            { value: "25+", label: "Years" },
            { value: "AA+", label: "Credit Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-900">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-blue-900 font-semibold tracking-wider uppercase mb-4">Company Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A conglomerate with purpose.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Pinnacle Group beroperasi di berbagai sektor termasuk energi, infrastruktur, teknologi, dan layanan keuangan. Dengan visi menjadi konglomerat terdepan di Asia Tenggara.</p>
            <p className="text-gray-500 leading-relaxed">Kami berkomitmen pada tata kelola perusahaan yang baik, keberlanjutan lingkungan, dan dampak sosial yang positif.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, title: "Revenue Growth", desc: "15% YoY" },
              { icon: Globe, title: "Global Presence", desc: "8 Countries" },
              { icon: Shield, title: "Fortune 500", desc: "Listed since 2010" },
              { icon: Award, title: "ESG Rating", desc: "AAA MSCI" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-5 rounded-lg">
                <item.icon className="h-6 w-6 text-blue-900 mb-2" />
                <div className="font-bold text-sm text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investors" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-blue-900 font-semibold tracking-wider uppercase mb-4 text-center">Investor Relations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Financial <span className="text-blue-900">Reports</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Annual Report 2025", date: "March 2026", type: "PDF" },
              { title: "Q4 2025 Financial Summary", date: "February 2026", type: "PDF" },
              { title: "Sustainability Report 2025", date: "March 2026", type: "PDF" },
            ].map((r) => (
              <div key={r.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <FileText className="h-8 w-8 text-blue-900 mb-4" />
                <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-400">{r.date} &middot; {r.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subsidiaries" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-blue-900 font-semibold tracking-wider uppercase mb-4 text-center">Our Subsidiaries</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Diverse portfolio, <span className="text-blue-900">unified vision.</span></h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Pinnacle Energy", "Pinnacle Infra", "Pinnacle Tech", "Pinnacle Finance"].map((name) => (
              <div key={name} className="border border-gray-200 rounded-lg p-6 text-center hover:border-blue-900 transition-colors cursor-pointer">
                <Building2 className="h-10 w-10 text-blue-200 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="csr" className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-blue-300 tracking-wider uppercase mb-4">Corporate Social Responsibility</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to a <span className="text-blue-200">sustainable future.</span></h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-10">Melalui program CSR kami, kami berkontribusi pada pendidikan, lingkungan, dan pemberdayaan masyarakat di seluruh Indonesia.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, title: "Education", desc: "Scholarship for 5,000+ students" },
              { icon: Globe, title: "Environment", desc: "1M trees planted since 2020" },
              { icon: Shield, title: "Community", desc: "100+ villages empowered" },
            ].map((c) => (
              <div key={c.title} className="bg-white/10 rounded-lg p-6">
                <c.icon className="h-8 w-8 text-blue-200 mb-3" />
                <h3 className="font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-blue-200">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-blue-900 font-semibold tracking-wider uppercase mb-4">Head Office</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4"><div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded"><Phone className="h-5 w-5 text-blue-900" /></div><div><div className="text-xs text-gray-400">Phone</div><div className="font-medium">+62 21 5555 0100</div></div></div>
              <div className="flex items-center gap-4"><div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded"><Mail className="h-5 w-5 text-blue-900" /></div><div><div className="text-xs text-gray-400">Email</div><div className="font-medium">ir@pinnaclegroup.co.id</div></div></div>
              <div className="flex items-center gap-4"><div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded"><MapPin className="h-5 w-5 text-blue-900" /></div><div><div className="text-xs text-gray-400">Address</div><div className="font-medium">Jl. Jendral Sudirman Kav. 52-53, Jakarta Selatan</div></div></div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded border border-gray-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded border border-gray-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
            <select className="w-full px-4 py-3 rounded border border-gray-200 text-gray-500 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
              <option>Investor Inquiry</option>
              <option>Media Inquiry</option>
              <option>Partnership</option>
              <option>General</option>
            </select>
            <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 rounded border border-gray-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-blue-900 text-white py-3 rounded font-medium hover:bg-blue-800 transition-colors">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4"><Building2 className="h-4 w-4" /><span className="font-bold text-white">Pinnacle Group</span></div>
          <p>&copy; 2026 Pinnacle Group Indonesia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
