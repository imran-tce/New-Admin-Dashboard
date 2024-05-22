import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {

    },
    filterContainer:{
      margin:"2rem 0"
    },
    courseDetails:{
      width:"100%",
      padding:"2rem 4rem 2rem 1rem",
      background:"#FCFCFC",
      display:"flex",
      alignItems:'center',
      justifyContent:"space-between",
      marginBottom:"3rem"
    },
    attainmentContainer:{
      width:"100%",
      display:"flex",
      alignItems:"center",
    },
    attainmentChart:{
      flex:0.5,
      border:"1px solid #dcddde",
    },
    attainmentTable:{
      flex:0.5,
      padding:"2rem",
      "& .MuiTable-root":{
        borderRadius:"20px",
        "& .MuiTableHead-root":{
          background:"#FFF3CF"
        },
        "& .MuiTableCell-root":{
          textAlign:"center",
          border:"1px solid #dcddde"
        }
      }
    }
  }),
);

export default useStyles;
