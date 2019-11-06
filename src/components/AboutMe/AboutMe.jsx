/* eslint-disable react/no-unescaped-entities */

import React from 'react';

import { Description, P, Title } from 'src/styles/Typography.Styles';
import { AboutMeWrapper } from 'src/components/AboutMe/AboutMe.Styles';

export default function AboutMe() {
  return (
    <AboutMeWrapper>
      <Title>About me</Title>

      <Description>
        <P>
          Welcome to my portfolio, this is Rubén. I was born in the mid 90s this frontend engineer took my first steps
          as a web developer back in 2010 and became a former developer 2 years later.
        </P>

        <P>
          Eager to learn new technologies and architectures nothing stopped me from learning <strong>symfony</strong> to
          work as a full-stack developer for 4 years in a row, learning and using <strong>AngularJS</strong> in my day
          by day tasks, a technology I would then be focused on during future projects.
        </P>

        <P>
          Back in April 2016 when the v0.15 of React was the only thing we had, I started practicing what would become
          my favorite technology of all times no longer than 3 months later.
        </P>

        <P>
          Completing one step at a time, after React came Redux, then Redux-Thunk/Redux-Saga, then Styled Components,
          then Jest, Cypress, and an infinite list of technologies within React and Frontend Engineer's ecosystem.
        </P>

        <P>
          By having worked in product-companies and very close to engineers, product owners, data scientists/engineers
          and designers, I am ready and eager to take part of decision-maker conversations helping any team to move
          forward.
        </P>
      </Description>
    </AboutMeWrapper>
  );
}
