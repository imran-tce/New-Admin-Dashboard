
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import * as React from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Sb36: true;
    h2Sb30: true;
    h3B30: true;
    h4Sb24: true;
    h5Sb16: true;
    StM16: true;
    StSB14: true;
    StM13: true; // only in tabs
    BM20: true;
    BR20: true;
    BR16: true;
    BR14: true;
    BM14: true;
    BSb14: true;
    BM12: true; // only in view more
    BR12: true;
    CR12: true; // C = caption
    Btn1: true;
    Btn2: true;
    LB14: true; // L = link
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h1Sb36: React.CSSProperties;
  h2Sb30: React.CSSProperties;
  h3B30: React.CSSProperties;
  h4Sb24: React.CSSProperties;
  h5Sb16: React.CSSProperties;
  StM16: React.CSSProperties;
  StSB14: React.CSSProperties;
  StM13: React.CSSProperties;
  BM20: React.CSSProperties;
  BR20: React.CSSProperties;
  BR16: React.CSSProperties;
  BR14: React.CSSProperties;
  BM14: React.CSSProperties;
  BSb14: React.CSSProperties;
  BM12: React.CSSProperties;
  BR12: React.CSSProperties;
  CR12: React.CSSProperties;
  Btn1: React.CSSProperties;
  Btn2: React.CSSProperties;
  LB14: React.CSSProperties;
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#050418",
      light: "#1E1D2F",
    },
    secondary: {
      main: "#FDC20F", // first secondary color (yellow)
    },
    error: {
      main: "#DC4F4B",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#387FC8", // second secondary color (blue)
    },
    success: {
      main: "#59C174",
    },
    background: {
      paper: "#ffffff",
      default: "#f5f5f5",
    },
    text: {
      primary: "#5D5C69",
      secondary: "#666666 ",
      disabled: "#999999",
    },
    grey: {
      50: "#FDFDFD",
      100: "#F9F9FB",
      200: "#F2F2F3",
      300: "#82828C",
      400: "#5D5C69",
    },
  },
  typography: {
    // fontFamily: [
    //   "SF Pro Display",
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
    // fontSize: 16,

    h1: {
      textAlign: "left",
      fontFamily:["SF Pro Display Semibold","sans-serif"].join(","),
      fontSize: "36px", // Set heading 1 font size
      fontWeight: 600, // Set heading 1 font weight
      lineHeight: "30px", // Set heading 1 line height
    },
    h2: {
      textAlign: "left",
      fontSize: "30px", // Set heading 2 font size
      fontFamily:["SF Pro Display Semibold","sans-serif"].join(","),
      fontWeight: 600, // Set heading 2 font weight
      lineHeight: "24px", // Set heading 2 line height
    },
    h3: {
      textAlign: "left",
      fontSize: "30px", // Set heading 3 font size
      fontFamily:["SF Pro Display Bold","sans-serif"].join(","),
      fontWeight: 600, // Set heading 3 font weight
      lineHeight: "24px", // Set heading 3 line height
    },
    h4: {
      textAlign: "left",
      fontSize: "24px", // Set heading 4 font size
      fontFamily:["SF Pro Display Semibold","sans-serif"].join(","),
      fontWeight: 600, // Set heading 4 font weight
      lineHeight: "20px", // Set heading 4 line height
    },
    h5: {
      textAlign: "left",
      fontSize: "16px", // Set heading 5 font size
      fontFamily:["SF Pro Display Semibold","sans-serif"].join(","),
      fontWeight: 600, // Set heading 5 font weight
      lineHeight: "20px", // Set heading 5 line height
    },
    subtitle1: {
      textAlign: "left",
      fontSize: "16px", // Set subtitle 1 font size
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 500, // Set subtitle 1 font weight
      lineHeight: "initial", // Set subtitle 1 line height
    },
    subtitle2: {
      textAlign: "left",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontSize: "14px", // Set subtitle 2 font size
      fontWeight: 600, // Set subtitle 2 font weight
      lineHeight: "initial", // Set subtitle 2 line height
    },
    StM13: {
      textAlign: "left",
      fontSize: "13px",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 500,
      lineHeight: "initial",
    },
    BM20: {
      textAlign: "left",
      fontSize: "20px",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 500,
      lineHeight: "initial",
    },
    BR20: {
      textAlign: "left",
      fontSize: "20px",
      fontFamily:["SF Pro Display Regular","sans-serif"].join(","),
      fontWeight: 400,
      lineHeight: "initial",
    },
    body1: {
      textAlign: "left",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontSize: "14px", // Set body 1 font size
      fontWeight: 600, // Set body 1 font weight
      lineHeight: "initial", // Set body 1 line height
    },
    body2: {
      fontSize: "14px", // Set body 2 font size
      fontFamily:["SF Pro Display Regular","sans-serif"].join(","),
      fontWeight: 400, // Set body 2 font weight
      lineHeight: "initial", // Set body 2 line height
    },
    BM14: {
      textAlign: "left",
      fontSize: "14px",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 500,
      lineHeight: "initial",
    },
    BSb14: {
      textAlign: "left",
      fontSize: "14px",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 600,
      lineHeight: "initial",
    },
    BM12: {
      textAlign: "left",
      fontSize: "12px",
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      fontWeight: 500,
      lineHeight: "initial",
    },
    BR12: {
      textAlign: "left",
      fontSize: "12px",
      fontFamily:["SF Pro Display Regular","sans-serif"].join(","),
      fontWeight: 400,
      lineHeight: "initial",
    },
    button: {
      fontSize: "1rem", // Set button font size
      fontWeight: 500, // Set button font weight
      fontFamily:["SF Pro Display Medium","sans-serif"].join(","),
      lineHeight: 1.25, // Set button line height
      textTransform: "uppercase", // Uppercase button text
    },
    caption: {
      textAlign: "left",
      fontSize: "12px",
      fontFamily:["SF Pro Display Regular","sans-serif"].join(","),
      fontWeight: 400,
      lineHeight: "initial",
    },
    overline: {
      fontSize: "0.625rem", // Set overline font size
      fontFamily:["SF Pro Display Regular","sans-serif"].join(","),
      fontWeight: 400, // Set overline font weight
      lineHeight: 1.2, // Set overline line height
      textTransform: "uppercase", // Uppercase overline text
    },
  } as ExtendedTypographyOptions,

  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)", // 1
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)", // 2
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)", // 3
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // 4
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)", // 5
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", // 6
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)", // 7
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)", // 8
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)", // 9
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)", // 10
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)", // 11
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)", // 12
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)", // 13
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)", // 14
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)", // 15
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)", // 16
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)", // 17
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)", // 18
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)", // 19
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)", // 20
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)", // 21
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)", // 22
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)", // 23
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)", // 24
  ],
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          display: "none", // Disable the ripple effect for all elements
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            borderRadius: 4,
            padding: "0.8rem 1rem",
            fontWeight: 400,
            fontSize: "18px",
            boxShadow: "none",
            backgroundColor: "#050418",
            textTransform: "capitalize",
            lineHeight: "21.48px",
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderRadius: 4,
            padding: "0.8rem 1rem",
            fontWeight: 400,
            fontSize: "18px",
            boxShadow: "none",
            color: "#050418",
            textTransform: "capitalize",
            lineHeight: "21.48px",
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& .MuiTouchRipple-root": {
            display: "none", // Hide the ripple effect
          },
        },
      },
    },
  },
} as ThemeOptions);

export default theme;