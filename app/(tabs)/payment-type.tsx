import styles from '@/constants/style';
import React from 'react';
import {SectionList, Text, View} from 'react-native';

export default function TabPaymentType() {
  return (
    <View style={styles.container}>
      <Text>Tipos de pagamentos</Text>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie'
            ],
          },
          {title: 'K', data: ['Kevin', 'Kris']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}
