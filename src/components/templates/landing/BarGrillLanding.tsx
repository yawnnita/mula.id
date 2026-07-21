import { Wine, Phone, MapPin, Clock, Star, ArrowRight, Music, Calendar, Users } from "lucide-react";

export default function BarGrillLanding() {
  const menu = [
    { category: "Grill & BBQ", items: [
      { name: "Smoke Ribs (500g)", price: "Rp 185,000", desc: "Slow-smoked for 12 hours, BBQ glaze" },
      { name: "Grilled Wagyu Burger", price: "Rp 125,000", desc: "Wagyu patty, truffle mayo, brioche bun" },
      { name: "BBQ Chicken Platter", price: "Rp 145,000", desc: "Half chicken, coleslaw, corn bread" },
    ]},
    { category: "Drinks", items: [
      { name: "Signature Old Fashioned", price: "Rp 95,000", desc: "Bourbon, bitters, orange peel" },
      { name: "Mango Mojito", price: "Rp 75,000", desc: "Fresh mango, mint, lime, rum" },
      { name: "Craft Beer Flight", price: "Rp 120,000", desc: "4 selections from local breweries" },
    ]},
    { category: "Happy Hour (16:00-19:00)", items: [
      { name: "House Wine", price: "Rp 55,000", desc: "Red or white, glass" },
      { name: "Draft Beer", price: "Rp 45,000", desc: "Local craft, 500ml" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center"><Wine className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold">Ember & Oak</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Reserve</a>
          </div>
          <a href="#contact" className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" /> Reserve Table
          </a>
        </div>
      </nav>

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-950 to-gray-950" />
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🔥 Live Music Every Friday & Saturday
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fire &<br /><span className="text-red-500">Flavor.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">Grill restaurant & bar dengan menu BBQ autentik dan koleksi cocktails terbaik di kota.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-red-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2">
              Reserve Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#menu" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors">View Menu</a>
          </div>
        </div>
      </section>

      <section className="py-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4 text-red-500" /> Mon-Thu: 11:00-23:00</div>
          <div className="flex items-center justify-center gap-2"><Music className="h-4 w-4 text-red-500" /> Live Music Fri-Sat</div>
          <div className="flex items-center justify-center gap-2"><Wine className="h-4 w-4 text-red-500" /> Happy Hour 16:00-19:00</div>
        </div>
      </section>

      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-red-500 mb-4">Our Menu</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fire-grilled to <span className="text-red-500">perfection.</span></h2>
          </div>
          <div className="space-y-12">
            {menu.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">{cat.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between bg-white/5 rounded-xl p-5 border border-white/5 hover:border-red-500/30 transition-colors">
                      <div>
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-red-400 whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-red-500 mb-4">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What&apos;s happening.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Live Jazz Night", date: "Every Friday", desc: "Nikmati BBQ dan cocktails ditemani live jazz performance.", icon: "🎷" },
              { title: "Wine Tasting", date: "Last Saturday", desc: "Degustasi wine dari 5 negara dengan sommelier expert.", icon: "🍷" },
              { title: "BBQ Masterclass", date: "Monthly", desc: "Belajar teknik smoking dan grilling dari head chef kami.", icon: "🔥" },
            ].map((e) => (
              <div key={e.title} className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="text-4xl mb-4">{e.icon}</div>
                <span className="text-xs text-red-400 font-medium">{e.date}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{e.title}</h3>
                <p className="text-sm text-gray-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-red-500 mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our vibe.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-white/5 rounded-xl ${i === 1 || i === 6 ? "col-span-2 row-span-2" : ""} aspect-square flex items-center justify-center`}>
                <Wine className="h-8 w-8 text-red-500/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-red-500 mb-4">Reservations</p>
            <h2 className="text-3xl font-bold mb-6">Book your table.</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4"><div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center"><Phone className="h-5 w-5 text-red-400" /></div><div><div className="text-xs text-gray-500">Phone</div><div className="font-medium">+62 812 3456 789</div></div></div>
              <div className="flex items-center gap-4"><div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center"><MapPin className="h-5 w-5 text-red-400" /></div><div><div className="text-xs text-gray-500">Address</div><div className="font-medium">Jl. Kemang Raya No. 88, Jakarta</div></div></div>
              <div className="flex items-center gap-4"><div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center"><Clock className="h-5 w-5 text-red-400" /></div><div><div className="text-xs text-gray-500">Hours</div><div className="font-medium">Mon-Thu 11:00-23:00, Fri-Sat 11:00-01:00</div></div></div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500 outline-none transition-all" />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500 outline-none transition-all" />
              <input type="number" placeholder="Guests" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500 outline-none transition-all" />
            </div>
            <input type="date" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-red-500 outline-none transition-all" />
            <textarea rows={3} placeholder="Special requests..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-red-500 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">Reserve Table</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-4"><Wine className="h-4 w-4 text-red-500" /><span className="font-bold text-white">Ember & Oak</span></div>
          &copy; 2026 Ember & Oak. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
