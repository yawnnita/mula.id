import { Pill, Phone, MapPin, Clock, ArrowRight, Truck, Shield, Heart, Search, CheckCircle2 } from "lucide-react";

export default function PharmaPlusLanding() {
  const categories = [
    { name: "Vitamin & Suplemen", icon: "💊", count: 45 },
    { name: "Obat Resep", icon: "💉", count: 120 },
    { name: "Perawatan Kulit", icon: "🧴", count: 38 },
    { name: "Alat Kesehatan", icon: "🩺", count: 25 },
    { name: "Produk Bayi", icon: "👶", count: 32 },
    { name: "Herbal & Tradisional", icon: "🌿", count: 28 },
  ];

  const products = [
    { name: "Vitamin C 1000mg", price: "Rp 85,000", oldPrice: "Rp 110,000", rating: 4.9, reviews: 567, badge: "Best Seller" },
    { name: "Omega-3 Fish Oil", price: "Rp 165,000", rating: 4.8, reviews: 234, badge: "Popular" },
    { name: "Probiotic Advanced", price: "Rp 195,000", rating: 4.7, reviews: 189 },
    { name: "Zinc Supplement", price: "Rp 75,000", oldPrice: "Rp 95,000", rating: 4.8, reviews: 312, badge: "Sale" },
    { name: "Collagen Peptides", price: "Rp 285,000", rating: 4.9, reviews: 156, badge: "New" },
    { name: "Multivitamin Daily", price: "Rp 125,000", rating: 4.7, reviews: 423 },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-emerald-50/90 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center"><Pill className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">PharmaPlus</span>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari produk..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-emerald-200 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+628123456789" className="hidden md:flex items-center gap-2 text-sm text-emerald-700"><Phone className="h-4 w-4" /> +62 812 3456 789</a>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100/60 via-emerald-50 to-green-50/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Truck className="h-4 w-4" /> Free Delivery Min. Rp 100K
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kesehatan<br /><span className="text-emerald-600">di ujung jari Anda.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">Apotek online terpercaya dengan ribuan produk kesehatan dan pengiriman cepat.</p>
            <div className="flex gap-4">
              <a href="#shop" className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center gap-2">
                Belanja Sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Pill className="h-32 w-32 text-emerald-200" />
          </div>
        </div>
      </section>

      <section className="py-6 border-y border-emerald-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            { icon: Shield, title: "100% Original", desc: "Produk resmi & bergaransi" },
            { icon: Truck, title: "Express Delivery", desc: "Kurang dari 2 jam" },
            { icon: Heart, title: "Free Consultation", desc: "Konsultasi dengan apoteker" },
            { icon: CheckCircle2, title: "BPOM Certified", desc: "Semua produk bersertifikat" },
          ].map((b) => (
            <div key={b.title} className="flex flex-col items-center gap-2 py-4">
              <b.icon className="h-6 w-6 text-emerald-600" />
              <div className="font-semibold text-gray-900">{b.title}</div>
              <div className="text-xs text-gray-400">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Kategori</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((c) => (
              <div key={c.name} className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
                <div className="text-3xl mb-2">{c.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900">{c.name}</h3>
                <p className="text-xs text-gray-400">{c.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div><h2 className="text-3xl font-bold text-gray-900">Produk Terlaris</h2><p className="text-gray-500 text-sm mt-1">Pilihan sehat untuk Anda</p></div>
            <a href="#" className="text-sm text-emerald-600 font-medium hover:underline">Lihat Semua</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-emerald-50 aspect-[4/3] flex items-center justify-center relative">
                  <Pill className="h-16 w-16 text-emerald-200" />
                  {p.badge && <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${p.badge === "Sale" ? "bg-amber-500 text-white" : p.badge === "New" ? "bg-emerald-600 text-white" : "bg-gray-900 text-white"}`}>{p.badge}</span>}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-1 mt-2 mb-3"><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Heart key={i} className="h-3 w-3 fill-emerald-400 text-emerald-400" />)}</div><span className="text-xs text-gray-400">({p.reviews})</span></div>
                  <div className="flex items-center gap-2"><span className="font-bold text-emerald-600">{p.price}</span>{p.oldPrice && <span className="text-sm text-gray-400 line-through">{p.oldPrice}</span>}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Refill resep Anda dengan mudah.</h2>
            <p className="text-emerald-100 mb-8">Upload resep dokter Anda dan kami akan menyiapkan obat Anda. Gratis konsultasi dengan apoteker kami.</p>
            <ul className="space-y-3 mb-8">
              {["Upload foto resep", "Verifikasi oleh apoteker", "Siap diantar dalam 2 jam", "Bayar di tempat atau online"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-emerald-100"><CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />{item}</li>
              ))}
            </ul>
            <button className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-medium hover:bg-emerald-50 transition-colors">Upload Resep</button>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-4">Konsultasi Gratis</h3>
            <p className="text-emerald-100 text-sm mb-6">Chat langsung dengan apoteker kami untuk konsultasi obat dan suplemen.</p>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-4"><div className="text-sm font-medium">Hari ini: 09:00 - 21:00</div><div className="text-xs text-emerald-200">Tersedia: 3 apoteker online</div></div>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg font-medium text-sm hover:bg-emerald-50 transition-colors">Mulai Konsultasi</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div><div className="flex items-center gap-2 mb-4"><Pill className="h-5 w-5 text-emerald-500" /><span className="font-bold text-white">PharmaPlus</span></div><p className="text-sm">Apotek online terpercaya.</p></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Produk</h4><ul className="space-y-2 text-sm"><li>Vitamin</li><li>Obat</li><li>Suplemen</li><li>Alat Kesehatan</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Bantuan</h4><ul className="space-y-2 text-sm"><li>Cara Pesan</li><li>Pengiriman</li><li>Retur</li><li>FAQ</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Kontak</h4><ul className="space-y-2 text-sm"><li>info@pharmaplus.co.id</li><li>+62 812 3456 789</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm">&copy; 2026 PharmaPlus. All rights reserved.</div>
      </footer>
    </div>
  );
}
