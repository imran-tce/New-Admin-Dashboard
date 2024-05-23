import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {

    },
    container: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap",
      paddingTop:"1rem",
    },
    studentCard: {
      boxSizing: "border-box",
      margin: 0,
      padding: "0.75rem",
      background: "#F0F0F0",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      borderRadius: "10px",
      width: "300px",
      height: "76px",
      cursor: "pointer",

      "& .MuiAvatar-root": {
        width: "42px",
        height: "42px",
      },
    },
    studentDetails: {
      textAlign: "left",
      "& h5": {
        margin: "0.5rem 0",
        fontSize:"16px"

      },
      "& p": {
        margin: 0,
      },
    },
    trlTable:{
      marginTop:"1rem",
      width:"700px",
      "& .MuiTableHead-root":{
          background:"#f9f8f9"
      },
      "& .MuiTableCell-root":{
        border:"1px solid #eaeaea",
        color:"#000"
      }
    },
    taskUpdateTable:{
      marginTop:"1rem",
      width:"70%",
      "& .MuiTableHead-root":{
          background:"#f9f8f9"
      },
      "& .MuiTableCell-root":{
        border:"1px solid #eaeaea",
        color:"#000"
      }
    }
  }),
);

export default useStyles;
