import { useState } from "react";
import { Send, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import InstagramIcon from "./InstagramIcon";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from "../data";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", mensagem: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome || "..."}. ${form.mensagem}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="px-6 py-24 bg-areia">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-marrom/70">Nome</label>
              <input
                required
                type="text"
                value={form.nome}
                onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                className="mt-1.5 w-full px-4 py-3 rounded-lg border border-marrom/15 bg-white/60 text-marrom outline-none focus:border-terracota transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-marrom/70">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
                placeholder="Conte um pouco sobre o seu projeto..."
                className="mt-1.5 w-full px-4 py-3 rounded-lg border border-marrom/15 bg-white/60 text-marrom outline-none focus:border-terracota transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-oliva text-areia hover:bg-terracota transition-colors"
            >
              <Send size={16} />
              Enviar pelo WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
