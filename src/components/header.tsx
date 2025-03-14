import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { getReadableDate, getReadableTime } from "../utils/date";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(getReadableTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getReadableTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const Wrapper = styled.header`
    background-color: var(--colors-background);
    color: white;
    display: flex;
    align-items: baseline;
    column-gap: 1rem;
  `;

  const InspireText = styled.p`
    font-style: italic;
    opacity: 0.5;
    margin-left: auto;
    margin: 0 2rem 0 auto;
  `;

  return (
    <Wrapper>
      <h1>{getReadableDate()}</h1>
      <p>{currentTime}</p>
      <InspireText>
        todo: something inspirational here. verse of the day
      </InspireText>
    </Wrapper>
  );
};

export default Header;
