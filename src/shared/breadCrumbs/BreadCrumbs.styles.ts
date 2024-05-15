import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breadCrumbsWrapper: {
      gap: "0.3rem",
      display: "flex",
    },
    link: {
      fontSize: "12px",
      color: "rgba(184, 184, 184, 1)",
      "&:last-child": {
        color: "rgba(61, 61, 61, 1)",
      },
    },
  })
);

export default useStyles;
