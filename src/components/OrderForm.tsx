"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type OrderFormProps = {
  onClose: () => void;
};

type Result = "success" | "error" | null;

export default function OrderForm({ onClose }: OrderFormProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<Result>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      setResult(response.ok ? "success" : "error");
      if (response.ok) form.reset();
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    ["fullName", t.order.fullName, "text"],
    ["email", t.order.email, "email"],
    ["phone", t.order.phone, "tel"],
    ["address", t.order.address, "text"],
  ] as const;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#1E3A1E]/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-form-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto bg-[#FAFAF7] px-6 py-8 sm:px-10">
        <button
          type="button"
          onClick={onClose}
          aria-label={t.order.close}
          className="absolute right-5 top-5 text-2xl font-light text-[#5C5C50] hover:text-[#1E3A1E]"
        >
          ×
        </button>
        <h2 id="order-form-title" className="mb-7 pr-8 font-[family-name:var(--font-serif)] text-4xl font-light text-[#1E3A1E]">
          {t.order.title}
        </h2>
        {result === "success" ? (
          <p className="font-[family-name:var(--font-serif)] text-xl text-[#2C2C22]">{t.order.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />
            {fields.map(([name, label, type]) => (
              <label key={name} className="block font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.12em] text-[#3D7A3D]">
                {label}
                <input
                  name={name}
                  type={type}
                  required
                  className="mt-2 block w-full border-b border-[#C8C4B4] bg-transparent px-1 py-2 font-[family-name:var(--font-serif)] text-lg normal-case tracking-normal text-[#2C2C22] outline-none focus:border-[#3D7A3D]"
                />
              </label>
            ))}
            <label className="block font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.12em] text-[#3D7A3D]">
              {t.order.packages}
              <select
                name="packages"
                required
                defaultValue=""
                className="mt-2 block w-full border-b border-[#C8C4B4] bg-transparent px-1 py-2 font-[family-name:var(--font-serif)] text-lg normal-case tracking-normal text-[#2C2C22] outline-none focus:border-[#3D7A3D]"
              >
                <option value="" disabled>{t.order.selectOption}</option>
                {Array.from({ length: 20 }, (_, index) => index + 1).map((count) => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
              <span className="mt-1 block font-[family-name:var(--font-serif)] text-sm normal-case tracking-normal text-[#5C5C50]">
                {t.order.bottlesPerPackage}
              </span>
            </label>
            <label className="block font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.12em] text-[#3D7A3D]">
              {t.order.message} <span className="normal-case tracking-normal text-[#5C5C50]">({t.order.optional})</span>
              <textarea
                name="message"
                rows={3}
                className="mt-2 block w-full border border-[#C8C4B4] bg-transparent px-2 py-2 font-[family-name:var(--font-serif)] text-lg normal-case tracking-normal text-[#2C2C22] outline-none focus:border-[#3D7A3D]"
              />
            </label>
            {result === "error" && <p className="text-sm text-red-700" role="alert">{t.order.error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1E3A1E] px-7 py-3.5 font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.16em] text-[#FAFAF7] transition-colors hover:bg-[#3D7A3D] disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? "..." : t.order.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
