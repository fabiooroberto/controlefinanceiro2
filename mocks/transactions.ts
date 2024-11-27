// mocks/transactions.ts
import { Transaction } from '@/Models/Transaction';

let transactions: Transaction[] = [
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
    {
        id: '5',
        description: 'Academia',
        amount: 'R$ 89,90',
        transactionType: 'despesa',
        category: 'Saúde',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 2, 5), // 5 de março de 2023
        isPaid: true,
    },
    {
        id: '6',
        description: 'Freelance Design',
        amount: 'R$ 2500,00',
        transactionType: 'receita',
        category: 'Trabalho Extra',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 2, 15), // 15 de março de 2023
        isPaid: true,
    },
    {
        id: '11',
        description: 'Compras no Shopping',
        amount: 'R$ 450,00',
        transactionType: 'despesa',
        category: 'Lazer',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 2, 1), // 1 de março de 2023
        isPaid: true,
    },
    {
        id: '12',
        description: 'Curso Online',
        amount: 'R$ 297,00',
        transactionType: 'despesa',
        category: 'Educação',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 2, 3), // 3 de março de 2023
        isPaid: true,
    },
    {
        id: '13',
        description: 'Venda de Artesanato',
        amount: 'R$ 180,00',
        transactionType: 'receita',
        category: 'Vendas',
        paymentType: 'Pix',
        date: new Date(2023, 2, 7), // 7 de março de 2023
        isPaid: true,
    },
    {
        id: '14',
        description: 'Restaurante',
        amount: 'R$ 125,00',
        transactionType: 'despesa',
        category: 'Alimentação',
        paymentType: 'Cartão de Débito',
        date: new Date(2023, 2, 10), // 10 de março de 2023
        isPaid: true,
    },
    {
        id: '15',
        description: 'Consultoria TI',
        amount: 'R$ 1500,00',
        transactionType: 'receita',
        category: 'Trabalho Extra',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 2, 12), // 12 de março de 2023
        isPaid: true,
    },
    {
        id: '16',
        description: 'Manutenção Carro',
        amount: 'R$ 350,00',
        transactionType: 'despesa',
        category: 'Transporte',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 2, 18), // 18 de março de 2023
        isPaid: true,
    },
    {
        id: '17',
        description: 'Venda de Eletrônicos',
        amount: 'R$ 900,00',
        transactionType: 'receita',
        category: 'Vendas',
        paymentType: 'Pix',
        date: new Date(2023, 2, 20), // 20 de março de 2023
        isPaid: true,
    },
    {
        id: '18',
        description: 'Farmácia',
        amount: 'R$ 89,90',
        transactionType: 'despesa',
        category: 'Saúde',
        paymentType: 'Cartão de Débito',
        date: new Date(2023, 2, 22), // 22 de março de 2023
        isPaid: true,
    },
    {
        id: '19',
        description: 'Aula Particular',
        amount: 'R$ 150,00',
        transactionType: 'receita',
        category: 'Educação',
        paymentType: 'Dinheiro',
        date: new Date(2023, 2, 25), // 25 de março de 2023
        isPaid: true,
    },
    {
        id: '20',
        description: 'Material Escritório',
        amount: 'R$ 75,00',
        transactionType: 'despesa',
        category: 'Trabalho',
        paymentType: 'Cartão de Crédito',
        date: new Date(2023, 2, 27), // 27 de março de 2023
        isPaid: true,
    },
    {
        id: '21',
        description: 'Serviço de Streaming',
        amount: 'R$ 39,90',
        transactionType: 'despesa',
        category: 'Entretenimento',
        paymentType: 'Débito Automático',
        date: new Date(2023, 2, 28), // 28 de março de 2023
        isPaid: true,
    },
    {
        id: '22',
        description: 'Comissão Vendas',
        amount: 'R$ 750,00',
        transactionType: 'receita',
        category: 'Trabalho Extra',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 2, 30), // 30 de março de 2023
        isPaid: true,
    },
    {
        id: '7',
        description: 'Aluguel',
        amount: 'R$ 1200,00',
        transactionType: 'despesa',
        category: 'Moradia',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 3, 5), // 5 de abril de 2023
        isPaid: true,
    },
    {
        id: '8',
        description: 'Venda de móveis usados',
        amount: 'R$ 800,00',
        transactionType: 'receita',
        category: 'Vendas',
        paymentType: 'Pix',
        date: new Date(2023, 3, 18), // 18 de abril de 2023
        isPaid: true,
    },
    {
        id: '9',
        description: 'Conta de internet',
        amount: 'R$ 99,90',
        transactionType: 'despesa',
        category: 'Contas',
        paymentType: 'Débito Automático',
        date: new Date(2023, 4, 10), // 10 de maio de 2023
        isPaid: false,
    },
    {
        id: '10',
        description: 'Bônus anual',
        amount: 'R$ 3000,00',
        transactionType: 'receita',
        category: 'Salário',
        paymentType: 'Transferência Bancária',
        date: new Date(2023, 4, 30), // 30 de maio de 2023
        isPaid: true,
    },
    
];

export const getTransactions = () => transactions;

export const addTransaction = (transaction: Transaction) => {
    console.log('Adding transaction:', transaction);
    transactions = [...transactions, transaction];
    console.log('Transactions:', transactions);
};
