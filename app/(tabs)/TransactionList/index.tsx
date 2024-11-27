import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Platform, StatusBar } from 'react-native';
import { Transaction } from '@/Models/Transaction';
import { getTransactions } from '@/mocks/transactions';
import { Link } from 'expo-router';
import * as S from './styled';
import { Page, Container } from '@/styled/global';
import ItemTransactionMin from '@/components/ItemTransaction';
import GroupTransactionMin from '@/components/GroupTransaction';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

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
    useEffect(() => {
        const fetchTransactions = () => {
            const transactions = getTransactions();
            setTransactions(transactions);
            console.log(transactions);  
            setGroupedTransactions(groupTransactionsByMonth(transactions));
        };

        fetchTransactions();
    }, []);

    return (
      <Page>
        <Container>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <S.Title>Transações</S.Title>
                    <S.SubTitle>Últimas transações, feitas por mês.</S.SubTitle>
                </View>
                <View>
                    <S.ActionAdd onPress={() => console.log('Adicionar')}>
                        <S.TextActionAdd>Add</S.TextActionAdd>
                        <Ionicons name='add' size={24} color={theme.colors.textWhite} />
                    </S.ActionAdd>
                </View>
            </View>
            <FlatList
                contentContainerStyle={{ paddingBottom: 16 }}
            data={Object.keys(groupedTransactions)}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <GroupTransactionMin
                month={item}
                data={groupedTransactions[item]}
              />
            )}
          />
        </Container>
      </Page>
    );
};


export default TransactionList;
