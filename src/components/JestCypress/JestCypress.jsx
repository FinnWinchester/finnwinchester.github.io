/* eslint-disable react/no-unescaped-entities */

import React from 'react';

import JestImage from 'src/assets/img/jest.png';
import CypressImage from 'src/assets/img/cypress.png';
import { JestCypressImages, JestCypressWrapper } from 'src/components/JestCypress/JestCypress.Styles';
import { Description, P, Title } from 'src/styles/Typography.Styles';

export default function JestCypress() {
  return (
    <JestCypressWrapper>
      <JestCypressImages>
        <img alt="jest" src={JestImage} />
        <img alt="cypress" src={CypressImage} />
      </JestCypressImages>

      <Title>Unit, Integration, End-to-end test</Title>

      <Description>
        <P>
          It was not until not so long time ago, back in early 2019, when I really started digging into the so called
          "testing".
        </P>
        <P>
          To me it was a post-apocalyptic and lawless land because it seemed to my inexpert eyes that not every one
          agreed on how to properly test an app, but slowly I managed to at least understand the basics of how an app
          has to be tested so I could start implementing the test cases that would cover most of my lines.
        </P>
        <P>
          Also started working with cypress, and end-to-end tool that would help me cover UI and interactions as a
          normal human being would do, making sure that the buttons and inputs and all sort of UI elements were in place
          and reading/writing the data as the app is expected to do.
        </P>
      </Description>
    </JestCypressWrapper>
  );
}
