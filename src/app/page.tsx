import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import JuiceSection from "@/components/JuiceSection";
import UsageSection from "@/components/UsageSection";

const placeholders = [
  { id: "where", label: "Dostupnost / Stockists", bg: "#FAFAF7" },
  { id: "contact", label: "Kontakt / Contact", bg: "#F2F0E8" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <JuiceSection />

      <UsageSection />

      {placeholders.map((s) => (
        <section
          key={s.id}
          id={s.id}
          style={{ backgroundColor: s.bg }}
          className="min-h-screen flex items-center justify-center"
        >
          <span className="text-2xl font-light text-[#6B6B5E]">{s.label}</span>
        </section>
      ))}
    </>
  );
}
