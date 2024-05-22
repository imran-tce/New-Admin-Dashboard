import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from "@material-ui/core";
import { Field } from "formik";
import { lazy, Suspense } from "react";
import { FallbackComponent } from "../suspenseFallback/FallbackComponent";
const FieldError = lazy(() => import("./FieldError"));

interface SelectInputProps {
  name: string;
  keys: string[] | number[];
  label?: string;
  fullwidth?: boolean;
  values?: string[] | number[] | boolean[]; // if keys and values are different
  width?: number;
  multiple?: boolean;
  setSelectedItem?: any;
  handleOtherOption?: () => void;
}

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      "& .MuiInputBase-input": {
        padding: "10px 12px",
      },
      "& label + .MuiInput-formControl": {
        marginTop: "18px",
        marginBottom: "0.3rem",
        "&:hover": {
          border: "none",
        },
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: "#b8b8b8",
      },
      "& .MuiInput-underline:before": {
        borderBottom: "none",
        "&:before:hover": {
          borderBottom: "none",
        },
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "none",
      },
    },
    label: {
      color: "#B8B8B8",
      marginBottom: "0.5rem",
    },
    select: {
      background: "#f0f0f0",
      "&:hover": {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    [theme.breakpoints.down("xs")]: {
      label: {
        fontSize: "16px",
      },
    },
  })
);

export default function SelectInput({
  name,
  keys,
  label,
  fullwidth = true,
  values,
  width,
  multiple = false,
  setSelectedItem,
}: SelectInputProps) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Field name={name}>
        {(props: any) => {
          const { field } = props;
          return (
            <div style={{ width: "100%", textAlign: "left" }}>
              <FormControl fullWidth={fullwidth}>
                <InputLabel shrink={true} id="demo-simple-select-outlined-label" className={classes.label}>
                  {label}
                </InputLabel>
                <Select
                  MenuProps={{
                    transitionDuration: 500,
                    style: {
                      height: "500px",
                    },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  onClick={(e: any) => setSelectedItem && setSelectedItem(e.target.value)}
                  multiple={multiple}
                  {...field}
                  label={label}
                  style={{ width: width ? `${width}px` : "100%" }}
                  className={classes.select}
                >
                  {!multiple && <MenuItem value="">Select an option !</MenuItem>}
                  {keys.map((key: any, index: number) => {
                    return (
                      <MenuItem key={index} value={values ? values[index] : key}>
                        {key}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          );
        }}
      </Field>
      <Suspense fallback={<FallbackComponent />}>
        <FieldError name={name} />
      </Suspense>
    </div>
  );
}
