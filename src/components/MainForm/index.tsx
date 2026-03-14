import { PlaySquareIcon, StopCircleIcon } from 'lucide-react';
import { BaseButton } from '../BaseButton';
import { BaseInput } from '../BaseInput';
import { Cycles } from '../Cycles';

export const MainForm = () => {
  return (
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
  );
};
