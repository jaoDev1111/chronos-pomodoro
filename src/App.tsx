import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { BaseInput } from './components/BaseInput';

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
            <p>Ciclos.</p>
            <p>0 0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
