import { Container, Page } from '@/styled/global';
import { View } from 'react-native';
import * as S from './styled';
import MonthlySummaryList from '@/components/MonthlySummaryList';
import { groupTransactionsByYearAndMonth, getTransactions } from '@/mocks/transactions';
import { MonthlySummary } from '@/Models/Transaction';
import { useState } from 'react';

export default function HomeScreen() {
  const monthlySummaries = groupTransactionsByYearAndMonth(getTransactions());
  monthlySummaries

  console.clear();
  return (
    <Page>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <S.Title>Categorias</S.Title>
          </View>
        </View>
        <MonthlySummaryList data={monthlySummaries} />
      </Container>
    </Page>
  );
}
