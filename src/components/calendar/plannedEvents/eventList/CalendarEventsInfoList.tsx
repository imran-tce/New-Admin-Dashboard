import { Typography } from "@mui/material";
import { CalendarEvent } from "../../../../models/apiModels";
import { get_time_zone_offset_date } from "../../../../utils/utils";
import useStyles from "./CalendarEventsInfoList.styles";

interface IProps {
  index: number;
  currentEvent: CalendarEvent;
}
export default function EventList({ currentEvent, index }: IProps) {
  const classes = useStyles();
  // const mobileScreen = useMediaQuery("(max-width:600px)");
  const event_start = get_time_zone_offset_date(new Date(currentEvent.event_start));
  const event_end = get_time_zone_offset_date(new Date(currentEvent.event_end));

  return (
    <div key={index} className={classes.event}>
      <Typography variant="h5" color="#000" >{currentEvent.title} </Typography>
      <Typography variant="BM14" color="#2A4C72">{currentEvent.location} </Typography>
      {currentEvent.event_start && (
        <div className={classes.eventTimeRow}>
          <Typography variant="BR14" color="#828894" >
            {`${new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(
              event_start
            )} - ${new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(event_end)}`}
          </Typography>
        </div>
      )}
    </div>
  );
}
