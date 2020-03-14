import * as React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';

export interface IAppProps {
  Children: React.FC;
}

export default function Layout(props: IAppProps) {
  const { Children } = props;
  return (
    <>
      <Header />
      <Container>
        <Children />
      </Container>
    </>
  );
}
