import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      position:'relative'
    },
    headerContainer:{
      width:"100%",
      display:"flex",
      alignItems:"flex-end",
      justifyContent:"space-between",
      marginBottom:"1rem"
  },
  }),
);

export default useStyles;
