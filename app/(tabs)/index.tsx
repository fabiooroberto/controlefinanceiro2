import { Container, Page } from '@/styled/global';
import { View, Button } from 'react-native';
import * as S from '@/styled/styled-home';
import MonthlySummaryList from '@/components/MonthlySummaryList';
import { groupTransactionsByYearAndMonth, getTransactions } from '@/mocks/transactions';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  //const monthlySummaries = groupTransactionsByYearAndMonth(getTransactions());
  const [monthlySummaries, setMonthlySummaries] = useState(groupTransactionsByYearAndMonth(getTransactions()));
  const updateData = () => {
    // Simulação de atualização de dados
    const updatedTransactions = [...getTransactions()];
    setMonthlySummaries(groupTransactionsByYearAndMonth(updatedTransactions));
  };

  useEffect(() => {
    console.log('HomeScreen mounted');
    updateData();
  }, []);

  console.clear();
  return (
    <Page>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Button title="Deslogar" />
            <S.Title>Categorias</S.Title>
          </View>
        </View>
        <MonthlySummaryList data={monthlySummaries} />
      </Container>
    </Page>
  );
}
