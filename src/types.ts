export type LoanCategory = 'inss' | 'cartao' | 'portabilidade' | 'fgts' | 'siape' | 'clt';

export interface LoanCategoryConfig {
  id: LoanCategory;
  name: string;
  badge: string;
  tagline: string;
  minAmount: number;
  maxAmount: number;
  defaultAmount: number;
  minMonths: number;
  maxMonths: number;
  defaultMonths: number;
  monthlyRate: number; // e.g. 1.39%
  annualRate: number;
  popularMonths: number[];
  description: string;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: LoanCategory;
  city: string;
  state: string;
  avatar: string;
  rating: number;
  loanAmount: string;
  savings: string;
  text: string;
  date: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  category: LoanCategory;
  amount: number;
  installments: number;
  cpf?: string;
  convenio?: string;
}

export interface RateComparisonItem {
  institution: string;
  categoryName: string;
  monthlyRate: number; // in %
  badge?: string;
  isBest?: boolean;
}
