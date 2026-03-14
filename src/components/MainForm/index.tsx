import { PlaySquareIcon, StopCircleIcon } from 'lucide-react';
import { BaseButton } from '../BaseButton';
import { BaseInput } from '../BaseInput';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export const MainForm = () => {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value;
    const sanitizedTaskName = taskName.trim();

    if (sanitizedTaskName === '') {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: crypto.randomUUID().toString(),
      name: sanitizedTaskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  return (
    <form onSubmit={e => handleSubmitForm(e)} className='form' action=''>
      <div className='formRow'>
        <BaseInput
          id='task'
          label='Task'
          type='text'
          placeholder='Digite algo...'
          ref={taskNameInput}
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
