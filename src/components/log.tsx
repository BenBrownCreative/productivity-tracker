import styled from "@emotion/styled";
import { SetStateAction, useState, Dispatch } from "react";
import { Title } from "../utils/commonStyles";
import { AddCircleOutline } from "@mui/icons-material";
import { getElapsedMinutes, getReadableTime } from "../utils/date";
import type { Goal } from "../models/goal";

const LogItem = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: baseline;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledModal = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  border-radius: 0.5rem;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--colors-background);
  padding: 2rem;
  width: 600px;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

const PillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin: 1rem 0;
`;

const LogPill = styled.div`
  background-color: var(--colors-primary);
  color: white;
  padding: 0.5rem 1rem;
  /* margin: 0.5rem; */
  border-radius: 2rem;
  width: fit-content;
  white-space: nowrap;
`;
const LogPillSecondary = styled.div`
  background-color: var(--colors-secondary);
  color: white;
  padding: 0.5rem 1rem;
  /* margin: 0.5rem; */
  border-radius: 2rem;
  width: fit-content;
  white-space: nowrap;
`;

type Log = {
  time: number;
  message: string; // this will be a string or a goal so we can link to it and update progress
};

const exampleLog = [
  {
    time: 1743177806468,
    message: "Planning",
  },
  {
    time: 1743178188228,
    message: "Bible reading",
  },
  {
    time: 1743178101165,
    message: "Code",
  },
];

type Props = {
  goals: Goal[];
  setGoals: Dispatch<SetStateAction<Goal[]>>;
};

const Log = ({ goals, setGoals }: Props) => {
  const [log, setLog] = useState<Log[]>(exampleLog);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleSetLogAndUpdateGoalProgress = (newLog: string) => {
    updateGoalProgress();
    handleSetLog(newLog);
  };

  const updateGoalProgress = () => {
    const currentLog = log.slice(-1)[0];
    // find the goal that matches the current log
    const currentGoal = goals.find(goal => goal.name === currentLog.message);

    //   const getPromptNum = () => {
    //     return prompt(
    //       `How many ${currentGoal.name} did you do?`,
    //       `${currentGoal.progress.value}`
    //     );
    // }

    if (currentGoal) {
      function updateGoalByType(goal: Goal) {
        switch (goal.type) {
          case "number": {
            const input = prompt(`How many ${currentGoal?.name} did you do?`);
            const value = parseInt(input || "0", 10); // Convert input to a number
            if (isNaN(value)) {
              alert("Please enter a valid number.");
              return goal; // Return the original goal if input is invalid
            }
            return {
              ...goal,
              progress: {
                ...goal.progress,
                value: value + goal.progress.value,
              },
            };
          }
          case "toggle":
            return {
              ...goal,
              progress: {
                ...goal.progress,
                value: 1,
              },
            };
          case "timed":
            return {
              ...goal,
              progress: {
                ...goal.progress,
                value:
                  goal.progress.value +
                  getElapsedMinutes(Date.now(), currentLog.time),
              },
            };
          default:
            return goal;
        }
      }

      const updatedGoal = updateGoalByType(currentGoal);

      setGoals(prev =>
        prev.map(goal =>
          goal.name === currentLog.message ? updatedGoal : goal
        )
      );

      if (currentGoal.type === "timed") {
        return;
      }
    }
  };

  const handleSetLog = (newLog: string) => {
    // console.log("old log", log, newLog);
    setLog(prev => [...prev, { time: Date.now(), message: newLog }]);
    setOpen(false);
  };

  return (
    <>
      <TitleWrapper>
        <Title>Log</Title>
        <AddCircleOutline color="primary" onClick={openModal} />
      </TitleWrapper>

      {log.map(item => (
        <LogItem key={item.time}>
          <p>{getReadableTime(item.time)}</p>
          <p>{item.message}</p>
        </LogItem>
      ))}

      {open && (
        <>
          <StyledModal>
            <h3>Logging Time</h3>
            <p>Goals: this should pull from goals</p>
            <PillWrapper>
              {Object.values(goals).map(goal => {
                return (
                  <LogPill
                    onClick={() => handleSetLogAndUpdateGoalProgress(goal.name)}
                    key={goal.name}
                  >
                    {goal.name}
                  </LogPill>
                );
              })}
            </PillWrapper>
            <p>Other</p>

            <PillWrapper>
              <LogPillSecondary onClick={() => handleSetLog("Lunch")}>
                Lunch
              </LogPillSecondary>
              <LogPillSecondary onClick={() => handleSetLog("Break")}>
                Break
              </LogPillSecondary>
            </PillWrapper>
          </StyledModal>
          <Overlay onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
};

export default Log;
