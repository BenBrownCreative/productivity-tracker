import styled from "styled-components";

const Header = () => {
  const Wrapper = styled.header`
    background-color: #333538;
    color: white;
  `;
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};

export default Header;
