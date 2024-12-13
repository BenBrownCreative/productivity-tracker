import styled from "styled-components";
import "./App.css";
import Goals from "./assets/features/goals/goals";

function App() {
  const AppWrapper = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
  `;
  const Section = styled.div`
    max-width: 300px;
    padding: 20px;
  `;

  return (
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
  );
}

export default App;
