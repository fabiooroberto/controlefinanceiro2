// models/Transaction.ts
export interface Transaction {
    id: string;
    description: string;
    amount: string;
    transactionType: string;
    category: string;
    paymentType: string;
    date: Date;
    isPaid: boolean;
}
