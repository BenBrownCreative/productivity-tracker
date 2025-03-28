import { Goal } from "../../../models";
import { getElapsedMinutes } from "../../../utils/date";

export function updateGoalProgressByType(
  goal: Goal,
  currentGoalStartTime: number
) {
  switch (goal.type) {
    case "number": {
      const input = prompt(`How many ${goal.name} did you do?`);
      const value = parseInt(input || "0", 10); // Convert input to a number
      if (isNaN(value)) {
        alert("Please enter a valid number.");
        return goal; // Return the original goal if input is invalid
      }
      return {
        ...goal,
        progress: {
          ...goal.progress,
          value: value + goal.progress.value,
        },
      };
    }
    case "toggle":
      return {
        ...goal,
        progress: {
          ...goal.progress,
          value: 1,
        },
      };
    case "timed":
      return {
        ...goal,
        progress: {
          ...goal.progress,
          value:
            goal.progress.value +
            getElapsedMinutes(Date.now(), currentGoalStartTime),
        },
      };
    default:
      return goal;
  }
}
