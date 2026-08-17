"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("phone", phone)
      .eq("pin", pin)
      .single();

    setLoading(false);

    if (fetchError || !data) {
      setError("Incorrect phone number or PIN");
      return;
    }

    localStorage.setItem("userId", data.id);
    localStorage.setItem("userName", data.name);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Meridian Bank International" className="h-10 w-auto" />
        </div>
        <h2 className="text-2xl font-display text-center text-blue-950 mb-6">
          Log In
        </h2>

        {error && (
          <p className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-slate-600 text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 234 567 8900"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label className="block text-slate-600 text-sm mb-1">PIN</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="4-digit PIN"
              maxLength={4}
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-3 rounded-lg hover:bg-blue-900 disabled:opacity-50 transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-center text-slate-500 mt-5 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-950 font-medium">
            Open one now
          </a>
        </p>
      </div>
    </main>
  );
}
