import { useTaskContext } from '../../hooks/useTaskContext';

import styles from './styles.module.css';

export const CountDown = () => {
  const { state } = useTaskContext();

  return (
    <div>
      <div className={styles.container}>{state.formattedSecondsRemaining}</div>
    </div>
  );
};
