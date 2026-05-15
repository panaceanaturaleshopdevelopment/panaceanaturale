export default function StockistsSection() {
  return (
    <section id="where" className="bg-[#FAFAF7]">
      <div className="max-w-2xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          Dostupnost
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-14">

          {/* Map placeholder */}
          <div>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D] mb-6">
              Mapa prodajnih mesta
            </p>
            <div className="w-full h-72 bg-[#F2F0E8] border border-[#E4E2D8] rounded-sm flex items-center justify-center">
              <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.2em] text-[#B8B8A8]">
                Mapa dolazi uskoro
              </p>
            </div>
          </div>

          {/* Order by phone */}
          <div className="border-t border-[#E4E2D8] pt-12">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D] mb-6">
              Poruči telefonom
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light mb-6">
              Dostupni smo svakog radnog dana od 9 do 20h. Poručite svoj sok od pšenične trave pozivom na naš broj telefona ili nam pošaljite poruku i odgovorićemo u najkraćem mogućem roku.
            </p>
            <a
              href="tel:+381677208129"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-nav)] text-[12px] uppercase tracking-[0.18em] text-[#1E3A1E] hover:text-[#3D7A3D] transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.19 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              +381 67 7208 129
            </a>
          </div>

          {/* Order by email */}
          <div className="border-t border-[#E4E2D8] pt-12">
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.22em] text-[#3D7A3D] mb-6">
              Poruči emailom
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light mb-8">
              Pošaljite nam poruku i odgovorićemo u najkraćem mogućem roku.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="Vaše ime"
                    className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none"
                  />
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    disabled
                    placeholder="vasa@email.com"
                    className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.18em] text-[#6B6B5E] mb-2">
                  Poruka
                </label>
                <textarea
                  disabled
                  placeholder="Vaša poruka ili porudžbina..."
                  rows={5}
                  className="w-full bg-[#F2F0E8] border border-[#E4E2D8] px-4 py-3 text-sm text-[#2C2C22] placeholder:text-[#B8B8A8] outline-none rounded-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled
                className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.18em] text-[#FAFAF7] bg-[#1E3A1E] px-8 py-3.5 opacity-50 cursor-not-allowed"
              >
                Pošalji poruku
              </button>

              <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.15em] text-[#B8B8A8]">
                Forma uskoro dostupna
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
