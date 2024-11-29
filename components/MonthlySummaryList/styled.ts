import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import theme from '@/styled/theme';

export const Title = styled.Text` 
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const Item = styled.View`
  padding: ${(theme.space.md)};
  margin: ${(theme.space.md)};
  border-radius: ${(theme.borderRadius.lg)};
  border-color: ${(theme.colors.secondary500)};
  border-width: ${(theme.borderWidth)};
  background-color: ${(theme.colors.background)};
`;

export const Month = styled.Text`
  font-size: ${(theme.fontSizes.lg)};
  font-weight: ${(theme.fontWeights.bold)};
`;

export const Amount = styled.Text`
  font-size: ${(theme.fontSizes.md)};
  color: ${(theme.colors.text)};
`;
