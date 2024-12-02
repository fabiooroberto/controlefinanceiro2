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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <S.Title>Transações</S.Title>
                    <S.SubTitle>Últimas transações, feitas por mês.</S.SubTitle>
                </View>
                <View>
                    <S.ActionAdd onPress={() => openTransaction() }>
                        <S.TextActionAdd>Add</S.TextActionAdd>
                        <Ionicons name='add' size={24} color={theme.colors.textWhite} />
                    </S.ActionAdd>
                </View>
            </View>
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
