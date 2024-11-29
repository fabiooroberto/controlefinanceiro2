import { Container, Page } from '@/styled/global';
import { View } from 'react-native';
import * as S from './styled';
import MonthlySummaryList from '@/components/MonthlySummaryList';
import { groupTransactionsByMonth, getTransactions } from '@/mocks/transactions';

export default function HomeScreen() {
  const monthlySummaries = groupTransactionsByMonth(getTransactions());

  return (
    <Page>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <S.Title>Categorias</S.Title>
          </View>
        </View>
        <MonthlySummaryList {...monthlySummaries} />
      </Container>
    </Page>
  );
}
