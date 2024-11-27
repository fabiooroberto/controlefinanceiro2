import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';


export const Item = styled.View<{ disabledLine: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
  border-bottom-width: ${({ disabledLine }: { disabledLine: boolean }) => disabledLine ? 0 : 1}px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textneutral};
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textDefault};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textneutral};
`;  

export const AmountContainer = styled.View<{ receita: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ receita, theme }: { receita: boolean, theme: DefaultTheme }) => receita ? theme.colors.success : theme.colors.error};
  padding: 12px 8px;
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontWeight.extraBold};
  border-radius: 12px;
`;
  
  export const Amount = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textWhite};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontWeight.extraBold};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs};
`;  

export const Date = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textneutral};
`;    