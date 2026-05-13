const facts = [
  { value: "100%", label: "čist sok od pšenične trave" },
  { value: "30 ml", label: "preporučena dnevna količina" },
  { value: "10–12", label: "dana starosti biljke pri berbi" },
];

const nutrients = [
  { name: "Energija", value: "327", unit: "kcal" },
  { name: "Proteini", value: "12,63", unit: "g" },
  { name: "Ugljeni hidrati", value: "71,18", unit: "g" },
  { name: "Šećeri", value: "0,41", unit: "g" },
  { name: "Dijetetska vlakna", value: "12,2", unit: "g" },
  { name: "Masti", value: "1,54", unit: "g" },
  { name: "Gvožđe", value: "126", unit: "mg" },
  { name: "Kalijum", value: "363", unit: "mg" },
  { name: "Fosfor", value: "288", unit: "mg" },
  { name: "Kalcijum", value: "29", unit: "mg" },
  { name: "Vitamin E", value: "1,01", unit: "mg" },
  { name: "Niacin / B3", value: "5,464", unit: "mg" },
  { name: "Folati", value: "38", unit: "μg" },
  { name: "Cink", value: "2,65", unit: "mg" },
];

const benefits = [
  "raznovrsnoj i uravnoteženoj ishrani,",
  "aktivnom načinu života,",
  "svakodnevnoj energiji i vitalnosti,",
  "osećaju svežine i blagostanja,",
  "unosu prirodnih biljnih sastojaka.",
];

export default function JuiceSection() {
  return (
    <section id="juice" className="bg-[#FAFAF7]">
      <div className="max-w-2xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          O soku
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <h2 className="font-[family-name:var(--font-serif)] text-[38px] md:text-[44px] font-light text-[#1E3A1E] leading-tight mb-12">
          O soku od pšenične trave
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {facts.map(({ value, label }) => (
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

        <div className="space-y-8 mb-24">
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Sok od pšenične trave dobija se hladnim ceđenjem mladih izdanaka
            pšenice, najčešće starih između 10 i 12 dana. Za proizvodnju
            koristimo pažljivo uzgojenu pšeničnu travu od{" "}
            <span className="font-medium text-[#1E3A1E]">organske spelte</span>,
            ubranu u fazi kada je biljka bogata svojim prirodnim zelenim
            sastojcima.
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Odmah nakon ceđenja, sok se brzo zamrzava kako bi se što bolje
            očuvali njegova svežina, prirodna boja i nutritivna svojstva. Ne
            pasterizuje se, ne suši i ne sadrži{" "}
            <span className="font-medium text-[#1E3A1E]">
              aditive, veštačke boje ni konzervanse
            </span>{" "}
            — u flašici se nalazi samo čist sok od pšenične trave.
          </p>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Pšenična trava prirodno sadrži hlorofil, vitamine, minerale,
            enzime, aminokiseline i antioksidativna jedinjenja. Zbog toga se
            sok od pšenične trave u literaturi često opisuje kao nutritivno
            bogata funkcionalna namirnica.
          </p>
        </div>

        <div id="juice-zeleno-zdravlje" className="mb-24">
          <div className="border-t border-[#E4E2D8] pt-10 mb-10">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D]">
              Zašto &bdquo;zeleno zdravlje&ldquo;?
            </p>
          </div>
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Prepoznatljiva intenzivno zelena boja soka potiče od{" "}
            <span className="font-medium text-[#1E3A1E]">hlorofila</span> —
            prirodnog pigmenta koji se nalazi u zelenim biljkama. Pored
            hlorofila, sok od pšenične trave sadrži i antioksidativna
            jedinjenja, vitamine i minerale, zbog čega ga mnogi koriste kao
            deo uravnotežene ishrane i zdravih životnih navika.
          </p>
        </div>

        <div id="juice-nutritivni-sastav" className="mb-24">
          <div className="border-t border-[#E4E2D8] pt-10 mb-10">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D]">
              Nutritivni sastav
            </p>
          </div>

          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light mb-10">
            Prema podacima iz naučne literature, sok od pšenične trave može
            sadržati značajne količine prirodnih nutrijenata. U prikazu
            nutritivnog profila na 100 ml navode se, između ostalog:
          </p>

          <div className="border border-[#E4E2D8] rounded-sm overflow-hidden mb-6">
            <div className="grid grid-cols-2 bg-[#F2F0E8] px-4 py-2 border-b border-[#E4E2D8]">
              <p className="font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.18em] text-[#6B6B5E]">
                Nutrijent
              </p>
              <p className="font-[family-name:var(--font-nav)] text-[9px] uppercase tracking-[0.18em] text-[#6B6B5E] text-right">
                na 100 ml
              </p>
            </div>
            {nutrients.map(({ name, value, unit }, i) => (
              <div
                key={name}
                className={`grid grid-cols-2 px-4 py-2 border-b border-[#E4E2D8] last:border-0 ${
                  i % 2 === 0 ? "bg-[#FAFAF7]" : "bg-[#F7F5EE]"
                }`}
              >
                <p className="font-[family-name:var(--font-serif)] text-[14px] text-[#2C2C22] font-light">
                  {name}
                </p>
                <p className="font-[family-name:var(--font-serif)] text-[14px] text-[#1E3A1E] font-medium text-right">
                  {value}{" "}
                  <span className="font-light text-[#6B6B5E]">{unit}</span>
                </p>
              </div>
            ))}
          </div>

          <p className="font-[family-name:var(--font-nav)] text-[10px] leading-[1.7] tracking-[0.06em] text-[#8C8C7A] italic">
            Napomena: nutritivne vrednosti mogu varirati u zavisnosti od sorte,
            uslova uzgoja, starosti biljke, načina obrade i čuvanja. Navedene
            vrednosti su podaci iz objavljene naučne literature, a ne
            laboratorijska deklaracija konkretnog proizvoda.
          </p>
        </div>

        <div id="juice-hladno-cedjenje" className="mb-24">
          <div className="border-t border-[#E4E2D8] pt-10 mb-10">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D]">
              Hladno ceđenje i brzo zamrzavanje
            </p>
          </div>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              Hladno ceđeni sok zadržava prirodan, svež oblik biljke, bez
              potrebe za sušenjem ili termičkom obradom. Brzo zamrzavanje
              neposredno nakon ceđenja pomaže očuvanju prirodnih sastojaka i
              svežine soka, bez dodavanja konzervanasa.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              Upravo zato se sok čuva u zamrzivaču i do korisnika stiže u
              zamrznutom stanju.
            </p>
          </div>
        </div>

        <div id="juice-zasto-biraju">
          <div className="border-t border-[#E4E2D8] pt-10 mb-10">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D]">
              Zašto ljudi biraju sok od pšenične trave?
            </p>
          </div>
          <div className="space-y-8">
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              Mnogi ga koriste kao jednostavan način da u svakodnevnu rutinu
              unesu više svežih biljnih nutrijenata.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              Najčešće se bira kao podrška:
            </p>
            <ul className="space-y-3 pl-1">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light"
                >
                  <span className="mt-[0.65em] w-1 h-1 rounded-full bg-[#3D7A3D] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
              Sok od pšenične trave{" "}
              <span className="font-medium text-[#1E3A1E]">
                nije lek i ne zamenjuje medicinsku terapiju
              </span>
              , ali može biti deo pažljivo odabranih zdravih životnih navika.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
