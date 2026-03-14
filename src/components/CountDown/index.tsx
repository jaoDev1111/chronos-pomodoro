import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';

export const CountDown = () => {
  const { state, setState } = useTaskContext();

  console.log(state);

  return (
    <div>
      <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    </div>
  );
};
