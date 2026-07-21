import { Cake, Phone, MapPin, Clock, Star, ArrowRight, Globe, Gift } from "lucide-react";

export default function BakerySweetsLanding() {
  const menu = [
    { name: "Classic Croissant", price: "Rp 22,000", desc: "Buttery, flaky perfection", badge: "Best Seller" },
    { name: "Chocolate Éclair", price: "Rp 28,000", desc: "Rich chocolate with custard cream" },
    { name: "Strawberry Tart", price: "Rp 35,000", desc: "Fresh strawberries on vanilla custard", badge: "Popular" },
    { name: "Red Velvet Cake", price: "Rp 185,000", desc: "Whole cake, cream cheese frosting" },
    { name: "Tiramisu Slice", price: "Rp 32,000", desc: "Italian classic with mascarpone" },
    { name: "Lemon Muffin", price: "Rp 18,000", desc: "Zesty & moist, perfect with tea" },
    { name: "Cinnamon Roll", price: "Rp 25,000", desc: "Warm, gooey, and irresistible" },
    { name: "Macaron Box (6pc)", price: "Rp 85,000", desc: "Assorted French macarons", badge: "Gift Pick" },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-pink-50/90 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center"><Cake className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-pink-900">Sweet Bliss</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-pink-800/60">
            <a href="#menu" className="hover:text-pink-900 transition-colors">Menu</a>
            <a href="#custom" className="hover:text-pink-900 transition-colors">Custom Orders</a>
            <a href="#gallery" className="hover:text-pink-900 transition-colors">Gallery</a>
          </div>
          <a href="tel:+628123456789" className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Order
          </a>
        </div>
      </nav>

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100/60 via-pink-50 to-rose-50/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              🧁 Baked Fresh Daily
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-950 mb-6 leading-tight">
              Life is short,<br /><span className="text-pink-600">eat the cake.</span>
            </h1>
            <p className="text-lg text-pink-800/50 mb-8">Roti dan kue segar dibuat setiap hari dengan bahan-bahan premium pilihan.</p>
            <div className="flex gap-4">
              <a href="#menu" className="bg-pink-500 text-white px-8 py-3.5 rounded-full font-medium hover:bg-pink-600 transition-colors inline-flex items-center gap-2">
                Lihat Menu <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#custom" className="border-2 border-pink-200 text-pink-700 px-8 py-3.5 rounded-full font-medium hover:bg-pink-100 transition-colors">
                Custom Order
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Cake className="h-32 w-32 text-pink-300" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm">
          <div className="flex items-center justify-center gap-2">🎂 Baked Fresh Daily</div>
          <div className="flex items-center justify-center gap-2">🎁 Custom Orders Welcome</div>
          <div className="flex items-center justify-center gap-2">🚚 Free Delivery 5km</div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-pink-600 font-medium mb-4">Our Menu</p>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-4">Keseruan manis setiap hari.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {menu.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-5 border border-pink-100 flex items-start justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-pink-900">{item.name}</h4>
                    {item.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-600">{item.badge}</span>}
                  </div>
                  <p className="text-sm text-pink-800/40 mt-1">{item.desc}</p>
                </div>
                <span className="font-bold text-pink-600 whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="custom" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-pink-600 font-medium mb-4">Custom Orders</p>
            <h2 className="text-3xl font-bold text-pink-950 mb-6">Dream cake for your special day.</h2>
            <p className="text-pink-800/50 leading-relaxed mb-6">Kami menerima custom cake untuk ulang tahun, wedding, baby shower, dan acara spesial lainnya. Ceritakan impian Anda, kami wujudkan.</p>
            <ul className="space-y-3 mb-8">
              {["Free konsultasi desain", "Pilihan rasa dan dekorasi", "Pengiriman tepat waktu", "Foto kue sebelum dikirim"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-pink-800/70"><span className="text-pink-400">✓</span>{item}</li>
              ))}
            </ul>
            <a href="tel:+628123456789" className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Hubungi Kami
            </a>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Gift className="h-32 w-32 text-pink-200" />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-pink-600 font-medium mb-4">Gallery</p>
            <h2 className="text-3xl font-bold text-pink-950 mb-4">Karya manis kami.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl ${i === 0 || i === 5 ? "col-span-2 row-span-2" : ""} aspect-square flex items-center justify-center`}>
                <Cake className="h-8 w-8 text-pink-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-pink-600 font-medium mb-4">What People Say</p>
            <h2 className="text-3xl font-bold text-pink-950 mb-4">Customer love.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rina Putri", content: "Custom birthday cake-nya cantik banget dan rasanya enak! Semua tamu pangling.", rating: 5 },
              { name: "Dimas Aditya", content: "Croissant terbaik yang pernah saya coba di Jakarta. Flaky dan buttery banget!", rating: 5 },
              { name: "Lisa Permata", content: "Macaron box-nya jadi favorit keluarga. Selalu repeat order setiap minggu.", rating: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-pink-400 text-pink-400" />)}</div>
                <p className="text-sm text-pink-800/70 leading-relaxed mb-4">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-pink-200 flex items-center justify-center text-xs font-bold text-pink-700">{t.name[0]}</div>
                  <span className="text-sm font-medium text-pink-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-pink-900 text-pink-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4"><Cake className="h-4 w-4" /><span className="font-bold text-white">Sweet Bliss Bakery</span></div>
          <p>&copy; 2026 Sweet Bliss Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
