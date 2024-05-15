import {  createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      background: "#F0F0F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      position: "relative",
      "& .MuiAvatar-root": {
        width: "314px",
        height: "314px",
      },
      "& .MuiIconButton-root": {
        width: "60px",
        height: "60px",
        background: "#b0b0b0",
        position: "absolute",
        right: 50,
        bottom: -10,
      },
      "& .MuiTypography-subtitle1": {
        fontWeight: 700,
        fontSize: "24px",
        color: "#000",
        marginTop: "3rem",
        marginBottom: "0.5rem",
      },
      "& .MuiTypography-body1": {
        fontWeight: 500,
        fontSize: "1.2rem",
        color: "#797979",
      },
    },
  })
);

export default useStyles;
