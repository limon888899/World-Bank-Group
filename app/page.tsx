export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center">
            <span className="text-amber-400 font-display text-lg">M</span>
          </div>
          <span className="font-display text-lg tracking-tight">
            Meridian <span className="text-slate-400 font-sans text-sm font-normal">Bank International</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-blue-950">Personal</a>
          <a href="#features" className="hover:text-blue-950">Business</a>
          <a href="#security" className="hover:text-blue-950">Security</a>
          <a href="#" className="hover:text-blue-950">About</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/login" className="hidden sm:block text-sm text-slate-600 hover:text-blue-950">
            Log in
          </a>
          <a
            href="/register"
            className="bg-blue-950 text-white text-sm px-5 py-2.5 rounded-full hover:bg-blue-900 transition"
          >
            Open an account
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-16 pb-24 bg-gradient-to-b from-slate-50 to-white">
        {/* signature: connection lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#0f172a" strokeWidth="1" fill="none">
            <path d="M100,250 Q400,80 700,180" />
            <path d="M150,380 Q450,300 800,120" />
            <path d="M50,150 Q350,250 900,300" />
          </g>
          <g fill="#f59e0b">
            <circle cx="100" cy="250" r="4" />
            <circle cx="700" cy="180" r="4" />
            <circle cx="150" cy="380" r="4" />
            <circle cx="800" cy="120" r="4" />
            <circle cx="900" cy="300" r="4" />
            <circle cx="50" cy="150" r="4" />
          </g>
        </svg>

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs tracking-widest uppercase text-amber-600 font-medium mb-5">
            Trusted in 190+ countries
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight mb-6">
            Banking that moves
            <br />
            with the world.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-9">
            Send, receive, and manage money across borders in seconds —
            backed by the security and reliability of a global bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-blue-950 text-white px-8 py-3.5 rounded-full text-base hover:bg-blue-900 transition"
            >
              Open a free account
            </a>
            <a
              href="#how"
              className="border border-slate-300 text-slate-700 px-8 py-3.5 rounded-full text-base hover:border-slate-400 transition"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          {[
            { stat: "190+", label: "Countries supported" },
            { stat: "2.4M+", label: "Active customers" },
            { stat: "$58B+", label: "Transferred yearly" },
            { stat: "24/7", label: "Live support" },
          ].map((item, i) => (
            <div key={i} className="text-center py-8 px-4">
              <p className="font-display text-2xl md:text-3xl text-blue-950">{item.stat}</p>
              <p className="text-slate-500 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-amber-600 font-medium">
            What you get
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">
            Everything for global money, in one account
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {[
            {
              title: "Global Transfers",
              desc: "Send money to any of 190+ countries in seconds, at real exchange rates with transparent fees.",
            },
            {
              title: "Multi-Currency Wallet",
              desc: "Hold and convert over 40 currencies in a single account, no separate accounts needed.",
            },
            {
              title: "Bill Payments",
              desc: "Pay electricity, internet, and utility bills in your local currency, anywhere you live.",
            },
            {
              title: "Mobile Top-Up",
              desc: "Instant mobile recharge for any carrier, in any country, in a few taps.",
            },
            {
              title: "Virtual Cards",
              desc: "Spend online globally with instant virtual cards you control from the app.",
            },
            {
              title: "Real-Time Alerts",
              desc: "Track every transaction the moment it happens, with full history and receipts.",
            },
          ].map((f, i) => (
            <div key={i}>
              <div className="w-10 h-10 rounded-lg bg-blue-950 mb-4 flex items-center justify-center">
                <span className="text-amber-400 font-display text-sm">{i + 1}</span>
              </div>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 md:px-12 py-24 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest uppercase text-amber-400 font-medium">
              Getting started
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-3">
              Three steps to bank without borders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Open your account", desc: "Sign up in minutes with your phone number and basic details." },
              { step: "02", title: "Add money", desc: "Fund your account from a local bank, card, or transfer." },
              { step: "03", title: "Send anywhere", desc: "Transfer to any country, pay bills, or spend with your virtual card." },
            ].map((s, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <p className="font-display text-amber-400 text-xl mb-3">{s.step}</p>
                <h3 className="font-display text-lg mb-2">{s.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="px-6 md:px-12 py-24 max-w-5xl mx-auto text-center">
        <span className="text-xs tracking-widest uppercase text-amber-600 font-medium">
          Security first
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 mb-6">
          Your money, protected at every step
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Every transaction is encrypted end-to-end and monitored in real time
          for fraud, so you can move money globally with confidence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600">
          {["Bank-grade encryption", "24/7 fraud monitoring", "Regulatory compliance", "PIN & biometric login"].map(
            (item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl py-6 px-3">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 bg-amber-50 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4">
          Ready to bank without borders?
        </h2>
        <p className="text-slate-600 mb-8">
          Join millions who already move money globally with Meridian.
        </p>
        <a
          href="/register"
          className="bg-blue-950 text-white px-8 py-3.5 rounded-full text-base hover:bg-blue-900 transition inline-block"
        >
          Open a free account
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-16 bg-slate-950 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <span className="font-display text-white text-lg">Meridian</span>
            <p className="mt-3 max-w-xs text-slate-500">
              Banking that moves with the world. Available in 190+ countries.
            </p>
          </div>
          <div>
            <p className="text-white mb-3">Product</p>
            <ul className="space-y-2">
              <li>Transfers</li>
              <li>Wallet</li>
              <li>Virtual Cards</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3">Company</p>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3">Legal</p>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-slate-500">
          © 2026 Meridian Bank International. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
