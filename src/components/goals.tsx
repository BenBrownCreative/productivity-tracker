import { useState } from "react";
import { presetGoals } from "../assets/presetGoals";
import AddGoalsModal from "./addGoalsModal";
import { type Goal } from "./goal";
import styled from "styled-components";

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
      <h1>Goals</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {/* <button onClick={addGoals}>Add Goals</button> // open modal to select */}
      goals
      {goals.map(goal => (
        <GoalWrapper>
          <button onClick={() => setGoals(goals.filter(g => g !== goal))}>
            Remove
          </button>
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
