import logo from "../assets/logo-mono-cream.png";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, NAV_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-14 bg-marrom">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logo} alt="Mahut Arquitetura" className="h-9 w-auto opacity-90" />
          <p className="text-xs text-areia/50">Arquitetura que revela a sua essência.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-areia/70 hover:text-areia">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-areia/70">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-areia">
            {INSTAGRAM_HANDLE}
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-areia">
            {EMAIL}
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-areia/40 mt-10">
        © {new Date().getFullYear()} Mahut Arquitetura · Fortaleza-CE
      </p>
    </footer>
  );
}
