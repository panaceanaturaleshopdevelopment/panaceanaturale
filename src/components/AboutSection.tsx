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
            Panacea Naturale je porodična priča iz Čačka, nastala iz ličnog
            iskustva i želje da se prirodna podrška zdravlju približi što
            većem broju ljudi.
          </p>

          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Od 2013. godine proizvodimo hladno ceđeni sok od pšenične trave —
            najpre za sebe i svoju porodicu, a zatim i za sve one koji žele da
            u svoju svakodnevicu unesu svež, prirodan i pažljivo pripremljen
            proizvod.
          </p>

          <p className="font-[family-name:var(--font-serif)] text-[20px] leading-[1.9] text-[#2C2C22] font-light">
            Vodimo se jednostavnom idejom: da kvalitetan sok od pšenične trave,
            poznat i kao{" "}
            <em className="not-italic font-medium text-[#1E3A1E]">
              zeleno zdravlje
            </em>
            , bude dostupan što većem broju ljudi širom Srbije.
          </p>
        </div>

      </div>
    </section>
  );
}
