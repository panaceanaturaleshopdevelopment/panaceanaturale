export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F2F0E8] min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-8 py-28">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          O nama
        </p>

        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-8">
          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Preduzetnička radnja Panacea naturale je malo porodično preduzeće iz
            Čačka, koje se bavi proizvodnjom i prodajom hladno ceđenog soka od
            pšenične trave. Proizvodnjom soka se bavimo od 2013. godine. U
            početku, sok smo spravljali isključivo za lične potrebe, ali je
            vremenom to postalo naš porodični posao. Smatrali smo da sa svakim
            treba da podelimo ono što je značajno unapredilo naše zdravlje, da
            svako treba da ima koristi od našeg rada i iskustava.
          </p>

          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Naš cilj je da budemo što prisutniji i što zastupljeniji na domaćem
            tržištu, kako bi naš proizvod bio dostupan svakom potencijalnom
            kupcu, odnosno kako bi što veći broj ljudi mogao osetiti sve one
            pozitivne efekte soka, koji je sa razlogom nazvan{" "}
            <em className="not-italic font-medium text-[#1E3A1E]">
              zeleno zdravlje
            </em>
            .
          </p>
        </div>

      </div>
    </section>
  );
}
