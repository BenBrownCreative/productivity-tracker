import { useState } from "react";
import AddGoalsModal from "./components/addGoalsModal";
import { type Goal } from "./components/goal";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoal = (goal: Goal) => {
    setGoals([...goals, goal]);
  };
  const GoalWrapper = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
  `;

  return (
    <div>
      <h1>Today's Goals</h1>
      {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
      <Button
        size="small"
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      >
        Manage Goals
      </Button>
      {/* <button onClick={addGoals}>Add Goals</button> // open modal to select */}
      goals
      {goals.map(goal => (
        <GoalWrapper>
          {/* <button onClick={() => setGoals(goals.filter(g => g !== goal))}>
            Remove
          </button> */}
          <Button
            onClick={() => setGoals(goals.filter(g => g !== goal))}
            sx={[
              theme => ({
                color: "#fff",
                backgroundColor: theme.palette.primary.main,
                ...theme.applyStyles("dark", {
                  backgroundColor: theme.palette.secondary.main,
                }),
                "&:hover": {
                  boxShadow: theme.shadows[3],
                  backgroundColor: theme.palette.primary.dark,
                  ...theme.applyStyles("dark", {
                    backgroundColor: theme.palette.secondary.dark,
                  }),
                },
              }),
            ]}
          >
            Remove
          </Button>
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
