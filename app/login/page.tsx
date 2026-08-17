"use client";
import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`লগইন চেষ্টা: ${phone}`);
    // এখানে পরে আসল অথেন্টিকেশন লজিক যুক্ত হবে
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          লগইন করুন
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">মোবাইল নম্বর</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">পিন</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="৪-সংখ্যার পিন"
              maxLength={4}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
          >
            লগইন
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          অ্যাকাউন্ট নেই?{" "}
          <a href="/register" className="text-blue-700 font-medium">
            রেজিস্ট্রেশন করুন
          </a>
        </p>
      </div>
    </main>
  );
}
