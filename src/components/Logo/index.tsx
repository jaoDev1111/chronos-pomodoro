import type { ReactNode } from 'react';

import styles from './styles.module.css';

type LogoProps = {
  children: ReactNode;
  to?: string;
};

export const Logo = ({ children }: LogoProps) => {
  return (
    <>
      <div className={styles.logo}>
        <a className={styles.logoLink} href=''>
          {children}
        </a>
      </div>
    </>
  );
};
