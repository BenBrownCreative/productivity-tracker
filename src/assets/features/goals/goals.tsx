import { useState } from "react";
import AddGoalsModal from "./components/addGoalsModal";
import { type Goal } from "./components/goal";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Remove } from "@mui/icons-material";

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const addGoal = (goal: Goal) => {
    setGoals([...goals, goal]);
  };
  const GoalWrapper = styled.div`
    display: flex;
    column-gap: 10px;
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
      goals
      {goals.map(goal => (
        <GoalWrapper>
          {/* this needs to be toggleable by an edit */}
          <StyledButton
            onClick={() => setGoals(goals.filter(g => g !== goal))}
            // sx={[
            //   theme => ({
            //     color: "#fff",
            //     backgroundColor: theme.palette.primary.main,
            //     ...theme.applyStyles("dark", {
            //       backgroundColor: theme.palette.secondary.main,
            //     }),
            //     "&:hover": {
            //       boxShadow: theme.shadows[3],
            //       backgroundColor: theme.palette.primary.dark,
            //       ...theme.applyStyles("dark", {
            //         backgroundColor: theme.palette.secondary.dark,
            //       }),
            //     },
            //   }),
            // ]}
          >
            <Remove />
          </StyledButton>
          <div key={goal.name}>{goal.name}</div>
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
