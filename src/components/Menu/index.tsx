import { useEffect, useState } from 'react';

import styles from './styles.module.css';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  // Lookup Table - Buscar valor
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleToggleTheme = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  // Só vai executar esse useEffect quando a dependencia mudar
  useEffect(() => {
    console.log('Altera o tema da aplicação toda', Date.now());
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ir para a Home'
          title='Ir para a Home'
        >
          <HouseIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ver Histórico'
          title='Ver Histórico'
        >
          <HistoryIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Mudar Tema'
          title='Mudar Tema'
          onClick={event => handleToggleTheme(event)}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
};
