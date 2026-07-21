import { Building2, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Globe, Users, Award, Target } from "lucide-react";

export default function MinimalCorporateLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gray-900 flex items-center justify-center"><Building2 className="h-4 w-4 text-white" /></div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">Arclight</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#clients" className="hover:text-gray-900 transition-colors">Clients</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-gray-900 text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition-colors">Get in Touch</a>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-6">Corporate Solutions</p>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Simplicity is the<br /><span className="font-bold">ultimate sophistication.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Kami membantu perusahaan membangun citra digital yang bersih, profesional, dan berdampak.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            Mulai percakapan <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            { icon: Globe, value: "15+", label: "Countries" },
            { icon: Users, value: "200+", label: "Employees" },
            { icon: Award, value: "50+", label: "Awards" },
            { icon: Target, value: "99%", label: "Client Retention" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-6 w-6 text-gray-300 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">We build companies that <span className="font-bold">matter.</span></h2>
            <p className="text-gray-500 leading-relaxed mb-6">Founded in 2010, Arclight has been at the forefront of corporate digital transformation. We believe in clean design, clear communication, and measurable results.</p>
            <p className="text-gray-500 leading-relaxed">Our team of 200+ professionals across 15 countries delivers world-class solutions to Fortune 500 companies and ambitious startups alike.</p>
          </div>
          <div className="bg-gray-100 rounded-sm aspect-square max-h-96 flex items-center justify-center">
            <Building2 className="h-32 w-32 text-gray-200" />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-4 text-center">Services</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">What we <span className="font-bold">do.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategy", desc: "Corporate strategy consulting and digital transformation roadmaps." },
              { title: "Operations", desc: "Streamlined operations and process optimization for enterprises." },
              { title: "Technology", desc: "Enterprise technology solutions and infrastructure modernization." },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400 tracking-widest uppercase mb-4 text-center">Clients</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-16 text-center">Trusted by <span className="font-bold">industry leaders.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["Accenture", "Deloitte", "McKinsey", "BCG", "PwC", "EY", "KPMG", "Bain"].map((name) => (
              <div key={name} className="text-center py-6 border border-gray-100"><span className="text-lg font-bold text-gray-300">{name}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Let&apos;s start a <span className="font-bold">conversation.</span></h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400"><Phone className="h-5 w-5" />+62 812 3456 789</div>
              <div className="flex items-center gap-3 text-gray-400"><Mail className="h-5 w-5" />info@arclight.co.id</div>
              <div className="flex items-center gap-3 text-gray-400"><MapPin className="h-5 w-5" />Jakarta, Indonesia</div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 outline-none transition-all" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 outline-none transition-all" />
            <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 outline-none transition-all resize-none" />
            <button type="button" className="w-full bg-white text-gray-900 py-3 font-medium hover:bg-gray-100 transition-colors">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">&copy; 2026 Arclight. All rights reserved.</div>
      </footer>
    </div>
  );
}
