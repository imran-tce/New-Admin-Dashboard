import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      padding:"1rem"
    },
    filterContainer:{
      width:"100%",
      display:"flex",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      gap:"1rem"

    },
    chartContainer: {
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      padding: "1rem",
    },
    chart: {
      margin: 0,
      width: "400px",
      height: "400px",
    },
    tagContainer:{
      width:"100%",
      display:"flex",
      alignItems:"center",
      gap:"1rem 5rem",
      flexWrap:"wrap",
      marginTop:"2rem"
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap:"5px",
      marginBottom:"1rem",
      minWidth:"200px",
      maxWidth:"200px"
    },
  
    box: {
      width: "30px",
      height: 20,
      backgroundColor: '#f0f0f0',
      position: 'relative',
      borderRadius:"2px"
    },
    filled: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      borderRadius:"2px"
    },

  }),
);

export default useStyles;
