import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        margin: 0,
        height: "100%",
        overflow: "hidden",
        padding: "1rem",
      },
      headerContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      },
      table:{
        width:"80%",
        "& .MuiTableCell-root":{
          border:"none"
        }
      }
  }),
);

export default useStyles;
