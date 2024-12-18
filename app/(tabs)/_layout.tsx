import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="TransactionList/index"
        options={{
          title: 'Transações',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="category/index"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="pricetags-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PaymentType/index"
        options={{
          title: 'Tipos de pagamento',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="card-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transaction-insert"
        options={{
          title: 'Inserir transação',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="pulse-sharp" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Payment/index"
        options={{
          title: 'Pagamentos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cash-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
