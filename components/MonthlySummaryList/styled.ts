import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Title = styled.Text` 
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  margin-bottom: 20px;
`;
export const Year = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Item = styled.View`
  padding: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
  margin: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
  border-radius: 16px;
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary500};
  border-width: 2;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
`;

export const Month = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontWeight.bold};
  text-transform: uppercase;
`;

export const AmountDespesa = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.md};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.error};
`;

export const AmountReceita = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.md};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.success};
`;
