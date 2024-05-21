import { IconButton, Typography } from "@mui/material";
import { getMonth, getYear } from "../../../../pages/calendar/CalendarUtils";
import useStyles from "./Header.styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IProps {
  handlePreviousClick: () => void;
  handleMonthClick: () => void;
  selected_date: Date;
  handleNextClick: () => void;
}

export default function Header({
  handleMonthClick,
  handlePreviousClick,
  selected_date,
  handleNextClick,
}: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <IconButton
        onClick={handlePreviousClick}
        sx={{ background: "#DCDCE9", ":hover": { background: "#DCDCE9" } }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <div onClick={handleMonthClick}>
        <Typography variant="subtitle2">
          {getMonth(selected_date)} <span>{getYear(selected_date)}</span>
        </Typography>
      </div>

      <IconButton
        onClick={handleNextClick}
        sx={{ background: "#DCDCE9", ":hover": { background: "#DCDCE9" } }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}
