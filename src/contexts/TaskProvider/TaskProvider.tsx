// Gerenciamento do Estado

import { useEffect, useReducer } from 'react';

import { TaskContext } from '../TaskContext/TaskContext';
import { initialTaskState } from '../../states/initialTaskState';
import { taskReducer } from '../../reducers/taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {
    const countDownSeconds = event.data;

    console.log(countDownSeconds);

    if (event.data <= 0) {
      console.log('Worker COMPLETED');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
