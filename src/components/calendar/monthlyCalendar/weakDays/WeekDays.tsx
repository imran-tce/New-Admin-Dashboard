import { Typography } from "@material-ui/core";
import { getDay } from "date-fns";
import { getWeekDays } from "../../../../pages/calendar/CalendarUtils";
import useStyles from "./WeekDays.styles";
import theme from "../../../../theme/AppTheme";

interface IProps {
  display_full_calendar: boolean;
  is_current_week: boolean;
  selected_date: Date;
}

export default function WeakDays({ display_full_calendar, is_current_week, selected_date }: IProps) {
  const classes = useStyles();
  return (
    <>
      <tr>
        {getWeekDays().map((day: any, index: number) => {
          const current_day = getDay(new Date());
          const format = !display_full_calendar && index === current_day;
          const selected_day = !display_full_calendar && index === getDay(selected_date);
          return (
            <td key={index} align="center">
              <Typography
                variant="body1"
                className={classes.daySubContainer}
                style={{
                  paddingTop: !display_full_calendar ? "0.5rem" : "0.1rem",
                  width: format || selected_day ? "34px" : "fit-content",
                  color: format && is_current_week ? "#FFF" : theme.palette.primary.main,
                  background: format && is_current_week ? theme.palette.secondary.main : "none",
                  borderRadius: format || selected_day ? "50% 50% 0 0" : 0,
                  border: selected_day ? `2px solid ${theme.palette.secondary.main}` : "none",
                  borderBottom: "none",
                  outlineWidth: 0,
                  fontWeight: 300,
                  marginBottom: "-0.5rem",
                }}
              >
                {day}
              </Typography>
            </td>
          );
        })}
      </tr>
    </>
  );
}
