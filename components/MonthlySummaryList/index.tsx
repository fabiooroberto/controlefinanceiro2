import { MonthlySummary } from '@/Models/Transaction';
import * as S from './styled';
import { FlatList } from 'react-native';

export default function MonthlySummaryListMin(summaries: MonthlySummary[]) {
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item) => item.month}
      renderItem={({ item }) => (
        <S.Item>
          <S.Month>{item.month}</S.Month>
          <S.Amount>Receitas: {item.totalReceitas}</S.Amount>
          <S.Amount>Despesas: {item.totalDespesas}</S.Amount>
        </S.Item>
      )}
    />
  );
}
