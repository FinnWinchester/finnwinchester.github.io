import React from 'react';

import ReactImage from 'src/assets/img/react.png';
import ReduxImage from 'src/assets/img/redux.png';
import ReduxSagaImage from 'src/assets/img/redux-saga.png';
import { ReactReduxImages, ReactReduxWrapper } from 'src/components/ReactRedux/ReactRedux.Styles';
import { Description, P, Title } from 'src/styles/Typography.Styles';

export default function ReactRedux() {
  return (
    <ReactReduxWrapper>
      <ReactReduxImages>
        <img alt="react" src={ReactImage} />
        <img alt="redux" src={ReduxImage} />
        <img alt="redux-saga" src={ReduxSagaImage} />
      </ReactReduxImages>

      <Title>React Ecosystem</Title>

      <Description>
        <P>
          Discovered back in April 2016, this library took my heart from the beginning due to its flexibility and how
          easy to learn was it.
        </P>
        <P>
          It is, by itself, a very decent tool to develop sites and pages of all sizes, from small static pages like
          this one to large sites like a back-office.
        </P>
        <P>
          Reading every day multiple posts on the internet and articles on medium, this technology became easier and
          easier the more I read, and still looking forward to master it and all the ecosystem around it.
        </P>
      </Description>
    </ReactReduxWrapper>
  );
}
