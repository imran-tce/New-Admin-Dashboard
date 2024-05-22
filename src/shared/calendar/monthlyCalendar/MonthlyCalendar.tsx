
import { CalendarEvent } from "../../../models/apiModels";
import useStyles from "./MonthlyCalendar.styles";
import CalendarDays from "./calendarDays/CalendarDays";
import Header from "./header/Header";
import WeekDays from "./weakDays/WeekDays";

interface IProps {
  handlePreviousClick: () => void;
  handleMonthClick: () => void;
  selected_date: Date;
  handleNextClick: () => void;
  set_display_full_calendar: React.Dispatch<React.SetStateAction<boolean>>;
  display_full_calendar: boolean;
  is_current_week: boolean;
  events: CalendarEvent[];
  handleSelectedDate: (date: Date) => void;
}

export default function MonthlyCalendar({
  display_full_calendar,
  handleMonthClick,
  handleNextClick,
  handlePreviousClick,
  selected_date,
  set_display_full_calendar,
  is_current_week,
  events,
  handleSelectedDate,
}: IProps) {
  const classes = useStyles();
  return (
    <div className={classes.calendar}>
      <Header
        handleMonthClick={handleMonthClick}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        selected_date={selected_date}
      />
      <table style={{ width: "100%" }}>
        <thead>
          <WeekDays
            display_full_calendar={display_full_calendar}
            is_current_week={is_current_week}
            selected_date={selected_date}
          />
        </thead>
        <tbody>
          <CalendarDays
            display_full_calendar={display_full_calendar}
            events={events}
            handleSelectedDate={handleSelectedDate}
            selected_date={selected_date}
          />
        </tbody>
      </table>
    </div>
  );
}
