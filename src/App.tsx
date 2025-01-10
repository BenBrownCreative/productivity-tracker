import styled from "styled-components";
import Goals from "./assets/features/goals/goals";
import Header from "./components/header";
import CssBaseline from "@mui/material/CssBaseline";

import Palette from "./utils/palette";

function App() {
  const AppWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
  `;

  const Section = styled.div`
    max-width: 300px;
    padding: 2rem;
  `;

  return (
    <>
      <Palette>
        <CssBaseline />
        <Header />

        <div>
          <div>
            <h1>Notes</h1>
            <p>styleguide</p>
            <p>goals section: add goals, check them off</p>
            <p>
              daily log of events, be able to select from goal and track time,
              custom description
            </p>
          </div>
          <Section>
            <h1>Ideas</h1>
            <p>AI integration: setting goals</p>
            <p>tracking goals history</p>
            <p>need a way to preserve data</p>
          </Section>
          <Goals />
        </div>
      </Palette>
    </>
  );
}

export default App;
