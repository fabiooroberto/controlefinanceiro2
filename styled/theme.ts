import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondary50: string;
      secondary100: string;
      secondary200: string;
      secondary300: string;
      secondary400: string;
      secondary500: string;
      secondary600: string;
      secondary700: string;
      secondary800: string;
      secondary900: string;
      secondary950: string;
      background: string;
      textneutral: string;
      textDefault: string;
      textWhite: string;
      text: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      content: string;
    };
    typography: {
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      fontWeight: {
        regular: string;
        medium: string;
        bold: string;
        extraBold: string;
      };
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#077A49",
    secondary: "#5856D6",
    secondary50: "#effefb",
    secondary100: "#cafdf6",
    secondary200: "#95faef",
    secondary300: "#58f0e5",
    secondary400: "#26dbd4",
    secondary500: "#0dbfbb",
    secondary600: "#079a9a",
    secondary700: "#0a7273",
    secondary800: "#0e5f61",
    secondary900: "#114f50",
    secondary950: "#022e31",
    background: "#FFFFFF",
    text: "#000000",
    textneutral: "#838F9B",
    textDefault: "#1A1D1D",
    textWhite: "#FFFFFF",
    error: "#ed2015",
    success: "#34C759",
    warning: "#FF9500",
    info: "#5856D6",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    content: "12px",
  },
  typography: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
      extraBold: "800",
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
} 

export default theme;
