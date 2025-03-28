import type { GoalProgress } from "../../../models";

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
