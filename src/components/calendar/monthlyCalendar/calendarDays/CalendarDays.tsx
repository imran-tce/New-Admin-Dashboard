import { getDate } from "date-fns";
import React from "react";
import { CalendarEvent } from "../../../../models/apiModels";
import {
  getDayInMonth,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getMonth,
  getYear,
  isCurrentDay,
  is_event_present,
} from "../../../../pages/calendar/CalendarUtils";
import useStyles from "./CalendarDays.styles";
import theme from "../../../../theme/AppTheme";

interface IProps {
  selected_date: Date;
  handleSelectedDate: (date: Date) => void;
  display_full_calendar: boolean;
  events: CalendarEvent[];
}

export default function CalendarDays({ display_full_calendar, handleSelectedDate, selected_date, events }: IProps) {
  const classes = useStyles();
  const start_blanks = [];

  for (let i = 0; i < getFirstDayOfMonth(selected_date); i++) {
    start_blanks.push(<td className={classes.empty}>{""}</td>);
  }

  const days_in_month = [];
  for (let d = 1; d <= getDayInMonth(selected_date); d++) {
    const is_current_day: boolean = isCurrentDay(selected_date, d);
    const event_present: boolean = is_event_present(events, d, selected_date.getMonth(), selected_date.getFullYear());
    days_in_month.push(
      <td key={d} className={classes.day} align="center">
        <div
          onClick={() => handleSelectedDate(new Date(`${d} ${getMonth(selected_date)} ${getYear(selected_date)}`))}
          style={{
            background: is_current_day ? theme.palette.primary.main : "",
            color: is_current_day ? "#fff" : "#000000",
            border: selected_date.getDate() === d ? `2px solid ${theme.palette.primary.main}` : "",
            borderTop:
              selected_date.getDate() === d
                ? !display_full_calendar
                  ? "none"
                  : `2px solid ${theme.palette.primary.main}`
                : "",
          }}
          className={!display_full_calendar ? classes.dayContainerWeeklyView : classes.dayContainer}
        >
          <div className={classes.daySubContainer}>
            <span style={{ lineHeight: 1 }}>{d}</span>
          </div>
        </div>

        <div
          style={{
            visibility: event_present ? "visible" : "hidden",
            background: theme.palette.primary.main,
            outline: is_current_day ? "4px solid #fff" : "",
            position: "absolute",
            bottom: "0",
            left: "calc(50% - 3px)",
          }}
          className={display_full_calendar ? classes.eventPresentDay : classes.eventPresentDayWeeklyView}
        ></div>
      </td>
    );
  }

  const end_blanks = [];

  for (let i: number = getLastDayOfMonth(selected_date) + 1; i < 7; i++) {
    end_blanks.push(<td className={classes.empty}>{""}</td>);
  }
  const totalSlots: JSX.Element[] = [...start_blanks, ...days_in_month, ...end_blanks];
  const rows: any[][] = [[]];
  let cells: any = [];
  let current_week: any[] = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  //Get current week
  rows.forEach((row: any[]) => {
    row.forEach((item) => {
      if (item.key && parseInt(item.key) === getDate(selected_date)) {
        current_week = row;
      }
    });
  });

  return (
    <React.Fragment>
      {display_full_calendar ? (
        <React.Fragment>
          {rows.map((d: any, i: number) => {
            return <tr key={i}>{d}</tr>;
          })}
        </React.Fragment>
      ) : (
        <tr>{current_week}</tr>
      )}
    </React.Fragment>
  );
}
