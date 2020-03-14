import * as React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

export interface IAppProps {
  Children?: React.FC;
  Child?: React.ComponentType<any>;
}

export default function Layout(props: IAppProps) {
  const { Children } = props;
  const { Child } = props;
  return (
    <>
      <Header />
      <Container>
        {Children ? <Children /> : null}
        {Child ? <Child /> : null}
      </Container>
    </>
  );
}
