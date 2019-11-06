import React from 'react';

import HtmlCssJSBadge from 'src/assets/img/html5-css-javascript.png';
import { TheHolyTrinityImage, TheHolyTrinityWrapper } from 'src/components/TheHolyTrinity/TheHolyTrinity.Styles';
import { Description, Title } from 'src/styles/Typography.Styles';

export default function TheHolyTrinity() {
  return (
    <TheHolyTrinityWrapper>
      <TheHolyTrinityImage>
        <img src={HtmlCssJSBadge} alt="html-css-js-badge" />
      </TheHolyTrinityImage>

      <Title>The Holy Trinity</Title>

      <Description>
        Amongst of other skills of mine, the basics of every web page. Not a single step can be taken without knowing
        this well known and renowned trinity.
      </Description>
    </TheHolyTrinityWrapper>
  );
}
