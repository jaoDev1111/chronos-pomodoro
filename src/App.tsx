import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { BaseInput } from './components/BaseInput';
import { Cycles } from './components/Cycles';

import { PlaySquareIcon, StopCircleIcon, TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/globals.css';
import { BaseButton } from './components/BaseButton';

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
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <BaseInput
              id='task'
              label='Task'
              type='text'
              placeholder='Digite algo...'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <BaseButton>
              <PlaySquareIcon />
              <p>Iniciar</p>
            </BaseButton>

            <BaseButton color='red'>
              <StopCircleIcon />
              <p>Parar</p>
            </BaseButton>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
