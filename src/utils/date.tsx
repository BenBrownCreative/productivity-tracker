export const readableDate = new Date().toLocaleString("en-US", {
  month: "long",
  day: "numeric",
});

export const readableTime = new Date().toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
