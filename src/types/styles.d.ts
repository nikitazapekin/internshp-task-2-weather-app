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
      xxl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
    };
    zIndexes: {
      minusOne: number;
      zero: number;
      one: number;
      two: number;
    };
    paddings: {
      bannerPaddings: string;
      buttonPaddings: string;
      inputFieldPadding: string;
      eventCardPaddings: string;
      bottomOfBannerPaddings: string;
    };
    paddingsMobile: {
      buttonPaddings: string;
    };
  }
}
