import Reveal from "./Reveal";
import lara from "../assets/lara.jpeg";
import { CONCEITO_MAHUT, SOBRE_LARA } from "../data";

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="bg-oliva px-6 py-24">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.2em] text-areia/60 font-medium uppercase">
            Conceito
          </span>
          <p className="font-display text-2xl md:text-3xl text-areia leading-relaxed mt-6">
            {CONCEITO_MAHUT}
          </p>
        </Reveal>
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
