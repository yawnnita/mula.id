import { ShoppingCart, Search, Heart, Star, ArrowRight, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function ECommerceProLanding() {
  const products = [
    { name: "Minimalist Watch", price: "Rp 450,000", oldPrice: "Rp 650,000", rating: 4.8, reviews: 124, badge: "Sale" },
    { name: "Leather Backpack", price: "Rp 320,000", rating: 4.9, reviews: 89, badge: "New" },
    { name: "Ceramic Plant Pot", price: "Rp 125,000", rating: 4.7, reviews: 201 },
    { name: "Organic Cotton Tee", price: "Rp 189,000", rating: 4.6, reviews: 156, badge: "Best Seller" },
    { name: "Bamboo Desk Lamp", price: "Rp 275,000", oldPrice: "Rp 350,000", rating: 4.8, reviews: 67, badge: "Sale" },
    { name: "Handmade Candle Set", price: "Rp 145,000", rating: 4.9, reviews: 312 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TokoKu</span>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Cari produk..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-600 hover:text-emerald-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="relative text-gray-600 hover:text-emerald-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-600 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              New Collection 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Temukan Produk<br />
              <span className="text-emerald-600">Kesukaan Anda</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Koleksi produk premium dengan harga terjangkau. Gratis ongkir untuk pembelian di atas Rp 500,000.
            </p>
            <div className="flex gap-4">
              <a href="#products" className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center gap-2">
                Belanja Sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <ShoppingCart className="h-32 w-32 text-emerald-300" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Gratis Ongkir", desc: "Untuk pembelian di atas Rp 500,000" },
            { icon: Shield, title: "Garansi Produk", desc: "Jaminan uang kembali 30 hari" },
            { icon: RotateCcw, title: "Mudah Dikembalikan", desc: "Retur gratis dalam 14 hari" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-4 py-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0"><b.icon className="h-5 w-5 text-emerald-600" /></div>
              <div><div className="font-semibold text-sm text-gray-900">{b.title}</div><div className="text-xs text-gray-500">{b.desc}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Produk Terlaris</h2>
              <p className="text-gray-500">Pilihan produk terbaik untuk Anda</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-emerald-500 transition-colors"><ChevronLeft className="h-5 w-5" /></button>
              <button className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-emerald-500 transition-colors"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="relative bg-gray-50 rounded-xl aspect-square mb-4 flex items-center justify-center overflow-hidden">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-emerald-300" />
                  </div>
                  {p.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${p.badge === "Sale" ? "bg-red-500 text-white" : p.badge === "New" ? "bg-emerald-600 text-white" : "bg-amber-500 text-white"}`}>
                      {p.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-gray-700">{p.rating}</span>
                  <span className="text-xs text-gray-400">({p.reviews})</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-emerald-600">{p.price}</span>
                  {p.oldPrice && <span className="text-sm text-gray-400 line-through">{p.oldPrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Dapatkan Diskon 10%</h2>
          <p className="text-emerald-100 mb-8">Berlangganan newsletter kami untuk penawaran eksklusif</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Email Anda" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 outline-none" />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">Langganan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-emerald-600 flex items-center justify-center"><ShoppingCart className="h-4 w-4 text-white" /></div>
              <span className="font-bold text-white">TokoKu</span>
            </div>
            <p className="text-sm">Toko online terpercaya untuk produk berkualitas.</p>
          </div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Shop</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">Semua Produk</a></li><li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li><li><a href="#" className="hover:text-white transition-colors">Sale</a></li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Help</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">FAQ</a></li><li><a href="#" className="hover:text-white transition-colors">Shipping</a></li><li><a href="#" className="hover:text-white transition-colors">Returns</a></li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Contact</h4><ul className="space-y-2 text-sm"><li>info@tokoku.co.id</li><li>+62 812 3456 789</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-center text-sm">&copy; 2026 TokoKu. All rights reserved.</div>
      </footer>
    </div>
  );
}
