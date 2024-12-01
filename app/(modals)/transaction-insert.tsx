// pages/TransactionInsert.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView, StyleSheet, Platform, StatusBar } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import paymentTypes from '@/Models/Category/payment-type';
import { Transaction } from '@/Models/Transaction';
import { addTransaction } from '@/mocks/transactions';
import { categoriesData } from '../(tabs)/category/category-mock';

export default function TransactionInsert() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState<'receita' | 'despesa'>('receita');
    const [category, setCategory] = useState(categoriesData[0].id);
    const [paymentType, setPaymentType] = useState(paymentTypes[0].id);
    const [date, setDate] = useState(new Date());
    const [isPaid, setIsPaid] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event: any, selectedDate?: Date | undefined): void => {
        const currentDate: Date = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSubmit = () => {
        const newTransaction: Transaction = {
            id: Math.random().toString(),
            description,
            amount,
            transactionType,
            category,
            paymentType,
            date,
            isPaid,
        };
        addTransaction(newTransaction);
        // Limpar os campos após salvar
        setDescription('');
        setAmount('');
        setTransactionType('receita');
        setCategory(categoriesData[0].id);
        setPaymentType(paymentTypes[0].id);
        setDate(new Date());
        setIsPaid(false);
    };

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição"
            style={styles.input}
          />

          <Text style={styles.label}>Valor</Text>
          <MaskedTextInput 
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
              suffixUnit: "",
            }}
            value={amount}
            onChangeText={(text : any) => setAmount(text)}
            placeholder="Valor"
            style={styles.input}
          />

          <Text style={styles.label}>Tipo de Transação</Text>
          <Picker
            selectedValue={transactionType}
            onValueChange={(itemValue) => setTransactionType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Receita" value="receita" />
            <Picker.Item label="Despesa" value="despesa" />
          </Picker>

          <Text style={styles.label}>Categoria</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            {categoriesData.map((cat) =>
              cat.data.map((dataItem) => (
                <Picker.Item
                  key={dataItem.id}
                  label={dataItem.name}
                  value={dataItem.id}
                />
              ))
            )}
          </Picker>

          <Text style={styles.label}>Tipo de Pagamento</Text>
          <Picker
            selectedValue={paymentType}
            onValueChange={(itemValue) => setPaymentType(itemValue)}
            style={styles.picker}
          >
            {paymentTypes.map((type) => (
              <Picker.Item key={type.id} label={type.name} value={type.id} />
            ))}
          </Picker>

          <Text style={styles.label}>Data</Text>
          <Button
            title="Escolher Data"
            onPress={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Text style={styles.dateText}>
            {date.toLocaleDateString("pt-BR")}
          </Text>

          <View style={styles.switchContainer}>
            <Text style={styles.label}>Pago</Text>
            <Switch value={isPaid} onValueChange={setIsPaid} />
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button title="Salvar Transação" onPress={handleSubmit} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollContainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    picker: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    dateText: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
});
