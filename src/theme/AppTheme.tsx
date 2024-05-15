import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {

    h1: {
      fontFamily: ["SF Pro Display Bold", "sans-serif"].join(","),
      fontSize: "35px",
      lineHeight: "24px",
    },
    h2: {
      fontFamily: ["SF Pro Display Bold", "sans-serif"].join(","),
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h3: {
      fontFamily: ["SF Pro Display Bold", "sans-serif"].join(","),
      fontSize: "35px",
      lineHeight: "24px",
    },
    h4: {
      fontFamily: ["SF Pro Display Bold", "sans-serif"].join(","),
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    h5: {
      fontFamily: ["SF Pro Display Bold", "sans-serif"].join(","),
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "24px",
    },
  },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'SFPro';
//           src: url('/fonts/SF-Pro-Display-Bold.woff') format('woff');
//         }
//       `,
//     },
//   },
});

export default theme;
