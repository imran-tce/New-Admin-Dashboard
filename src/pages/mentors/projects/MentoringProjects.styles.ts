import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: 0,
      padding: 0,
    },
    
  })
);

export default useStyles;
