import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Heading } from './components/Heading';

import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/globals.css';

function App() {
  console.log('Teste');

  return (
    <>
      <Container>
        <Logo>
          <TimerIcon />
          <span>Chronos</span>
        </Logo>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

export default App;
