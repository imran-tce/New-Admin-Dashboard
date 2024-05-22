import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        position:'relative',
        padding:"1rem",
        height:"100%",
        overflow:"hidden",
        width:"100%",
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
        display:"flex",
        flexDirection:"column",
    },
    ratingCard:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0.5rem 0",
        "& .MuiAvatar-root":{
            width:"35px",
            height:"35px"
        },
    },
  }),
);

export default useStyles;
