export default function UsageSection() {
  return (
    <section id="usage" className="min-h-screen bg-[#FAFAF7] flex items-center">
      <div className="max-w-2xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          Upotreba
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-10">
          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light">
            Pošto čovekov probavni sistem nije u stanju da u potpunosti razgradi
            vlakna listova trave, veći deo soka ostao bi zarobljen u listovima,
            pa ga naš organizam ne bi mogao iskoristiti. Upravo zato se pšenična
            trava cedi, pa se tako dobijen sok konzumira. Hladno ceđeni sok se
            zamrzava odmah po ceđenju, kako bi se očuvali svi hranljivi sastojci
            u njemu. Sok ne sadrži bilo kakve aditive, veštačke boje ili
            konzervanse —{" "}
            <span className="font-medium text-[#1E3A1E]">on je 100% prirodan</span>.
            To je razlog zašto se on čuva u zamrzivaču i zamrznut transportuje
            do krajnjeg konzumenta.
          </p>

          <div className="border-t border-[#E4E2D8] pt-10">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D] mb-6">
              Kako koristiti
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light">
              Flašice soka od pšenične trave čuvaju se u zamrzivaču. Iz
              zamrzivača se vade neposredno pre upotrebe. Sok se otapa na
              sobnoj temperaturi ili u posudi sa mlakom vodom{" "}
              <span className="font-medium text-[#1E3A1E]">(ne toplijom od 39°C)</span>.
              Važno je da se sok popije{" "}
              <span className="font-medium text-[#1E3A1E]">odmah po otapanju</span>,
              kako bi se izbegao proces oksidacije kojim sok gubi deo vitamina
              i enzima, menjajući pritom ukus i boju.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
