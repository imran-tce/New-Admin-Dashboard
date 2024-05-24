import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      boxSizing:"border-box",
      margin:0,
      padding:0,
        "& .MuiInputLabel-root":{
            color:"#828894",
            fontWeight:600,
            fontSize:"16px"
        },
        "& .MuiOutlinedInput-input":{
            padding:"0.5rem 1rem",
            fontSize:"1rem",
            fontFamily: "SF Pro Display Medium"
        }
    },
  }),
);

export default useStyles;
