import Reveal from "./Reveal";
import ConceitoLogo from "./ConceitoLogo";
import lara from "../assets/lara.jpeg";
import { CONCEITO_MAHUT, SOBRE_LARA } from "../data";

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="bg-oliva px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,260px)_1fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <ConceitoLogo />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs tracking-[0.2em] text-areia/60 font-medium uppercase">
              Conceito
            </span>
            <div className="mt-5 flex flex-col gap-4">
              {CONCEITO_MAHUT.map((paragrafo) => (
                <p key={paragrafo.slice(0, 24)} className="text-sm md:text-base text-areia/80 leading-relaxed">
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24 bg-areia">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src={lara}
              alt="Lara Silveira, arquiteta e urbanista à frente da Mahut Arquitetura"
              className="w-full max-w-sm mx-auto md:mx-0 rounded-2xl shadow-xl object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs tracking-[0.2em] text-terracota font-medium uppercase">
              Sobre a arquiteta
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-marrom mt-4">
              Lara Silveira
            </h2>
            <p className="mt-6 text-marrom/80 leading-relaxed">{SOBRE_LARA}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
