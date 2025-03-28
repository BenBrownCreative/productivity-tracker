export type GoalProgress = {
  value: number;
  goal: number;
};

export type Goal = {
  name: string;
  description: string;
  type: "timed" | "number" | "toggle";
  progress: GoalProgress;
};
