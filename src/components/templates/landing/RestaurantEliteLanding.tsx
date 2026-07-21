import { UtensilsCrossed, Phone, MapPin, Clock, Star, ArrowRight, ChefHat, Leaf, Flame, Globe } from "lucide-react";

export default function RestaurantEliteLanding() {
  const menuCategories = [
    { name: "Appetizer", items: [
      { name: "Spring Roll Sambal Matah", price: "Rp 45,000", desc: "Lumpia segar dengan sambal matah khas Bali" },
      { name: "Crispy Calamari", price: "Rp 55,000", desc: "Cumi goreng tepung dengan saus tartar" },
    ]},
    { name: "Main Course", items: [
      { name: "Grilled Wagyu Steak", price: "Rp 185,000", desc: "Wagyu A5 dengan saus mushroom dan kentang panggang" },
      { name: "Nasi Goreng Rempah", price: "Rp 65,000", desc: "Nasi goreng dengan rempah tradisional dan ayam suwir" },
      { name: "Pan-Seared Salmon", price: "Rp 145,000", desc: "Salmon panggang dengan lemon butter sauce" },
    ]},
    { name: "Dessert", items: [
      { name: "Matcha Lava Cake", price: "Rp 55,000", desc: "Kue lava matcha dengan es krim vanilla" },
      { name: "Es Campur Premium", price: "Rp 40,000", desc: "Es campur dengan buah segar dan kelapa muda" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-amber-50/90 backdrop-blur-md z-50 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center">
              <UtensilsCrossed className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Warung Nusantara</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">Tentang</a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors">Galeri</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Kontak</a>
          </div>
          <a href="#contact" className="bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> Reservasi
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100/60 via-amber-50 to-red-50/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Flame className="h-4 w-4" />
              Buka Setiap Hari
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Rasa Nusantara<br />
              <span className="text-orange-600">Autentik & Lezat</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nikmati cita rasa Indonesia otentik yang dibuat dengan bahan-bahan segar pilihan dan resep turun-temurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-orange-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2">
                Lihat Menu <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="border-2 border-orange-200 text-orange-700 px-8 py-3.5 rounded-lg font-medium hover:bg-orange-100 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Reservasi Meja
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <ChefHat className="h-32 w-32 text-orange-300" />
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-6 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Senin - Minggu: 10:00 - 22:00</div>
          <div className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4" /> Jl. Sudirman No. 123, Jakarta</div>
          <div className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> +62 812 3456 789</div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-medium mb-4">
              <Leaf className="h-4 w-4" /> Fresh Ingredients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menu Kami</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Setiap hidangan dibuat dengan penuh cinta menggunakan bahan-bahan terbaik</p>
          </div>
          <div className="space-y-12">
            {menuCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-orange-200">{cat.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between bg-white rounded-xl p-5 border border-orange-100 hover:shadow-md transition-shadow">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-orange-600 whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <ChefHat className="h-32 w-32 text-orange-300" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cerita <span className="text-orange-600">Kami</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Warung Nusantara berdiri sejak 2010 dengan visi melestarikan cita rasa Indonesia autentik.
              Resep kami diturunkan dari generasi ke generasi, dengan sentuhan modern yang tetap menghormati tradisi.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Bahan-bahan kami pilih langsung dari petani lokal terbaik di seluruh Nusantara,
              memastikan kesegaran dan kualitas di setiap hidangan.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.9/5 dari 500+ review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Kami</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl ${i === 0 || i === 5 ? "col-span-2 row-span-2" : ""} aspect-square flex items-center justify-center`}>
                <UtensilsCrossed className="h-8 w-8 text-orange-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reservasi Meja</h2>
            <p className="text-gray-500 mb-8">Pesan meja sekarang untuk pengalaman kuliner terbaik.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" placeholder="No. Telepon" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
                <input type="number" placeholder="Jumlah Orang" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
              </div>
              <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all" />
              <textarea rows={3} placeholder="Catatan (opsional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none" />
              <button type="button" className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                Reservasi Sekarang
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Senin - Jumat</span><span className="font-medium">10:00 - 22:00</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Sabtu - Minggu</span><span className="font-medium">09:00 - 23:00</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Hari Libur</span><span className="font-medium">10:00 - 21:00</span></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-orange-400">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <span className="text-sm font-medium">Peta Lokasi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center"><UtensilsCrossed className="h-3 w-3 text-white" /></div>
              <span className="font-bold text-white">Warung Nusantara</span>
            </div>
            <p className="text-sm">Cita rasa Indonesia autentik sejak 2010.</p>
          </div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Menu</h4><ul className="space-y-2 text-sm"><li>Appetizer</li><li>Main Course</li><li>Dessert</li><li>Minuman</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Kunjungi Kami</h4><ul className="space-y-2 text-sm"><li>Jl. Sudirman No. 123</li><li>Jakarta Selatan</li><li>+62 812 3456 789</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Ikuti Kami</h4><div className="flex gap-3 mt-2"><a href="#" className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Globe className="h-4 w-4" /></a></div></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm">&copy; 2026 Warung Nusantara. All rights reserved.</div>
      </footer>
    </div>
  );
}
