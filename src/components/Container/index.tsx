import type { HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.css';

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, children, ...rest }: ContainerProps) => {
  // Facilitar o uso.
  const classes = `${className ?? ''} ${styles['container-fluid']}`;

  return (
    <>
      <div className={classes} {...rest}>
        <div className={styles.container}>
          <div className={styles.content}>
            <section>{children}</section>
          </div>
        </div>
      </div>
    </>
  );
};
