import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .MuiInputLabel-root":{
        fontSize:"12px"
      }
    },
    subtitle: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      margin: "1rem 0",
      "& .MuiTypography-h4": {
        marginRight: "1rem",
      },
      "& .MuiDivider-root": {
        flexGrow: 1,
        background: "#FDC20F",
        height: "3px",
      },
    },
    displayInfo:{
        width:"100%",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"space-between",
        gap:"3rem",
        marginBottom:"3rem",
        marginTop:"2rem"
    },
    displayInfo1:{
        flex:0.7,
    },

    filledContainer: {
        padding:'1rem ',
        color:"#828894",
      background: "#d8d8d8",
      minWidth:"350px"
    },

    basicDetails:{
        marginTop:"2rem",
        marginBottom:"3rem",
        display:"flex", 
        alignItems:"center",
        gap:"3rem"
    }
  })
);

export default useStyles;
