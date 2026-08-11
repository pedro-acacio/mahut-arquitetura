import { useEffect, useRef, useState } from "react";

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
      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none">
        <path
          d="M20 100 C 60 100 70 148 100 148 C 130 148 138 52 180 52 C 222 52 230 100 260 100 C 290 100 320 100 380 100"
          stroke="#e8ded3"
          strokeOpacity="0.55"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.8s ease",
          }}
        />
        <circle
          cx="100"
          cy="148"
          r="9"
          fill="#a15d3f"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0)",
            transformOrigin: "100px 148px",
            transition: "opacity 0.5s ease 1.3s, transform 0.5s ease 1.3s",
          }}
        />
        <circle
          cx="180"
          cy="52"
          r="15"
          fill="#e8ded3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0)",
            transformOrigin: "180px 52px",
            transition: "opacity 0.5s ease 1.6s, transform 0.5s ease 1.6s",
          }}
        />
      </svg>
      <div
        className="flex justify-center gap-8 mt-2 text-[11px] tracking-[0.1em] text-areia/60 uppercase"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 1.9s" }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-terracota" /> O ser humano
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-areia" /> A arquitetura
        </span>
      </div>
    </div>
  );
}
