import { useEffect, useState } from "react";

// Barra de progresso de rolagem — reinterpreta a "linha contínua" da
// identidade da Mahut (a trajetória da vida) como indicador de leitura.
export default function ScrollLine() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="hidden lg:block fixed left-0 top-0 h-full w-[3px] z-50"
      style={{ background: "rgba(84,72,64,0.1)" }}
      aria-hidden="true"
    >
      <div
        className="w-full"
        style={{
          height: `${pct}%`,
          background: "linear-gradient(180deg, #a15d3f, #464b2e)",
          transition: "height 0.1s linear",
        }}
      />
    </div>
  );
}
