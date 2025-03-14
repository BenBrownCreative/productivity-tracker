export const getReadableDate = () =>
  new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

export const getReadableTime = () =>
  new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
