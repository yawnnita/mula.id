import { Building2, Users, Target, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function StarterBusinessLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Nusantara Corp</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Layanan</a>
            <a href="#team" className="hover:text-blue-600 transition-colors">Tim</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Trusted by 500+ Companies
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solusi Digital<br />
            <span className="text-blue-600">Untuk Bisnis Anda</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Kami membantu perusahaan membangun kehadiran digital yang profesional dan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
              Mulai Sekarang <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Klien Puas" },
            { value: "1,200+", label: "Proyek Selesai" },
            { value: "99%", label: "Tingkat Kepuasan" },
            { value: "10+", label: "Tahun Pengalaman" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Nusantara Corp adalah perusahaan teknologi yang bergerak di bidang solusi digital.
              Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan bisnis
              bertransformasi ke dunia digital.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Misi kami adalah memberikan layanan terbaik dengan harga terjangkau,
              sehingga bisnis dari segala skala dapat bersaing di era digital.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 aspect-square max-h-96 flex items-center justify-center">
            <Building2 className="h-32 w-32 text-blue-200" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Solusi lengkap untuk kebutuhan digital bisnis Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Company Profile", desc: "Website profil perusahaan yang profesional dan terpercaya." },
              { icon: Target, title: "Digital Marketing", desc: "Strategi pemasaran digital yang efektif untuk pertumbuhan bisnis." },
              { icon: Users, title: "Konsultasi IT", desc: "Konsultasi dan perencanaan transformasi digital menyeluruh." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                  <s.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Profesional berpengalaman yang siap membantu bisnis Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "CEO & Founder" },
              { name: "Dewi Lestari", role: "Head of Marketing" },
              { name: "Rizky Pratama", role: "Lead Developer" },
            ].map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{m.name}</h3>
                <p className="text-sm text-blue-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
            <p className="text-gray-500 mb-8">Siap memulai proyek? Hubungi kami sekarang.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center"><Phone className="h-5 w-5 text-blue-600" /></div>
                <div><div className="text-sm text-gray-400">Telepon</div><div className="font-medium text-gray-900">+62 812 3456 789</div></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center"><Mail className="h-5 w-5 text-blue-600" /></div>
                <div><div className="text-sm text-gray-400">Email</div><div className="font-medium text-gray-900">info@nusantaracorp.co.id</div></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-blue-600" /></div>
                <div><div className="text-sm text-gray-400">Alamat</div><div className="font-medium text-gray-900">Jakarta Selatan, Indonesia</div></div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
            <textarea rows={4} placeholder="Pesan Anda" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center"><Building2 className="h-4 w-4 text-white" /></div>
            <span className="font-bold text-white">Nusantara Corp</span>
          </div>
          <p>&copy; 2026 Nusantara Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
