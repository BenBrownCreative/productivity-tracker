import { useState } from "react";
import AddGoalsModal from "./components/addGoalsModal";
import type { Goal } from "../../models";
import styled from "@emotion/styled";
import { Button, Checkbox } from "@mui/material";
import GoalProgress from "./components/goalProgress";
import { Title } from "../../utils/commonStyles";
import { AddCircleOutline } from "@mui/icons-material";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoalWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

type Props = {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
};

const Goals = ({ goals, setGoals }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const addGoal = (goal: Goal) => {
    setGoals([...goals, goal]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <TitleWrapper>
        <Title>Goals</Title>
        <AddCircleOutline color="primary" onClick={openModal} />
      </TitleWrapper>

      {goals.map(goal => (
        <GoalWrapper key={goal.name}>
          {/* <StyledButton onClick={() => setGoals(goals.filter(g => g !== goal))}>
            <Remove />
          </StyledButton> */}
          <Checkbox
            color="secondary"
            checked={goal.progress.value >= goal.progress.goal}
          />
          <div>{goal.name}</div>
          {/* display progress */}

          {goal?.progress.goal > 1 && <GoalProgress progress={goal.progress} />}
        </GoalWrapper>
      ))}
      {isModalOpen && (
        <AddGoalsModal
          dismiss={() => setIsModalOpen(false)}
          addGoal={addGoal}
        />
      )}
    </div>
  );
};

export default Goals;
