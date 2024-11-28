import { Container, Page } from '@/styled/global';
import { View } from 'react-native';
import * as S from './styled';

export default function HomeScreen() {
  return (
    <Page>
      <Container>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <S.Title>Categorias</S.Title>
          </View>
        </View>
      </Container>
    </Page>
  );
}
