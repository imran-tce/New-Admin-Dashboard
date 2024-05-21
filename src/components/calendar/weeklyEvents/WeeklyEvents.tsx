import { useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { CalendarEvent } from "../../../models/apiModels";
import {
  addDay,
  getDate,
  getStartOfWeek,
} from "../../../pages/calendar/CalendarUtils";
import useStyles from "./WeeklyEvents.styles";
import EventList from "./eventList/EventList";

interface Props {
  events: CalendarEvent[];
  selected_date: Date;
  handleOpen: () => void;
  handleSelectedDate: (date: Date) => void;
}

export default function WeeklyEvents({
  events,
  selected_date,
  handleOpen,
  handleSelectedDate,
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const TODAY = new Date();
  const week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [week_dates, set_week_dates] = useState<Date[]>([]);
  const [scroll_right, set_scroll_right] = useState(true);
  const tabScreen = useMediaQuery("(max-width: 960px)");
  const sun_ref = useRef<HTMLDivElement>(null);
  const mon_ref = useRef<HTMLDivElement>(null);
  const tue_ref = useRef<HTMLDivElement>(null);
  const wed_ref = useRef<HTMLDivElement>(null);
  const thu_ref = useRef<HTMLDivElement>(null);
  const fri_ref = useRef<HTMLDivElement>(null);
  const sat_ref = useRef<HTMLDivElement>(null);
  const ref_arr: React.RefObject<HTMLDivElement>[] = [
    sun_ref,
    mon_ref,
    tue_ref,
    wed_ref,
    thu_ref,
    fri_ref,
    sat_ref,
  ];

  //Get current week
  useEffect(() => {
    const start_of_week = getStartOfWeek(selected_date);
    const NUMBER_OF_DAYS_IN_WEEK = 7;
    const week_days: Date[] = [];
    for (let index = 0; index < NUMBER_OF_DAYS_IN_WEEK; index++) {
      week_days.push(addDay(start_of_week, index));
    }
    set_week_dates(week_days);
  }, [selected_date]);

  //Map current week events
  const eventsMap = useMemo(() => {
    const events_map: { [date: string]: CalendarEvent[] } = {};
    if (week_dates.length > 0) {
      week_dates.forEach((date) => {
        events_map[date.toDateString()] = events?.filter((event) => {
          const event_start_date = new Date(event.event_start);
          const user_timezone_offset =
            event_start_date.getTimezoneOffset() * 60000;
          const formatted_date = new Date(
            event_start_date.getTime() + user_timezone_offset
          );
          return formatted_date.toDateString() === date.toDateString();
        });
      });
    }
    return events_map;
  }, [events, week_dates]);

  const handleEventDayClick = (date: Date) => {
    if (tabScreen) {
      handleSelectedDate(date);
      handleOpen();
    } else {
      handleSelectedDate(date);
    }
  };

  const handleScroll = (currentRef: React.RefObject<HTMLDivElement>) => {
    if (currentRef && currentRef.current) {
      if (scroll_right) {
        currentRef.current.scrollLeft += currentRef.current.scrollWidth;
      } else {
        currentRef.current.scrollLeft -= currentRef.current.scrollWidth;
      }
      set_scroll_right((scroll) => !scroll);
    }
  };

  // const handleRightScroll = (currentRef: React.RefObject<HTMLDivElement>) => {
  //   if (currentRef && currentRef.current) {
  //     const scrollWidth = currentRef.current.scrollWidth;
  //     const scrollLeft = currentRef.current.scrollLeft;
  //     const clientWidth = currentRef.current.clientWidth;
  //     if (scrollWidth - scrollLeft > clientWidth) {
  //       currentRef.current.scrollLeft += 500;
  //     } else {
  //       set_scroll_right(false);
  //     }
  //   }
  // };

  // const handleLeftScroll = (currentRef: React.RefObject<HTMLDivElement>) => {
  //   if (currentRef && currentRef.current) {
  //     const scrollLeft = currentRef.current.scrollLeft;
  //     if (scrollLeft > 0) {
  //       currentRef.current.scrollLeft -= 500;
  //     } else {
  //       set_scroll_right(true);
  //     }
  //   }
  // };

  return (
    <div className={classes.root}>
      {week_dates.map((day, index) => {
        const is_today = day.toDateString() === TODAY.toDateString();
        const is_selected_date =
          day.toDateString() === selected_date.toDateString();
        return (
          <div
            key={index}
            className={classes.dayContainer}
            style={{
              background: is_selected_date
                ? theme.palette.primary.main
                : "#FFF",
            }}
            onClick={() => handleEventDayClick(day)}
          >
            <h5
              style={{
                color: is_today
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
              }}
            >
              {week_days[index]}
            </h5>
            <h4
              style={{
                color: is_today
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
                fontWeight: is_today ? 600 : 300,
              }}
            >
              {getDate(day)}
            </h4>

            <ScrollContainer
              innerRef={ref_arr[index]}
              vertical={false}
              horizontal={true}
              className={classes.eventsContainer}
            >
              {eventsMap[day.toDateString()]
                ?.sort(
                  (a, b) =>
                    new Date(a.event_start).getTime() -
                    new Date(b.event_start).getTime()
                )
                ?.map((event, j) => {
                  return (
                    <div key={j}>
                      <EventList
                        event_id={event.id}
                        event_end={event.event_end}
                        event_start={event.event_start}
                        event_title={event.title}
                      />
                    </div>
                  );
                })}
            </ScrollContainer>

            <div className={classes.scrollButtonContainer}>
              {eventsMap[day.toDateString()]?.length > 2 &&
                (scroll_right ? (
                  <img
                    src="/icons/calendar_events_scroll_right.svg"
                    alt="L"
                    style={{ zIndex: 100 }}
                    onClick={() => handleScroll(ref_arr[index])}
                  />
                ) : (
                  <img
                    src="/icons/calendar_events_scroll_left.svg"
                    alt="L"
                    style={{ zIndex: 100 }}
                    onClick={() => handleScroll(ref_arr[index])}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
