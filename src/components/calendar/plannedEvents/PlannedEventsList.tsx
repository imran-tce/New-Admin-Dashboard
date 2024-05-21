import { useMemo } from "react";
import Lottie from "react-lottie";
import * as femaleGif from "../../../assets/lotties/calendar_no_event_female.json";
import * as genericGif from "../../../assets/lotties/calendar_no_event_generic.json";
import * as maleGif from "../../../assets/lotties/calendar_no_event_male.json";
import { CalendarEvent } from "../../../models/apiModels";
import { getDate, getMonth, getYear } from "../../../pages/calendar/CalendarUtils";
import useStyles from "./PlannedEventsList.styles";
import EventList from "./eventList/CalendarEventsInfoList";

interface Props {
  events: CalendarEvent[] | undefined;
  current_date: Date;
  user_meta: any;
}

export default function PlannedEventList({ events, current_date, user_meta={gender:"male"} }: Props) {
  const classes = useStyles();
  const today = new Date();
  const is_today: boolean =
    getDate(today) === getDate(current_date) &&
    getMonth(today) === getMonth(current_date) &&
    getYear(today) === getYear(current_date);

  const defaultOptions = useMemo(() => {
    const default_options = {
      loop: true,
      autoplay: true,
      animationData:
        user_meta && user_meta.id
          ? user_meta.gender?.toLowerCase() === "male"
            ? maleGif
            : user_meta.gender?.toLowerCase() === "female"
            ? femaleGif
            : genericGif
          : null,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return default_options;
  }, [user_meta]);

  return (
    <div className={classes.eventContainer}>
      <div className={classes.root}>
        <div className={classes.date}>
          {is_today ? "Today" : `${getDate(current_date)} ${getMonth(current_date)}, ${getYear(current_date)}`}
        </div>
        <div className={classes.eventsCardContainer}>
          {events && events.length > 0 ? (
            events.map((currentEvent, index) => {
              return <EventList currentEvent={currentEvent} index={index} />;
            })
          ) : (
            <div className={classes.noEvent}>
              <p style={{ textAlign: "left" }}>No Events</p>
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
