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
    container:{
        width:"80%",
        display:'flex',
        flexDirection:"column",
        gap:'2rem'
    },
    achievement:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        "& .MuiAvatar-root":{
            height:"30px",
            width:"30px"
        }
    }

  }),
);

export default useStyles;
