import { createStyles, makeStyles, Typography } from "@material-ui/core";
import { ErrorMessage } from "formik";

interface Props {
  name: string | undefined;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "#f00",
      textAlign: "left",
      "&:first-letter": {
        textTransform: "capitalize",
      },
    },
  })
);

export default function FieldError({ name }: Props) {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.root}>
      {name && <ErrorMessage name={name} />}
    </Typography>
  );
}
