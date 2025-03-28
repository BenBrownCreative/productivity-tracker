export const getReadableDate = () =>
  new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

export const getNewReadableTime = () =>
  new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

export const getReadableTime = (time: number) =>
  new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

export const getElapsedMinutes = (date1: number, date2: number) => {
  const timeDifferenceMs = Math.abs(date1 - date2);
  const seconds = Math.floor(timeDifferenceMs / 1000);
  const minutes = Math.floor(seconds / 60);

  return minutes;
};
