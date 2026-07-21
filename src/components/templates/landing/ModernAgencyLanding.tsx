import { Sparkles, Palette, Eye, Code2, ArrowRight, Mail, Globe, Link2, Quote } from "lucide-react";

export default function ModernAgencyLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Studio Kreatif</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Portofolio</a>
            <a href="#services" className="hover:text-white transition-colors">Layanan</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Mulai Proyek
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-purple-400" />
            Award-Winning Creative Agency
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            We Build <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Digital Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Agency kreatif yang menghadirkan desain inovatif dan strategi digital
            untuk merek-merek berani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
              Lihat Portofolio <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio / Work */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portofolio Kami</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Proyek-proyek terbaik yang telah kami kerjakan</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Brand Identity - TechFlow", category: "Branding", color: "from-purple-500/20 to-purple-500/5" },
              { title: "E-Commerce - StyleHub", category: "Web Design", color: "from-pink-500/20 to-pink-500/5" },
              { title: "Mobile App - Foodies", category: "UI/UX Design", color: "from-orange-500/20 to-orange-500/5" },
              { title: "Campaign - GreenLife", category: "Digital Marketing", color: "from-green-500/20 to-green-500/5" },
              { title: "Website - LuxeHotel", category: "Web Development", color: "from-blue-500/20 to-blue-500/5" },
              { title: "Rebrand - FashionX", category: "Branding", color: "from-red-500/20 to-red-500/5" },
            ].map((w) => (
              <div key={w.title} className={`bg-gradient-to-br ${w.color} border border-white/10 rounded-xl p-8 aspect-[4/3] flex flex-col justify-end hover:border-white/20 transition-colors group cursor-pointer`}>
                <span className="text-xs text-gray-500 mb-2">{w.category}</span>
                <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">{w.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Solusi kreatif lengkap untuk brand Anda</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: "Brand Identity", desc: "Logo, warna, dan identitas visual yang memorable." },
              { icon: Eye, title: "UI/UX Design", desc: "Desain antarmuka yang intuitif dan menarik." },
              { icon: Code2, title: "Web Development", desc: "Website modern dengan performa tinggi." },
              { icon: Sparkles, title: "Digital Marketing", desc: "Strategi pemasaran digital yang terukur." },
            ].map((s) => (
              <div key={s.title} className="border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                  <s.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Andi Pratama", company: "TechFlow", content: "Hasil kerja yang luar biasa! Mereka benar-benar memahami visi brand kami." },
              { name: "Sari Dewi", company: "StyleHub", content: "Desain yang diberikan sangat modern dan sesuai dengan target market kami." },
              { name: "Rizky Mahendra", company: "Foodies App", content: "Tim yang sangat profesional dan responsif. Proyek selesai tepat waktu." },
            ].map((t) => (
              <div key={t.name} className="border border-white/10 rounded-xl p-6">
                <Quote className="h-8 w-8 text-purple-500/40 mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mari Berkolaborasi</h2>
          <p className="text-gray-400 mb-10">Ceritakan proyek impian Anda, kami akan mewujudkannya.</p>
          <form className="space-y-4 max-w-xl mx-auto">
            <input type="text" placeholder="Nama" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" />
            <textarea rows={4} placeholder="Ceritakan proyek Anda..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Kirim Pesan
            </button>
          </form>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"><Globe className="h-5 w-5" /></a>
            <a href="#" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"><Link2 className="h-5 w-5" /></a>
            <a href="#" className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          &copy; 2026 Studio Kreatif. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
