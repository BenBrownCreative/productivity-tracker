import type { GoalProgress } from "./goal";

type Props = {
  progress: GoalProgress;
};

const GoalProgress = ({ progress }: Props) => {
  console.log("progress", progress);

  return (
    <div>
      {progress.value} / {progress.goal}
    </div>
  );
};

export default GoalProgress;
