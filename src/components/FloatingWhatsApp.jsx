import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Oi! Vim pela landing page da Mahut Arquitetura."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-oliva text-areia shadow-xl hover:bg-terracota transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
