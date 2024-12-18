import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Transaction } from '@/Models/Transaction';
import { getTransactions } from '@/mocks/transactions';
import * as S from '@/styled/styled-transaction';
import { Page, Container } from '@/styled/global';
import GroupTransactionMin from '@/components/GroupTransaction';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useFocusEffect, useRouter } from 'expo-router';
import HeaderMin from '@/components/Header';

const groupTransactionsByMonth = (transactions: Transaction[]) => {
    return transactions.reduce((groups: { [key: string]: Transaction[] }, transaction) => {
        const month = transaction.date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
        if (!groups[month]) {
            groups[month] = [];
        }
        groups[month].push(transaction);
        return groups;
    }, {});
};

const TransactionList: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [groupedTransactions, setGroupedTransactions] = useState<{ [key: string]: Transaction[] }>({});
    const theme = useTheme();
    const router = useRouter();
    const openTransaction = () => {
        // Define what happens when the action is triggered
        router.push('/(modals)/transaction-insert');
    };

    const fetchTransactions = useCallback(() => {
        console.clear();
        const transactions = getTransactions();
        setTransactions(transactions);
        setGroupedTransactions(groupTransactionsByMonth(transactions));
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchTransactions();
        }, [fetchTransactions])
    );

    const renderItem = useCallback(({ item }: { item: string }) => (
        <GroupTransactionMin month={item} data={groupedTransactions[item]} />
    ), [groupedTransactions]);

    return (
        <Page>
            <Container>
                <HeaderMin title='Transações' subTitle='Últimas transações, feitas por mês.' action={() => openTransaction()} />
                <FlatList
                    data={Object.keys(groupedTransactions)}
                    keyExtractor={(item) => item.toString()}
                    renderItem={renderItem}
                />
            </Container>
        </Page>
    );
};


export default TransactionList;
