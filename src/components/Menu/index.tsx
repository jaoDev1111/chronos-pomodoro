import type { ReactNode } from 'react';

import styles from './styles.module.css';
import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

type MenuProps = {
  children?: ReactNode;
  to?: string;
};

export const Menu = ({ children }: MenuProps) => {
  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href=''>
          <HouseIcon />
        </a>

        <a className={styles.menuLink} href=''>
          <HistoryIcon />
        </a>

        <a className={styles.menuLink} href=''>
          <SettingsIcon />
        </a>

        <a className={styles.menuLink} href=''>
          <SunIcon />
        </a>
      </nav>
    </>
  );
};
