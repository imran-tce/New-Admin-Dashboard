import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      margin: 0,
      padding: 0,
      // overflow:"hidden"
    },
    headerFilterContainer: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      marginBottom: "1rem",
      gap: "3rem",
    },
    attendanceTable: {
      maxWidth: "100%",
      // overflow:"auto",
      "& .MuiTableHead-root": {
        background: "#f9f8f9",
      },
      "& .MuiTableCell-root": {
        border: "1px solid #cacaca",
      },
    },
  })
);

export default useStyles;
