import { Leaf, Search, ShoppingCart, Heart, Star, ArrowRight, Truck, Sprout, Award, Recycle } from "lucide-react";

export default function OrganicMarketLanding() {
  const categories = [
    { name: "Fresh Vegetables", icon: "🥬", count: 45 },
    { name: "Organic Fruits", icon: "🍎", count: 38 },
    { name: "Grains & Cereals", icon: "🌾", count: 22 },
    { name: "Dairy & Eggs", icon: "🥛", count: 18 },
    { name: "Herbs & Spices", icon: "🌿", count: 30 },
    { name: "Beverages", icon: "🍵", count: 25 },
  ];

  const products = [
    { name: "Organic Avocado", price: "Rp 35,000/pcs", rating: 4.9, reviews: 234, badge: "Fresh", farm: "Bali Organic Farm" },
    { name: "Quinoa Premium", price: "Rp 89,000/500g", rating: 4.8, reviews: 156, badge: "Best Seller", farm: "Java Quinoa Co." },
    { name: "Raw Honey Forest", price: "Rp 125,000/250ml", rating: 4.9, reviews: 312, badge: "Popular", farm: "Sumatra Forest Honey" },
    { name: "Organic Eggs Free-Range", price: "Rp 55,000/pack", rating: 4.7, reviews: 189, farm: "Bandung Free Range" },
    { name: "Turmeric Fresh Root", price: "Rp 25,000/200g", rating: 4.8, reviews: 98, farm: "Jawa Tengah Organic" },
    { name: "Matcha Powder Ceremonial", price: "Rp 185,000/50g", rating: 4.9, reviews: 267, badge: "Premium", farm: "Kyoto Select" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-green-700 flex items-center justify-center"><Leaf className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-stone-900">GreenBasket</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#shop" className="hover:text-green-700 transition-colors">Shop</a>
            <a href="#about" className="hover:text-green-700 transition-colors">Our Farm</a>
            <a href="#subscription" className="hover:text-green-700 transition-colors">Subscribe</a>
            <a href="#contact" className="hover:text-green-700 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 text-stone-400 cursor-pointer hover:text-green-700 transition-colors" />
            <Heart className="h-5 w-5 text-stone-400 cursor-pointer hover:text-green-700 transition-colors" />
            <ShoppingCart className="h-5 w-5 text-stone-400 cursor-pointer hover:text-green-700 transition-colors" />
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-stone-50 to-emerald-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sprout className="h-4 w-4" /> 100% Organic & Fresh
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              From farm<br /><span className="text-green-700">to your table.</span>
            </h1>
            <p className="text-lg text-stone-500 mb-8">Produk organik segar langsung dari petani lokal terbaik Indonesia. Tanpa pestisida, tanpa bahan kimia.</p>
            <div className="flex gap-4">
              <a href="#shop" className="bg-green-700 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-green-800 transition-colors inline-flex items-center gap-2">
                Belanja Sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Leaf className="h-32 w-32 text-green-200" />
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Truck, title: "Same Day Delivery", desc: "Order sebelum 10AM" },
            { icon: Sprout, title: "Direct from Farm", desc: "Tanpa perantara" },
            { icon: Award, title: "Certified Organic", desc: "Sertifikasi resmi" },
            { icon: Recycle, title: "Eco Packaging", desc: "Kemasan ramah lingkungan" },
          ].map((b) => (
            <div key={b.title} className="flex flex-col items-center gap-2 py-4">
              <b.icon className="h-6 w-6 text-green-600" />
              <div className="text-sm font-semibold text-stone-900">{b.title}</div>
              <div className="text-xs text-stone-400">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-4 text-center border border-stone-200 hover:border-green-400 hover:shadow-sm transition-all cursor-pointer">
                <div className="text-3xl mb-2">{c.icon}</div>
                <h3 className="text-sm font-semibold text-stone-900">{c.name}</h3>
                <p className="text-xs text-stone-400">{c.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div><h2 className="text-3xl font-bold text-stone-900">Popular Products</h2><p className="text-stone-500 text-sm mt-1">Pilihan terbaik dari petani kami</p></div>
            <a href="#" className="text-sm text-green-700 font-medium hover:underline">View All</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-stone-50 rounded-xl overflow-hidden group hover:shadow-md transition-shadow cursor-pointer border border-stone-100">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 aspect-[4/3] flex items-center justify-center relative">
                  <Leaf className="h-16 w-16 text-green-200" />
                  {p.badge && <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-green-700 text-white">{p.badge}</span>}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-stone-400 hover:text-green-600 opacity-0 group-hover:opacity-100 transition-all"><Heart className="h-4 w-4" /></button>
                </div>
                <div className="p-5">
                  <p className="text-[10px] text-green-600 font-medium uppercase tracking-wider mb-1">{p.farm}</p>
                  <h3 className="font-semibold text-stone-900 group-hover:text-green-700 transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-1 mt-2 mb-3"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /><span className="text-xs text-stone-500">{p.rating} ({p.reviews})</span></div>
                  <span className="font-bold text-green-700">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="subscription" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-green-200 mb-4">Subscription Box</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Weekly organic goodness delivered.</h2>
            <p className="text-green-100 mb-8">Paket produk organik segar dikirim setiap minggu langsung ke rumah Anda. Pilih paket yang sesuai untuk keluarga Anda.</p>
            <div className="space-y-3 mb-8">
              {["Paket Personal (2-3 orang)", "Paket Family (4-6 orang)", "Paket Premium (seasonal picks)"].map((item) => (
                <div key={item} className="flex items-center gap-3"><div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div><span className="text-green-100 text-sm">{item}</span></div>
              ))}
            </div>
            <button className="bg-white text-green-700 px-8 py-3.5 rounded-lg font-medium hover:bg-green-50 transition-colors inline-flex items-center gap-2">
              Subscribe Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center mb-6"><span className="text-4xl font-bold">Rp 299K</span><span className="text-green-200">/minggu</span></div>
            <div className="space-y-3 text-sm text-green-100">
              <div className="flex justify-between"><span>Fresh Vegetables</span><span>8-10 items</span></div>
              <div className="flex justify-between"><span>Seasonal Fruits</span><span>4-5 items</span></div>
              <div className="flex justify-between"><span>Recipe Cards</span><span>5 recipes</span></div>
              <div className="flex justify-between"><span>Free Delivery</span><span>✓</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Sprout className="h-32 w-32 text-green-200" />
          </div>
          <div>
            <p className="text-sm text-green-700 font-semibold mb-4">Our Farm Story</p>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Grown with love, delivered with care.</h2>
            <p className="text-stone-500 leading-relaxed mb-6">GreenBasket bermitra dengan 50+ petani organik di seluruh Indonesia. Kami memastikan setiap produk yang kami kirimkan segar, berkualitas, dan sustainable.</p>
            <p className="text-stone-500 leading-relaxed">Tanpa perantara, petani mendapat harga yang adil dan Anda mendapat produk yang lebih segar.</p>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div><div className="flex items-center gap-2 mb-4"><Leaf className="h-5 w-5 text-green-500" /><span className="font-bold text-white">GreenBasket</span></div><p className="text-sm">Organic groceries delivered fresh.</p></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Shop</h4><ul className="space-y-2 text-sm"><li>Vegetables</li><li>Fruits</li><li>Grains</li><li>Beverages</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">About</h4><ul className="space-y-2 text-sm"><li>Our Farm</li><li>Partners</li><li>Sustainability</li></ul></div>
          <div><h4 className="font-semibold text-white text-sm mb-3">Contact</h4><ul className="space-y-2 text-sm"><li>hello@greenbasket.co.id</li><li>+62 812 3456 789</li></ul></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-stone-800 pt-6 text-center text-sm">&copy; 2026 GreenBasket. All rights reserved.</div>
      </footer>
    </div>
  );
}
