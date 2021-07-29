import { DefaultTheme } from "styled-components";

const palette = {
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#FFEB60",
  subYellow: "FFB904",
  purple: "#A451F7",
  subPurple: "#534165",
  orange: "#EB683F",
  red: "#DF1D1D",
  blue: "#0078D4",
  grayScale: {
    50: "#FFFFFF",
    100: "#DFDFDF",
    200: "#C1C1C1",
    300: "#A5A5A5",
    400: "#8B8B8B",
    500: "#6F6F6F",
    600: "#555555",
    700: "#3D3D3D",
    800: "#242424",
    900: "#000000",
  },
  backgroundColors: {
    50: "#F7F7F7",
    100: "#F5F4F3",
    200: "#FAFAF6",
    300: "#F6F4EE",
  },
};
const devides = {
  mobile: 500,
  tablet: 768,
  desktop: 1200,
};
const fontSizes = {};
const fontWeight = {};
const theme: DefaultTheme = {
  palette,
  devides,
  fontSizes,
  fontWeight,
};
export default theme;
