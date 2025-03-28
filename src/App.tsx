import styled from "@emotion/styled";
import Goals from "./components/goals/goals";
import Header from "./components/header";

import Palette from "./utils/palette";
import Log from "./components/log";
import { Title } from "./utils/commonStyles";
import { useState } from "react";
import { presetGoals } from "./components/goals/utils/presetGoals";
import { Goal } from "./models";

const AppWrapper = styled.div`
  column-gap: 1rem;
  align-items: top;
  background-color: var(--colors-background);
  padding: 2rem;
`;
const BodyWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: top;
  margin-top: 2rem;
`;
const Section = styled.div`
  min-width: 300px;
  padding: 1rem;
  border-right: 1px solid var(--colors-primary);
`;

const App = () => {
  const [goals, setGoals] = useState<Goal[]>(Object.values(presetGoals));

  return (
    <AppWrapper>
      <Palette>
        <Header />
        <BodyWrapper>
          <Section>
            <Log goals={goals} setGoals={setGoals} />
          </Section>
          <Section>
            <Title>Daily Notes</Title>
            <p>AI integration: setting goals</p>
            <p>tracking goals history</p>
            <p>need a way to preserve data</p>
            <p>Log: remove log?</p>
            <p>
              would be nice to see how long something took once the next log
              active
            </p>
          </Section>
          <Goals goals={goals} setGoals={setGoals} />
        </BodyWrapper>
      </Palette>
    </AppWrapper>
  );
};

export default App;
