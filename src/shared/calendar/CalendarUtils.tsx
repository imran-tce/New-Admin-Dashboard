import {
  addDays,
  format,
  getDay,
  getDaysInMonth,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { CalendarEvent } from "../../models/apiModels";
import { get_time_zone_offset_date } from "../../utils/utils";

export const getDate = (date: Date) => {
  return format(date, "d");
};

export const getMonth = (date: Date) => {
  return format(date, "MMM");
};

export const getYear = (date: Date) => {
  return format(date, "yyyy");
};

export const getWeekDays = () => {
  return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
};

export const getStartOfWeek = (date: Date) => {
  return startOfWeek(date);
};

export const getLastDayOfWeek = (date: Date) => {
  return lastDayOfWeek(date);
};

export const addDay = (date: Date, amount: number) => {
  return addDays(date, amount);
};

export const getFirstDayOfMonth = (date: Date) => {
  return getDay(startOfMonth(date));
};

export const getLastDayOfMonth = (date: Date) => {
  return getDay(lastDayOfMonth(date));
};

export const getFirstOfMonth = (date: Date) => {
  return startOfMonth(date);
};

export const getLastOfMonth = (date: Date) => {
  return lastDayOfMonth(date);
};

export const getDayInMonth = (date: Date) => {
  return getDaysInMonth(date);
};

export const isCurrentMonth = (date: Date) => {
  const today = new Date();
  if (format(date, "MMM") === format(today, "MMM") && format(date, "yyyy") === format(today, "yyyy")) {
    return true;
  }
  return false;
};

export const isCurrentDay = (date: Date, day: number) => {
  const today = new Date();
  return today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear() && today.getDate() === day;
};

export const is_event_present = (events_lists: CalendarEvent[], day: number, month: number, year: number) => {
  const event = events_lists.filter((event) => {
    const time_offset = get_time_zone_offset_date(new Date(event.event_start));
    const ob1 = time_offset;
    const ob2 = new Date(year, month, day);
    return ob1.toDateString() === ob2.toDateString();
  });

  return event && event.length > 0 ? true : false;
};
