import { Sparkles, ArrowRight, Phone, Mail, MapPin, Palette, Code2, Megaphone, Brush, Camera, Lightbulb } from "lucide-react";

export default function CreativeStudioLanding() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <nav className="fixed top-0 w-full bg-stone-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"><Sparkles className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold">Studio Karya</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Start Project</a>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Palette className="h-4 w-4" /> Award-Winning Studio
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9]">
            We make<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">beautiful things</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Creative studio yang menghadirkan desain inovatif untuk brand-brand berani.
          </p>
          <a href="#work" className="inline-flex items-center gap-2 bg-white text-stone-950 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Lihat Karya <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-amber-400 tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Latest <span className="text-amber-400">Projects</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Lumina Brand Identity", cat: "Branding", h: "h-72" },
              { title: "NexGen App Design", cat: "UI/UX", h: "h-80" },
              { title: "Velvet Magazine", cat: "Editorial", h: "h-64" },
              { title: "Pulse Campaign", cat: "Advertising", h: "h-72" },
            ].map((w) => (
              <div key={w.title} className={`bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-white/5 rounded-xl ${w.h} p-8 flex flex-col justify-end hover:border-amber-500/30 transition-colors group cursor-pointer`}>
                <span className="text-xs text-amber-400 mb-2">{w.cat}</span>
                <h3 className="text-2xl font-bold group-hover:text-amber-400 transition-colors">{w.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-amber-400 tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Apa yang kami <span className="text-amber-400">buat.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brush, title: "Brand Identity", desc: "Logo, warna, dan sistem identitas visual yang kohesif." },
              { icon: Palette, title: "UI/UX Design", desc: "Desain antarmuka yang intuitif dan pengalaman pengguna yang luar biasa." },
              { icon: Code2, title: "Web Development", desc: "Website modern dengan performa tinggi dan animasi halus." },
              { icon: Camera, title: "Photography", desc: "Fotografi produk dan korporat profesional." },
              { icon: Megaphone, title: "Digital Marketing", desc: "Strategi pemasaran digital yang terukur dan efektif." },
              { icon: Lightbulb, title: "Creative Consulting", desc: "Konsultasi kreatif untuk strategi brand dan kampanye." },
            ].map((s) => (
              <div key={s.title} className="border border-white/5 rounded-xl p-6 hover:border-amber-500/30 transition-colors group">
                <s.icon className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-white/5 rounded-xl aspect-square max-h-96 flex items-center justify-center">
            <Sparkles className="h-32 w-32 text-amber-500/20" />
          </div>
          <div>
            <p className="text-sm text-amber-400 tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kami adalah <span className="text-amber-400"> Studio Karya</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6">Sebuah studio kreatif kecil yang percaya pada kekuatan desain untuk mengubah bisnis. Didirikan pada 2018, kami telah mengerjakan 200+ proyek untuk klien lokal dan internasional.</p>
            <p className="text-gray-400 leading-relaxed">Tim kami terdiri dari desainer, developer, dan strategi yang bersemangat menciptakan karya yang berdampak.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-amber-400 tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mari berkreasi <span className="text-amber-400">bersama.</span></h2>
          <p className="text-gray-400 mb-10">Ceritakan proyek impian Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-3 text-gray-400 justify-center"><Phone className="h-4 w-4" />+62 812 3456 789</div>
            <div className="flex items-center gap-3 text-gray-400 justify-center"><Mail className="h-4 w-4" />hello@studiokarya.co.id</div>
            <div className="flex items-center gap-3 text-gray-400 justify-center"><MapPin className="h-4 w-4" />Bandung, Indonesia</div>
          </div>
          <form className="space-y-4 max-w-xl mx-auto">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-amber-500/50 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-amber-500/50 outline-none transition-all" />
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-amber-500/50 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">&copy; 2026 Studio Karya. All rights reserved.</div>
      </footer>
    </div>
  );
}
