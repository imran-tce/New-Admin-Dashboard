import React from "react";
import { useLocation } from "react-router-dom";


export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const getFormattedText = (text: string, length: number) => {
  const MAX_LENGTH_ALLOWED = length;
  return text?.length > MAX_LENGTH_ALLOWED ? `${text?.substr(0, MAX_LENGTH_ALLOWED)}...` : text;
};

export const getFormattedDate = (date: Date) => {
  const dateFormat = date.toDateString().split(" ");
  return `${dateFormat[1]} ${dateFormat[2]} , ${dateFormat[3]} `;
};

export const getStandardDateFormat = (date: string) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en", {}).format(newDate);
};

//This will return the date in format dd/mm/yyyy
export const getLocalStandardDateFormat = (date: string) => {
  const newDate = new Date(date);
  return newDate ? new Intl.DateTimeFormat(["ban", "id"]).format(newDate) : "";
};


export const getFormattedDateStringWithTime = (date: any) => {
  const new_date = new Date(date);
  const userTimezoneOffset = new_date.getTimezoneOffset() * 60000;
  const formatted_date = new Date(new_date.getTime() + userTimezoneOffset);
  const newDate = new Date(formatted_date);
  return new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(newDate);
};

export const getDateInInternationalFormat = (date: string) => {
  return date
    ? new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(new Date(date))
    : "dd-mm-yyyyThh:mm:ss";
};

export const getDateWithTimeZoneOffset = (date: any) => {
  const new_date = new Date(date);
  const userTimezoneOffset = new_date.getTimezoneOffset() * 60000;
  const formatted_date = new Date(new_date.getTime() + userTimezoneOffset);
  return formatted_date;
};

export const getFormattedDateWithSupabase = (date?: Date) => {
  const newDate = date ? new Date(date) : new Date();
  const formattedDate = new Intl.DateTimeFormat("en-IN").format(newDate).split("/");
  return `${formattedDate[2]},${formattedDate[1]},${formattedDate[0]}}`;
};

export const getNotificationTime = (created_at: string) => {
  const now: any = new Date();
  const notification_created_at: any = new Date(created_at);
  const now_in_seconds = now.getTime() / 1000;
  const notification_created_at_in_seconds = notification_created_at.getTime() / 1000;

  const difference = Math.abs(now_in_seconds - notification_created_at_in_seconds);
  if (difference < 60) {
    return "Now";
  } else if (difference < 3600) {
    return `${Math.floor(difference / 60)} min`;
  } else if (difference < 86400) {
    return `${Math.floor(difference / 3600)} hr`;
  } else if (difference < 604800) {
    return `${Math.floor(difference / 86400)} d`;
  } else {
    return `${Math.floor(difference / 604800)} w`;
  }
};

export const splitMuiDateDashFormat = (date: string) => {
  const splittedDateString = date.split("T");
  const date_to_return = splittedDateString[0].split("-").reverse().join("-");
  return date_to_return;
};

export const splitMuiDateSlashFormat = (date: string) => {
  const splittedDateString = date.split("T");
  const date_to_return = splittedDateString[0].split("-").reverse().join("/");
  return date_to_return;
};

const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export function convertToBytes(x: number) {
  let l = 0,
    n = parseInt(x.toString(), 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

export const get_time_zone_offset_date = (date: Date) => {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const formatted_date = new Date(date.getTime() + userTimezoneOffset);
  return formatted_date;
};

export const remove_time_zone_offset_date = (date: Date) => {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const formatted_date = new Date(date.getTime() - userTimezoneOffset);
  return formatted_date;
};

export const get_formatted_upload_file_name = (file: string) => {
  // Extract the file name and extension
  const file_name = file.substring(0, file.lastIndexOf("."));
  const file_extension = file.substring(file.lastIndexOf("."));
  // Remove non-alphanumeric characters from the file name
  const cleaned_file_name = file_name.replace(/[^a-zA-Z0-9]+/g, "");

  // Combine the cleaned file name with the original extension
  const modified_file_name = cleaned_file_name + file_extension;
  return modified_file_name;
};

export function replaceNonASCIIWithUnderscore(value: string) {
  // Use a regular expression to match non-ASCII characters
  const non_ascii_regex = /[^\x00-\x7F]+/g;

  // Replace non-ASCII characters with underscores
  const cleaned_string = value.replace(non_ascii_regex, "_");

  return cleaned_string;
}

export const getInternationalDateFormat = (date: string) => {
  if (date) {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(newDate);
  }
  return "";
};


export const generateDatesFromMonth=(date: Date): string[] => {
  const year = date.getFullYear();
  const month = date.getMonth(); // getMonth() returns 0-based month
  
  // Calculate the first day of the month
  const firstDay = new Date(year, month, 1);
  
  // Calculate the last day of the month
  const lastDay = new Date(year, month + 1, 0); // 0 here gets the last day of the previous month
  
  // Generate an array of dates from the first day to the last day
  const dateList: string[] = [];
  let currentDate = firstDay;
  
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  });
  
  while (currentDate <= lastDay) {
    dateList.push(formatter.format(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dateList;
}