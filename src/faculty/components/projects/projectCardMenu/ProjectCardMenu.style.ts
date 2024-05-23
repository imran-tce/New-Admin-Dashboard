import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    linkCopiedLabel: {
      display: "flex",
      gap: "0.5rem",
      position: "absolute",
      top: "1rem",
      right: "0.5rem",
      zIndex: 2,
      cursor: "pointer",
      alignItems: "center",
      backgroundColor: "#3d3d3d",

      padding: "0.5rem 0.8rem",
      borderRadius: "38px",
      textTransform: "capitalize",
      "& .MuiTypography-body2": {
        color: "#fff",
        fontSize: "12px",
        fontWeight: 400,
      },
    },
    popupMenu: {
      color: "red",
      boxShadow: "none",
      "& .MuiList-padding": {
        padding: "1.5rem 1rem 1rem 1rem",
      },
      "& .MuiPaper-elevation8": {
        boxShadow: "0px -2px 11px rgba(0, 0, 0, 0.25)",
      },
    },
    popupMenuActions: {
      display: "flex",
      flexDirection: "column",
      "& > div": {
        display: "flex",
        gap: "0.7rem",
        alignItems: "center",
        cursor: "pointer",
        "&:not(:first-child)": {
          padding: "0.7rem 1rem 0.7rem 0.4rem",
        },
        "&:first-child": {
          padding: "0 1rem 0.7rem 0.4rem",
        },
        borderBottom: "1px solid #b8b8b8",
      },
      "& .MuiTypography-body1": {
        fontSize: "16px",
        cursor: "pointer",
      },
      marginBottom: "1.5rem",
    },
    projectDetails: {
      paddingLeft: "0.4rem",
      "& .MuiTypography-body1": {
        fontSize: "14px",
        fontWeight: 500,
      },
      "& > div:first-child": {
        marginBottom: "0.7rem",
      },
      "& > div:nth-child(2)": {
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
      },
    },
    projectDetailsTitle: {
      "&.MuiTypography-caption": {
        color: "#7d7d7d",
        fontWeight: 400,
      },
    },
    projectDetailsInfo: {},
    deleteAction: {
      display: "flex",
      gap: "0.7rem",
      alignItems: "center",
      cursor: "pointer",
      padding: "1rem 0rem 0 0.4rem",
      borderTop: "1px solid #b8b8b8",

      "& .MuiTypography-caption": {
        color: "#B80909",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 0,
        cursor: "pointer",
      },
    },
    copyLink: {
      position: "relative",
    },
    projectActionContainer: {
      marginTop: "1.5rem",
    },
    shareContainer: {
      display: "flex",
      gap: "0.5rem",
      position: "absolute",
      top: "1rem",
      right: "0.5rem",
      zIndex: 2,
      cursor: "pointer",
      alignItems: "center",
      backgroundColor: "#3d3d3d",
      padding: "0.5rem 0.8rem 0.2rem 0.8rem",
      borderRadius: "38px",
      textTransform: "capitalize",
    },
    unPublish: {
      cursor: "pointer",
      padding: "0.8rem 0",
      borderTop: "1px solid #b8b8b8",
      "& .MuiTypography-body2": {
        cursor: "pointer",
      },
    },
    dialog: {
      "& .MuiDialog-paperWidthSm": {
        padding: "2.5rem 1.8rem",
      },
      "& .MuiDialogContentText-root": {
        marginBottom: "1.8rem",
        textAlign: "center",
      },
      "& .MuiDialogActions-root": {
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      },
    },
    dialogTitle: {
      color: "#3d3d3d",
      fontSize: "21px",
    },
  })
);
export default useStyles;
