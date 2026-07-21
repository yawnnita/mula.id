import { Smile, Phone, MapPin, Clock, ArrowRight, Shield, Star, CheckCircle2, Calendar, Award, Heart } from "lucide-react";

export default function DentalCareLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sky-600 flex items-center justify-center"><Smile className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">BrightSmile Dental</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#doctors" className="hover:text-sky-600 transition-colors">Doctors</a>
            <a href="#insurance" className="hover:text-sky-600 transition-colors">Insurance</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" /> Book Appointment
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Smile className="h-4 w-4" /> Your Smile, Our Priority
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Senyum sehat<br /><span className="text-sky-600">mulai dari sini.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">Klinik gigi modern dengan teknologi terkini dan dokter berpengalaman untuk senyum terbaik Anda.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-sky-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-sky-700 transition-colors inline-flex items-center justify-center gap-2">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+628123456789" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-sky-300 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> +62 812 3456 789
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Smile className="h-32 w-32 text-sky-200" />
          </div>
        </div>
      </section>

      <section className="py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm">
          {[
            { icon: Award, label: "15+ Years Experience" },
            { icon: Heart, label: "10,000+ Happy Patients" },
            { icon: Shield, label: "International Standards" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-2"><b.icon className="h-4 w-4 text-sky-600" /><span className="text-gray-500">{b.label}</span></div>
          ))}
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-sky-600 font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan gigi <span className="text-sky-600">lengkap.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "General Dentistry", desc: "Pemeriksaan rutin, pembersihan karang gigi, dan penambalan.", icon: "🦷" },
              { title: "Teeth Whitening", desc: "Pemutihan gigi profesional hingga 8 tingkat lebih putih.", icon: "✨" },
              { title: "Orthodontics", desc: "Behel gigi dan Invisalign untuk gigi rapi sempurna.", icon: "🔧" },
              { title: "Dental Implants", desc: "Gigi palsu permanen dengan titanium implant berkualitas tinggi.", icon: "🔩" },
              { title: "Root Canal", desc: "Perawatan saluran akar dengan teknologi modern tanpa sakit.", icon: "💉" },
              { title: "Cosmetic Dentistry", desc: "Veneer, bonding, dan smile makeover untuk senyum sempurna.", icon: "😊" },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 hover:bg-sky-50 transition-colors cursor-pointer">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-sky-600 font-medium mb-4">Our Dentists</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tim dokter <span className="text-sky-600">ahli.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "drg. Amanda Putri, Sp.Pros", spec: "Prosthodontics", exp: "12 Tahun" },
              { name: "drg. Rizky Hartono, Sp.Ort", spec: "Orthodontics", exp: "10 Tahun" },
              { name: "drg. Maya Sari, Sp.KG", spec: "Conservative Dentistry", exp: "8 Tahun" },
            ].map((d) => (
              <div key={d.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-24 h-24 rounded-full bg-sky-100 mx-auto mb-4 flex items-center justify-center"><Smile className="h-10 w-10 text-sky-300" /></div>
                <h3 className="font-bold text-gray-900 mb-1">{d.name}</h3>
                <p className="text-sm text-sky-600 mb-1">{d.spec}</p>
                <p className="text-xs text-gray-400">Pengalaman: {d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insurance" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-sky-600 font-medium mb-4">Insurance Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Asuransi yang <span className="text-sky-600">diterima.</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Kami bekerja sama dengan berbagai asuransi kesehatan untuk kemudahan Anda.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Admedika", "Allianz", "Mandiri Inhealth", "Prudential", "BPJS Kesehatan", "Astra Life", "Cigna", "Manulife"].map((name) => (
              <div key={name} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100"><span className="text-sm font-semibold text-gray-700">{name}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-600">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="text-white">
            <p className="text-sm text-sky-200 mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Buat janji sekarang.</h2>
            <p className="text-sky-100 mb-8">Tim kami akan menghubungi Anda untuk konfirmasi jadwal.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-200" /><span>+62 812 3456 789</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky-200" /><span>Jl. Gatot Subroto No. 50, Jakarta</span></div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-sky-200" /><span>Senin-Sabtu: 09:00 - 20:00</span></div>
            </div>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-xl space-y-4">
            <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all" />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="No. Telepon" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all" />
            </div>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all">
              <option>Pilih Layanan</option>
              <option>General Check-up</option>
              <option>Teeth Whitening</option>
              <option>Orthodontics</option>
              <option>Dental Implant</option>
              <option>Root Canal</option>
              <option>Cosmetic</option>
            </select>
            <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all" />
            <button type="button" className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors">Book Appointment</button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4"><Smile className="h-4 w-4 text-sky-500" /><span className="font-bold text-white">BrightSmile Dental</span></div>
          &copy; 2026 BrightSmile Dental. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
