import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import UsageSection from "@/components/UsageSection";

const placeholders = [
  { id: "juice", label: "O soku / About the juice" },
  { id: "where", label: "Gde pronaći / Where to find" },
  { id: "contact", label: "Kontakt / Contact" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <UsageSection />

      {placeholders.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="min-h-screen flex items-center justify-center border-b border-[#E4E2D8]"
        >
          <span className="text-2xl font-light text-[#6B6B5E]">{s.label}</span>
        </section>
      ))}
    </>
  );
}
