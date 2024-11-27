import styles from '@/constants/style';
import { categoriesData } from "./category-mock";
import { Category, CategoryItem } from './category-types';
import React, { useState } from 'react';
import { View, Text, SectionList, Modal, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter o pacote @expo/vector-icons instalado
import { Page } from '@/styled/global';

export default function TabCategory() {
  const [categories, setCategories] = useState<Category[]>(categoriesData);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  const [isNewItem, setIsNewItem] = useState<boolean>(false);

  const openModal = (item: CategoryItem | null = null) => {
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
    categories.forEach(category => {
      category.data.forEach(item => {
        const itemId = parseInt(item.id, 10);
        if (itemId > maxId) {
          maxId = itemId;
        }
      });
    });
    return (maxId + 1).toString();
  };

  const saveItem = () => {
    if (selectedItem) {
      const firstLetter = selectedItem.name.charAt(0).toUpperCase();
      let updatedCategories = [...categories];
      const categoryIndex = updatedCategories.findIndex(category => category.title === firstLetter);

      if (isNewItem) {
        const newItem = { ...selectedItem, id: generateNewId() };

        if (categoryIndex !== -1) {
          updatedCategories[categoryIndex].data.push(newItem);
        } else {
          const newCategory: Category = {
            id: generateNewId(),
            title: firstLetter,
            data: [newItem],
          };
          updatedCategories.push(newCategory);
        }
      } else {
        updatedCategories = updatedCategories.map(section => ({
          ...section,
          data: section.data.map(item => 
            item.id === selectedItem.id ? selectedItem : item
          )
        }));
      }

      updatedCategories.sort((a, b) => a.title.localeCompare(b.title));
      setCategories(updatedCategories);
      closeModal();
    }
  };

  const deleteItem = (itemId: string) => {
    let updatedCategories = categories.map(section => ({
      ...section,
      data: section.data.filter(item => item.id !== itemId)
    }));

    // Remover categorias vazias
    updatedCategories = updatedCategories.filter(section => section.data.length > 0);

    setCategories(updatedCategories);
  };

  return (
    <Page>
      <Text>Categorias</Text>
      <SectionList
        sections={categories}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <Text style={styles.itemName} onPress={() => openModal(item)}>
                {item.name}
              </Text>
              <Text
                style={styles.itemDescription}
                onPress={() => openModal(item)}
              >
                {item.description}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item.id}`}
        extraData={categories} // Adicione esta linha para forçar a atualização
      />
      <TouchableOpacity
        style={[styles.addButton]}
        onPress={() => openModal(null)}
      >
        <Text style={styles.textStyle}>Adicionar Novo Item</Text>
      </TouchableOpacity>
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {isNewItem ? "Adicionar Item" : "Editar Item"}
            </Text>
            <TextInput
              style={styles.input}
              value={selectedItem.name}
              onChangeText={(text) =>
                setSelectedItem({ ...selectedItem, name: text })
              }
              placeholder="Nome"
            />
            <TextInput
              style={styles.input}
              value={selectedItem.description}
              onChangeText={(text) =>
                setSelectedItem({ ...selectedItem, description: text })
              }
              placeholder="Descrição"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={saveItem}
              >
                <Text style={styles.textStyle}>
                  {isNewItem ? "Adicionar" : "Salvar"}
                </Text>
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
    </Page>
  );
}
