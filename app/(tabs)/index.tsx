import { Container, Page } from '@/styled/global';
import MonthlySummaryList from '@/components/MonthlySummaryList';
import { groupTransactionsByYearAndMonth, getTransactions } from '@/mocks/transactions';
import { useEffect, useState } from 'react';
import HeaderMin from '@/components/Header';

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
        <HeaderMin title='Resumo transações' />
        <MonthlySummaryList data={monthlySummaries} />
      </Container>
    </Page>
  );
}
