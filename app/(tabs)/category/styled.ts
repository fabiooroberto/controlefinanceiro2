import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const PageCategoriesFinance = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
`;