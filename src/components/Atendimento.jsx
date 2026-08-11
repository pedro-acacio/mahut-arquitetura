import { Laptop, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { ATENDIMENTO } from "../data";

export default function Atendimento() {
  return (
    <section id="atendimento" className="px-6 py-24 bg-marrom">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-areia/50 font-medium uppercase">
            Atendimento
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-areia mt-4">
            Onde você estiver, a Mahut chega
          </h2>
          <p className="mt-6 text-areia/75 leading-relaxed max-w-2xl mx-auto">
            {ATENDIMENTO}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-areia/90">
              <Laptop size={20} className="text-terracota" />
              <span className="text-sm">Acompanhamento remoto</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-areia/20" />
            <div className="flex items-center gap-3 text-areia/90">
              <MapPin size={20} className="text-terracota" />
              <span className="text-sm">Atendimento presencial em Fortaleza-CE</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
