export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-[#FAFAF7] flex items-center">
      <div className="max-w-2xl mx-auto px-8 py-28 w-full">

        <p className="font-[family-name:var(--font-nav)] text-[11px] uppercase tracking-[0.25em] text-[#3D7A3D] mb-6">
          Panacea Naturale
        </p>
        <div className="w-10 h-px bg-[#3D7A3D] mb-12" />

        <div className="space-y-8 mb-16">
          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light">
            Sok od pšenične trave dobija se hladnim ceđenjem pšeničnih izdanaka,
            starih između 10 i 12 dana. Pšenična trava koja se koristi u
            proizvodnji soka uzgojena je od{" "}
            <span className="font-medium text-[#1E3A1E]">organske spelte</span>.
          </p>

          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light">
            Odmah po ceđenju, sok se zamrzava, jer je samo na ovaj način moguće
            očuvati oko{" "}
            <span className="font-medium text-[#1E3A1E]">97% nutritivnih vrednosti</span>{" "}
            pšenične trave. U tome i jeste velika prednost soka u odnosu na prah
            od osušene pšenične trave.
          </p>

          <p className="font-[family-name:var(--font-serif)] text-[21px] leading-[1.9] text-[#2C2C22] font-light">
            Naučno je dokazano da je sok od pšenične trave najbolja stvar za
            prevenciju razvijanja kancerogenih ćelija u organizmu i da za{" "}
            <span className="font-medium text-[#1E3A1E]">95% umanjuje rizik</span>{" "}
            od dobijanja tumora.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-[#E4E2D8] pt-12">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-[56px] leading-none font-light text-[#1E3A1E] mb-3">
              97%
            </p>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.2em] text-[#6B6B5E]">
              nutritivnih vrednosti sačuvano
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-serif)] text-[56px] leading-none font-light text-[#1E3A1E] mb-3">
              95%
            </p>
            <p className="font-[family-name:var(--font-nav)] text-[10px] uppercase tracking-[0.2em] text-[#6B6B5E]">
              manji rizik od tumora
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
