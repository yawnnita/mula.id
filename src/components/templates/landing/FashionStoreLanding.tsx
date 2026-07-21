import { Shirt, Search, Heart, ShoppingBag, Star, ArrowRight, Truck, RotateCcw, Shield, ChevronLeft, ChevronRight } from "lucide-react";

export default function FashionStoreLanding() {
  const products = [
    { name: "Linen Oversized Shirt", price: "Rp 389,000", rating: 4.8, reviews: 67, badge: "New", color: "from-pink-100 to-rose-50" },
    { name: "High-Waist Trousers", price: "Rp 425,000", oldPrice: "Rp 550,000", rating: 4.9, reviews: 124, badge: "Sale", color: "from-amber-50 to-orange-50" },
    { name: "Cotton Summer Dress", price: "Rp 299,000", rating: 4.7, reviews: 89, color: "from-violet-50 to-purple-50" },
    { name: "Minimalist Tote Bag", price: "Rp 245,000", rating: 4.8, reviews: 201, badge: "Best Seller", color: "from-emerald-50 to-teal-50" },
    { name: "Denim Jacket Classic", price: "Rp 575,000", rating: 4.6, reviews: 56, color: "from-blue-50 to-indigo-50" },
    { name: "Silk Scarf Premium", price: "Rp 189,000", oldPrice: "Rp 250,000", rating: 4.9, reviews: 178, badge: "Sale", color: "from-rose-50 to-pink-50" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-600 flex items-center justify-center"><Shirt className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold tracking-wide text-gray-900">VELORA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#new" className="hover:text-rose-600 transition-colors">New Arrivals</a>
            <a href="#collection" className="hover:text-rose-600 transition-colors">Collection</a>
            <a href="#bestseller" className="hover:text-rose-600 transition-colors">Best Sellers</a>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-rose-600 transition-colors" />
            <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-rose-600 transition-colors" />
            <ShoppingBag className="h-5 w-5 text-gray-400 cursor-pointer hover:text-rose-600 transition-colors" />
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-rose-500 tracking-widest uppercase mb-4">Summer Collection 2026</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Effortless<br /><span className="text-rose-600">Elegance.</span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">Koleksi fashion premium untuk Anda yang menghargai gaya dan kualitas.</p>
            <div className="flex gap-4">
              <a href="#collection" className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Shirt className="h-32 w-32 text-rose-200" />
          </div>
        </div>
      </section>

      <section className="py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm">
          <div className="flex items-center justify-center gap-2"><Truck className="h-4 w-4 text-rose-500" /><span className="text-gray-500">Free shipping over Rp 500K</span></div>
          <div className="flex items-center justify-center gap-2"><RotateCcw className="h-4 w-4 text-rose-500" /><span className="text-gray-500">30-day easy returns</span></div>
          <div className="flex items-center justify-center gap-2"><Shield className="h-4 w-4 text-rose-500" /><span className="text-gray-500">Authentic guarantee</span></div>
        </div>
      </section>

      <section id="new" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div><h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2><p className="text-gray-500 text-sm mt-1">Fresh styles just dropped</p></div>
            <a href="#" className="text-sm text-rose-600 font-medium hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className={`relative bg-gradient-to-br ${p.color} rounded-xl aspect-[3/4] mb-4 flex items-center justify-center overflow-hidden`}>
                  <Shirt className="h-16 w-16 text-gray-200" />
                  {p.badge && <span className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full ${p.badge === "Sale" ? "bg-gray-900 text-white" : "bg-rose-600 text-white"}`}>{p.badge}</span>}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all"><Heart className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-1 mb-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /><span className="text-xs text-gray-500">{p.rating} ({p.reviews})</span></div>
                <h3 className="font-medium text-sm text-gray-900 group-hover:text-rose-600 transition-colors">{p.name}</h3>
                <div className="flex items-center gap-2 mt-1"><span className="font-bold text-sm">{p.price}</span>{p.oldPrice && <span className="text-xs text-gray-400 line-through">{p.oldPrice}</span>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <Shirt className="h-24 w-24 text-rose-200" />
          </div>
          <div>
            <p className="text-sm text-rose-500 tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Crafted with love.</h2>
            <p className="text-gray-500 leading-relaxed mb-6">Setiap piece dalam koleksi Velora dibuat dengan attention to detail yang tinggi. Kami menggunakan bahan-bahan premium dari supplier terpercaya.</p>
            <p className="text-gray-500 leading-relaxed">Dari desain hingga produksi, kami memastikan setiap langkah memenuhi standar kualitas tertinggi.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Join the Velora Club</h2>
          <p className="text-gray-400 mb-8 text-sm">Dapatkan akses eksklusif ke new arrivals, sales, dan style tips.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm outline-none" />
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div><div className="flex items-center gap-2 mb-4"><Shirt className="h-5 w-5 text-rose-600" /><span className="font-bold text-gray-900 tracking-wide">VELORA</span></div><p className="text-sm text-gray-500">Effortless elegance for modern women.</p></div>
          <div><h4 className="font-semibold text-sm text-gray-900 mb-3">Shop</h4><ul className="space-y-2 text-sm text-gray-500"><li>New Arrivals</li><li>Best Sellers</li><li>Sale</li><li>Accessories</li></ul></div>
          <div><h4 className="font-semibold text-sm text-gray-900 mb-3">Help</h4><ul className="space-y-2 text-sm text-gray-500"><li>Shipping Info</li><li>Returns</li><li>Size Guide</li><li>FAQ</li></ul></div>
          <div><h4 className="font-semibold text-sm text-gray-900 mb-3">Contact</h4><ul className="space-y-2 text-sm text-gray-500"><li>hello@velora.co.id</li><li>+62 812 3456 789</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 text-center text-xs text-gray-400">&copy; 2026 Velora. All rights reserved.</div>
      </footer>
    </div>
  );
}
