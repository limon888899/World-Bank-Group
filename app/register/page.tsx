"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", phone: "", pin: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`রেজিস্ট্রেশন সম্পন্ন: ${form.name}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          নতুন অ্যাকাউন্ট
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">পূর্ণ নাম</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">মোবাইল নম্বর</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">পিন সেট করুন</label>
            <input
              type="password"
              name="pin"
              onChange={handleChange}
              maxLength={4}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
          >
            রেজিস্ট্রেশন করুন
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          অ্যাকাউন্ট আছে?{" "}
          <a href="/login" className="text-blue-700 font-medium">
            লগইন করুন
          </a>
        </p>
      </div>
    </main>
  );
}
