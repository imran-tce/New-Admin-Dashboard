import { createStyles, Input, InputLabel, makeStyles, TextFieldProps, Theme } from "@material-ui/core";
import { Field } from "formik";
import { lazy, Suspense } from "react";
import { FallbackComponent } from "../suspenseFallback/FallbackComponent";
import BootstrapInput from "./BootstrapInput";
const FieldError = lazy(() => import("./FieldError"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    label: {
      textAlign: "left",
      color: "#B8B8B8",
      fontSize: "0.9rem",
    },
    textCount: {
      display: "flex",
      justifyContent: "flex-end",
      color: "#b8b8b8",
      fontWeight: 300,
      fontSize: "14px",
      letterSpacing: "0.01em",
    },
    [theme.breakpoints.down("xs")]: {
      label: {
        fontSize: "12px",
      },
    },
  })
);

export default function TextInput(InputProps: TextFieldProps) {
  const { name, label, multiline, minRows, variant, type } = InputProps;
  const classes = useStyles();

  switch (variant) {
    case "outlined":
      return (
        <div>
          <Field name={name} className={classes.field}>
            {(props: any) => {
              const { field } = props;

              return (
                <>
                  <Input
                    placeholder={label}
                    name={name}
                    type={type === "date" ? type : ""}
                    {...field}
                    fullWidth
                    margin="none"
                    multiline
                    minRows={minRows}
                    {...InputProps}
                  />
                  {field.name === "title" && (
                    <div className={classes.textCount}>
                      <div>{field.value.length}/50</div>
                    </div>
                  )}
                </>
              );
            }}
          </Field>
          <Suspense fallback={<FallbackComponent />}>
            <FieldError name={name} />
          </Suspense>
        </div>
      );
    case "filled":
      return (
        <div>
          <Field name={name} className={classes.field}>
            {(props: any) => {
              const { field } = props;
              return (
                <>
                  <InputLabel className={classes.label}>{label}</InputLabel>
                  <BootstrapInput
                    name={name}
                    type={type === "date" ? type : ""}
                    {...field}
                    fullWidth
                    margin="none"
                    multiline={Boolean(multiline)}
                    minRows={Boolean(multiline) && minRows}
                    {...InputProps}
                  />
                  {field.name === "title" && (
                    <div className={classes.textCount}>
                      <div>{field.value.length}/50</div>
                    </div>
                  )}
                </>
              );
            }}
          </Field>
          <Suspense fallback={<FallbackComponent />}>
            <FieldError name={name} />
          </Suspense>
        </div>
      );
    default:
      return (
        <div>
          <Field name={name} className={classes.field}>
            {(props: any) => {
              const { field } = props;
              return (
                <>
                  <InputLabel className={classes.label}>{label}</InputLabel>
                  <BootstrapInput
                    type={type === "date" ? type : ""}
                    name={name}
                    {...field}
                    fullWidth
                    margin="none"
                    multiline={Boolean(multiline)}
                    minRows={Boolean(multiline) && minRows}
                    {...InputProps}
                  />
                  {field.name === "title" && (
                    <div className={classes.textCount}>
                      <div>{field.value.length}/50</div>
                    </div>
                  )}
                </>
              );
            }}
          </Field>
          <Suspense fallback={<FallbackComponent />}>
            <FieldError name={name} />
          </Suspense>
        </div>
      );
  }
}
