import styled from "@emotion/styled";
import { type Goal } from "../../../models";

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
      {/* <div>{goal.type}</div> */}
    </GoalWrapper>
  );
};

export default GoalCard;
