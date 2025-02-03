import styled from "@emotion/styled";

export type GoalProgress = {
  value: number;
  goal: number;
};

export type Goal = {
  name: string;
  description: string;
  icon: string;
  type: string;
  progress?: GoalProgress;
};

type GoalProps = {
  goal: Goal;
};

const GoalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GoalCard = ({ goal }: GoalProps) => {
  return (
    <GoalWrapper key={goal.name}>
      <div>{goal.name}</div>
      {/* <div>{goal.description}</div> */}
      <div>{goal.icon}</div>
      {/* <div>{goal.type}</div> */}
    </GoalWrapper>
  );
};

export default GoalCard;
