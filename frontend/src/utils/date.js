import dayjs from "dayjs";

export function getRelationshipDuration(startDate) {
  const now = dayjs();
  const start = dayjs(startDate);

  const totalSeconds = now.diff(start, "second");

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor((totalSeconds % 86400) / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}