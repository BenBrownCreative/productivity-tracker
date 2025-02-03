import styled from "@emotion/styled";
import Goals from "./assets/features/goals/goals";
import Header from "./components/header";

import Palette from "./utils/palette";

function App() {
  const AppWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: top;
    background-color: var(--colors-background);
  `;

  const Section = styled.div`
    max-width: 300px;
    padding: 2rem;
    border: 1px solid var(--colors-primary);
  `;

  return (
    <>
      <Palette>
        <Header />
        <AppWrapper>
          <Section>
            <h1>Notes</h1>
            <p>styleguide</p>
            <p>goals section: add goals, check them off</p>
            <p>
              daily log of events, be able to select from goal and track time,
              custom description
            </p>
          </Section>
          <Section>
            <h1>Ideas</h1>
            <p>AI integration: setting goals</p>
            <p>tracking goals history</p>
            <p>need a way to preserve data</p>
          </Section>
          <Goals />
        </AppWrapper>
      </Palette>
    </>
  );
}

export default App;
