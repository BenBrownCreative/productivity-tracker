import { useState } from "react";
import AddGoalsModal from "./components/addGoalsModal";
import { type Goal } from "./components/goal";
import styled from "@emotion/styled";
import { Button, Checkbox } from "@mui/material";
import { Remove } from "@mui/icons-material";
import GoalProgress from "./components/goalProgress";

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const addGoal = (goal: Goal) => {
    setGoals([...goals, goal]);
  };
  const GoalWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
  `;

  const StyledButton = styled(Button)`
    color: white;
    background-color: var(--colors-primary);
    &:hover {
      background-color: theme;
    }
  `;

  return (
    <div>
      <h1>Today's Goals</h1>
      <StyledButton
        size="small"
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      >
        Manage Goals
      </StyledButton>
      {goals.map(goal => (
        <GoalWrapper key={goal.name}>
          {/* this needs to be toggleable by an edit */}
          {/* <StyledButton onClick={() => setGoals(goals.filter(g => g !== goal))}>
            <Remove />
          </StyledButton> */}
          <Checkbox color="secondary" />
          <div>{goal.name}</div>
          {/* display progress */}

          {goal?.progress && <GoalProgress progress={goal.progress} />}
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
