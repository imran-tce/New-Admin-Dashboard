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
    attendanceTable: {
      maxWidth: "100%",
      // overflow:"auto",
      "& .MuiTableHead-root":{
        background:"#f9f8f9"
      },
      "& .MuiTableCell-root": {
        border: "1px solid #cacaca",
      },
    },
    menu: {
      border: "1px solid #000",
    },
    headerFilterContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "2rem 0",
    },
    headerFilterSubContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
    },
    graceRequestTable: {
      maxWidth: "80%",
      "& .MuiTable-root": {
        "& .MuiTableHead-root":{
          background:"#f9f8f9"
        },
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            border: "1px solid #cacaca",
            "& .MuiTypography-root": {
              textAlign: "center",
            },
            "&:nth-child(2)": {
              "& .MuiTypography-root": {
                textAlign: "left",
              },
            },
          },
        },
      },
    },
  })
);

export default useStyles;
