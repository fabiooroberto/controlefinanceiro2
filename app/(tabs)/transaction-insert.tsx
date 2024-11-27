import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInputMask } from 'react-native-masked-text';
import categories from '@/Models/Category/category';
import paymentTypes from '@/Models/Category/payment-type';
import styles from '@/constants/style';

export default function TransactionInsert() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('receita');
    const [category, setCategory] = useState(categories[0].id);
    const [paymentType, setPaymentType] = useState(paymentTypes[0].id);
    const [date, setDate] = useState(new Date());
    const [isPaid, setIsPaid] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSubmit = () => {
        // Lógica para enviar os dados da transação
        console.log({
            description,
            amount,
            transactionType,
            category,
            paymentType,
            date,
            isPaid,
        });
    };

    return (
        <View style={ styles.container}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Text>Descrição</Text>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Descrição"
                    style={{ borderBottomWidth: 1, marginBottom: 20 }}
                />

                <Text>Valor</Text>
                <TextInputMask
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$ ',
                        suffixUnit: ''
                    }}
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    placeholder="Valor"
                    style={{ borderBottomWidth: 1, marginBottom: 20 }}
                />

                <Text>Tipo de Transação</Text>
                <Picker
                    selectedValue={transactionType}
                    onValueChange={(itemValue) => setTransactionType(itemValue)}
                    style={{ marginBottom: 20 }}
                >
                    <Picker.Item label="Receita" value="receita" />
                    <Picker.Item label="Despesa" value="despesa" />
                </Picker>

                <Text>Categoria</Text>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    style={{ marginBottom: 20 }}
                >
                    {categories.map((cat) =>
                        cat.data.map((dataItem) => (
                            <Picker.Item key={dataItem.id} label={dataItem.name} value={dataItem.id} />
                        ))
                    )}
                </Picker>

                <Text>Tipo de Pagamento</Text>
                <Picker
                    selectedValue={paymentType}
                    onValueChange={(itemValue) => setPaymentType(itemValue)}
                    style={{ marginBottom: 20 }}
                >
                    {paymentTypes.map((type) => (
                        <Picker.Item key={type.id} label={type.name} value={type.id} />
                    ))}
                </Picker>

                <Text>Data</Text>
                <Button title="Escolher Data" onPress={() => setShowDatePicker(true)} />
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
                <Text>{date.toLocaleDateString()}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Text>Pago</Text>
                    <Switch value={isPaid} onValueChange={setIsPaid} />
                </View>
            </ScrollView>

            <View style={{ padding: 20 }}>
                <Button title="Salvar Transação" onPress={handleSubmit} />
            </View>
        </View>
    );
};
