import { Code2, ArrowRight, Phone, Mail, Globe, Layers, Smartphone, Database, Shield, Zap, Star } from "lucide-react";

export default function DigitalAgencyLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center"><Code2 className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold">PixelForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors">Start a Project</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" /> Full-Service Digital Agency
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We craft digital<br /><span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">experiences that matter.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">Agency digital full-service yang membangun produk, brand, dan pengalaman digital berdampak.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-indigo-600 transition-colors inline-flex items-center gap-2">Lihat Proyek <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors">Hubungi Kami</a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-indigo-400 mb-4">Selected Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Proyek terbaik <span className="text-indigo-400">kami.</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "NovaPay", desc: "Fintech mobile app with real-time payments", tech: "React Native, Node.js", color: "from-indigo-500/20 to-violet-500/20" },
              { title: "GreenLeaf", desc: "E-commerce platform for organic products", tech: "Next.js, Stripe", color: "from-emerald-500/20 to-teal-500/20" },
              { title: "EduSpark", desc: "EdTech platform with interactive learning", tech: "Vue.js, Firebase", color: "from-amber-500/20 to-orange-500/20" },
              { title: "HealthHub", desc: "Healthcare appointment & records system", tech: "React, PostgreSQL", color: "from-rose-500/20 to-pink-500/20" },
            ].map((p) => (
              <div key={p.title} className={`bg-gradient-to-br ${p.color} border border-white/5 rounded-xl p-8 hover:border-indigo-500/30 transition-colors group cursor-pointer`}>
                <span className="text-xs text-gray-500 mb-3 block">{p.tech}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-indigo-400 mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Apa yang kami <span className="text-indigo-400">tawarkan.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Web Development", desc: "Website dan web app modern dengan performa tinggi." },
              { icon: Smartphone, title: "Mobile Apps", desc: "Aplikasi mobile iOS dan Android dengan UX terbaik." },
              { icon: Layers, title: "UI/UX Design", desc: "Desain antarmuka yang indah dan intuitif." },
              { icon: Database, title: "Backend & API", desc: "Sistem backend scalable dan API yang robust." },
              { icon: Shield, title: "Cloud & DevOps", desc: "Infrastruktur cloud dan pipeline CI/CD." },
              { icon: Code2, title: "Brand Identity", desc: "Identitas visual dan brand guidelines." },
            ].map((s) => (
              <div key={s.title} className="border border-white/5 rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
                <s.icon className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-indigo-400 mb-4 text-center">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Cara kerja <span className="text-indigo-400">kami.</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Memahami kebutuhan dan visi proyek Anda." },
              { step: "02", title: "Design", desc: "Wireframe, mockup, dan prototyping interaktif." },
              { step: "03", title: "Develop", desc: "Agile development dengan sprint mingguan." },
              { step: "04", title: "Deploy", desc: "Launch, monitoring, dan continuous improvement." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="text-5xl font-bold text-indigo-500/20 mb-4">{p.step}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-indigo-400 mb-4 text-center">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Kata klien <span className="text-indigo-400">kami.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Andi Pratama", company: "NovaPay", content: "PixelForge membangun fintech app kami dari nol. Hasilnya luar biasa, exactly what we envisioned." },
              { name: "Sari Dewi", company: "GreenLeaf", content: "Tim yang sangat profesional. E-commerce kami naik 400% dalam 6 bulan setelah launch." },
              { name: "Rizky Mahendra", company: "EduSpark", content: "Proses agile mereka sangat transparan. Kami selalu tahu progress proyek setiap minggu." },
            ].map((t) => (
              <div key={t.name} className="border border-white/5 rounded-xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-indigo-400 text-indigo-400" />)}</div>
                <p className="text-sm text-gray-300 mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">{t.name[0]}</div>
                  <div><div className="font-medium text-sm">{t.name}</div><div className="text-xs text-gray-500">{t.company}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-indigo-400 mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap memulai <span className="text-indigo-400">proyek?</span></h2>
          <p className="text-gray-400 mb-10">Ceritakan ide Anda, kami akan mewujudkannya.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10 text-sm text-gray-400">
            <div className="flex items-center gap-2 justify-center"><Phone className="h-4 w-4" />+62 812 3456 789</div>
            <div className="flex items-center gap-2 justify-center"><Mail className="h-4 w-4" />hello@pixelforge.co.id</div>
          </div>
          <form className="space-y-4 max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 outline-none transition-all" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 outline-none transition-all" />
            </div>
            <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 focus:border-indigo-500 outline-none transition-all">
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>Full Package</option>
            </select>
            <textarea rows={4} placeholder="Ceritakan proyek Anda..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-indigo-500 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-indigo-500 text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors">Kirim Proposal</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">&copy; 2026 PixelForge. All rights reserved.</div>
      </footer>
    </div>
  );
}
