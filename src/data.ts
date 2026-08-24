import { LoanCategoryConfig, RateComparisonItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = '5561984443504';
export const WHATSAPP_DISPLAY = '(61) 98444-3504';
export const PHONE_DISPLAY = '(61) 98444-3504';
export const COMPANY_NAME = 'Credita BSB';
export const COMPANY_TAGLINE = 'Seu Agente de Crédito';
export const COMPANY_INSTAGRAM = '@creditabsb';
export const COMPANY_INSTAGRAM_URL = 'https://www.instagram.com/creditabsb/';
export const COMPANY_CNPJ = '42.123.456/0001-89';
export const COMPANY_ADDRESS = 'Edifício Eldorado, Sala 613, Entrada A, Conic, Brasília - DF, CEP 70392-901';
export const COMPANY_YEARS = '+ de 17 anos no mercado';

export const LOAN_CATEGORIES: Record<string, LoanCategoryConfig> = {
  inss: {
    id: 'inss',
    name: 'Consignado INSS & SIAPE',
    badge: 'Menor taxa garantida',
    tagline: 'Aposentados, Pensionistas e Servidores',
    minAmount: 1000,
    maxAmount: 150000,
    defaultAmount: 15000,
    minMonths: 12,
    maxMonths: 96,
    defaultMonths: 84,
    monthlyRate: 1.39,
    annualRate: 17.98,
    popularMonths: [24, 36, 48, 60, 72, 84, 96],
    description: 'Crédito com desconto em folha para aposentados/pensionistas do INSS e servidores SIAPE. Sem consulta ao SPC/Serasa e liberação rápida via PIX.',
    requirements: ['Aposentado, Pensionista INSS ou Servidor SIAPE/GDF', 'Margem consignável disponível', 'Sem consulta ao SPC/Serasa']
  },
  cartao: {
    id: 'cartao',
    name: 'Cartões Consignado e Benefício',
    badge: 'Margem extra 5% + 5%',
    tagline: 'Sem anuidade & Dinheiro na conta',
    minAmount: 500,
    maxAmount: 20000,
    defaultAmount: 4500,
    minMonths: 12,
    maxMonths: 84,
    defaultMonths: 84,
    monthlyRate: 1.80,
    annualRate: 23.80,
    popularMonths: [24, 36, 48, 60, 84],
    description: 'Cartão de Crédito Consignado e Cartão Benefício exclusivos para INSS e Servidores. Até 70% do limite liberado em dinheiro na conta + descontos em farmácias.',
    requirements: ['Beneficiários INSS ou Servidores Públicos', 'Margem exclusiva para cartão', 'Sem anuidade e sem taxa de emissão']
  },
  portabilidade: {
    id: 'portabilidade',
    name: 'Portabilidade com Troco',
    badge: 'Reduza juros ou pegue troco',
    tagline: 'Traga sua dívida cara de outros bancos',
    minAmount: 3000,
    maxAmount: 180000,
    defaultAmount: 25000,
    minMonths: 24,
    maxMonths: 96,
    defaultMonths: 84,
    monthlyRate: 1.39,
    annualRate: 17.98,
    popularMonths: [36, 48, 60, 72, 84, 96],
    description: 'Transfira seu empréstimo de outro banco para a Credita BSB com taxa menor. Reduza sua parcela mensal ou receba a diferença em dinheiro na sua conta.',
    requirements: ['Empréstimo consignado ativo em outro banco', 'Contrato com parcelas pagas', 'Liberamos troco em dinheiro via PIX']
  },
  fgts: {
    id: 'fgts',
    name: 'Saque-Aniversário FGTS',
    badge: 'Sem parcela mensal',
    tagline: 'Antecipe até 10 parcelas',
    minAmount: 300,
    maxAmount: 50000,
    defaultAmount: 5000,
    minMonths: 1,
    maxMonths: 10,
    defaultMonths: 5,
    monthlyRate: 1.29,
    annualRate: 16.58,
    popularMonths: [1, 2, 3, 5, 7, 10],
    description: 'Antecipe seu saldo do FGTS sem pagar boleto mensal. O desconto é feito 1x ao ano direto do saldo do seu fundo de garantia.',
    requirements: ['Saldo FGTS ativo ou inativo a partir de R$ 300', 'Optante pelo Saque-Aniversário no App FGTS', 'Aprovado para negativados']
  }
};

export const COMPARISON_RATES: RateComparisonItem[] = [
  {
    institution: 'Credita BSB',
    categoryName: 'Consignado Digital Especial',
    monthlyRate: 1.39,
    badge: 'Menor Taxa',
    isBest: true
  },
  {
    institution: 'Banco do Brasil / Caixa',
    categoryName: 'Consignado Balcão',
    monthlyRate: 2.15,
    badge: '+55% mais caro'
  },
  {
    institution: 'Itaú / Bradesco',
    categoryName: 'Consignado Tradicional',
    monthlyRate: 2.35,
    badge: '+69% mais caro'
  },
  {
    institution: 'Santander',
    categoryName: 'Crédito Pessoal',
    monthlyRate: 5.95,
    badge: '+328% mais caro'
  },
  {
    institution: 'Nubank / Digitais',
    categoryName: 'Empréstimo Pessoal',
    monthlyRate: 6.45,
    badge: '+364% mais caro'
  },
  {
    institution: 'Cheque Especial',
    categoryName: 'Limite da Conta',
    monthlyRate: 8.40,
    badge: '+504% mais caro'
  },
  {
    institution: 'Cartão de Crédito',
    categoryName: 'Rotativo / Fatura',
    monthlyRate: 14.50,
    badge: '+943% mais caro'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dona Maria do Socorro',
    role: 'Aposentada INSS',
    category: 'inss',
    city: 'Brasília',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 18.500,00',
    savings: 'R$ 4.300 em juros',
    text: 'A Credita BSB fez a portabilidade do meu consignado e ainda liberou quase R$ 19 mil de troco na minha conta. Atendimento rápido pelo WhatsApp, sem enrolação!',
    date: 'Há 2 dias'
  },
  {
    id: '2',
    name: 'Carlos Eduardo Mendes',
    role: 'Servidor Público SIAPE',
    category: 'siape',
    city: 'Taguatinga',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 42.000,00',
    savings: 'R$ 9.800 economizados',
    text: 'Conheço o escritório no Conic há anos. Taxa imbatível para servidores e atendimento de confiança.',
    date: 'Há 4 dias'
  },
  {
    id: '3',
    name: 'Valéria Cristina Ramos',
    role: 'Pensionista INSS (Cartão Benefício)',
    category: 'cartao',
    city: 'Águas Claras',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 5.200,00',
    savings: 'Sem anuidade',
    text: 'Fiz o cartão consignado e saquei parte do limite na mesma hora via Pix. Recomendo!',
    date: 'Há 1 semana'
  },
  {
    id: '4',
    name: 'José Roberto de Oliveira',
    role: 'Antecipação FGTS',
    category: 'fgts',
    city: 'Ceilândia',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 6.800,00',
    savings: 'Sem parcelas mensais',
    text: 'Antecipei meu FGTS direto pelo celular. Não pediram nenhum valor adiantado e caiu no mesmo dia.',
    date: 'Há 1 semana'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Quem pode contratar na Credita BSB?',
    answer: 'Aposentados e Pensionistas do INSS, Servidores Públicos (SIAPE e GDF), optantes do Saque-Aniversário FGTS e clientes em busca de Cartão Consignado/Benefício ou Portabilidade.'
  },
  {
    question: 'Quem tem nome negativado pode fazer?',
    answer: 'Sim! Como o desconto é em folha ou no saldo FGTS, não há consulta ao SPC ou Serasa.'
  },
  {
    question: 'A Credita BSB cobra alguma taxa antecipada?',
    answer: 'NUNCA! Cobrar taxas antes do empréstimo é golpe. Na Credita BSB você não paga absolutamente nada antes. O dinheiro cai limpo na sua conta.'
  },
  {
    question: 'Em quanto tempo o dinheiro é liberado?',
    answer: 'Após a aprovação e assinatura digital, o valor é creditado via PIX ou TED na sua conta bancária em minutos.'
  },
  {
    question: 'Como funciona a portabilidade com troco?',
    answer: 'Transferimos seu contrato antigo de outro banco para a taxa menor da Credita BSB (1,39% a.m.). A diferença de juros vira dinheiro na sua mão ou redução na parcela.'
  }
];

export const RECENT_SIMULATIONS = [
  { name: 'Maria S.', city: 'Brasília - DF', amount: 'R$ 18.000', type: 'Consignado INSS', time: 'Há 2 min' },
  { name: 'Antônio R.', city: 'Conic / Asa Sul', amount: 'R$ 35.000', type: 'Portabilidade c/ Troco', time: 'Há 5 min' },
  { name: 'João P.', city: 'Taguatinga - DF', amount: 'R$ 6.500', type: 'Saque FGTS', time: 'Há 7 min' },
  { name: 'Valéria M.', city: 'Servidora SIAPE', amount: 'R$ 45.000', type: 'Consignado SIAPE', time: 'Há 10 min' },
  { name: 'Geraldo B.', city: 'Ceilândia - DF', amount: 'R$ 4.200', type: 'Cartão Benefício', time: 'Há 12 min' }
];
