// pages/TransactionList.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Platform, StatusBar } from 'react-native';
import { Transaction } from '@/Models/Transaction';
import { getTransactions } from '@/mocks/transactions';

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
    const transactions = getTransactions();
    const groupedTransactions = groupTransactionsByMonth(transactions);

    return (
        <View style={styles.container}>
            <FlatList
                data={Object.keys(groupedTransactions)}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.monthHeader}>{item}</Text>
                        {groupedTransactions[item].map((transaction) => (
                            <View key={transaction.id} style={styles.transactionItem}>
                                <Text>{transaction.description}</Text>
                                <Text>{transaction.amount}</Text>
                                <Text>{transaction.date.toLocaleDateString('pt-BR')}</Text>
                            </View>
                        ))}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    monthHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        padding: 10,
        marginTop: 10,
    },
    transactionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default TransactionList;
