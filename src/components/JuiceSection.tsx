"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { tx } from "@/lib/tx";
import Accordion from "@/components/ui/Accordion";

const nutrients = [
  { name: { sr: "Energija", en: "Energy" }, value: "327", unit: "kcal" },
  { name: { sr: "Proteini", en: "Proteins" }, value: "12,63", unit: "g" },
  { name: { sr: "Ugljeni hidrati", en: "Carbohydrates" }, value: "71,18", unit: "g" },
  { name: { sr: "Šećeri", en: "Sugars" }, value: "0,41", unit: "g" },
  { name: { sr: "Dijetetska vlakna", en: "Dietary fibre" }, value: "12,2", unit: "g" },
  { name: { sr: "Masti", en: "Fats" }, value: "1,54", unit: "g" },
  { name: { sr: "Gvožđe", en: "Iron" }, value: "126", unit: "mg" },
  { name: { sr: "Kalijum", en: "Potassium" }, value: "363", unit: "mg" },
  { name: { sr: "Fosfor", en: "Phosphorus" }, value: "288", unit: "mg" },
  { name: { sr: "Kalcijum", en: "Calcium" }, value: "29", unit: "mg" },
  { name: { sr: "Vitamin E", en: "Vitamin E" }, value: "1,01", unit: "mg" },
  { name: { sr: "Niacin / B3", en: "Niacin / B3" }, value: "5,464", unit: "mg" },
  { name: { sr: "Folati", en: "Folates" }, value: "38", unit: "μg" },
  { name: { sr: "Cink", en: "Zinc" }, value: "2,65", unit: "mg" },
];

export default function JuiceSection() {
  const { language, t } = useLanguage();
  const j = t.juice;

  return (
    <section id="juice" className="bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          {j.label}
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <h2 className="font-[family-name:var(--font-serif)] text-[38px] md:text-[44px] font-light text-[#1E3A1E] leading-tight mb-12">
          {j.heading}
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {j.facts.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-[family-name:var(--font-serif)] text-[40px] md:text-[48px] leading-none font-light text-[#1E3A1E]">
                {value}
              </p>
              <p className="font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.16em] text-[#6B6B5E] mt-2 leading-[1.6]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-16">
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {tx(j.intro.p1)}
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {tx(j.intro.p2)}
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {j.intro.p3}
          </p>
        </div>

        <div className="mb-16 -mx-8 px-8">
          <Image
            src="/images/8. slider panacea.png"
            alt="Panacea Naturale Benefits"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        <Accordion id="juice-zeleno-zdravlje" heading={j.zelenoZdravlje.heading}>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            {tx(j.zelenoZdravlje.text)}
          </p>
        </Accordion>

        <Accordion id="juice-nutritivni-sastav" heading={j.nutritivniSastav.heading}>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light mb-10">
            {j.nutritivniSastav.intro}
          </p>
          <div className="border border-[#E4E2D8] rounded-sm overflow-hidden mb-6">
            <div className="grid grid-cols-2 bg-[#F2F0E8] px-4 py-2 border-b border-[#E4E2D8]">
              <p className="font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.18em] text-[#6B6B5E]">
                {j.nutritivniSastav.colNutrient}
              </p>
              <p className="font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.18em] text-[#6B6B5E] text-right">
                {j.nutritivniSastav.colPer100}
              </p>
            </div>
            {nutrients.map(({ name, value, unit }, i) => (
              <div
                key={name.sr}
                className={`grid grid-cols-2 px-4 py-2 border-b border-[#E4E2D8] last:border-0 ${
                  i % 2 === 0 ? "bg-[#FAFAF7]" : "bg-[#F7F5EE]"
                }`}
              >
                <p className="font-[family-name:var(--font-serif)] text-[14px] text-[#2C2C22] font-light">
                  {name[language]}
                </p>
                <p className="font-[family-name:var(--font-serif)] text-[14px] text-[#1E3A1E] font-medium text-right">
                  {value}{" "}
                  <span className="font-light text-[#6B6B5E]">{unit}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-[family-name:var(--font-nav)] text-[10px] leading-[1.7] tracking-[0.06em] text-[#8C8C7A] italic">
            {j.nutritivniSastav.note}
          </p>
        </Accordion>

        <Accordion id="juice-hladno-cedjenje" heading={j.hladnoCedjenje.heading}>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {j.hladnoCedjenje.p1}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {j.hladnoCedjenje.p2}
            </p>
          </div>
        </Accordion>

        <Accordion id="juice-zasto-biraju" heading={j.zastoBiraju.heading}>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {j.zastoBiraju.p1}
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              {j.zastoBiraju.p2}
            </p>
          </div>
        </Accordion>

      </div>
    </section>
  );
}
