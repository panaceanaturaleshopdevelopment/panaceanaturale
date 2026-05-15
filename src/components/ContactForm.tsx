"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-10">
        <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#1E3A1E] font-light">
          Poruka je uspešno poslata. Odgovorićemo vam u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
            Ime i prezime
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Vaše ime"
            className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none focus:border-[#3D7A3D] transition-colors"
          />
        </div>
        <div>
          <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
            Email adresa
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="vasa@email.com"
            className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none focus:border-[#3D7A3D] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
          Poruka
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Vaša poruka ili porudžbina..."
          rows={5}
          className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none resize-none focus:border-[#3D7A3D] transition-colors"
        />
      </div>

      {status === "error" && (
        <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.15em] text-red-500">
          Greška pri slanju. Pokušajte ponovo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.18em] text-[#FAFAF7] bg-[#1E3A1E] px-8 py-3.5 hover:bg-[#3D7A3D] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Slanje..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
