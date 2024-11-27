import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Title = styled.Text` 
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  margin-bottom: 20px;
`;


export const SubTitle = styled.Text` 
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;