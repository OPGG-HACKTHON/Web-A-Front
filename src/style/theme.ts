const palette = {
  primary: {
    light: "#9A75F7",
    main: "#836EFF",
    dark: "#422DB8",
  },
  secondary: {
    main: "#FFAA04",
  },
  grayScale: {
    100: "#FFFFFF",
    200: "#DFDFDF",
    300: "#A5A5A5",
    400: "#6F6F6F",
    500: "#555555",
    600: "#3D3D3D",
    700: "#000000",
  },
  backgroundColors: {
    light: "#F6F6F6",
    dark: "#0F0F15",
    main: "#161623",
  },
};
const devides = {
  mobile: 500,
  tablet: 768,
  desktop: 1200,
};
const fontSizes = {};
const fontWeight = {};

const theme = {
  palette,
  devides,
  fontSizes,
  fontWeight,
};

export default theme;

export type Theme = typeof theme;
