import Nav from "./components/Nav";
import ScrollLine from "./components/ScrollLine";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";
import Atendimento from "./components/Atendimento";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <ScrollLine />
      <Nav />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Atendimento />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
