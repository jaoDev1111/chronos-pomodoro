import type { ComponentProps, ReactNode } from 'react';

import styles from './styles.module.css';

type BaseButtonProps = {
  children: ReactNode;
  color?: 'green' | 'red';
} & ComponentProps<'button'>;

export const BaseButton = ({
  color = 'green',
  children,
  ...rest
}: BaseButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {children}
      </button>
    </>
  );
};
