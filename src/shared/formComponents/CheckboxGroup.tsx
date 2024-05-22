import {
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { lazy, Suspense } from "react";
import { FallbackComponent } from "../suspenseFallback/FallbackComponent";
const FieldError = lazy(() => import("./FieldError"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      "& .MuiRadio-root": {
        color: "#3d3d3d",
        "&:hover": {
          background: "none",
        },
      },
      "& .MuiTypography-body1": {
        color: "#3d3d3d",
      },
      "& .Mui-checked": {
        color: theme.palette.secondary.main,
      },
    },
    label: {
      color: "#B8B8B8",
      fontSize: "0.9rem",
      marginBottom: "10px",
    },
    selectedChoice: {
      "& .MuiTypography-body1": {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
  })
);
interface CheckboxGroupProps {
  name: string;
  label: string;
  options: string[] | number[];
}

export default function CheckboxGroup({ name, options, label }: CheckboxGroupProps) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const classes = useStyles();

  const handleChange = (event: any) => {
    const checked = event.target.checked;
    const value = event.target.value;
    let values = [...field.value];
    values = checked ? [...values, value] : values.filter((eachValue) => eachValue !== value);
    setFieldValue(name, values);
  };

  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <FormControl component="fieldset">
        <FormLabel className={classes.label}>{label}</FormLabel>
        {options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option}
              control={<Checkbox checked={field.value?.includes(option)} />}
              label={option}
              onChange={(event) => handleChange(event)}
            />
          );
        })}
      </FormControl>
      <Suspense fallback={<FallbackComponent />}>
        <FieldError name={name} />
      </Suspense>
    </div>
  );
}
