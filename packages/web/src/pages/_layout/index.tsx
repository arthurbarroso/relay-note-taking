import React, { Props } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

export default function DefaultLayout({ children }: Props<object>) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
