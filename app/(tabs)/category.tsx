import styles from '@/constants/style';
import categories from '@/Models/Category/category';
import React from 'react';
import { View, Text, SectionList } from 'react-native';

export default function TabCategory() {
  
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <SectionList
        sections={categories}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item.name}`}
      />
    </View>
  );
}
