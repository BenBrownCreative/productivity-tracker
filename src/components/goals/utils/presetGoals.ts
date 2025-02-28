export const presetGoals = {
  quietTime: {
    name: "Quiet Time",
    description: "Spend 30 minutes in quiet time",
    type: "toggle",
  },
  pushUps: {
    name: "Push-ups",
    description: "Do x number of push-ups",
    type: "number",
    progress: {
      value: 15,
      goal: 100,
    },
  },
  coding: {
    name: "Coding (min)",
    description: "Code for x number of hours",
    type: "number",
    progress: {
      value: 40,
      goal: 120,
    },
  },
};
