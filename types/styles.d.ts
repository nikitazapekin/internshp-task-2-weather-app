import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    container: number;
    largeContainer: number;
    sizes: Record<string, string>;
    colors: {
      black: string;
      blue: string;
      gray: string;
      white: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
      xxs: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      bold: number;
    };
    media: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
    deviceHeight: string;
  }
}
