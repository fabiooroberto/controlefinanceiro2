import * as S from './styled';
import { View } from 'react-native';
import LogoutButton from '../Logout';
import theme from '@/styled/theme';
import { Ionicons } from '@expo/vector-icons';

interface HeaderMinProps {
  title: string;
  subTitle?: string;
  action?: () => void;

}

export default function HeaderMin(props: HeaderMinProps) {
  return (
    <S.Container>
      <View style={{ width: '80%' }}>
        <S.Title>{props.title}</S.Title>
        <S.SubTitle>{props?.subTitle}</S.SubTitle>
      </View>
      <View style={{ width: '20%', flexDirection: 'column', justifyContent: 'space-between' }}>
        <LogoutButton />
        {props.action && (
          <S.ActionAdd onPress={() => props.action && props.action()}>
            <S.TextActionAdd>Add</S.TextActionAdd>
            <Ionicons name='add' size={24} color={theme.colors.textWhite} />
          </S.ActionAdd>
        )}
      </View>
    </S.Container>
  );
}
