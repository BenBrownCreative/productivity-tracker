import styled from "@emotion/styled";

const Header = () => {
  const Wrapper = styled.header`
    background-color: var(--colors-background);
    color: white;
  `;

  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};

export default Header;
