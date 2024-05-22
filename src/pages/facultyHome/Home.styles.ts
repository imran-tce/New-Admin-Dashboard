import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2rem 0",
    },
    headerContainer: {
      width: "100%",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: 0,
      maxHeight: "40px",
    },
    searchBar: {
      gridColumn: "1/2",
      alignSelf: "center",
    },
    headerUserDetails: {
      gridColumn: "3/4",
      gap: "1rem",
      display: "flex",
      alignItems: "center",
      alignSelf: "center",
      "& .MuiAvatar-root": {
        height: "35px",
        width: "35px",
      },
    },

    gridContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridTemplateRows: "repeat(8,175px)",
      gap: "1.5rem",
      background: "#FFF",
      "& >div": {
        background: "#F8F8F8",
        borderRadius: "10px",
        border:"1px solid #000"
      },
    },

    gridItem1: {
      gridColumn: "1/2",
      gridRow: "1/3",
    },
    gridItem2: {
      gridColumn: "2/3",
      gridRow: "1/3",
    },
    gridItem3: {
      gridColumn: "3/4",
      gridRow: "1/3",
    },
    gridItem4: {
      gridColumn: "1/2",
      gridRow: "3/5",
    },
    gridItem5: {
      gridColumn: "2/3",
      gridRow: "3/5",
    },
    gridItem6: {
      gridColumn: "3/4",
      gridRow: "3/7",
    },
    gridItem7: {
      gridColumn: "1/2",
      gridRow: "5/7",
    },
    gridItem8: {
      gridColumn: "2/3",
      gridRow: "5/7",
    },
    gridItem9: {
      gridColumn: "1/3",
      gridRow: "7/9",
    },
  })
);

export default useStyles;
