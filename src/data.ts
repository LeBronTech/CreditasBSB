import { LoanCategoryConfig, RateComparisonItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = '5561984443504';
export const WHATSAPP_DISPLAY = '(61) 98444-3504';
export const WHATSAPP_SECONDARY = '(61) 98374-1464';
export const PHONE_DISPLAY = '(61) 3224-9118';
export const COMPANY_NAME = 'Credita BSB';
export const COMPANY_TAGLINE = 'Seu Agente de Crédito';
export const COMPANY_INSTAGRAM = '@creditabsb';
export const COMPANY_INSTAGRAM_URL = 'https://www.instagram.com/creditabsb/';
export const COMPANY_CNPJ = '15.202.214/0001-18';
export const COMPANY_ADDRESS = 'SDS Edifício Eldorado, Sala 613, Entrada A, Conic, Brasília - DF, CEP 70392-901';
export const COMPANY_HOURS = 'Segunda a Sexta: 09:00 às 18:00';
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
    maxMonths: 108,
    defaultMonths: 84,
    monthlyRate: 1.39,
    calculationMonthlyRate: 1.44,
    annualRate: 17.98,
    popularMonths: [24, 36, 48, 60, 72, 84, 96, 108],
    description: 'Crédito com desconto em folha para aposentados e pensionistas do INSS com a menor taxa do mercado. Sem consulta ao SPC/Serasa e liberação rápida em conta.',
    requirements: [
      'Aposentado ou Pensionista do INSS',
      'Margem consignável disponível',
      'Sem consulta ao SPC/Serasa',
      'Valores sujeito análise pessoal de crédito e disponibilidade dos bancos. (Pode ocorrer alterações por parte dos bancos)'
    ]
  },
  siape: {
    id: 'siape',
    name: 'Servidores Públicos (SIAPE)',
    badge: 'Taxa Especial 1,50% a.m.',
    tagline: 'Servidores Federais, Estaduais e Distritais',
    minAmount: 2000,
    maxAmount: 250000,
    defaultAmount: 30000,
    minMonths: 12,
    maxMonths: 120,
    defaultMonths: 96,
    monthlyRate: 1.50,
    calculationMonthlyRate: 1.55,
    annualRate: 19.56,
    popularMonths: [24, 36, 48, 60, 72, 84, 96, 120],
    description: 'Linhas exclusivas para servidores públicos (SIAPE, federais, estaduais e distritais) em até 120 meses com taxas diferenciadas.',
    requirements: [
      'Servidores Federais, Estaduais e Distritais',
      'Margem consignável disponível',
      'Sem consulta ao SPC/Serasa',
      'Valores sujeito análise pessoal de crédito e disponibilidade dos bancos. (Pode ocorrer alterações por parte dos bancos)'
    ]
  },
  cartao: {
    id: 'cartao',
    name: 'Cartões Consignado e Benefício',
    badge: 'Taxa Especial 2,5% a.m.',
    tagline: 'Sem anuidade & Dinheiro na conta',
    minAmount: 500,
    maxAmount: 25000,
    defaultAmount: 5000,
    minMonths: 12,
    maxMonths: 84,
    defaultMonths: 84,
    monthlyRate: 2.50,
    calculationMonthlyRate: 2.55,
    annualRate: 34.49,
    popularMonths: [24, 36, 48, 60, 84],
    description: 'Cartão de Crédito Consignado e Cartão Benefício exclusivos. Permite sacar até 100% do limite em dinheiro na conta além de oferecer descontos e benefícios.',
    requirements: [
      'Beneficiários INSS ou Servidores Públicos',
      'Margem exclusiva para cartão (5%)',
      'Sem anuidade e sem taxa de emissão',
      'Valores sujeito análise pessoal de crédito e disponibilidade dos bancos. (Pode ocorrer alterações por parte dos bancos)'
    ]
  }
};

export const COMPARISON_RATES: RateComparisonItem[] = [
  {
    institution: 'Credita BSB',
    categoryName: 'Consignado',
    monthlyRate: 1.39,
    badge: 'Menor Taxa',
    isBest: true
  },
  {
    institution: 'Outros Bancos',
    categoryName: 'Média Consignado',
    monthlyRate: 1.80,
    badge: 'Média Mercado'
  },
  {
    institution: 'Financiamento',
    categoryName: 'Veículo',
    monthlyRate: 2.50,
    badge: 'Média Mercado'
  },
  {
    institution: 'Cheque Especial',
    categoryName: 'Limite da Conta',
    monthlyRate: 8.40,
    badge: 'Muito Alto'
  },
  {
    institution: 'Cartão',
    categoryName: 'de Crédito',
    monthlyRate: 14.50,
    badge: 'Juros Abusivos'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'José Roberto de Oliveira',
    role: 'PMDF',
    category: 'siape',
    city: 'Brasília',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 38.000,00',
    savings: 'Atendimento nota 10',
    text: 'Atendimento nota 10! Já conheço a empresa há mais de 10 anos, a Patrícia sempre me atende muito bem e sempre faz o melhor.',
    date: 'Há 2 dias'
  },
  {
    id: '2',
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
    date: 'Há 3 dias'
  },
  {
    id: '3',
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
    id: '4',
    name: 'Valéria Cristina Ramos',
    role: 'Pensionista INSS (Cartão Benefício)',
    category: 'cartao',
    city: 'Águas Claras',
    state: 'DF',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    loanAmount: 'R$ 5.200,00',
    savings: 'Sem anuidade',
    text: 'Fiz o cartão benefício e saquei o limite na mesma hora direto na conta. Recomendo a todos!',
    date: 'Há 1 semana'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Quem pode contratar na Credita BSB?',
    answer: 'Aposentados e Pensionistas do INSS, Servidores Públicos, celetista e beneficiários com limite disponível.'
  },
  {
    question: 'A credita cobra taxas antecipadas?',
    answer: 'NUNCA! Não cobramos taxas antes do empréstimo. Na Credita BSB você não paga absolutamente nada antes. O dinheiro cai integralmente na sua conta.'
  },
  {
    question: 'Estou negativado, existe alguma possibilidade para mim?',
    answer: 'Sim, trabalhamos com várias possibilidades como renegociação e portabilidade com taxas menores que possibilita a liberação de novos créditos, mesmo para negativados.'
  },
  {
    question: 'Cartão consignado?',
    answer: 'É um cartão sem anuidade com margem extra exclusiva de 5%, que permite sacar até 100% do limite em dinheiro na conta além de oferecer descontos e benefícios. Também temos taxas atrativas nessa modalidade.'
  },
  {
    question: 'Quem está com margem negativa ou sem margem?',
    answer: 'Em alguns casos é possível fazer a redução da margem negativa com redução de parcela e renegociação de contratos.'
  },
  {
    question: 'Em quanto tempo o dinheiro é liberado?',
    answer: 'Via transferência bancária: Dinheiro liberado até no mesmo dia após a validação e assinatura digital.'
  }
];

export const RECENT_SIMULATIONS = [
  { name: 'Maria S.', city: 'Brasília - DF', amount: 'R$ 18.000', type: 'Consignado INSS', time: 'Há 2 min' },
  { name: 'José R.', city: 'PMDF / Brasília', amount: 'R$ 38.000', type: 'Servidor SIAPE', time: 'Há 4 min' },
  { name: 'Antônio R.', city: 'Conic / Asa Sul', amount: 'R$ 35.000', type: 'Servidor SIAPE', time: 'Há 5 min' },
  { name: 'João P.', city: 'Taguatinga - DF', amount: 'R$ 12.500', type: 'Consignado INSS', time: 'Há 7 min' },
  { name: 'Valéria M.', city: 'Brasília - DF', amount: 'R$ 45.000', type: 'Servidor SIAPE', time: 'Há 10 min' },
  { name: 'Geraldo B.', city: 'Ceilândia - DF', amount: 'R$ 5.000', type: 'Cartão Benefício', time: 'Há 12 min' }
];
