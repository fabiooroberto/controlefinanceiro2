import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontWeight.extraBold};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textDefault};
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs};
  `;
  
  export const SubTitle = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.sm};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textneutral};
  margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
`;

export const ActionAdd = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary600};
  margin-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs};
  padding-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
  padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
`;
  
  export const TextActionAdd = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.textWhite};
  font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontWeight.bold}; 
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.typography.fontSize.md};
`;