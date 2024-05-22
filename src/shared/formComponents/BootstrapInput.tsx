import { createStyles, InputBase, Theme, withStyles } from "@material-ui/core";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      "label + &": {
        marginTop: "0.2rem",
      },
    },
    input: {
      lineHeight: 1.5,
      borderRadius: "2px",
      position: "relative",
      backgroundColor: "#F0F0F0",
      border: "1px solid #f0f0f0",
      fontSize: 16,
      padding: "10px 12px",
      marginBottom: "0.3rem",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("xs")]: {
      input: {
        fontSize: 14,
      },
    },
  })
)(InputBase);

export default BootstrapInput;
