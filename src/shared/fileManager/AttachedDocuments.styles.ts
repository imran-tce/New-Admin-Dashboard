import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    fileContainer: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      },
      file: {
        padding: "1rem ",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "1rem",
        marginBottom: "1rem",
        background: "#f8f8f8",
        width:"fit-content",
        
        "& .MuiTypography-body2": {
          margin: " 0.5rem",
          color: "#3d3d3d",
          fontSize: "1rem",
        },
        "& svg": {
          height: "30px",
        },
        "& .MuiTypography-body1": {
          margin: "0 0.5rem",
          color: theme.palette.primary.main,
          fontWeight: 500,
          fontSize: "0.75rem",
          marginTop: "-0.2rem",
        },
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "95% !important",
        height: "95% !important",
      },
      paper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        "& >:first-child": {
          alignSelf: "flex-end",
          margin: "0.5rem 1rem 0.5rem 0",
          cursor: "pointer",
        },
      },
      pdf: {
        width: "95% !important",
        height: "95% !important",
      },
      dialogHeader: {
        width: "100%",
        background: "#EEEEEE",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },

  }),
);

export default useStyles;
