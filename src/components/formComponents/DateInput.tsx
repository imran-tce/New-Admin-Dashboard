import { createStyles, InputLabel, makeStyles, TextField, TextFieldProps, Theme, Typography } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { ChangeEvent, lazy, useEffect, useState } from "react";
const FieldError = lazy(() => import("./FieldError"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& .MuiInput-underline:before": {
        borderBottom: "none",
        "&:before:hover": {
          borderBottom: "none",
        },
      },
      "& > .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "#f0f0f0",
      },
    },
    dateInput: {
      width: "100%",
      textAlign: "left",
    },
    label: {
      textAlign: "left",
      color: "#B8B8B8",
      fontSize: "0.9rem",
      marginBottom: "0.2rem",
    },
    field: {
      "& .MuiFilledInput-underline:before": {
        borderBottom: "0",
      },
      "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "#f0f0f0",
      },
      ".MuiFilledInput-underline:before": {
        borderBottom: "1px solid #f0f0f0",
      },
      "& .MuiFilledInput-underline:hover:before": {
        borderBottom: "none",
      },
      "& .MuiFilledInput-underline:after": {
        borderBottom: "none",
      },
      "& input": {
        backgroundColor: "#F0F0F0",
        padding: "0",
        borderBottom: "0px solid #f0f0f0",
      },
      "& > .MuiInputBase-input": {
        padding: "0",
      },
      "& fieldset": {
        border: "none",
      },
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
    errorMsg: {
      color: "#f00",
      textAlign: "left",
      "&:first-letter": {
        textTransform: "capitalize",
      },
    },
    [theme.breakpoints.down("xs")]: {
      label: {
        fontSize: "12px",
      },
    },
  })
);

export default function DateInput({ name, label, ...props }: TextFieldProps) {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name!);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const initialDate = "1970-01-01";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const min_val = 1950;
    const max_val = new Date().getFullYear() - 10;
    if (Number(value.split("-")[0]) < min_val) {
      setValue(value);
      setError("Birthday is out of range");
      setFieldValue(name!, "");
    } else if (Number(value.split("-")[0]) > max_val) {
      setValue(value);
      setError("Birthday is out of range");
      setFieldValue(name!, "");
    } else {
      setError("");
      setValue(value);
      setFieldValue(name!, value);
    }
  };

  useEffect(() => {
    if (field?.value !== value && field?.value === initialDate) {
      setFieldValue(name!, "");
      setValue(field.value);
    } else {
      setValue(field.value);
    }
  }, [field, name, value, setFieldValue]);

  return (
    <div className={classes.dateInput}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <TextField
        className={classes.field}
        name={name}
        value={(value !== initialDate && value) || "yyyy-mm-dd"}
        type="date"
        variant={props.variant || "outlined"}
        onChange={handleChange}
      />
      {error && (
        <Typography variant="body2" className={classes.errorMsg}>
          {error}
        </Typography>
      )}
      {!error && <FieldError name={name} />}
    </div>
  );
}
