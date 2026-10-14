/* =========================================================
   MANUAL DO CORRETOR — ARQUIVO DE CONTEÚDO
   ---------------------------------------------------------
   Tudo que aparece na área de membros vem daqui.
   Para inserir uma aula: preencha "video" (link do YouTube,
   Vimeo ou Panda), "descricao" e, se quiser, "materiais".
   Ícones disponíveis: veja a lista ICONS em app.js.
   ========================================================= */

const SITE = {
  nome: "Manual do Corretor",
  edicao: "Edição 2026",
  slogan: "O guia prático para o corretor de imóveis que quer vender mais, captar melhor e viver da profissão.",
  autor: "Seu Nome",
  suporteWhatsapp: "5500000000000", // só números, com DDI + DDD
  comunidadeLink: "#",               // link do grupo / comunidade
};

const MODULOS = [
  {
    id: "comecando",
    titulo: "Começando do Jeito Certo",
    subtitulo: "Mentalidade, posicionamento e rotina do corretor de sucesso",
    icone: "rocket",
    cor: "#C9A24B",
    aulas: [
      { titulo: "Boas-vindas: como aproveitar o Manual", duracao: "", video: "", descricao: "", materiais: [] },
      { titulo: "O mercado imobiliário hoje: oportunidades reais", duracao: "", video: "", descricao: "" },
      { titulo: "CRECI, autônomo ou imobiliária: qual caminho seguir", duracao: "", video: "", descricao: "" },
      { titulo: "Escolhendo seu nicho e sua região de atuação", duracao: "", video: "", descricao: "" },
      { titulo: "A rotina semanal do corretor que fecha negócios", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "captacao",
    titulo: "Captação de Imóveis",
    subtitulo: "Como conseguir bons imóveis com exclusividade",
    icone: "key",
    cor: "#3E7BFA",
    aulas: [
      { titulo: "Por que quem tem o imóvel tem o cliente", duracao: "", video: "", descricao: "" },
      { titulo: "Fontes de captação: placas, porteiros, síndicos e redes", duracao: "", video: "", descricao: "" },
      { titulo: "A primeira conversa com o proprietário", duracao: "", video: "", descricao: "" },
      { titulo: "Avaliação de imóveis e precificação correta", duracao: "", video: "", descricao: "" },
      { titulo: "Como conquistar a exclusividade", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "prospeccao",
    titulo: "Prospecção de Clientes",
    subtitulo: "Gerando compradores e locatários todos os dias",
    icone: "target",
    cor: "#E5484D",
    aulas: [
      { titulo: "Quem é o seu cliente ideal", duracao: "", video: "", descricao: "" },
      { titulo: "Portais imobiliários: como se destacar", duracao: "", video: "", descricao: "" },
      { titulo: "Prospecção ativa: ligação, WhatsApp e porta a porta", duracao: "", video: "", descricao: "" },
      { titulo: "Parcerias com outros corretores e construtoras", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "marketing",
    titulo: "Marketing Imobiliário",
    subtitulo: "Instagram, anúncios e fotos que vendem",
    icone: "megaphone",
    cor: "#A855F7",
    aulas: [
      { titulo: "Seu perfil profissional no Instagram", duracao: "", video: "", descricao: "" },
      { titulo: "Fotos e vídeos de imóveis com o celular", duracao: "", video: "", descricao: "" },
      { titulo: "Escrevendo anúncios que geram contato", duracao: "", video: "", descricao: "" },
      { titulo: "Tráfego pago para corretores (Meta Ads)", duracao: "", video: "", descricao: "" },
      { titulo: "Calendário de conteúdo do corretor", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "atendimento",
    titulo: "Atendimento e Qualificação",
    subtitulo: "Do primeiro contato no WhatsApp ao agendamento",
    icone: "message",
    cor: "#22C55E",
    aulas: [
      { titulo: "Velocidade de resposta: a regra dos 5 minutos", duracao: "", video: "", descricao: "" },
      { titulo: "Perguntas que qualificam o lead", duracao: "", video: "", descricao: "" },
      { titulo: "Organizando leads em um CRM simples", duracao: "", video: "", descricao: "" },
      { titulo: "Follow-up sem ser chato", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "visitas",
    titulo: "Visitas que Vendem",
    subtitulo: "Preparação, condução e leitura do cliente",
    icone: "home",
    cor: "#F97316",
    aulas: [
      { titulo: "Preparando o imóvel e o roteiro da visita", duracao: "", video: "", descricao: "" },
      { titulo: "Conduzindo a visita: o que falar e o que mostrar", duracao: "", video: "", descricao: "" },
      { titulo: "Sinais de compra e como identificá-los", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "negociacao",
    titulo: "Negociação e Fechamento",
    subtitulo: "Proposta, contraproposta e objeções",
    icone: "handshake",
    cor: "#14B8A6",
    aulas: [
      { titulo: "Como formalizar uma proposta", duracao: "", video: "", descricao: "" },
      { titulo: "As objeções mais comuns e como contornar", duracao: "", video: "", descricao: "" },
      { titulo: "Negociando entre comprador e vendedor", duracao: "", video: "", descricao: "" },
      { titulo: "Técnicas de fechamento", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "documentacao",
    titulo: "Documentação e Financiamento",
    subtitulo: "Certidões, contratos, crédito e cartório sem medo",
    icone: "file",
    cor: "#64748B",
    aulas: [
      { titulo: "Documentos do imóvel e dos envolvidos", duracao: "", video: "", descricao: "" },
      { titulo: "Contrato de compra e venda: pontos de atenção", duracao: "", video: "", descricao: "" },
      { titulo: "Financiamento: SFH, SFI, SAC, Price e FGTS", duracao: "", video: "", descricao: "" },
      { titulo: "ITBI, escritura e registro", duracao: "", video: "", descricao: "" },
      { titulo: "Locação: contrato, garantias e vistoria", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "posvenda",
    titulo: "Pós-venda e Indicações",
    subtitulo: "Transforme cada cliente em uma fonte de novos negócios",
    icone: "heart",
    cor: "#EC4899",
    aulas: [
      { titulo: "A entrega das chaves como momento de marketing", duracao: "", video: "", descricao: "" },
      { titulo: "Sistema de indicações", duracao: "", video: "", descricao: "" },
      { titulo: "Depoimentos e prova social", duracao: "", video: "", descricao: "" },
    ],
  },
  {
    id: "gestao",
    titulo: "Gestão, Metas e Finanças",
    subtitulo: "Viva de comissão sem sufoco",
    icone: "chart",
    cor: "#0EA5E9",
    aulas: [
      { titulo: "Funil de vendas e números do corretor", duracao: "", video: "", descricao: "" },
      { titulo: "Definindo metas de captação e de vendas", duracao: "", video: "", descricao: "" },
      { titulo: "Finanças pessoais para quem vive de comissão", duracao: "", video: "", descricao: "" },
      { titulo: "Abrindo CNPJ e emitindo nota", duracao: "", video: "", descricao: "" },
    ],
  },
];

const BONUS = [
  { titulo: "Scripts de WhatsApp", descricao: "Mensagens prontas para primeiro contato, follow-up, agendamento e pós-venda.", icone: "message", link: "#", tag: "Scripts" },
  { titulo: "Modelo de Autorização de Venda", descricao: "Modelo de autorização com e sem exclusividade para adaptar ao seu caso.", icone: "file", link: "#", tag: "Modelo" },
  { titulo: "Checklist de Documentação", descricao: "Lista completa de documentos do imóvel, do vendedor e do comprador.", icone: "check", link: "#", tag: "Checklist" },
  { titulo: "Planilha de Controle de Leads", descricao: "CRM simples em planilha para acompanhar cada cliente até o fechamento.", icone: "table", link: "#", tag: "Planilha" },
  { titulo: "Templates para Instagram", descricao: "Artes editáveis para posts de imóveis, dicas e depoimentos.", icone: "image", link: "#", tag: "Templates" },
  { titulo: "Roteiro de Captação", descricao: "Passo a passo da visita de captação com perguntas ao proprietário.", icone: "key", link: "#", tag: "Roteiro" },
];

const DICAS = [
  { categoria: "Captação", texto: "Imóvel bem precificado vende. Antes de aceitar uma captação, mostre ao proprietário três imóveis parecidos que foram vendidos na região." },
  { categoria: "Atendimento", texto: "Responda leads em até 5 minutos. A chance de conversão cai muito depois da primeira hora." },
  { categoria: "Marketing", texto: "Fotografe sempre com luz natural, na horizontal e com as luzes do imóvel acesas. A primeira foto decide o clique." },
  { categoria: "Visitas", texto: "Comece a visita pelo melhor ambiente do imóvel e termine nele também. A última impressão é a que fica." },
  { categoria: "Negociação", texto: "Nunca leve uma proposta verbal ao proprietário. Proposta formal, por escrito e assinada, tem outro peso." },
  { categoria: "Prospecção", texto: "Converse com porteiros e zeladores da sua região. Eles sabem antes de todo mundo quem vai vender ou alugar." },
  { categoria: "Gestão", texto: "Separe a comissão em três partes assim que receber: impostos, reserva para meses fracos e seu pró-labore." },
  { categoria: "Pós-venda", texto: "Mande uma mensagem ao cliente 30 dias depois da entrega das chaves. É o melhor momento para pedir uma indicação." },
  { categoria: "Documentação", texto: "Peça a matrícula atualizada do imóvel logo na captação. Problemas descobertos no fim derrubam negócios." },
  { categoria: "Mentalidade", texto: "Corretor que capta todos os dias nunca fica sem produto para vender. Defina uma meta mínima semanal de captações." },
];

const CHECKLIST = [
  "Assistir à aula de boas-vindas",
  "Definir meu nicho e minha região de atuação",
  "Atualizar o perfil profissional no Instagram",
  "Fazer minha primeira captação usando o roteiro",
  "Montar minha planilha de controle de leads",
  "Salvar os scripts de WhatsApp no celular",
  "Definir minhas metas do mês",
];
