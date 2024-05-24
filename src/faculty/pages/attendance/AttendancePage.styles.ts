import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        // overflow:"hidden"
      },
      attendanceTable:{
        maxWidth:"100%",
        // overflow:"auto"
        "& .MuiTableCell-root":{
          border:"1px solid #cacaca"
        }
      },
      menu:{
        border:"1px solid #000",
      }
  }),
);

export default useStyles;
