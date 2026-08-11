import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/logo-transparent.png";
import { NAV_LINKS, WHATSAPP_NUMBER } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(232,222,211,0.92)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: solid ? "1px solid rgba(84,72,64,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Mahut Arquitetura" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-marrom/80 hover:text-terracota transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-oliva text-areia hover:bg-terracota transition-colors"
          >
            <MessageCircle size={16} />
            Fale conosco
          </a>
        </nav>

        <button
          className="md:hidden text-marrom"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-areia/98">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-marrom text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium bg-oliva text-areia"
          >
            <MessageCircle size={16} />
            Chamar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
