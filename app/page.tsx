export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-700">Meridian Bank International</h1>
        <div className="space-x-4">
          <a href="/login" className="text-gray-600 hover:text-blue-700">লগইন</a>
          <a href="/register" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            রেজিস্ট্রেশন
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          দ্রুত, নিরাপদ, বিশ্বব্যাপী ব্যাংকিং
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          টাকা পাঠান, বিল পে করুন, রিচার্জ করুন — যেকোনো দেশে, যেকোনো সময়
        </p>
        <a href="/register" className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-800 inline-block">
          এখনই শুরু করুন
        </a>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "সেন্ড মানি", desc: "যেকোনো দেশে যেকোনো সময় টাকা পাঠান" },
          { title: "বিল পে", desc: "ইলেকট্রিসিটি, গ্যাস, ইন্টারনেট বিল দিন সহজে" },
          { title: "মোবাইল রিচার্জ", desc: "সব অপারেটরে ইনস্ট্যান্ট রিচার্জ" },
        ].map((f, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t">
        © 2026 Meridian Bank International. সর্বস্বত্ব সংরক্ষিত।
      </footer>
    </main>
  );
}
