// Definição do Estado

import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from '../../states/initialTaskState';
import type { TaskActionModel } from '../../reducers/taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

// Criação do Contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
