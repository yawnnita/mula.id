import { Coffee, Phone, MapPin, Clock, Star, ArrowRight, Wifi, Leaf, Heart } from "lucide-react";

export default function CoffeeShopLanding() {
  const menu = [
    { category: "Signature Coffee", items: [
      { name: "Kopi Tubruk Nusantara", price: "Rp 28,000", desc: "Single origin Java, bold & earthy" },
      { name: "Es Kopi Susu Gula Aren", price: "Rp 35,000", desc: "Our signature with palm sugar" },
      { name: "Cold Brew Hazel", price: "Rp 38,000", desc: "24-hour cold brew, smooth & sweet" },
    ]},
    { category: "Non-Coffee", items: [
      { name: "Matcha Latte", price: "Rp 35,000", desc: "Premium Japanese matcha" },
      { name: "Thai Tea", price: "Rp 30,000", desc: "Classic Thai tea with condensed milk" },
    ]},
    { category: "Pastries", items: [
      { name: "Croissant Butter", price: "Rp 22,000", desc: "Freshly baked, flaky & golden" },
      { name: "Banana Bread", price: "Rp 20,000", desc: "Homemade with ripe bananas" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-amber-50/90 backdrop-blur-md z-50 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-amber-800 flex items-center justify-center"><Coffee className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-amber-900">Kopi Kita</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-amber-800/70">
            <a href="#menu" className="hover:text-amber-900 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-900 transition-colors">About</a>
            <a href="#locations" className="hover:text-amber-900 transition-colors">Locations</a>
          </div>
          <a href="tel:+628123456789" className="bg-amber-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-900 transition-colors inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Order Now
          </a>
        </div>
      </nav>

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100/60 via-amber-50 to-orange-50/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-amber-700 font-medium tracking-wider uppercase mb-4">Since 2018</p>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-950 mb-6 leading-tight">
              Every cup<br /><span className="text-amber-700">tells a story.</span>
            </h1>
            <p className="text-lg text-amber-800/60 mb-8">Kopi specialty dari petani lokal Indonesia. Disangrai dengan penuh cinta, disajikan dengan sepenuh hati.</p>
            <div className="flex gap-4">
              <a href="#menu" className="bg-amber-800 text-white px-8 py-3.5 rounded-full font-medium hover:bg-amber-900 transition-colors inline-flex items-center gap-2">
                Lihat Menu <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Coffee className="h-32 w-32 text-amber-400" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm">
          <div className="flex items-center justify-center gap-2"><Wifi className="h-4 w-4" /> Free WiFi</div>
          <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Buka 07:00 - 22:00</div>
          <div className="flex items-center justify-center gap-2"><Leaf className="h-4 w-4" /> 100% Arabica</div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-amber-700 font-medium mb-4">Our Menu</p>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">Diseduh dengan cinta.</h2>
          </div>
          <div className="space-y-12">
            {menu.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-bold text-amber-900 mb-4 pb-2 border-b border-amber-200">{cat.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between bg-white rounded-xl p-5 border border-amber-100">
                      <div><h4 className="font-semibold text-amber-900">{item.name}</h4><p className="text-sm text-amber-800/50 mt-1">{item.desc}</p></div>
                      <span className="font-bold text-amber-700 whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Coffee className="h-32 w-32 text-amber-300" />
          </div>
          <div>
            <p className="text-sm text-amber-700 font-medium mb-4">Our Story</p>
            <h2 className="text-3xl font-bold text-amber-950 mb-6">From bean to cup.</h2>
            <p className="text-amber-800/60 leading-relaxed mb-6">Kopi Kita bermula dari kecintaan kami terhadap kopi Indonesia. Kami bermitra langsung dengan petani kopi di Aceh, Java, dan Bali untuk mendapatkan biji kopi terbaik.</p>
            <p className="text-amber-800/60 leading-relaxed">Setiap cangkir yang kami sajikan adalah perjalanan dari kebun kopi ke tangan Anda.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-amber-700 font-medium mb-4">Loyalty Program</p>
            <h2 className="text-3xl font-bold text-amber-950 mb-4">Kopi Kita Rewards.</h2>
            <p className="text-amber-800/60">Kumpulkan poin setiap pembelian dan dapatkan kopi gratis.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Beli Kopi", desc: "Dapatkan 1 poin per Rp 10,000" },
              { step: "2", title: "Kumpulkan", desc: "Kumpulkan hingga 50 poin" },
              { step: "3", title: "Dapat Hadiah", desc: "Redeem untuk kopi gratis" },
            ].map((r) => (
              <div key={r.step} className="text-center bg-white rounded-xl p-6 border border-amber-100">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center mx-auto mb-4 text-lg">{r.step}</div>
                <h3 className="font-bold text-amber-900 mb-2">{r.title}</h3>
                <p className="text-sm text-amber-800/50">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-amber-700 font-medium mb-4">Our Locations</p>
            <h2 className="text-3xl font-bold text-amber-950 mb-4">Kunjungi kami.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Kopi Kita SCBD", address: "Jl. Sudirman Kav. 52, Jakarta", hours: "07:00 - 22:00" },
              { name: "Kopi Kita Bandung", address: "Jl. Dago No. 45, Bandung", hours: "08:00 - 21:00" },
              { name: "Kopi Kita Bali", address: "Jl. Sunset Road, Seminyak", hours: "07:00 - 23:00" },
            ].map((loc) => (
              <div key={loc.name} className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <MapPin className="h-6 w-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-amber-900 mb-1">{loc.name}</h3>
                <p className="text-sm text-amber-800/50 mb-2">{loc.address}</p>
                <p className="text-xs text-amber-700 flex items-center gap-1"><Clock className="h-3 w-3" /> {loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-amber-900 text-amber-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4"><Coffee className="h-4 w-4" /><span className="font-bold text-white">Kopi Kita</span></div>
          <p>&copy; 2026 Kopi Kita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
