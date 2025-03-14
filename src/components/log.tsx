import styled from "@emotion/styled";
import { useState } from "react";
import { Title } from "../utils/commonStyles";
import { AddCircleOutline } from "@mui/icons-material";
import { getReadableTime } from "../utils/date";
import { presetGoals } from "./goals/utils/presetGoals";

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

type Log = {
  time: string;
  message: string; // this will be a string or a goal so we can link to it and update progress
};

const exampleLog = [
  {
    time: "7:57 AM",
    message: "Planning",
  },
  {
    time: "8:10 AM",
    message: "Bible reading",
  },
  {
    time: "8:30 AM",
    message: "Code",
  },
];

const Log = () => {
  const [log, setLog] = useState<Log[]>(exampleLog);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleSetLog = (newLog: string) => {
    setLog(prev => [...prev, { time: getReadableTime(), message: newLog }]);
    setOpen(false);
  };

  return (
    <>
      <TitleWrapper>
        <Title>Log</Title>
        <AddCircleOutline color="primary" onClick={openModal} />
      </TitleWrapper>

      {log.map(item => (
        <LogItem>
          <p>{item.time}</p>
          <p>{item.message}</p>
        </LogItem>
      ))}

      {open && (
        <>
          <StyledModal
          // open={open}
          // onClose={() => setOpen(false)}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          >
            <h3>Logging Time</h3>
            <p>Goals: this should pull from goals</p>
            <PillWrapper>
              <LogPill onClick={() => handleSetLog(presetGoals.coding.name)}>
                {presetGoals.coding.name}
              </LogPill>
              <LogPill onClick={() => handleSetLog(presetGoals.pushUps.name)}>
                {presetGoals.pushUps.name}
              </LogPill>
              <LogPill>{presetGoals.quietTime.name}</LogPill>
              <LogPill>{presetGoals.pushUps.name}</LogPill>
              <LogPill>{presetGoals.quietTime.name}</LogPill>
            </PillWrapper>
            <PillWrapper>
              <LogPill>Lunch</LogPill>
              <LogPill>Break</LogPill>
            </PillWrapper>
          </StyledModal>
          <Overlay onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
};

export default Log;
