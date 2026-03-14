import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; // Página histórico e Listagem das Tasks
  secondsRemaining: number; // Contador, Página histórico, Formulário, Botão
  formattedSecondsRemaining: string; // Título, Contador
  activeTask: TaskModel | null; // Saber se há uma task atia
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
