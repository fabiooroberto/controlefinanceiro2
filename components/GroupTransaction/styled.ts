import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Group = styled.View`
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.borderRadius.lg}px; 
  padding: 5px;
  margin-bottom: 5px;
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary500}; 
  borderWidth: 1px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
`;

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
