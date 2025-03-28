import styled from "@emotion/styled";
import Goals from "./components/goals/goals";
import Header from "./components/header";
import Palette from "./utils/palette";
import Log from "./components/log";
import { useState } from "react";
import { presetGoals } from "./components/goals/utils/presetGoals";
import { Goal } from "./models";
import Notes from "./components/notes";

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

type SectionProps = {
  maxWidth?: string;
};

const Section = styled.div<SectionProps>`
  min-width: 300px;
  padding: 1rem;
  border-right: 1px solid var(--colors-primary);
  max-width: ${props => props.maxWidth || "none"};
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
            <Notes />
          </Section>
          <Section maxWidth="40%">
            <Goals goals={goals} setGoals={setGoals} />
          </Section>
        </BodyWrapper>
      </Palette>
    </AppWrapper>
  );
};

export default App;
