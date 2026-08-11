import { Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import InstagramIcon from "./InstagramIcon";
import SolicitacaoForm from "./SolicitacaoForm";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from "../data";

export default function Contato() {
  return (
    <section id="contato" className="px-6 py-24 bg-areia">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,300px)_1fr] gap-14 items-start">
        <Reveal>
          <span className="text-xs tracking-[0.2em] text-terracota font-medium uppercase">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-marrom mt-4">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mt-5 text-marrom/75 leading-relaxed">
            Conte um pouco sobre o que você tem em mente. O primeiro passo é
            uma conversa — o resto a gente constrói juntos.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-marrom/85 hover:text-terracota transition-colors"
            >
              <MessageCircle size={18} className="text-terracota" />
              +55 85 9 9784-4669
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-marrom/85 hover:text-terracota transition-colors"
            >
              <InstagramIcon size={18} className="text-terracota" />
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-marrom/85 hover:text-terracota transition-colors"
            >
              <Mail size={18} className="text-terracota" />
              {EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SolicitacaoForm />
        </Reveal>
      </div>
    </section>
  );
}
