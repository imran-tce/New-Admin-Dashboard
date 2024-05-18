import { TextField, TextFieldProps } from "@material-ui/core";
import { Field } from "formik";
import { Suspense, lazy } from "react";
import { FallbackComponent } from "../suspenseFallback/FallbackComponent";
const FieldError = lazy(() => import("./FieldError"));

export default function AuthenticationTextInput(InputProps: TextFieldProps) {
  const { name, label } = InputProps;
  return (
    <div style={{ margin: "1rem 0" }}>
      <Field name={name}>
        {(props: any) => {
          const { field } = props;
          return <TextField label={label} fullWidth variant="standard" {...field} margin="none" {...InputProps} />;
        }}
      </Field>
      <Suspense fallback={<FallbackComponent />}>
        <FieldError name={name} />
      </Suspense>
    </div>
  );
}
