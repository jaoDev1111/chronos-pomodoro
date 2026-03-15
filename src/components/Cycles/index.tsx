import styles from './styles.module.css';

import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import { useTaskContext } from '../../hooks/useTaskContext';

export const Cycles = () => {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycle}_${nextCycleType}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de Ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
