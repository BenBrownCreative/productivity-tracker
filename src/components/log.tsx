import styled from "@emotion/styled";
import { useState } from "react";
import { Title } from "../utils/commonStyles";
import { AddCircleOutline } from "@mui/icons-material";
import { readableTime } from "../utils/date";

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

  const handleOnLogClick = () => {
    const time = readableTime;
    setLog([...log, { time, message: "new log" }]);
  };
  return (
    <>
      <TitleWrapper>
        <Title>Log</Title>
        {/* 
          need an input or be able to select goals 
          add opens up a modal with an input and all the goals 
        */}
        <AddCircleOutline color="primary" onClick={handleOnLogClick} />
      </TitleWrapper>

      {log.map(item => (
        <LogItem>
          <p>{item.time}</p>
          <p>{item.message}</p>
        </LogItem>
      ))}
    </>
  );
};

export default Log;
