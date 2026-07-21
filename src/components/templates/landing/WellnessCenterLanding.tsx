import { Leaf, Phone, MapPin, Clock, ArrowRight, Heart, Star, Calendar, Gift, Sparkles } from "lucide-react";

export default function WellnessCenterLanding() {
  const treatments = [
    { name: "Balinese Massage", duration: "90 min", price: "Rp 350,000", desc: "Traditional deep tissue massage for total relaxation" },
    { name: "Hot Stone Therapy", duration: "75 min", price: "Rp 400,000", desc: "Heated basalt stones to release tension" },
    { name: "Aromatherapy Facial", duration: "60 min", price: "Rp 275,000", desc: "Deep cleansing with essential oils" },
    { name: "Body Scrub & Wrap", duration: "90 min", price: "Rp 380,000", desc: "Exfoliation with natural ingredients" },
    { name: "Reflexology", duration: "45 min", price: "Rp 200,000", desc: "Pressure point therapy for feet" },
    { name: "Couples Retreat Package", duration: "3 hrs", price: "Rp 1,200,000", desc: "Full spa experience for two", badge: "Popular" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center"><Leaf className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-stone-900">Serenity Spa</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#treatments" className="hover:text-emerald-700 transition-colors">Treatments</a>
            <a href="#therapists" className="hover:text-emerald-700 transition-colors">Therapists</a>
            <a href="#gift" className="hover:text-emerald-700 transition-colors">Gift Cards</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" /> Book Now
          </a>
        </div>
      </nav>

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-stone-50 to-teal-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" /> Sanctuary for Body & Mind
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Find your<br /><span className="text-emerald-700">inner peace.</span>
            </h1>
            <p className="text-lg text-stone-500 mb-8">Tempat peristirahatan holistik untuk meremajakan tubuh, pikiran, dan jiwa Anda.</p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors inline-flex items-center gap-2">
                Book Treatment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#treatments" className="border-2 border-stone-300 text-stone-700 px-8 py-3.5 rounded-full font-medium hover:border-emerald-300 transition-colors">
                View Treatments
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Leaf className="h-32 w-32 text-emerald-200" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-sm">
          <div className="flex items-center justify-center gap-2"><Clock className="h-4 w-4" /> Open Daily 09:00-21:00</div>
          <div className="flex items-center justify-center gap-2"><Heart className="h-4 w-4" /> 15+ Expert Therapists</div>
          <div className="flex items-center justify-center gap-2"><Star className="h-4 w-4" /> 4.9 Average Rating</div>
        </div>
      </section>

      <section id="treatments" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-700 font-medium mb-4">Our Treatments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Healing <span className="text-emerald-700">treatments.</span></h2>
            <p className="text-stone-500 max-w-xl mx-auto">Pilih dari menu perawatan kami yang dirancang untuk meremajakan dan menyembuhkan.</p>
          </div>
          <div className="space-y-4">
            {treatments.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-stone-900">{t.name}</h3>
                    {t.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{t.badge}</span>}
                  </div>
                  <p className="text-sm text-stone-500 mt-1">{t.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-stone-400">{t.duration}</span>
                  <span className="font-bold text-emerald-700">{t.price}</span>
                  <button className="bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors">Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="therapists" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-700 font-medium mb-4">Our Therapists</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Expert <span className="text-emerald-700">therapists.</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Wayan Surya", specialty: "Balinese Massage", exp: "15 years" },
              { name: "Putri Ayu", specialty: "Aromatherapy & Facial", exp: "10 years" },
              { name: "Made Wirawan", specialty: "Hot Stone Therapy", exp: "12 years" },
              { name: "Ketut Rai", specialty: "Reflexology", exp: "8 years" },
            ].map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-28 h-28 rounded-full bg-emerald-100 mx-auto mb-4 flex items-center justify-center"><Leaf className="h-10 w-10 text-emerald-300" /></div>
                <h3 className="font-bold text-stone-900">{t.name}</h3>
                <p className="text-sm text-emerald-700">{t.specialty}</p>
                <p className="text-xs text-stone-400 mt-1">{t.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gift" className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl aspect-square max-h-96 flex items-center justify-center">
            <Gift className="h-32 w-32 text-emerald-200" />
          </div>
          <div>
            <p className="text-sm text-emerald-700 font-medium mb-4">Gift Cards</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Give the gift of wellness.</h2>
            <p className="text-stone-500 leading-relaxed mb-6">Gift card Serenity Spa adalah hadiah sempurna untuk orang tersayang. Tersedia dalam berbagai nominal, berlaku 12 bulan.</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {["Rp 500K", "Rp 1,000K", "Rp 2,000K"].map((price) => (
                <div key={price} className="bg-white rounded-xl p-4 text-center border border-emerald-100 cursor-pointer hover:border-emerald-400 transition-colors">
                  <Gift className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <span className="font-bold text-stone-900 text-sm">{price}</span>
                </div>
              ))}
            </div>
            <button className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors">Buy Gift Card</button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-700 font-medium mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">What guests <span className="text-emerald-700">say.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Linda Sari", content: "Pengalaman spa terbaik yang pernah saya rasakan. Therapist-nya sangat profesional dan tempatnya sangat menenangkan.", rating: 5 },
              { name: "Andi Wijaya", content: "Saya rutin ke Serenity setiap bulan untuk Balinese Massage-nya. Kualitas konsisten dan selalu memuaskan.", rating: 5 },
              { name: "Maria Santos", content: "Couples retreat package-nya luar biasa. Suami saya dan saya sangat menikmati pengalaman ini.", rating: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />)}</div>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-200 flex items-center justify-center text-sm font-bold text-emerald-800">{t.name[0]}</div>
                  <span className="text-sm font-medium text-stone-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-emerald-200 mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book your escape.</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-200" /><span>+62 812 3456 789</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-200" /><span>Jl. Raya Ubud No. 88, Bali</span></div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-emerald-200" /><span>Open Daily: 09:00 - 21:00</span></div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 outline-none" />
            </div>
            <select className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-emerald-200 outline-none">
              <option>Select Treatment</option>
              {treatments.map((t) => <option key={t.name}>{t.name}</option>)}
            </select>
            <input type="date" className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-emerald-200 outline-none" />
            <button type="button" className="w-full bg-white text-emerald-700 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors">Book Treatment</button>
          </form>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-4"><Leaf className="h-4 w-4 text-emerald-500" /><span className="font-bold text-white">Serenity Spa & Wellness</span></div>
          &copy; 2026 Serenity Spa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
