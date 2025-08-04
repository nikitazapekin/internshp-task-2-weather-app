import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    container: number;
    deviceHeight: string;
    colors: {
      black: string;
      blue: string;
      gray: string;
      white: string;
    };
    fontFamilies: {
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
    };
    fontWeights: {
      regular: number;
    };
    media: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
  }
}
