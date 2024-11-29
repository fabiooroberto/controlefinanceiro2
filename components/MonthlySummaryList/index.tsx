import { MonthlySummary } from '@/Models/Transaction';
import * as S from './styled';
import { Text, View, FlatList } from 'react-native';
import { useEffect } from 'react';
import { YearMonthGroupedTransactions } from '@/mocks/transactions';

interface MonthlySummaryListMinProps {
  data: YearMonthGroupedTransactions[];
}

export default function MonthlySummaryListMin(props: MonthlySummaryListMinProps) {

  useEffect(() => {
    console.log("Formatted summaries:", JSON.stringify(props.data, null, 2));
  }, [props.data]);

  const renderMonthItem = ({ item }: { item: MonthlySummary }) => (
    <S.Item>
      <S.Month>{item.month}</S.Month>
      <S.Amount>Receitas: {item.totalReceitas}</S.Amount>
      <S.Amount>Despesas: {item.totalDespesas}</S.Amount>
    </S.Item>
  );

  const renderYearItem = ({ item }: { item: YearMonthGroupedTransactions }) => (
    <View>
      <S.Year>{item.year}</S.Year>
      <FlatList
        data={item.months}
        keyExtractor={(monthItem) => monthItem.month}
        renderItem={renderMonthItem}
      />
    </View>
  );

  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.year}
      renderItem={renderYearItem}
    />
  );
}
