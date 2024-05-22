import { Slide, useMediaQuery } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { addMonths, subMonths } from "date-fns";
import React, { useEffect, useState } from "react";
// import Lottie from "react-lottie";
// import * as loadingGif from "../../assets/lotties/calendar_loading.json";

import { calendar_events_list } from "../../dummy data/calendar-events";
import { CalendarEvent } from "../../models/apiModels";
import { get_time_zone_offset_date } from "../../utils/utils";
import useStyles from "./Calendar.styles";
import { addDay, getStartOfWeek } from "./CalendarUtils";
import MonthlyCalendar from "./monthlyCalendar/MonthlyCalendar";
import PlannedEventList from "./plannedEvents/PlannedEventsList";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: loadingGif,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const transition = React.forwardRef(function transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Calendar() {
  const classes = useStyles();
  const [user_meta, set_user_meta] = useState<any>({} as any);
  const [selected_date, set_selected_date] = useState<Date>(new Date());
  const [display_full_calendar, set_display_full_calendar] = useState(true);
  const [events, set_events] = useState<CalendarEvent[]>(calendar_events_list);
  const [selected_date_events, set_selected_date_events] = useState<
    CalendarEvent[]
  >([]);
  const [is_current_week, set_is_current_week] = useState(true);
  const tab_screen = useMediaQuery("(max-width: 960px)");

  //Setting display full calendar to true if screen is desktop screen
  useEffect(() => {
    if (!tab_screen) {
      set_display_full_calendar(true);
    }
  }, [tab_screen]);

  useEffect(() => {
    const event = events?.filter((event) => {
      const event_date = event.event_start;
      const time_offset = get_time_zone_offset_date(new Date(event_date));
      return (
        time_offset.getFullYear() === selected_date.getFullYear() &&
        time_offset.getMonth() === selected_date.getMonth() &&
        time_offset.getDate() === selected_date.getDate()
      );
    });
    set_selected_date_events(event);

    const today = new Date(new Date().toDateString());
    const start_of_week = getStartOfWeek(selected_date);
    const NUMBER_OF_DAYS_IN_WEEK = 7;

    const weekdays: string[] = [];
    for (let index = 0; index < NUMBER_OF_DAYS_IN_WEEK; index++) {
      weekdays.push(addDay(start_of_week, index).getTime().toString());
    }

    if (weekdays.includes(today.getTime().toString())) {
      set_is_current_week(true);
    } else {
      set_is_current_week(false);
    }
  }, [selected_date, events]);

  useEffect(() => {
    document.title = "Calendar";
  }, []);

  const handlePreviousClick = () => {
    handleSelectedDate(subMonths(selected_date, 1));
  };

  const handleNextClick = () => {
    handleSelectedDate(addMonths(selected_date, 1));
  };

  const handleSelectedDate = (date: Date) => {
    set_selected_date(date);
    handle_change_event(date);
  };

  const handle_change_event = (date: Date) => {
    const event =
      events &&
      events.filter((event) => {
        const event_date = event.event_start;
        return (
          new Date(event_date).getFullYear() === date.getFullYear() &&
          new Date(event_date).getMonth() === date.getMonth() &&
          new Date(event_date).getDate() === date.getDate()
        );
      });
    set_selected_date_events(event);
  };

  const handleMonthClick = () => {
    if (tab_screen) {
      set_display_full_calendar((display) => !display);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.calendarContainer}>
        <MonthlyCalendar
          display_full_calendar={display_full_calendar}
          events={events}
          handleMonthClick={handleMonthClick}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          handleSelectedDate={handleSelectedDate}
          is_current_week={is_current_week}
          selected_date={selected_date}
          set_display_full_calendar={set_display_full_calendar}
        />
      </div>

      <div className={classes.plannedEventContainer}>
        <PlannedEventList
          events={selected_date_events}
          current_date={selected_date}
          user_meta={user_meta}
        />
      </div>
    </div>
  );
}
