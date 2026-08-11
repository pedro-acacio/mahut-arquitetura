import { MessageCircle, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_NUMBER, PROJETOS } from "../data";

const heroImage = PROJETOS.find((p) => p.slug === "Sala-NS")?.images[0];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden"
    >
      <svg
        className="absolute -top-10 right-[-10%] w-[70%] max-w-3xl opacity-40 pointer-events-none"
        viewBox="0 0 1090 500"
        fill="none"
      >
        <path
          d="M40 300c60-70 120-70 180 0s120 70 180 0 120-160 180-160 120 90 180 90 120-60 180-60"
          stroke="#544840"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="220" cy="300" r="14" fill="#a15d3f" />
        <circle cx="580" cy="140" r="18" fill="#464b2e" />
      </svg>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-terracota font-medium uppercase">
            Mahut Arquitetura
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4 text-marrom">
            Arquitetura que revela a sua essência.
          </h1>
          <p className="mt-6 text-base md:text-lg text-marrom/80 max-w-md leading-relaxed">
            Projetos residenciais e de interiores que unem técnica, sensibilidade
            e neuroarquitetura — pensados para acolher, servir e acompanhar
            cada fase da vida de quem os habita.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-oliva text-areia hover:bg-terracota transition-colors"
            >
              <MessageCircle size={17} />
              Iniciar um projeto
            </a>
            <a
              href="#projetos"
              className="flex items-center gap-2 text-sm text-marrom/80 hover:text-terracota transition-colors"
            >
              Ver projetos
              <ArrowDown size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <img
              src={heroImage}
              alt="Projeto de interiores assinado pela Mahut Arquitetura"
              className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-areia border border-marrom/10 rounded-xl px-6 py-4 shadow-lg">
              <p className="font-display text-2xl text-terracota">10+</p>
              <p className="text-xs text-marrom/70 mt-1">ambientes projetados</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
