import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    filterContainer: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      gap: "2rem",
      margin: "1rem 0",
    },
    courseForm:{
      overflow:"hidden",
      "& > div":{
        margin:'2rem 0'
      },
      "& .MuiInputLabel-root":{
        color:"#828894"
      },
    }
  })
);

export default useStyles;
