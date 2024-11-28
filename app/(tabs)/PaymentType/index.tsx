import styles from '@/constants/style';
import * as S from './styled';
import paymentTypesData, { PaymentTypeItem } from '@/Models/Category/payment-type';
import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote @expo/vector-icons instalado
import { Container, Page } from '@/styled/global';
import theme from '@/styled/theme';
export default function TabPaymentType() {
  const [paymentTypes, setPaymentTypes] = useState<PaymentTypeItem[]>(paymentTypesData);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PaymentTypeItem | null>(null);
  const [isNewItem, setIsNewItem] = useState<boolean>(false);

  const openModal = (item: PaymentTypeItem | null = null) => {
    setSelectedItem(item || { id: '', name: '', description: '' });
    setIsNewItem(item === null);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setIsNewItem(false);
  };

  const generateNewId = (): string => {
    let maxId = 0;
    paymentTypes.forEach(item => {
      const itemId = parseInt(item.id, 10);
      if (itemId > maxId) {
        maxId = itemId;
      }
    });
    return (maxId + 1).toString();
  };

  const saveItem = () => {
    if (selectedItem) {
      let updatedPaymentTypes = [...paymentTypes];

      if (isNewItem) {
        const newItem = { ...selectedItem, id: generateNewId() };
        updatedPaymentTypes.push(newItem);
      } else {
        updatedPaymentTypes = updatedPaymentTypes.map(item =>
          item.id === selectedItem.id ? selectedItem : item
        );
      }

      setPaymentTypes(updatedPaymentTypes);
      closeModal();
    }
  };

  const deleteItem = (itemId: string) => {
    const updatedPaymentTypes = paymentTypes.filter(item => item.id !== itemId);
    setPaymentTypes(updatedPaymentTypes);
  };

  return (
    <Page>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <S.Title>Tipos de pagamentos</S.Title>
            <S.SubTitle>Adicione, edite ou remova tipos de pagamentos</S.SubTitle>
          </View>
          <View>
            <S.Button onPress={() => openModal()}>
              <S.ButtonText>Add</S.ButtonText>
              <Ionicons name='add' size={24} color={theme.colors.textWhite} />
            </S.Button>
          </View>
        </View>
        <FlatList
          data={paymentTypes}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemContent}>
                <Text style={styles.itemName} onPress={() => openModal(item)}>{item.name}</Text>
                <Text style={styles.itemDescription} onPress={() => openModal(item)}>{item.description}</Text>
              </View>
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => `basicListEntry-${item.id}`}
        />
        {selectedItem && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{isNewItem ? 'Adicionar Tipo' : 'Editar Tipo'}</Text>
              <TextInput
                style={styles.input}
                value={selectedItem.name}
                onChangeText={(text) => setSelectedItem({ ...selectedItem, name: text })}
                placeholder="Nome"
              />
              <TextInput
                style={styles.input}
                value={selectedItem.description}
                onChangeText={(text) => setSelectedItem({ ...selectedItem, description: text })}
                placeholder="Descrição"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonOpen]}
                  onPress={saveItem}
                >
                  <Text style={styles.textStyle}>{isNewItem ? 'Adicionar' : 'Salvar'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={closeModal}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </Container>
    </Page>
  );
}
