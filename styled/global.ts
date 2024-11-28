import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";
import { Platform, StatusBar } from "react-native";

export const Page = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background};
  padding-top: ${Platform.OS === "ios" ? '20px' : `${StatusBar.currentHeight}px`};
`;

export const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.content};
  padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.content};
`;
