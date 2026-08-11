import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { PROJETOS } from "../data";

export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null); // index into PROJETOS
  const [imgIndex, setImgIndex] = useState(0);

  const project = openProject !== null ? PROJETOS[openProject] : null;

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenProject(null);
      if (e.key === "ArrowRight")
        setImgIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  return (
    <section id="projetos" className="px-6 py-24 bg-areia">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl">
          <span className="text-xs tracking-[0.2em] text-terracota font-medium uppercase">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-marrom mt-4">
            Ambientes projetados
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJETOS.filter((p) => p.images.length > 0).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <button
                onClick={() => {
                  setOpenProject(PROJETOS.indexOf(p));
                  setImgIndex(0);
                }}
                className="group block w-full text-left rounded-2xl overflow-hidden border border-marrom/10 bg-white/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-display text-lg text-marrom">{p.title}</h3>
                  <span className="text-xs text-marrom/60">
                    {p.images.length} {p.images.length === 1 ? "foto" : "fotos"}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {project && (
        <div
          className="fixed inset-0 z-[60] bg-marrom/95 flex items-center justify-center px-4"
          onClick={() => setOpenProject(null)}
        >
          <button
            className="absolute top-6 right-6 text-areia/80 hover:text-areia"
            onClick={() => setOpenProject(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-areia/70 hover:text-areia"
            onClick={(e) => {
              e.stopPropagation();
              setImgIndex((idx) => (idx - 1 + project.images.length) % project.images.length);
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[imgIndex]}
              alt={project.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-areia/80 text-sm mt-4">
              {project.title} — {imgIndex + 1} / {project.images.length}
            </p>
          </div>

          <button
            className="absolute right-4 md:right-8 text-areia/70 hover:text-areia"
            onClick={(e) => {
              e.stopPropagation();
              setImgIndex((idx) => (idx + 1) % project.images.length);
            }}
            aria-label="Próxima"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
