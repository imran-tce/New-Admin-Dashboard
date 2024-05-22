import theme from "../theme/AppTheme";


export interface IconProps {
  color?: "primary" | "secondary" | "light" | "dark" | "error" | "disable" | "white" | "black" | "textPrimary";
  disabled?: boolean;
  strokeWidth?: number;
  width?: string;
  height?: string;
}

export const getColor = (color: string | undefined) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.secondary.main;
    case "light":
      return "#fbfbfb";
    case "dark":
      return theme.palette.primary.main;
    case "error":
      return "#ff0000";
    case "disable":
      return "#616161";
    case "white":
      return "#FFF";
    case "black":
      return "#000";
    case "textPrimary":
      return theme.palette.text.primary;
    default:
      return "#EEEEEE";
  }
};
