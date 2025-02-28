import styled from "@emotion/styled";

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

  const readableDate = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
  const readableTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

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
