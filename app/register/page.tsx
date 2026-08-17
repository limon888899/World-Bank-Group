"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", pin: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // ফোন নম্বর আগে থেকে আছে কিনা চেক করুন
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("phone", form.phone)
      .single();

    if (existing) {
      setError("এই নম্বরে ইতিমধ্যে অ্যাকাউন্ট আছে");
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from("users").insert({
      name: form.name,
      phone: form.phone,
      pin: form.pin,
      balance: 0,
    });

    setLoading(false);

    if (insertError) {
      setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে, আবার চেষ্টা করুন");
      console.error(insertError);
      return;
    }

    alert("রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন");
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          নতুন অ্যাকাউন্ট
        </h2>

        {error && (
          <p className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

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
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 disabled:opacity-50"
          >
            {loading ? "অপেক্ষা করুন..." : "রেজিস্ট্রেশন করুন"}
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
