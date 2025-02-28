import styled from "@emotion/styled";
import { readableDate, readableTime } from "../utils/date";

const Header = () => {
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
      <h1>{readableDate}</h1>
      <p>{readableTime}</p>
      <InspireText>
        todo: something inspirational here. verse of the day
      </InspireText>
    </Wrapper>
  );
};

export default Header;
