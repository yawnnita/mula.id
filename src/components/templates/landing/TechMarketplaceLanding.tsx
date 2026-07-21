import { Laptop, Search, ShoppingCart, Heart, Star, ArrowRight, Shield, Truck, RotateCcw, ChevronDown } from "lucide-react";

export default function TechMarketplaceLanding() {
  const categories = [
    { name: "Smartphones", icon: "📱", count: 120 },
    { name: "Laptops", icon: "💻", count: 85 },
    { name: "Audio", icon: "🎧", count: 64 },
    { name: "Wearables", icon: "⌚", count: 42 },
    { name: "Gaming", icon: "🎮", count: 73 },
    { name: "Accessories", icon: "🔌", count: 200 },
  ];

  const products = [
    { name: "ProMax Laptop 14", price: "Rp 18,500,000", oldPrice: "Rp 22,000,000", rating: 4.9, reviews: 342, badge: "Hot Deal", specs: "M3 Chip, 16GB RAM, 512GB SSD" },
    { name: "AirBuds Pro", price: "Rp 1,250,000", rating: 4.8, reviews: 567, badge: "Best Seller", specs: "ANC, 30hr Battery, IPX5" },
    { name: "SmartWatch Ultra", price: "Rp 3,750,000", oldPrice: "Rp 4,500,000", rating: 4.7, reviews: 189, badge: "Sale", specs: "GPS, LTE, Titanium Case" },
    { name: "Gaming Mouse X1", price: "Rp 850,000", rating: 4.8, reviews: 234, specs: "25K DPI, Wireless, RGB" },
    { name: "4K Monitor 27\"", price: "Rp 5,200,000", rating: 4.9, reviews: 156, badge: "New", specs: "IPS, HDR400, USB-C" },
    { name: "Mechanical Keyboard", price: "Rp 1,850,000", rating: 4.7, reviews: 298, specs: "Hot-swap, Bluetooth, RGB" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-600 flex items-center justify-center"><Laptop className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900">TechZone</span>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:bg-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-600 transition-colors" />
            <ShoppingCart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-600 transition-colors" />
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🔥 Flash Sale - Up to 40% Off
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tech that<br /><span className="text-cyan-600">empowers you.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">Gadget dan elektronik terbaru dengan harga terbaik. Garansi resmi dan pengiriman cepat.</p>
          <a href="#products" className="bg-cyan-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-cyan-700 transition-colors inline-flex items-center gap-2">
            Belanja Sekarang <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-cyan-300 hover:shadow-sm transition-all cursor-pointer">
                <div className="text-3xl mb-2">{c.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900">{c.name}</h3>
                <p className="text-xs text-gray-400">{c.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Garansi Resmi", desc: "Semua produk bergaransi resmi" },
            { icon: Truck, title: "Free Shipping", desc: "Gratis ongkir min. Rp 500K" },
            { icon: RotateCcw, title: "7-Day Returns", desc: "Retur mudah dalam 7 hari" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0"><b.icon className="h-5 w-5 text-cyan-600" /></div><div><div className="text-sm font-semibold text-gray-900">{b.title}</div><div className="text-xs text-gray-400">{b.desc}</div></div></div>
          ))}
        </div>
      </section>

      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div><h2 className="text-3xl font-bold text-gray-900">Featured Products</h2><p className="text-gray-500 text-sm mt-1">Top picks for you</p></div>
            <a href="#" className="text-sm text-cyan-600 font-medium hover:underline">View All</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-gray-50 aspect-[4/3] flex items-center justify-center relative">
                  <Laptop className="h-16 w-16 text-gray-200" />
                  {p.badge && <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded ${p.badge === "Hot Deal" ? "bg-red-500 text-white" : p.badge === "Sale" ? "bg-amber-500 text-white" : p.badge === "New" ? "bg-cyan-600 text-white" : "bg-gray-900 text-white"}`}>{p.badge}</span>}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Heart className="h-4 w-4" /></button>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 mb-3">{p.specs}</p>
                  <div className="flex items-center gap-1 mb-2"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /><span className="text-sm font-medium">{p.rating}</span><span className="text-xs text-gray-400">({p.reviews})</span></div>
                  <div className="flex items-center gap-2"><span className="text-lg font-bold text-cyan-600">{p.price}</span>{p.oldPrice && <span className="text-sm text-gray-400 line-through">{p.oldPrice}</span>}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Download TechZone App</h2>
          <p className="text-cyan-100 mb-6 text-sm">Dapatkan eksklusif deals dan flash sale hanya di app kami.</p>
          <div className="flex gap-3 justify-center">
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-medium text-sm hover:bg-cyan-50 transition-colors">App Store</button>
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-medium text-sm hover:bg-cyan-50 transition-colors">Google Play</button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div><div className="flex items-center gap-2 mb-4"><Laptop className="h-5 w-5 text-cyan-500" /><span className="font-bold text-white">TechZone</span></div><p className="text-sm">Your trusted tech marketplace.</p></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Shop</h4><ul className="space-y-2 text-sm"><li>Smartphones</li><li>Laptops</li><li>Audio</li><li>Gaming</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Support</h4><ul className="space-y-2 text-sm"><li>Help Center</li><li>Warranty</li><li>Returns</li><li>Track Order</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Contact</h4><ul className="space-y-2 text-sm"><li>support@techzone.co.id</li><li>+62 812 3456 789</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm">&copy; 2026 TechZone. All rights reserved.</div>
      </footer>
    </div>
  );
}
