import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Web Design",
    desc: "Clean, modern, responsive interfaces tailored to your brand identity and audience.",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-400/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Development",
    desc: "Performant, scalable builds — from business websites and portfolios to full e-commerce platforms.",
    color: "from-violet-500/10 to-blue-500/10",
    border: "hover:border-violet-400/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    title: "SEO Setup",
    desc: "Strong SEO foundations — meta tags, site structure, and speed — so your site gets found.",
    color: "from-emerald-500/10 to-teal-500/10",
    border: "hover:border-emerald-400/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Maintenance",
    desc: "Reliable ongoing support, updates, and monitoring to keep your site secure and running smoothly.",
    color: "from-amber-500/10 to-orange-500/10",
    border: "hover:border-amber-400/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: "E-Commerce",
    desc: "End-to-end online store solutions with smooth checkout, product management, and payment integration.",
    color: "from-pink-500/10 to-rose-500/10",
    border: "hover:border-pink-400/40",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Custom Solutions",
    desc: "Bespoke web applications built to your specific workflow — if you can imagine it, we can build it.",
    color: "from-cyan-500/10 to-blue-500/10",
    border: "hover:border-cyan-400/40",
  },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Responsive Design" },
  { value: "24/7", label: "Support Available" },
  { value: "5★", label: "Client Satisfaction" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We understand your goals, audience, and requirements in a focused kickoff session." },
  { step: "02", title: "Design", desc: "Wireframes and visual designs crafted with your brand and users in mind." },
  { step: "03", title: "Build", desc: "Clean, fast, accessible code — built with modern frameworks and best practices." },
  { step: "04", title: "Launch", desc: "Thorough testing, deployment, and a smooth handover with full documentation." },
];

const TESTIMONIALS = [
  {
    quote: "XTYLE delivered our website in record time. The design is stunning and our enquiries have doubled.",
    name: "Rahul Sharma",
    role: "Founder, TechStart Patna",
    initials: "RS",
    color: "bg-blue-500",
  },
  {
    quote: "Professional, responsive, and genuinely invested in our success. Couldn't ask for a better partner.",
    name: "Priya Singh",
    role: "CEO, GreenLeaf Exports",
    initials: "PS",
    color: "bg-emerald-500",
  },
  {
    quote: "The SEO work alone brought us 3× more organic traffic in just two months. Incredible results.",
    name: "Amit Kumar",
    role: "Owner, Bihar Agro Foods",
    initials: "AK",
    color: "bg-violet-500",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="font-sans bg-white text-[#0a0a0a] overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════════
          HERO — dark
      ══════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-[#060a12] overflow-hidden px-6"
      >
        {/* Dot-grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-300 mx-auto w-full pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Based in Darbhanga, Bihar
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.04] tracking-[-0.03em] text-white mb-6">
              Build Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Edge
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10">
              We design and develop websites that are fast, beautiful, and built
              to convert — for businesses, startups, and individuals across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-200"
              >
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4"/>
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:border-white/30 hover:text-white transition-all duration-200"
              >
                View Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card stack */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Main card */}
            <div className="w-72 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Performance Score</p>
                  <p className="text-slate-400 text-xs">Google PageSpeed</p>
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">98</span>
                <span className="text-emerald-400 text-sm font-semibold mb-1.5">/100</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
            </div>
            {/* Mini card */}
            <div className="w-56 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-slate-300 text-xs font-medium">Project Delivered</p>
              </div>
              <p className="text-white text-sm font-bold">xtyletechnology.com</p>
              <p className="text-slate-500 text-xs mt-0.5">Mobile-first · On time</p>
            </div>
            {/* Tech badges */}
            <div className="flex gap-2 flex-wrap justify-end">
              {["Next.js", "React", "Tailwind", "Node.js"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES — light
      ══════════════════════════════════════════════════ */}
      <section id="services" className="py-28 px-6 bg-white">
        <div className="max-w-300 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 mb-3">
              What we offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a] mb-4">
              Services Built for Growth
            </h2>
            <p className="text-lg text-[#6b7280] max-w-xl mx-auto leading-relaxed">
              Everything you need to establish, grow, and maintain a strong digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`group relative bg-white border border-[#e5e7eb] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.border}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="text-[1rem] font-bold text-[#0a0a0a] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROCESS — dark
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 px-6 bg-[#060a12] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="relative max-w-300 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-blue-400 mb-3">
              How we work
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
              A simple, transparent workflow — from first call to final launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="relative group">
                {/* Connector line */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-1rem)] w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent z-0" />
                )}
                <div className="relative z-10 bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/6 transition-all duration-300">
                  <span className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors block mb-4 leading-none">
                    {p.step}
                  </span>
                  <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS — light
      ══════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#f8fafc]">
        <div className="max-w-300 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 mb-3">
              Client stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a] mb-4">
              Trusted by Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-[#e5e7eb] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="shrink-0">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0a0a0a]">{t.name}</p>
                    <p className="text-xs text-[#9ca3af]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — dark gradient
      ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-32 px-6 bg-[#060a12] overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="relative max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-blue-400 mb-4">
            Ready to start?
          </span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Great</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto">
            Quality work, clear communication, and dependable support.
            That's our promise to every client.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://xtyletechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-200"
            >
              Visit Our Website
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 7h9M7.5 3l4 4-4 4"/>
              </svg>
            </Link>
            <a
              href="mailto:xtyletechnology@gmail.com.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an Email
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10 border-t border-white/8">
            {["Fast Delivery", "Mobile First", "Clean Code", "Free Consultation"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-slate-400 text-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer className="bg-[#040810] border-t border-white/6 px-6 py-10">
        <div className="max-w-300 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <Image src="/images/logo.png" alt="XTYLE" fill sizes="28px" className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[0.85rem] font-bold text-white tracking-tight">XTYLE</span>
              <span className="text-[0.55rem] font-medium tracking-[0.18em] text-slate-500 uppercase">Technology</span>
            </div>
          </Link>

          <p className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} XTYLE TECHNOLOGY · Darbhanga, Bihar
          </p>

          <div className="flex gap-5">
            {["#services", "#about", "#contact"].map((h) => (
              <Link key={h} href={h} className="text-slate-500 hover:text-slate-300 text-xs capitalize transition-colors">
                {h.replace("#", "")}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
