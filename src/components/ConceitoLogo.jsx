import { useEffect, useRef, useState } from "react";
import logoMark from "../assets/logo-mark.png";

// Posições calculadas a partir dos pixels reais da marca (logo-mark.png, 627x216),
// para que os destaques caiam exatamente sobre a linha e as duas esferas.
const ESFERAS = [
  { key: "humano", label: "Esfera 1 — o ser humano", left: 29.03, top: 79.17, w: 7.66, h: 22.22, color: "#a15d3f", delay: 1.5 },
  { key: "arquitetura", label: "Esfera 2 — a arquitetura", left: 67.15, top: 36.57, w: 15.63, h: 45.37, color: "#464b2e", delay: 1.8 },
];

export default function ConceitoLogo() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-xs mx-auto">
      <div className="bg-areia rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="relative" style={{ aspectRatio: "627 / 216" }}>
          <div
            className="absolute inset-0"
            style={{
              clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              transition: "clip-path 1.6s cubic-bezier(0.65,0,0.35,1)",
            }}
          >
            <img
              src={logoMark}
              alt="Marca Mahut: linha contínua da vida humana com as esferas do ser humano e da arquitetura"
              className="w-full h-full object-contain"
            />
          </div>

          {ESFERAS.map((e) => (
            <span
              key={e.key}
              className="absolute rounded-full"
              style={{
                left: `${e.left}%`,
                top: `${e.top}%`,
                width: `${e.w}%`,
                height: `${e.h}%`,
                transform: "translate(-50%, -50%)",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${e.delay}s`,
              }}
            >
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ border: `2px solid ${e.color}`, animationDuration: "2.4s" }}
              />
            </span>
          ))}
        </div>
      </div>

      <div
        className="mt-5 flex flex-col gap-2 text-[11px] tracking-[0.06em] text-areia/60 uppercase"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 2.1s" }}
      >
        <span className="flex items-center gap-2.5">
          <span className="w-3 h-[2px] rounded-full bg-areia/70 shrink-0" />
          Linha contínua — a vida humana
        </span>
        {ESFERAS.map((e) => (
          <span key={e.key} className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full border-2 border-areia/55 shrink-0"
              style={{ background: e.color }}
            />
            {e.label}
          </span>
        ))}
      </div>
    </div>
  );
}
