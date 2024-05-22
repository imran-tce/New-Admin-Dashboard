import { Typography } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";

interface Props {
  value: string;
  button_contents: string[];
  handleButtonToggle: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => void;
  background_color?: string;
  color?: string;
}

export default function ToggleButtons({
  value,
  button_contents,
  handleButtonToggle,
  background_color,
  color,
}: Props) {
  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: color ? color : "#000",
      backgroundColor: background_color ? background_color : "#00ff00",
      "& .MuiTypography-root": {
        color: color ? color : "#000",
      },
    },
  });

  return (
    <div>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleButtonToggle}
        aria-label="text alignment"
      >
        {button_contents.map((content, index) => {
          return (
            <ToggleButton key={index} value={content} aria-label="centered">
              <Typography variant="BR14">{content}</Typography>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
}
