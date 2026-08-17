"use client";
import { useState } from "react";

export default function Dashboard() {
  const [balance] = useState(12500);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [sendAmount, setSendAmount] = useState("");
  const [sendNumber, setSendNumber] = useState("");

  const transactions = [
    { id: 1, type: "Send Money", to: "+1 234 567 8900", amount: -500, date: "Aug 17" },
    { id: 2, type: "Mobile Recharge", to: "Own number", amount: -100, date: "Aug 16" },
    { id: 3, type: "Add Money", to: "From bank", amount: 5000, date: "Aug 15" },
    { id: 4, type: "Bill Payment", to: "Electricity Co.", amount: -750, date: "Aug 14" },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`$${sendAmount} sent to ${sendNumber} (demo)`);
    setShowSendMoney(false);
    setSendAmount("");
    setSendNumber("");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Meridian Bank International" className="h-8 w-auto" />
          <h1 className="text-xl font-display text-blue-950">Meridian Bank International</h1>
        </div>
        <a href="/login" className="text-slate-600 hover:text-blue-950 text-sm">
          Log out
        </a>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-blue-950 text-white rounded-2xl p-6 shadow-md">
          <p className="text-slate-300 mb-1 text-sm">Current Balance</p>
          <h2 className="font-display text-4xl">${balance.toLocaleString()}</h2>
        </div>

        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "Send Money", icon: "💸", action: () => setShowSendMoney(true) },
            { label: "Recharge", icon: "📱", action: () => alert("Recharge page (coming soon)") },
            { label: "Bill Pay", icon: "🧾", action: () => alert("Bill Pay page (coming soon)") },
            { label: "Add Money", icon: "➕", action: () => alert("Add Money page (coming soon)") },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition flex flex-col items-center gap-1"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs text-slate-600">{item.label}</span>
            </button>
          ))}
        </div>

        {showSendMoney && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
              <h3 className="text-lg font-display text-blue-950 mb-4">Send Money</h3>
              <form onSubmit={handleSend} className="space-y-4">
                <input
                  type="tel"
                  placeholder="Recipient's phone number"
                  value={sendNumber}
                  onChange={(e) => setSendNumber(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSendMoney(false)}
                    className="flex-1 border py-2.5 rounded-lg text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-950 text-white py-2.5 rounded-lg hover:bg-blue-900"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-display text-lg text-slate-800 mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                <div>
                  <p className="text-slate-800 font-medium">{t.type}</p>
                  <p className="text-slate-400 text-sm">{t.to} · {t.date}</p>
                </div>
                <p className={`font-semibold ${t.amount > 0 ? "text-green-600" : "text-red-500"}`}>
                  {t.amount > 0 ? "+" : ""}${Math.abs(t.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
