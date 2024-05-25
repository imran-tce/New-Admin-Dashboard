import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
        width: "100%",
      },
      rubric: {
        background: "#FFF",
        margin: "2rem 0",
        "& .MuiTableCell-root": {
          cursor: "pointer",
          border: "1px solid rgba(81, 45, 109, 0.25)",
        },
      },
      remarks: {
        width: "100%",
        margin: "1rem 0 2rem",
        "& .MuiTextField-root": {
          background: "#fff",
        },
      },
      buttons: {
        width: "100%",
        display:"flex",
        alignItem:"center",
        justifyContent:"flex-start",
        gap:"1rem",
        margin:"2rem 0"
      },
      remarksTagsContainer: {
        width: "100%",
        display: "flex",
        alignItem: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
      },
      remarkTag: {
        border: "1px solid #bbbbbb",
        borderRadius: "5px",
        marginRight: "1rem",
        padding: "0.5rem 1rem",
        cursor: "pointer",
      },
  }),
);

export default useStyles;
