// Gerenciamento do Estado

import { useEffect, useReducer } from 'react';

import { TaskContext } from '../TaskContext/TaskContext';
import { initialTaskState } from '../../states/initialTaskState';
import { taskReducer } from '../../reducers/taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
