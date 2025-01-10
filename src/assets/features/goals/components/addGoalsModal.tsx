import styled from "@emotion/styled";
import { presetGoals } from "../utils/presetGoals";
import GoalCard, { type Goal } from "../components/goal";

type ModalProps = {
  dismiss: () => void;
  addGoal: (goal: Goal) => void;
};

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  background-color: #333538;
  margin: 5% auto;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
`;

const GoalWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

const AddGoalsModal = ({ dismiss, addGoal }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <button onClick={dismiss}>X</button>
        {/* also want option to add custom goal */}
        <p>select a goal to add..</p>
        {Object.values(presetGoals).map(goal => {
          console.log(goal);

          return (
            <GoalWrapper>
              <button onClick={() => addGoal(goal)}>Add</button>
              <GoalCard goal={goal} />
            </GoalWrapper>
          );
        })}
      </ModalContainer>
    </ModalWrapper>
  );
};

export default AddGoalsModal;
