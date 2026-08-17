"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    accountType: "personal",
    currency: "USD",
    pin: "",
    confirmPin: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.pin !== form.confirmPin) {
      setError("PIN and Confirm PIN do not match");
      return;
    }
    if (!agreed) {
      setError("Please accept the Terms of Service to continue");
      return;
    }

    setLoading(true);

    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("phone", form.phone)
      .single();

    if (existing) {
      setError("An account with this phone number already exists");
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from("users").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      date_of_birth: form.dob,
      country: form.country,
      account_type: form.accountType,
      currency: form.currency,
      pin: form.pin,
      balance: 0,
    });

    setLoading(false);

    if (insertError) {
      setError("Registration failed. Please try again.");
      console.error(insertError);
      return;
    }

    alert("Account created successfully! Please log in.");
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Meridian Bank International" className="h-10 w-auto" />
        </div>
        <h2 className="text-2xl font-display text-center text-blue-950 mb-1">
          Open an Account
        </h2>
        <p className="text-center text-slate-500 text-sm mb-6">
          It only takes a few minutes
        </p>

        {error && (
          <p className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-600 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          <div>
            <label className="block text-slate-600 text-sm mb-1">Country of Residence</label>
            <select
              name="country"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
              required
              defaultValue=""
            >
              <option value="" disabled>Select your country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="India">India</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Singapore">Singapore</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 text-sm mb-1">Account Type</label>
              <select
                name="accountType"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                defaultValue="personal"
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 text-sm mb-1">Currency</label>
              <select
                name="currency"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                defaultValue="USD"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="BDT">BDT (৳)</option>
                <option value="AED">AED (د.إ)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 text-sm mb-1">Set PIN</label>
              <input
                type="password"
                name="pin"
                onChange={handleChange}
                maxLength={4}
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label className="block text-slate-600 text-sm mb-1">Confirm PIN</label>
              <input
                type="password"
                name="confirmPin"
                onChange={handleChange}
                maxLength={4}
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-950 text-white py-3 rounded-lg hover:bg-blue-900 disabled:opacity-50 transition"
          >
            {loading ? "Creating account..." : "Open Account"}
          </button>
        </form>

        <p className="text-center text-slate-500 mt-5 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-950 font-medium">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
