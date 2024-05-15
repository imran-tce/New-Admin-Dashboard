import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      boxSizing: "border-box",
      backgroundColor: "#FFF",
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      textAlign: "left",
      width: "100%",
      margin:0,
    },
    profileDetailsContainer: {
      paddingBottom: "4rem",
      height: "100%",
      width: "70%",
      paddingRight: "2rem",
      overflow: "auto",
    },
    profilePicContainer: {
      width: "30%",
    },
    details: {
      marginBottom: "2.5rem",
      "& h4":{
        marginBottom:"1.5rem"
      }
    },
    subContainer: {
      border: "1px solid #BBBBBB",
      borderRadius: "4px",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      "& img": {
        background: "#F0F0F0",
        padding: "1rem",
        marginRight: "1.5rem",
      },
      "& a": {
        fontSzie: "1rem",
      },
    },
    flexContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem 1rem",
    },
    chip: {
      background: "#F0F0F0",
      fontWeight: 600,
      fontSize: "12px",
      padding: "0.5rem  1rem",
      color: "#000",
      border: "1px solid #000",
      borderRadius: "4px",
    },
    flexColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginBottom: "1rem",
    },
  })
);

export default useStyles;
