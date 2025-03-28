import type { Goal } from "../../../models";

export const presetGoals = {
  quietTime: {
    name: "Quiet Time",
    description: "Spend 30 minutes in quiet time",
    type: "toggle",
    progress: {
      value: 0,
      goal: 1,
    },
  } satisfies Goal,
  pushUps: {
    name: "Push-ups",
    description: "Do x number of push-ups",
    type: "number",
    progress: {
      value: 0,
      goal: 100,
    },
  } satisfies Goal,
  coding: {
    name: "Code",
    description: "Code for x number of hours",
    type: "timed",
    progress: {
      value: 0,
      goal: 120,
    },
  } satisfies Goal,
};
