// models/Transaction.ts
export interface Transaction {
    id: string;
    description: string;
    amount: string;
    transactionType: 'receita' | 'despesa';
    category: string;
    paymentType: string;
    date: Date;
    isPaid: boolean;
}

export interface MonthlySummary {
    month: string;
    totalReceitas: number;
    totalDespesas: number;
  }
