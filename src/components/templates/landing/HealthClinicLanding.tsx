import { Heart, Phone, MapPin, Clock, ArrowRight, Stethoscope, Activity, Baby, Brain, Shield, Star, Mail, Calendar } from "lucide-react";

export default function HealthClinicLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MediCare Clinic</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">Layanan</a>
            <a href="#doctors" className="hover:text-teal-600 transition-colors">Dokter</a>
            <a href="#testimonials" className="hover:text-teal-600 transition-colors">Testimoni</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Kontak</a>
          </div>
          <a href="#appointment" className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Buat Janji
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Klinik Terpercaya Sejak 2005
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kesehatan Anda<br />
              <span className="text-teal-600">Prioritas Kami</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Layanan kesehatan berkualitas tinggi dengan dokter-dokter berpengalaman dan peralatan medis modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment" className="bg-teal-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2">
                Buat Janji <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+628123456789" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:border-teal-300 hover:text-teal-600 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> +62 812 3456 789
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Stethoscope className="h-32 w-32 text-teal-200" />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm">
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center"><Clock className="h-5 w-5 text-teal-600" /></div>
            <div className="text-left"><div className="font-semibold text-gray-900">Buka Setiap Hari</div><div className="text-gray-500">08:00 - 21:00 WIB</div></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center"><Phone className="h-5 w-5 text-teal-600" /></div>
            <div className="text-left"><div className="font-semibold text-gray-900">Darurat 24 Jam</div><div className="text-gray-500">+62 812 3456 789</div></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-teal-600" /></div>
            <div className="text-left"><div className="font-semibold text-gray-900">Lokasi</div><div className="text-gray-500">Jl. Kesehatan No. 45, Jakarta</div></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Medis</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Layanan kesehatan komprehensif untuk Anda dan keluarga</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Stethoscope, title: "Umum", desc: "Pemeriksaan kesehatan umum dan konsultasi dengan dokter berpengalaman." },
              { icon: Heart, title: "Kardiologi", desc: "Pemeriksaan jantung lengkap dengan ECG dan echocardiography." },
              { icon: Brain, title: "Neurologi", desc: "Diagnosa dan pengobatan gangguan syaraf dan otak." },
              { icon: Baby, title: "Anak", desc: "Pelayanan kesehatan anak dari bayi hingga remaja." },
              { icon: Activity, title: "Laboratorium", desc: "Pemeriksaan laboratorium lengkap dengan hasil akurat dan cepat." },
              { icon: Shield, title: "Vaksinasi", desc: "Program vaksinasi lengkap untuk anak dan dewasa." },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-8 hover:bg-teal-50 transition-colors group cursor-pointer">
                <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-200 transition-colors">
                  <s.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dokter Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Tim dokter profesional dan berpengalaman</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Budi Santoso, Sp.PD", spec: "Spesialis Penyakit Dalam", exp: "15 Tahun" },
              { name: "Dr. Sari Dewi, Sp.A", spec: "Spesialis Anak", exp: "12 Tahun" },
              { name: "Dr. Rizky Pratama, Sp.JP", spec: "Spesialis Jantung", exp: "18 Tahun" },
              { name: "Dr. Maya Putri, Sp.S", spec: "Spesialis Syaraf", exp: "10 Tahun" },
            ].map((d) => (
              <div key={d.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="h-10 w-10 text-teal-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{d.name}</h3>
                <p className="text-sm text-teal-600 mb-1">{d.spec}</p>
                <p className="text-xs text-gray-400">Pengalaman: {d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Pasien</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Andi Pratama", content: "Pelayanan sangat profesional. Dokternya ramah dan penjelasannya lengkap. Sangat recommended!" },
              { name: "Sari Dewi", content: "Anak saya ditangani dengan sangat baik. Klinik yang bersih dan nyaman. Terima kasih MediCare!" },
              { name: "Rizky Mahendra", content: "Pemeriksaan jantung saya berjalan lancar. Hasilnya akurat dan dokternya sangat kompeten." },
            ].map((t) => (
              <div key={t.name} className="bg-teal-50 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-teal-500 text-teal-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-200 flex items-center justify-center text-sm font-bold text-teal-700">{t.name[0]}</div>
                  <span className="font-medium text-sm text-gray-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Buat Janji Temu</h2>
            <p className="text-teal-100 mb-8">Isi form di samping untuk membuat janji dengan dokter kami. Tim kami akan menghubungi Anda untuk konfirmasi.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-teal-200" /><span className="text-teal-100">+62 812 3456 789</span></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-teal-200" /><span className="text-teal-100">info@medicare.co.id</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-teal-200" /><span className="text-teal-100">Jl. Kesehatan No. 45, Jakarta</span></div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-teal-200" /><span className="text-teal-100">Senin - Minggu: 08:00 - 21:00</span></div>
            </div>
          </div>
          <form className="bg-white rounded-2xl p-8 shadow-xl space-y-4">
            <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="No. Telepon" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
            </div>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-gray-500">
              <option value="">Pilih Layanan</option>
              <option>Umum</option>
              <option>Kardiologi</option>
              <option>Neurologi</option>
              <option>Anak</option>
              <option>Laboratorium</option>
              <option>Vaksinasi</option>
            </select>
            <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
            <textarea rows={3} placeholder="Keluhan (opsional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Kirim Permintaan Janji
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-teal-600 flex items-center justify-center"><Heart className="h-4 w-4 text-white" /></div>
              <span className="font-bold text-white">MediCare Clinic</span>
            </div>
            <p className="text-sm">Klinik kesehatan terpercaya untuk Anda dan keluarga.</p>
          </div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Layanan</h4><ul className="space-y-2 text-sm"><li>Umum</li><li>Kardiologi</li><li>Neurologi</li><li>Anak</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Kontak</h4><ul className="space-y-2 text-sm"><li>+62 812 3456 789</li><li>info@medicare.co.id</li><li>Jl. Kesehatan No. 45</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Jam Operasional</h4><ul className="space-y-2 text-sm"><li>Senin - Minggu</li><li>08:00 - 21:00 WIB</li><li>Darurat: 24 Jam</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm">&copy; 2026 MediCare Clinic. All rights reserved.</div>
      </footer>
    </div>
  );
}
