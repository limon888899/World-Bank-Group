"use client";
import { useState } from "react";

export default function Dashboard() {
  const [balance] = useState(12500);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [sendAmount, setSendAmount] = useState("");
  const [sendNumber, setSendNumber] = useState("");

  const transactions = [
    { id: 1, type: "সেন্ড মানি", to: "01712345678", amount: -500, date: "১৭ আগস্ট" },
    { id: 2, type: "রিচার্জ", to: "নিজ নম্বর", amount: -100, date: "১৬ আগস্ট" },
    { id: 3, type: "টাকা যোগ", to: "ব্যাংক থেকে", amount: 5000, date: "১৫ আগস্ট" },
    { id: 4, type: "বিল পে", to: "DESCO", amount: -750, date: "১৪ আগস্ট" },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`৳${sendAmount} পাঠানো হয়েছে ${sendNumber} নম্বরে (ডেমো)`);
    setShowSendMoney(false);
    setSendAmount("");
    setSendNumber("");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-700">YourBrandName</h1>
        <a href="/login" className="text-gray-600 hover:text-blue-700">লগআউট</a>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Balance Card */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 shadow-md">
          <p className="text-blue-100 mb-1">বর্তমান ব্যালেন্স</p>
          <h2 className="text-4xl font-bold">৳{balance.toLocaleString()}</h2>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "সেন্ড মানি", icon: "💸", action: () => setShowSendMoney(true) },
            { label: "রিচার্জ", icon: "📱", action: () => alert("রিচার্জ পেজ (পরে যুক্ত হবে)") },
            { label: "বিল পে", icon: "🧾", action: () => alert("বিল পে পেজ (পরে যুক্ত হবে)") },
            { label: "টাকা যোগ", icon: "➕", action: () => alert("টাকা যোগ পেজ (পরে যুক্ত হবে)") },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition flex flex-col items-center gap-1"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Send Money Modal */}
        {showSendMoney && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <h3 className="text-lg font-bold text-blue-700 mb-4">সেন্ড মানি</h3>
              <form onSubmit={handleSend} className="space-y-4">
                <input
                  type="tel"
                  placeholder="প্রাপকের নম্বর"
                  value={sendNumber}
                  onChange={(e) => setSendNumber(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="number"
                  placeholder="টাকার পরিমাণ"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSendMoney(false)}
                    className="flex-1 border py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                  >
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                  >
                    পাঠান
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Transaction History */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-gray-700 mb-3">সাম্প্রতিক লেনদেন</h3>
          <div className="space-y-3">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                <div>
                  <p className="text-gray-800 font-medium">{t.type}</p>
                  <p className="text-gray-400 text-sm">{t.to} · {t.date}</p>
                </div>
                <p className={`font-semibold ${t.amount > 0 ? "text-green-600" : "text-red-500"}`}>
                  {t.amount > 0 ? "+" : ""}৳{Math.abs(t.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
