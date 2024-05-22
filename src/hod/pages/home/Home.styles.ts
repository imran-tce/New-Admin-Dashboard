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
      gridTemplateRows: "repeat(11,175px)",
      gap: "1.5rem",
      background: "#FFF",
      "& >div": {
        background: "#F8F8F8",
        borderRadius: "10px",
      },
    },

    gridItem1: {
      gridColumn: "1/3",
      gridRow: "1/3",
      background: "#F8F8F8",
      position: "relative",
    },
    gridItem2: {
      gridColumn: "3/4",
      gridRow: "1/3",
    },
    gridItem3: {
      gridColumn: "1/2",
      gridRow: "3/6",
    },
    gridItem4: {
      gridColumn: "2/3",
      gridRow: "3/6",
    },
    gridItem5: {
      gridColumn: "3/4",
      gridRow: "3/6",
    },
    gridItem6: {
      gridColumn: "1/2",
      gridRow: "6/10",
    },
    gridItem7: {
      gridColumn: "2/3",
      gridRow: "6/9",
    },
    gridItem8: {
      gridColumn: "3/4",
      gridRow: "6/10",
    },
    gridItem9: {
      gridColumn: "1/2",
      gridRow: "10/12",
    },
    gridItem10: {
      gridColumn: "2/3",
      gridRow: "9/12",
    },
  })
);

export default useStyles;
