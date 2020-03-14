import React from 'react';

import Layout from './_layout';

import undraw_notes from '../assets/undraw_notes.svg';

function Teste() {
  return (
    <>
      <h1>Notee</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        ultricies nec leo eu volutpat. Sed condimentum ac lectus laoreet
        sodales. Duis rutrum nisi et orci tincidunt cursus. Sed at tortor
        luctus, mattis neque a, molestie nisl. Fusce commodo mauris ante, at
        volutpat lorem accumsan eu. Nam mattis pharetra convallis. Suspendisse
        id dolor eget risus dapibus tincidunt. Proin varius consectetur elit.
        Proin pharetra orci justo, vel sollicitudin purus ultrices id. Quisque
        convallis est nisl, et suscipit lorem auctor sit amet. Praesent auctor,
        magna vel congue egestas, mauris urna vestibulum neque, et sagittis
        turpis quam et nisi. Curabitur ac ultrices nisi. Nullam posuere nibh non
        gravida fringilla. Suspendisse ut quam augue. Nullam pellentesque dolor
        odio, vel luctus felis mattis vel.
      </h2>
    </>
  );
}

export default function Landing() {
  return (
    <>
      <Layout Children={Teste} />
    </>
  );
}
