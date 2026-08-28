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
    name: 'Consignado INSS',
    badge: 'Menor taxa garantida',
    tagline: 'Aposentados e Pensionistas do INSS',
    minAmount: 1000,
    maxAmount: 150000,
    defaultAmount: 15000,
    minMonths: 12,
    maxMonths: 96,
    defaultMonths: 84,
    monthlyRate: 1.39,
    annualRate: 17.98,
    popularMonths: [24, 36, 48, 60, 72, 84, 96],
    description: 'Crédito com desconto em folha para aposentados e pensionistas do INSS. Sem consulta ao SPC/Serasa e liberação rápida via PIX.',
    requirements: ['Aposentado ou Pensionista do INSS', 'Margem consignável disponível', 'Sem consulta ao SPC/Serasa']
  },
  siape: {
    id: 'siape',
    name: 'Servidores Públicos (SIAPE & GDF)',
    badge: 'Condições Especiais Brasília',
    tagline: 'Servidores Federais, Estaduais e Distritais',
    minAmount: 2000,
    maxAmount: 250000,
    defaultAmount: 30000,
    minMonths: 12,
    maxMonths: 96,
    defaultMonths: 84,
    monthlyRate: 1.39,
    annualRate: 17.98,
    popularMonths: [24, 36, 48, 60, 72, 84, 96],
    description: 'Linhas exclusivas para servidores públicos federais (SIAPE), estaduais e do Governo do Distrito Federal (GDF) com as melhores taxas do mercado.',
    requirements: ['Servidor Público SIAPE ou GDF', 'Margem consignável ativa', 'Aprovação sem burocracia']
  },
  cartao: {
    id: 'cartao',
    name: 'Cartões Consignado e Benefício',
    badge: 'Margem extra 5% + 5%',
    tagline: 'Sem anuidade & Dinheiro na conta',
    minAmount: 500,
    maxAmount: 25000,
    defaultAmount: 5000,
    minMonths: 12,
    maxMonths: 84,
    defaultMonths: 84,
    monthlyRate: 1.80,
    annualRate: 23.80,
    popularMonths: [24, 36, 48, 60, 84],
    description: 'Cartão de Crédito Consignado e Cartão Benefício exclusivos para INSS e Servidores. Até 70% do limite liberado em dinheiro na conta + descontos em farmácias.',
    requirements: ['Beneficiários INSS ou Servidores Públicos', 'Margem exclusiva para cartão', 'Sem anuidade e sem taxa de emissão']
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
    text: 'A Credita BSB liberou meu consignado com a menor taxa de Brasília direto na minha conta no mesmo dia. Atendimento rápido e muito respeitoso!',
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
    text: 'Conheço o escritório no Conic há anos. Taxa imbatível para servidores públicos e atendimento de total confiança.',
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
    text: 'Fiz o cartão benefício e saquei parte do limite na mesma hora via Pix. Recomendo a todos!',
    date: 'Há 1 semana'
  },
  {
    id: '4',
    name: 'José Roberto de Oliveira',
    role: 'Servidor GDF',
    category: 'siape',
    city: 'Ceilândia',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 28.000,00',
    savings: 'Parcela reduzida',
    text: 'Atendimento nota 10! Simulei pelo site e em poucos minutos o consultor já finalizou tudo com segurança.',
    date: 'Há 1 semana'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Quem pode contratar na Credita BSB?',
    answer: 'Aposentados e Pensionistas do INSS, Servidores Públicos Federais (SIAPE), Servidores do GDF e beneficiários com margem consignável disponível.'
  },
  {
    question: 'Quem tem nome negativado pode fazer?',
    answer: 'Sim! Como o desconto é em folha de pagamento ou benefício, não há consulta ao SPC ou Serasa.'
  },
  {
    question: 'A Credita BSB cobra alguma taxa antecipada?',
    answer: 'NUNCA! Cobrar taxas antes do empréstimo é golpe. Na Credita BSB você não paga absolutamente nada antes. O dinheiro cai integralmente na sua conta.'
  },
  {
    question: 'Em quanto tempo o dinheiro é liberado?',
    answer: 'Após a aprovação e assinatura digital da proposta, o valor é creditado via PIX ou TED na sua conta bancária em minutos.'
  },
  {
    question: 'Como funciona o Cartão Benefício Consignado?',
    answer: 'É um cartão sem anuidade com margem extra exclusiva de 5%, que permite sacar até 70% do limite em dinheiro na conta além de oferecer descontos em farmácias.'
  }
];

export const RECENT_SIMULATIONS = [
  { name: 'Maria S.', city: 'Brasília - DF', amount: 'R$ 18.000', type: 'Consignado INSS', time: 'Há 2 min' },
  { name: 'Antônio R.', city: 'Conic / Asa Sul', amount: 'R$ 35.000', type: 'Servidor SIAPE', time: 'Há 5 min' },
  { name: 'João P.', city: 'Taguatinga - DF', amount: 'R$ 12.500', type: 'Consignado INSS', time: 'Há 7 min' },
  { name: 'Valéria M.', city: 'Servidora GDF', amount: 'R$ 45.000', type: 'Servidor GDF', time: 'Há 10 min' },
  { name: 'Geraldo B.', city: 'Ceilândia - DF', amount: 'R$ 5.000', type: 'Cartão Benefício', time: 'Há 12 min' }
];
