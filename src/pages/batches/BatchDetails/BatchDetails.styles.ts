import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: "2rem",
    },
    headerContainer: {
      paddingTop: "1rem",
      width: "100%",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "30% 20% 50%",
    },
    searchBar: {
      gridColumn: "1/2",
    },
    filtersContainer: {
      gridColumn: "3/4",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "1rem",
    },
    table: {
      margin: "2rem 0",
      "& .MuiTable-root": {
        border: "2px solid #EAEAEA",
        "& .MuiTableCell-root": {
          border: "1px solid #EAEAEA",
          textAlign: "center",
          color:"#000"
        },
        "& .MuiTableHead-root": {
            background:"#EAEAEA"
        },
        "& .MuiTableBody-root": {
            background:"#FFF"
        },
      },
    },
    eligible:{
        "& .MuiTypography-root":{
            background:"#F1FFE5",
            color:"#2AD000",
            padding:"0.5rem 1rem",
            borderRadius:"5px",
            border:'1px solid #2AD000'

        },
    },
        notEligible:{
            "& .MuiTypography-root":{
                background:"#FFE5E7",
                color:"#DA1E28",
                padding:"0.5rem 1rem",
                borderRadius:"5px",
                border:'1px solid #DA1E28'
    
            }
       
    }
  })
);

export default useStyles;
