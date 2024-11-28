import { Container, Page } from '@/styled/global';
import * as S from './styled';
import { View } from 'react-native';


export default function PaymentPage() {
  return (
    <Page>
      <Container>
        <View>
          <S.Title>
            Payment
          </S.Title>
          <S.SubTitle>
            Subtitle
          </S.SubTitle>
        </View>
      </Container>
    </Page>
  );
}
