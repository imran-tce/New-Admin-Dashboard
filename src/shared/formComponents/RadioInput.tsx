import { createStyles, FormControlLabel, InputLabel, makeStyles, Radio, RadioGroup, Theme } from "@material-ui/core";
import { Field } from "formik";
import { lazy, Suspense, useState } from "react";
import { FallbackComponent } from "../suspenseFallback/FallbackComponent";
const FieldError = lazy(() => import("./FieldError"));

interface StyleProps {
  radioBtnDirection?: string;
  brp?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) =>
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
        color: theme.palette.primary.main,
      },
      "& .MuiFormGroup-row": {
        flexDirection: (props) => (props.radioBtnDirection ? props.radioBtnDirection : "row"),
      },
    },
    label: {
      color: "#B8B8B8",
      fontSize: "0.9rem",
    },
    selectedChoice: {
      "& .MuiTypography-body1": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        "& .MuiTypography-body1": {
          fontSize: (props: any) => props.brp && "11px",
        },
      },
      label: {
        fontSize: (props: any) => props.brp && "13px",
      },
    },
  })
);

interface RadioInputProps {
  name: string;
  label: string;
  options: string[];
  radioBtnDirection?: string;
  callBack?: (value: string) => void;
  brp?: boolean;
}

export default function RadioInput({ name, options, label, radioBtnDirection, callBack, brp }: RadioInputProps) {
  const classes = useStyles({ radioBtnDirection, brp });

  const [selectedChoice, setSelectedChoice] = useState<string>("");

  const handleSelectedChoice = (s_choice: string) => {
    setSelectedChoice(s_choice);
    callBack && callBack(s_choice);
  };

  return (
    <div className={classes.container}>
      <Field name={name}>
        {(props: any) => {
          const { field } = props;

          return (
            <div style={{ width: "100%", textAlign: "left" }}>
              <InputLabel className={classes.label}>{label}</InputLabel>
              <RadioGroup {...field} row>
                {options.map((option: string, index) => {
                  return (
                    <FormControlLabel
                      onClick={() => handleSelectedChoice(option)}
                      key={index}
                      value={option}
                      control={<Radio style={{ paddingRight: "5px" }} />}
                      label={option}
                      style={{ paddingRight: "1rem" }}
                      className={selectedChoice === option ? classes.selectedChoice : ""}
                    />
                  );
                })}
              </RadioGroup>
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
