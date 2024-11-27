// mocks/transactions.ts
import { Transaction } from '@/Models/Transaction';

const transactions: Transaction[] = [
    {
        id: '1',
        description: 'Compra de supermercado',
        amount: 'R$ 150,00',
        transactionType: 'despesa',
        category: 'Alimentação',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 0, 15), // 15 de janeiro de 2023
        isPaid: true,
    },
    {
        id: '2',
        description: 'Salário',
        amount: 'R$ 5000,00',
        transactionType: 'receita',
        category: 'Salário',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 0, 30), // 30 de janeiro de 2023
        isPaid: true,
    },
    {
        id: '3',
        description: 'Conta de luz',
        amount: 'R$ 200,00',
        transactionType: 'despesa',
        category: 'Contas',
        paymentType: 'Débito Automático',
        date: new Date(2023, 1, 10), // 10 de fevereiro de 2023
        isPaid: false,
    },
    {
        id: '4',
        description: 'Venda de produto',
        amount: 'R$ 300,00',
        transactionType: 'receita',
        category: 'Vendas',
        paymentType: 'Dinheiro',
        date: new Date(2023, 1, 20), // 20 de fevereiro de 2023
        isPaid: true,
    },
];

export default transactions;
