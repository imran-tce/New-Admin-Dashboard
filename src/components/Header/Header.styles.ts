import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      display:"flex",
      justifyContents:"center",
      flexDirection:"column",
      alignItems:"flex-start",
      borderBottom:"1px solid #EAEAEA",
      position:"sticky",
      top:0,
        height:"90px",
        padding: "1rem 0",
        overflow:"hidden",
        "& h2": {
          margin: "1.5rem 0",
        },
        "& img":{
          cursor:"pointer"
        }
    },
  }),
);

export default useStyles;
