import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        margin:0,
        height:"100%",
        overflow:"hidden",
        padding:"1rem"
    },
    headerContainer:{
        width:"100%",
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"space-between",
        marginBottom:"1rem"
    },
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        overflowY:"auto",
        gap:"1rem"
    },
    progressCard:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"1rem 2rem",
        borderRadius:"10px",
        background:"#000",
        height:'80px'
    },
    progressBar:{
        width:"55px",
        height:"55px",
    }
  }),
);

export default useStyles;
