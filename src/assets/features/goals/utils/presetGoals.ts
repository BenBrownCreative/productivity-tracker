export const presetGoals = {
  quietTime: {
    name: "Quiet Time",
    description: "Spend 30 minutes in quiet time",
    icon: "🧘",
    type: "toggle",
  },
  pushUps: {
    name: "Push-ups",
    description: "Do x number of push-ups",
    icon: "💪",
    type: "number",
    progress: {
      value: 15,
      goal: 100,
    },
  },
  coding: {
    name: "Coding",
    description: "Code for x number of hours",
    icon: "💻",
    type: "number",
    progress: {
      value: 40,
      goal: 120,
    },
  },
};
