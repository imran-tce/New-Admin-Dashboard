import { makeStyles, Theme } from "@material-ui/core";

interface StyleProps {
  isEventDatePassed: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  eventBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    minWidth: "50%",
    padding: "0 0.8rem",
    color: (props) => (props.isEventDatePassed ? "#C6C6C6" : "#000"),
  },
}));

export default useStyles;
