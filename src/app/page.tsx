const sections = [
  { id: "home", label: "Hero" },
  { id: "about", label: "O nama / About us" },
  { id: "juice", label: "O soku / About the juice" },
  { id: "usage", label: "Upotreba / How to use" },
  { id: "where", label: "Gde pronaći / Where to find" },
  { id: "contact", label: "Kontakt / Contact" },
];

export default function Home() {
  return (
    <>
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="min-h-screen flex items-center justify-center border-b border-gray-100"
        >
          <span className="text-2xl font-light text-gray-400">{s.label}</span>
        </section>
      ))}
    </>
  );
}
