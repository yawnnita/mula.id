import { Brush, ArrowRight, Phone, Mail, Palette, Eye, Type, Sparkles, Star, Quote } from "lucide-react";

export default function BrandStudioLanding() {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-rose-50/90 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-600 flex items-center justify-center"><Brush className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">Rosella Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#portfolio" className="hover:text-rose-600 transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-rose-600 transition-colors">Process</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-rose-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors">Start a Brand</a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" /> Branding & Identity Studio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your brand deserves<br /><span className="text-rose-600">a beautiful story.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">Kami membantu brand membangun identitas visual yang memorable dan berdampak.</p>
          <a href="#portfolio" className="bg-rose-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-rose-700 transition-colors inline-flex items-center gap-2">
            Lihat Portfolio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-rose-600 font-semibold mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Brand yang kami <span className="text-rose-600">bangun.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Blossom Bakery", cat: "Food & Beverage", desc: "Complete brand identity for artisan bakery" },
              { title: "Aura Wellness", cat: "Healthcare", desc: "Serene brand for wellness center" },
              { title: "Velo Bicycle", cat: "Retail", desc: "Dynamic brand for urban cycling shop" },
              { title: "Citra Batik", cat: "Fashion", desc: "Modern traditional Indonesian brand" },
              { title: "Nira Coconut", cat: "Organic Products", desc: "Natural brand for coconut products" },
              { title: "Bintang Academy", cat: "Education", desc: "Playful brand for children education" },
            ].map((p) => (
              <div key={p.title} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl aspect-[4/3] p-6 flex flex-col justify-end hover:shadow-md transition-shadow cursor-pointer group border border-rose-100">
                <span className="text-xs text-rose-500 mb-1">{p.cat}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-rose-600 font-semibold mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Layanan <span className="text-rose-600">branding.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Brand Identity", desc: "Logo, color palette, typography, dan brand guidelines lengkap." },
              { icon: Palette, title: "Visual Design", desc: "Desain visual untuk marketing materials, packaging, dan merchandise." },
              { icon: Type, title: "Brand Strategy", desc: "Brand positioning, naming, messaging, dan brand story." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center">
                <div className="h-14 w-14 rounded-2xl bg-rose-100 flex items-center justify-center mx-auto mb-5"><s.icon className="h-7 w-7 text-rose-600" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-rose-600 font-semibold mb-4 text-center">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">Proses <span className="text-rose-600">kami.</span></h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Brief", desc: "Diskusi mendalam tentang visi brand Anda." },
              { step: "2", title: "Research", desc: "Riset pasar, kompetitor, dan target audience." },
              { step: "3", title: "Concept", desc: "Pengembangan konsep dan direction kreatif." },
              { step: "4", title: "Design", desc: "Desain logo, palette, dan elemen visual." },
              { step: "5", title: "Deliver", desc: "Final deliverables dan brand guidelines." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="h-12 w-12 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-rose-600 font-semibold mb-4">Before & After</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transformasi <span className="text-rose-600">brand.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { brand: "Blossom Bakery", before: "Old, cluttered logo with too many colors", after: "Clean, elegant identity with warm tones" },
              { brand: "Velo Bicycle", before: "Generic sports brand look", after: "Dynamic, urban cycling lifestyle brand" },
            ].map((c) => (
              <div key={c.brand} className="bg-white rounded-xl border border-rose-100 overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-gray-100 p-6 text-center"><span className="text-xs text-gray-400 block mb-2">BEFORE</span><div className="h-24 bg-gray-200 rounded-lg" /></div>
                  <div className="bg-rose-50 p-6 text-center"><span className="text-xs text-rose-400 block mb-2">AFTER</span><div className="h-24 bg-rose-100 rounded-lg" /></div>
                </div>
                <div className="p-6"><h3 className="font-bold text-gray-900 mb-1">{c.brand}</h3><p className="text-sm text-gray-500">{c.after}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-rose-600 font-semibold mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kata <span className="text-rose-600">klien.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lina Sari", company: "Blossom Bakery", content: "Rosella Studio benar-benar memahami visi kami. Brand identity yang mereka buat sangat memukau." },
              { name: "Dedi Kurniawan", company: "Velo Bicycle", content: "Prosesnya menyenangkan dan hasilnya melebihi ekspektasi. Sangat recommended!" },
              { name: "Rina Wati", company: "Citra Batik", content: "Mereka berhasil menggabungkan tradisi dan modernitas dalam brand kami. Luar biasa!" },
            ].map((t) => (
              <div key={t.name} className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <Quote className="h-6 w-6 text-rose-200 mb-4" />
                <p className="text-sm text-gray-600 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-rose-200 flex items-center justify-center text-sm font-bold text-rose-700">{t.name[0]}</div>
                  <div><div className="font-medium text-sm text-gray-900">{t.name}</div><div className="text-xs text-gray-400">{t.company}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-rose-600 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-rose-200 mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mari bangun <span className="text-rose-200">brand Anda.</span></h2>
            <p className="text-rose-100 mb-8">Setiap brand punya cerita unik. Biarkan kami membantu menceritakannya.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-100"><Phone className="h-5 w-5" />+62 812 3456 789</div>
              <div className="flex items-center gap-3 text-rose-100"><Mail className="h-5 w-5" />hello@rosellastudio.co.id</div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Brand Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-rose-200 outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-rose-200 outline-none" />
            <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-rose-200 outline-none">
              <option>Brand Identity</option>
              <option>Visual Design</option>
              <option>Brand Strategy</option>
              <option>Full Rebrand</option>
            </select>
            <textarea rows={4} placeholder="Ceritakan brand Anda..." className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-rose-200 outline-none resize-none" />
            <button type="button" className="w-full bg-white text-rose-600 py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors">Mulai Proyek</button>
          </form>
        </div>
      </section>

      <footer className="bg-rose-700 text-rose-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">&copy; 2026 Rosella Studio. All rights reserved.</div>
      </footer>
    </div>
  );
}
