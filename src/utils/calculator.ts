import { WHATSAPP_NUMBER } from '../data';
import { LoanCategory } from '../types';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function calculateMonthlyInstallment(amount: number, months: number, monthlyRatePercent: number): number {
  if (months <= 0 || amount <= 0) return 0;
  
  const r = monthlyRatePercent / 100;
  if (r === 0) return amount / months;

  // Standard amortized loan formula (Price System)
  const pmt = (amount * (r * Math.pow(1 + r, months))) / (Math.pow(1 + r, months) - 1);
  return pmt;
}

export function calculateTotalPayment(amount: number, months: number, monthlyRatePercent: number): number {
  const pmt = calculateMonthlyInstallment(amount, months, monthlyRatePercent);
  return pmt * months;
}

export function calculateTotalInterest(amount: number, months: number, monthlyRatePercent: number): number {
  const total = calculateTotalPayment(amount, months, monthlyRatePercent);
  return Math.max(0, total - amount);
}

export function calculateSavingsComparedToBank(amount: number, months: number, ourRate: number, competitorRate: number = 2.45): number {
  const ourTotal = calculateTotalPayment(amount, months, ourRate);
  const bankTotal = calculateTotalPayment(amount, months, competitorRate);
  return Math.max(0, bankTotal - ourTotal);
}

export function generateWhatsAppLink({
  name,
  categoryName,
  amount,
  months,
  installmentValue,
  additionalNotes
}: {
  name?: string;
  categoryName: string;
  amount: number;
  months: number;
  installmentValue?: number;
  additionalNotes?: string;
}): string {
  const formattedAmount = formatCurrency(amount);
  const formattedInstallment = installmentValue ? formatCurrency(installmentValue) : '';

  let message = `♦️ Olá, Credita BSB! Vim pelo site oficial e gostaria de fazer uma simulação de crédito.\n\n`;
  if (name) message += `♦️ *Nome:* ${name}\n`;
  message += `♦️ *Modalidade:* ${categoryName}\n`;
  message += `♦️ *Valor Desejado:* ${formattedAmount}\n`;
  message += `♦️ *Prazo:* ${months}x parcelas\n`;
  if (formattedInstallment) {
    message += `♦️ *Parcela Estimada:* ~${formattedInstallment}/mês\n`;
  }
  if (additionalNotes) {
    message += `♦️ *Observação:* ${additionalNotes}\n`;
  }
  message += `\n♦️ Solicito atendimento ágil para verificar disponibilidade e liberação do crédito!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function maskCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
}
