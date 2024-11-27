import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.md};
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textWhite};
  margin-bottom: 20px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.textneutral};
  border-radius: 10px;
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
`;