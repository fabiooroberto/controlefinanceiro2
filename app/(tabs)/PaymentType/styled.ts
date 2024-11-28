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

