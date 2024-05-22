import { get_time_zone_offset_date } from "../../../../utils/utils";
import useStyles from "./EventList.style";

interface IProps {
  event_id: string;
  event_start: string;
  event_end: string;
  event_title: string;
}

export default function EventList({ event_end, event_start, event_title }: IProps) {
  // const mobileScreen = useMediaQuery("(max-width:600px)");
  const event_date = new Date(event_start);
  const event_start_date = get_time_zone_offset_date(new Date(event_start));
  const event_end_date = get_time_zone_offset_date(new Date(event_end));

  const isEventDatePassed =
    new Date(event_date.getFullYear(), event_date.getMonth(), event_date.getDate() + 1).getTime() <
    new Date().getTime();

  const classes = useStyles({ isEventDatePassed });

  return (
    <div className={classes.eventBlock}>
      <h6>{event_title}</h6>
      {/* <Link to={`/event/${event_id}`}>
        {getFormattedText(`${window.origin}/event/${event_id}`, mobileScreen ? 32 : 40)}
      </Link> */}
      <p>
        {`${new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(
          event_start_date
        )} - ${new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(event_end_date)}`}
      </p>
    </div>
  );
}
