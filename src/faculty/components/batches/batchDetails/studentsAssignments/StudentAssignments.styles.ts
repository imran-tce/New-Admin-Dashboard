import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        paddingRight: "2rem",
      },
      table: {
          width:"90%",
        margin: " 0  0 2rem 0",
        "& .MuiTable-root": {
          border: "2px solid #EAEAEA",
          "& .MuiTableCell-root": {
            border: "1px solid #EAEAEA",
  
            color: "#000",
            "& .MuiTypography-root": {
              textAlign: "center",
            },
          },
          "& .MuiTableHead-root": {
            background: "#EAEAEA",
          },
          "& .MuiTableBody-root": {
            background: "#FFF",
          },
          "& .MuiTableRow-root": {
            "& .MuiTableCell-root": {
              "&:nth-child(2)": {
                "& .MuiTypography-root": {
                  textAlign: "left",
                },
              },
            },
          },
        },
      },
      view:{
        textDecoration:"underline",
      }
  }),
);

export default useStyles;
