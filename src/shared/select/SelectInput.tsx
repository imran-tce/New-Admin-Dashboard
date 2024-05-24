import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useStyles from "./SelectInput.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  label?: string;
  keys: string[] | number[];
  values?: string[] | number[];
  min_width?: number | string;
  max_width?: number;
  value: string | number;
  onChange: (e: any) => void;
  background?:string;
}

export default function SelectInput(props: Props) {
  const classes = useStyles();
  const { label, keys, values, value, onChange, min_width, max_width } = props;
  console.log("keys", keys)
  console.log("values", values)
  return (
    <div className={classes.root}>
      <InputLabel  >{label}</InputLabel>
      <FormControl sx={{ minWidth: min_width || 200 }}>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={KeyboardArrowDownIcon}
          style={{ background: props.background || "#FFF", color: "#000" }}
        >
          {keys.map((key, index) => {
            return (
              <MenuItem
                key={index}
                value={
                  values && values.length > 0 ? values[index] : keys[index]
                }
              >
                {key}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
