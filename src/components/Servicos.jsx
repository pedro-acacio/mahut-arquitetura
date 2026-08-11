import { Ruler, ClipboardList, HardHat, Plug } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICOS } from "../data";

const ICONS = [Ruler, ClipboardList, HardHat, Plug];

export default function Servicos() {
  return (
    <section id="servicos" className="px-6 py-24 bg-areia">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-terracota font-medium uppercase">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-marrom mt-4">
            Como podemos caminhar juntos
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {SERVICOS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full p-8 rounded-2xl border border-marrom/10 bg-white/40 hover:border-terracota/40 transition-colors">
                  <Icon className="text-terracota" size={26} strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-marrom mt-5">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-marrom/75 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
