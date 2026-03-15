import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext/TaskContext';

// Forma de consumir o Estado
export function useTaskContext() {
  return useContext(TaskContext);
}
