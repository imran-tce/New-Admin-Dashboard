import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
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
    broadcastCard: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 12fr 1fr",
      alignItems:"center",
      gap: "0.5rem",
      "& .MuiAvatar-root": {
        width: "30px",
        height: "30px",
      },
    },
  })
);

export default useStyles;
