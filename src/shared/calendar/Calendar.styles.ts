import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: "1fr",
      overflow: "hidden",
    },
    calendarContainer: {
      gridColumn: "1/2",
      gridRow: "1/2",
    },
    plannedEventContainer: {
      gridColumn: "1/2",
      gridRow: "2/3",
      height:"100%",
      overflow: "hidden",
    },
  })
);

export default useStyles;
