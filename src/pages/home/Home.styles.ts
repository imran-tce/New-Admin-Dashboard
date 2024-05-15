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
      gap: "0.5rem",
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
      gap: "1rem",
    },

    gridItem1: {
      border: "1px solid #000",
      gridColumn: "1/3",
      gridRow: "1/3",
      background:"#F8F8F8",
      position:"relative"
    },
    gridItem2: {
      border: "1px solid #000",
      gridColumn: "3/4",
      gridRow: "1/3",
    },
    gridItem3: {
      border: "1px solid #000",
      gridColumn: "1/2",
      gridRow: "3/6",
    },
    gridItem4: {
      border: "1px solid #000",
      gridColumn: "2/3",
      gridRow: "3/6",
    },
    gridItem5: {
      border: "1px solid #000",
      gridColumn: "3/4",
      gridRow: "3/6",
    },
    gridItem6: {
      border: "1px solid #000",
      gridColumn: "1/2",
      gridRow: "6/10",
    },
    gridItem7: {
      border: "1px solid #000",
      gridColumn: "2/3",
      gridRow: "6/9",
    },
    gridItem8: {
      border: "1px solid #000",
      gridColumn: "3/4",
      gridRow: "6/10",
    },
    gridItem9: {
      border: "1px solid #000",
      gridColumn: "1/2",
      gridRow: "10/12",
    },
    gridItem10: {
      border: "1px solid #000",
      gridColumn: "2/3",
      gridRow: "9/12",
    },
  })
);

export default useStyles;
