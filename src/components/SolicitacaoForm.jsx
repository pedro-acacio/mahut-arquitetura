import { useState } from "react";
import {
  Sofa,
  Building2,
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_NUMBER, EMAIL } from "../data";

const TIPOS = {
  interiores: {
    label: "Projeto de Interiores",
    icon: Sofa,
    description: "Ambientes internos, reformas e consultoria de interiores.",
  },
  arquitetura: {
    label: "Projeto de Arquitetura",
    icon: Building2,
    description: "Construção do zero, reformas estruturais e projetos completos.",
  },
};

const BASE_FIELDS = [
  { key: "nome", type: "text", label: "Nome completo", required: true },
  { key: "email", type: "text", label: "E-mail", required: false },
  { key: "telefone", type: "text", label: "Telefone com DDD", required: true },
  { key: "idade", type: "text", label: "Idade", required: true },
  { key: "profissao", type: "text", label: "Profissão", required: true },
  { key: "instagram", type: "text", label: "Perfil no Instagram", required: true },
  {
    key: "comoEncontrou",
    type: "radio",
    label: "Como nos encontrou?",
    required: true,
    options: ["Indicação", "Instagram", "Google", "Anúncio", "Outro"],
  },
  {
    key: "chamouAtencao",
    type: "textarea",
    label: "O que chamou mais atenção no nosso trabalho?",
    required: false,
  },
];

const INTERIORES_FIELDS = [
  { key: "cidade", type: "text", label: "Em qual cidade será feito o projeto?", required: true },
  {
    key: "oQueProjetar",
    type: "text",
    label: "O que você deseja projetar?",
    hint: "Ex.: casa, apartamento, clínica, loja, escritório, etc.",
    required: true,
  },
  { key: "area", type: "text", label: "Qual a área (m²) aproximada a ser projetada?", required: true },
  {
    key: "tipoProjeto",
    type: "radio",
    label: "Qual tipo de projeto você precisa?",
    required: true,
    options: ["Projeto de interiores", "Consultoria de interiores", "Não tenho certeza", "Outro"],
  },
  {
    key: "local",
    type: "radio",
    label: "Quanto ao local",
    required: true,
    options: [
      "Local antigo, reforma sem quebra de paredes",
      "Local antigo, reforma com quebra de paredes",
      "Local novo, projeto sem quebra de paredes",
      "Local novo, projeto com quebra de paredes",
      "Outro",
    ],
  },
  {
    key: "revestimentos",
    type: "radio",
    label: "Quanto aos revestimentos",
    required: true,
    options: [
      "Revestimentos antigos — quero substituí-los por novos",
      "Revestimentos antigos — quero mantê-los",
      "Construtora entregará padrão — quero substituir",
      "Construtora entregará padrão — quero manter",
      "Outro",
    ],
  },
  {
    key: "forro",
    type: "radio",
    label: "Quanto ao forro",
    required: true,
    options: [
      "Possui forro de gesso — quero mantê-lo",
      "Não possui forro — quero colocar",
      "Não possui forro — não quero colocar",
      "Quero melhorar o forro existente",
      "Outro",
    ],
  },
  {
    key: "mobiliario",
    type: "radio",
    label: "Qual tipo de mobiliário você pretende adquirir?",
    required: false,
    options: ["Marcenaria planejada", "Móveis soltos comprados prontos", "Misto", "Outro"],
  },
  {
    key: "moveisExistentes",
    type: "radio",
    label: "Possui móveis/eletroeletrônicos que gostaria de manter e considerar no projeto?",
    required: true,
    options: ["Não, quero tudo novo", "Sim, quero manter alguns", "Outro"],
    detailOptions: ["Sim, quero manter alguns", "Outro"],
    detailPlaceholder: "Quais e quantos?",
  },
  {
    key: "estilo",
    type: "radio",
    label: "Qual o estilo que pretende seguir no projeto?",
    required: true,
    options: ["Contemporâneo", "Moderno", "Industrial", "Clássico", "Não tenho isso definido", "Outro"],
  },
  {
    key: "referencias",
    type: "textarea",
    label: "Possui alguma referência ou inspiração?",
    hint: "Descreva ou cole links — imagens podem ser enviadas depois, direto pelo WhatsApp.",
    required: false,
  },
  {
    key: "investimento",
    type: "text",
    label: "Qual o investimento que pretende fazer nesse imóvel?",
    hint: "Fique tranquilo(a) e seja sincero(a) — isso nos ajuda a orientar a viabilidade do projeto.",
    required: true,
  },
];

const ARQUITETURA_FIELDS = [
  { key: "cidade", type: "text", label: "Em qual cidade será feito o projeto?", required: true },
  {
    key: "oQueProjetar",
    type: "text",
    label: "O que você deseja projetar?",
    hint: "Ex.: casa, apartamento, clínica, loja, escritório, etc.",
    required: true,
  },
  { key: "area", type: "text", label: "Qual a área (m²) aproximada a ser projetada?", required: true },
  {
    key: "tipoProjeto",
    type: "radio",
    label: "Qual tipo de projeto você precisa?",
    required: true,
    options: ["Projeto completo para construção do zero", "Projeto completo para reforma", "Outro"],
  },
  {
    key: "etapa",
    type: "radio",
    label: "Em que etapa você está?",
    required: true,
    options: [
      "Apenas planejando",
      "Já tenho o terreno para construir",
      "Já tenho o imóvel e quero reformar",
      "Já moro no local e quero reformar",
      "Outro",
    ],
  },
  {
    key: "estilo",
    type: "radio",
    label: "Qual o estilo que pretende seguir no projeto?",
    required: true,
    options: ["Contemporâneo", "Moderno", "Clássico", "Não tenho isso definido", "Outro"],
  },
  {
    key: "referencias",
    type: "textarea",
    label: "Possui alguma referência ou inspiração?",
    hint: "Descreva ou cole links — imagens podem ser enviadas depois, direto pelo WhatsApp.",
    required: false,
  },
  {
    key: "expectativa",
    type: "textarea",
    label: "O que você espera do projeto?",
    hint: "Conte brevemente o que você deseja transformar, construir ou resolver.",
    required: true,
  },
  {
    key: "investimento",
    type: "text",
    label: "Qual o investimento que pretende fazer nesse imóvel?",
    hint: "Fique tranquilo(a) e seja sincero(a) — isso nos ajuda a orientar a viabilidade do projeto.",
    required: true,
  },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-marrom/15 bg-white/60 text-marrom text-sm outline-none focus:border-terracota transition-colors";

function TextField({ field, value, onChange }) {
  const Comp = field.type === "textarea" ? "textarea" : "input";
  return (
    <div>
      <label className="block text-sm font-medium text-marrom mb-1.5">
        {field.label}
        {field.required && " *"}
      </label>
      {field.hint && <p className="text-xs text-marrom/55 mb-1.5">{field.hint}</p>}
      <Comp
        required={field.required}
        rows={field.type === "textarea" ? 4 : undefined}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass}${field.type === "textarea" ? " resize-none" : ""}`}
      />
    </div>
  );
}

function RadioField({ field, value, detail, onChange, onDetailChange }) {
  const detailOptions = field.detailOptions || ["Outro"];
  const needsDetail = detailOptions.includes(value);
  return (
    <div>
      <label className="block text-sm font-medium text-marrom mb-1.5">
        {field.label}
        {field.required && " *"}
      </label>
      {field.hint && <p className="text-xs text-marrom/55 mb-1.5">{field.hint}</p>}
      <div className="flex flex-col gap-2 mt-1">
        {field.options.map((opt) => (
          <label key={opt} className="flex items-center gap-2.5 text-sm text-marrom/85 cursor-pointer">
            <input
              type="radio"
              name={field.key}
              required={field.required}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="accent-terracota w-4 h-4 shrink-0"
            />
            {opt}
          </label>
        ))}
      </div>
      {needsDetail && (
        <input
          type="text"
          required
          value={detail || ""}
          onChange={(e) => onDetailChange(e.target.value)}
          placeholder={field.detailPlaceholder || "Especifique..."}
          className={`${inputClass} mt-2`}
        />
      )}
    </div>
  );
}

function Field({ field, data, setValue, setDetail }) {
  if (field.type === "radio") {
    return (
      <RadioField
        field={field}
        value={data[field.key]}
        detail={data[`${field.key}Detalhe`]}
        onChange={(v) => setValue(field.key, v)}
        onDetailChange={(v) => setDetail(field.key, v)}
      />
    );
  }
  return <TextField field={field} value={data[field.key]} onChange={(v) => setValue(field.key, v)} />;
}

function displayValue(field, data) {
  const val = data[field.key];
  if (!val) return null;
  if (field.type === "radio") {
    const detailOptions = field.detailOptions || ["Outro"];
    if (detailOptions.includes(val)) {
      const detail = data[`${field.key}Detalhe`];
      if (val === "Outro") return detail || "Outro";
      return detail ? `${val} — ${detail}` : val;
    }
  }
  return val;
}

function buildMessage(tipo, data) {
  const lines = [`*Nova solicitação de proposta — ${TIPOS[tipo].label}*`, ""];

  lines.push("*Dados de contato*");
  for (const field of BASE_FIELDS) {
    const v = displayValue(field, data);
    if (v) lines.push(`${field.label}: ${v}`);
  }

  lines.push("", "*Sobre o projeto*");
  const detailFields = tipo === "interiores" ? INTERIORES_FIELDS : ARQUITETURA_FIELDS;
  for (const field of detailFields) {
    const v = displayValue(field, data);
    if (v) lines.push(`${field.label}: ${v}`);
  }

  return lines.join("\n");
}

const STEP_CHOICE = "choice";
const STEP_BASE = "base";
const STEP_DETAILS = "details";
const STEP_DONE = "done";

export default function SolicitacaoForm() {
  const [step, setStep] = useState(STEP_CHOICE);
  const [tipo, setTipo] = useState(null);
  const [data, setData] = useState({});

  const setValue = (key, value) => setData((d) => ({ ...d, [key]: value }));
  const setDetail = (key, value) => setData((d) => ({ ...d, [`${key}Detalhe`]: value }));

  const chooseTipo = (t) => {
    setTipo(t);
    setStep(STEP_BASE);
  };

  const handleBaseSubmit = (e) => {
    e.preventDefault();
    setStep(STEP_DETAILS);
    window.scrollTo({ top: document.getElementById("contato")?.offsetTop ?? 0, behavior: "smooth" });
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    const text = buildMessage(tipo, data);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setStep(STEP_DONE);
  };

  const restart = () => {
    setTipo(null);
    setData({});
    setStep(STEP_CHOICE);
  };

  const detailFields = tipo ? (tipo === "interiores" ? INTERIORES_FIELDS : ARQUITETURA_FIELDS) : [];

  return (
    <div className="flex flex-col gap-6">
      {step !== STEP_CHOICE && step !== STEP_DONE && (
        <div className="flex items-center gap-2 text-xs tracking-[0.15em] text-terracota font-medium uppercase">
          <span>{TIPOS[tipo].label}</span>
          <span className="text-marrom/30">·</span>
          <span>{step === STEP_BASE ? "Etapa 1 de 2" : "Etapa 2 de 2"}</span>
        </div>
      )}

      {step === STEP_CHOICE && (
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(TIPOS).map(([key, t]) => {
            const Icon = t.icon;
            return (
              <button
                key={key}
                type="button"
                onClick={() => chooseTipo(key)}
                className="group flex flex-col items-start gap-3 p-6 rounded-xl border border-marrom/15 bg-white/40 text-left hover:border-terracota hover:bg-white/70 transition-colors"
              >
                <Icon size={24} className="text-terracota" />
                <span className="font-display text-lg text-marrom">{t.label}</span>
                <span className="text-xs text-marrom/60 leading-relaxed">{t.description}</span>
                <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-terracota">
                  Solicitar proposta <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            );
          })}
        </div>
      )}

      {step === STEP_BASE && (
        <form onSubmit={handleBaseSubmit} className="flex flex-col gap-4">
          {BASE_FIELDS.map((field) => (
            <Field key={field.key} field={field} data={data} setValue={setValue} setDetail={setDetail} />
          ))}
          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={restart}
              className="flex items-center gap-1.5 text-sm text-marrom/60 hover:text-terracota transition-colors"
            >
              <ArrowLeft size={16} /> Voltar
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-oliva text-areia hover:bg-terracota transition-colors"
            >
              Avançar <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}

      {step === STEP_DETAILS && (
        <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4">
          {detailFields.map((field) => (
            <Field key={field.key} field={field} data={data} setValue={setValue} setDetail={setDetail} />
          ))}
          <p className="text-xs text-marrom/55 leading-relaxed bg-white/40 rounded-lg p-4 border border-marrom/10">
            O próximo passo é nos enviar plantas, fotos e/ou arquivos importantes do local do projeto por
            e-mail ({EMAIL}) ou diretamente pelo WhatsApp, para que possamos entender a totalidade do seu
            pedido. Em seguida, entraremos em contato para agendar uma conversa por videochamada e alinharmos
            os detalhes do orçamento.
          </p>
          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={() => setStep(STEP_BASE)}
              className="flex items-center gap-1.5 text-sm text-marrom/60 hover:text-terracota transition-colors"
            >
              <ArrowLeft size={16} /> Voltar
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-oliva text-areia hover:bg-terracota transition-colors"
            >
              <Send size={16} /> Enviar pelo WhatsApp
            </button>
          </div>
        </form>
      )}

      {step === STEP_DONE && (
        <div className="flex flex-col items-center text-center gap-3 py-8">
          <CheckCircle2 size={36} className="text-terracota" />
          <p className="font-display text-xl text-marrom">Solicitação pronta!</p>
          <p className="text-sm text-marrom/70 max-w-sm leading-relaxed">
            Abrimos o WhatsApp com todas as informações do seu projeto preenchidas. É só confirmar o envio
            por lá que a Lara recebe tudo certinho.
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-2 text-sm font-medium text-terracota hover:underline"
          >
            Fazer outra solicitação
          </button>
        </div>
      )}
    </div>
  );
}
