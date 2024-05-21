import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    gridContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gridTemplateRows: "repeat(6,130px)",
      gap: "1rem",
      background: "#FFF",
      "& >div": {
        background: "#F8F8F8",
        borderRadius: "10px",
        padding:"1rem"
      },
    },
    gridItem1: {
      gridColumn: "1/2",
      gridRow: "1/7",
      height:"100%",
      overflow:"hidden"
    },
    gridItem2: {
      gridColumn: "2/5",
      gridRow: "1/2",
    },
    gridItem3: {
      gridColumn: "2/3",
      gridRow: "2/7",
    },
    gridItem4: {
      gridColumn: "3/4",
      gridRow: "2/7",
    },
    gridItem5: {
      gridColumn: "4/5",
      gridRow: "2/7",
    },
    facultyDetails: {
      display: "flex",
      width: "100%",
      gap: "1rem",
      alignItems: "flex-start",
      "& .MuiAvatar-root": {
        width: "60px",
        height: "60px",
      },
    },
    facultySubDetails: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "5rem",
      marginTop: "1rem",
    },
    criteria:{
      padding:"1rem 0"
    },
    facultiesContainer:{
      marginTop:"1rem",
      display:"flex",
      flexDirection:"column",
      alinItems:"flex-start",
      justifyContent:"flex-start",
      gap:"1.5rem",
      height:"100%",
      overflow:"auto"
    },
    facultyCard:{
      display:"flex",
      alignItems:"flex-start",
      gap:"1rem",
      cursor:"pointer",
      "& .MuiAvatar-root":{
        height:"30px",
        width:"30px"
      }
    }
  })
);

export default useStyles;
