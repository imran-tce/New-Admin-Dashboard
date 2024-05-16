import { createStyles, makeStyles, Theme } from "@material-ui/core";

const white = "#FFF";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      maxWidth: "1600px",
      margin: "0 auto",
      padding: "0 2rem",
    },
    mainContainerHomePage: {
      margin: "0 auto 0 0",
      maxWidth: "inherit",
    },
    overflow: {
      overflow: "scroll",
      /* Hide scrollbar for Chrome, Safari and Opera */
      "&::-webkit-scrollbar": {
        display: "none",
      },
      /* Hide scrollbar for IE, Edge and Firefox */
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
    root: {
      color: "#fff",
      "&>.MuiGrid-spacing-xs-6": {
        margin: "-7px",
        marginLeft: "-24px",
      },
      "& .MuiCardActionArea-focusHighlight": {
        backgroundColor: "#fff",
        position: "static",
      },
    },
    flex: {
      flexGrow: 1,
    },
    gridContainer: {
      gridAutoRows: "1fr",
      "& .MuiCard-root": {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "none",
      },
      "& .MuiCardActionArea-root": {
        cursor: "auto",
        marginBottom: 0,
      },
      "& .MuiCardActionArea-focusHighlight": {
        background: "none",
      },

      "& .MuiGrid-item": {
        paddingLeft: 0,
        paddingRight: "1rem",
        paddingBottom: "1rem",
      },
      "&>:nth-child(4n)": {},
    },
    gridItem: {
      padding: "0 !important",
      marginRight: "2em",
      marginBottom: "2rem",
      maxWidth: "100%",
    },
    slideShowScrollIcon: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
      "& > img": {
        width: "58px",
        height: "58px",
      },
    },
    slideShowScrollIconLeft: {
      zIndex: 1,
      left: "-4%",
    },
    slideShowScrollIconRight: {
      right: "-3.5%",
      zIndex: 1,
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
      position: "absolute",
      left: "1.5rem",
      top: "1.5rem",
      opacity: 1,
      zIndex: 1,
      "& > div:first-child": {
        display: "flex",
        gap: "1rem",
      },
      "& .MuiTypography-body2": {
        fontWeight: 500,
        fontSize: "14px",
      },
    },
    mediaContainer: {
      width: "inherit",
      height: "inherit",
      position: "relative",
      border:"none",
      "& > img": {
        width: "inherit",
        height: "inherit",
        aspectRatio: "16/9",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      },
    },
    cardContentContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      margin: "0",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.5,
      textAlign: "left",
      textTransform: "uppercase",
      padding: "0 0.5rem 1rem 0",
      "&.MuiTypography-h2": {
        color: "#616161",
        letterSpacing: "0.2px",
      },
    },
    description: {
      width: "100%",
      padding: 0,
      minHeight: "40px",
      margin: "0 0 1.5rem 0",
      fontSize: "14px",
      textAlign: "left",
      color: "#616161",
      lineHeight: 1.5,
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    media: {
      height: "180px",
      width: "100%",
      marginBottom: "-0.5rem",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
    durationContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& > div": {
        display: "flex",
        gap: "0.8rem",
        alignItems: "center",
      },
      "& > div:nth-child(2)": {
        marginLeft: "-0.1rem",
      },
      "& svg": {
        margin: 0,
        padding: 0,
      },
    },
    durationIconContainer: {},
    duration_descrip: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      textAlign: "left",
      gap: "0.3rem",
      "& > .MuiTypography-body2": {
        fontWeight: 500,
      },
    },
    cardContent: {
      padding: "1rem 1.5rem 0.5rem 1.5rem",
      background: "#FFF",
      "& h5":{
        marginBottom:"0.5rem",
        color:"#000"
      },

    },
    duration: {
      color: "#f4a025",
    },

    registerBtn: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "#fff !important",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: 500,
      textAlign: "center",
      textTransform: "capitalize",
      height: "3em",
      padding: "12px 15px",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
    // overlay: {
    //   height: "180px",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "space-between",
    //   margin: 0,
    //   padding: 0,
    //   zIndex: 4,
    //   backgroundColor: "rgba(0, 21, 45, 0.34)",
    // },
    rootLearnPage: {
      "& > ul": {
        paddingInlineStart: "0px",
      },
      minWidth: "300px",
    },
    rootLearnCardHomePage: {},
    cards: {
      margin: "0 auto",
      display: "grid",
      gap: "1rem",
      "grid-template-columns": "repeat(3, 1fr)",
    },
    card: {
      margin: 0,
      padding: 0,
      borderRadius: "10px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxWidth: "371px",
      minWidth: "371px",
      boxShadow: "none",
      transition: "box-shadow 0.5s ease-in-out",
      "&:hover": {
        boxShadow: "6px 10px 10px 0px rgba(0, 0, 0, 0.34)",
      },
      position: "relative",
    },
    rootLearnCard: {
      "& > ul": {
        paddingInlineStart: "0px",
      },
      minWidth: "300px",

      margin: "0 auto",
    },
    notFoundContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "calc(100vh - 300px)",
      "& p": {
        fontWeight: 500,
        color: `${theme.palette.secondary.main} !important`,
      },
    },
    lottieFile: {
      width: "210px",
      height: "210px",
      margin: "0 auto",
    },
    lottieFileText: {
      fontSize: "32px",
    },
    cardMenuContainer: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      "& > div:first-child": {
        marginRight: "2rem",
      },
    },
    dotMenuIcon: {
      position: "absolute",
      top: "0.8rem",
      right: "1rem",
      zIndex: 2,
      cursor: "pointer",
      padding: "0.5rem",
    },
    label: {
      display: "flex",
      gap: "0.5rem",
      position: "absolute",
      top: "1rem",
      right: "1rem",
      zIndex: 2,
      cursor: "pointer",
      alignItems: "center",
      backgroundColor: white,
      padding: "0.5rem 0.8rem",
      borderRadius: "38px",
      textTransform: "uppercase",
      "& .MuiTypography-body2": {
        fontSize: "14px",
        fontWeight: 500,
      },
      "& > svg": {
        width: "14px",
        height: "14px",
      },
    },
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
        color: white,
        fontSize: "12px",
        fontWeight: 400,
      },
    },
    popupMenu: {
      "& .MuiList-padding": {
        padding: "1.5rem 1rem 1rem 1rem",
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
      marginTop: "1.5rem",
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
    dialogContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "0.5rem",
    },
    deletingFileState: {
      width: "300px",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    deletingFileStateIcon: {
      display: "flex",
      marginBottom: "1rem",
      "& svg": {
        width: "69px !important",
        height: "69px !important",
      },
    },
    deleteIconContainer: {},
    dialogFirstRow: {
      display: "flex",
      marginBottom: "1rem",
      "& > p:first-child": {
        width: "80%",
        lineHeight: 1.5,
        fontSize: "21px",
      },
      "& svg": {
        width: "69px !important",
        height: "69px !important",
      },
    },
    dialogSecondRow: {
      display: "flex",
      "& > div:first-child": {
        width: "80%",
      },
      "& button": {
        color: `${theme.palette.primary.main} !important`,
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },
    deleteDialogBtns: {
      display: "flex",
      gap: "1rem",
    },
    viewAllBtn: {
      color: "#134CE0",
      fontWeight: 500,
      textDecoration: "underline",
      cursor: "pointer",
    },
    scrollToTopIcon: {
      display: "none",
      "& > svg": {
        cursor: "pointer",
        position: "fixed",
        bottom: "2rem",
        right: "1.8rem",
      },
    },
    numberOfCardsVisited: {
      padding: "0rem 0 0 1.5rem",
    },
  })
);

export default useStyles;
