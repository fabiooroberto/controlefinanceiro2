export interface PaymentTypeItem {
    id: string
    name: string;
    description: string;
}

export interface TabPaymentTypeProps {
    paymentTypes: PaymentTypeItem[];
}

const paymentTypes = [
    { id: '1', name: 'Dinheiro', description: 'Pagamento em dinheiro' },
    { id: '2', name: 'Débito', description: 'Pagemnto com cartão de Débito' },
    { id: '3', name: 'Crédito', description: 'Pagemnto com cartão de Crédito' },
    { id: '4', name: 'Pix', description: 'Pagemnto com PIX' },
];

export default paymentTypes;
