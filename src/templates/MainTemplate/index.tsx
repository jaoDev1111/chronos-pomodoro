import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

import { TimerIcon } from 'lucide-react';

import type { ReactNode } from 'react';

type MainTemplateProps = {
  children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo>
          <TimerIcon />
          <span>Chronos</span>
        </Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
};
