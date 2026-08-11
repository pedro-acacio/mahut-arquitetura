// Conteúdo real da Mahut Arquitetura — textos, contato e paleta vêm do
// Manual da Marca e dos textos fornecidos pela Lara.

export const WHATSAPP_NUMBER = "5585997844669"; // +55 85 9 9784-4669
export const INSTAGRAM_URL = "https://www.instagram.com/mahut.arquitetura";
export const INSTAGRAM_HANDLE = "@mahut.arquitetura";
export const EMAIL = "mahut.arquitetura@gmail.com";

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export const CONCEITO_MAHUT =
  "Mahut é uma palavra de origem hebraica que significa essência. Esse conceito fundamenta a filosofia da marca: acreditamos que tanto o ser humano quanto a arquitetura encontram seu verdadeiro propósito quando retornam à sua essência. Inspirada na origem da criação e na compreensão de que o homem foi formado do barro e recebe o fôlego da vida de Deus, a Mahut desenvolve uma arquitetura resiliente, funcional e atemporal, que valoriza a beleza como consequência de um projeto pensado para acolher, servir e acompanhar as pessoas em cada fase da vida.";

export const SOBRE_LARA =
  "Lara Silveira é arquiteta e urbanista, graduada pela Universidade de Fortaleza, com atuação em Fortaleza, Ceará. Pós-graduada em Arquitetura de Interiores e pós-graduanda em Engenharia Diagnóstica, desenvolve projetos que unem técnica, funcionalidade e sensibilidade, incorporando os princípios da neuroarquitetura para criar espaços que promovem bem-estar, identidade e qualidade de vida. À frente da Mahut Arquitetura, acredita que cada projeto deve respeitar a essência de quem o habita e transformar a experiência de viver os espaços.";

export const ATENDIMENTO =
  "A Mahut Arquitetura atua por meio de um modelo de atendimento híbrido, oferecendo acompanhamento remoto e presencial conforme as necessidades de cada projeto. Nosso processo é estruturado para proporcionar uma experiência clara, organizada e personalizada, permitindo o desenvolvimento de projetos para clientes em diferentes localidades, sem abrir mão da proximidade, da comunicação e da qualidade em cada etapa.";

export const SERVICOS = [
  {
    title: "Projetos de Arquitetura e Interiores",
    text: "Desenvolvimento de projetos residenciais e comerciais que integram funcionalidade, estética e bem-estar. Cada solução é personalizada para refletir a essência do cliente e proporcionar espaços atemporais, eficientes e acolhedores.",
  },
  {
    title: "Consultoria",
    text: "Orientação técnica para auxiliar na tomada de decisões em reformas, construções ou definições de layout, materiais, acabamentos e mobiliário. Ideal para quem busca direcionamento profissional sem a contratação de um projeto completo.",
  },
  {
    title: "Acompanhamento de Obra",
    text: "Serviço de acompanhamento técnico durante a execução da obra, garantindo que o projeto seja realizado conforme as especificações, esclarecendo dúvidas da equipe executora e contribuindo para a qualidade do resultado final.",
  },
  {
    title: "Projetos Complementares",
    text: "Desenvolvimento e compatibilização de projetos elétricos e hidrossanitários, assegurando que todas as instalações estejam integradas ao projeto arquitetônico, promovendo maior eficiência, segurança e funcionalidade.",
  },
];

// Todas as imagens reais de projetos, agrupadas por ambiente.
const projectImages = import.meta.glob("./assets/projetos/*/*.webp", {
  eager: true,
  import: "default",
});

function imagesFor(folder) {
  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projetos/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
}

export const PROJETOS = [
  { slug: "Sala-NS", title: "Sala NS" },
  { slug: "Living-PN", title: "Living PN" },
  { slug: "Sala-PN", title: "Sala PN" },
  { slug: "Suite-PA", title: "Suíte PA" },
  { slug: "Suite-PN", title: "Suíte PN" },
  { slug: "Suite-SP", title: "Suíte SP" },
  { slug: "Quarto-SS", title: "Quarto SS" },
  { slug: "Vila-Leste", title: "Vila Leste" },
  { slug: "Lavabo-NS", title: "Lavabo NS" },
  { slug: "Lavanderia-NS", title: "Lavanderia NS" },
].map((p) => ({ ...p, images: imagesFor(p.slug) }));
