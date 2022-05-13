import React from 'react';

import {
  FooterBar,
  FooterRow,
  FooterRowText,
  FooterRowTitle,
  FooterWrapper
} from 'src/components/Footer/Footer.Styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterRow>
        <FooterRowTitle>What am I up to</FooterRowTitle>

        <FooterRowText>Afterworks, learn, teach. Enjoy life.</FooterRowText>
      </FooterRow>

      <FooterRow>
        <FooterRowTitle>Who is this Finn Winchester?</FooterRowTitle>

        <FooterRowText>It is my nickname on the internet.</FooterRowText>
      </FooterRow>

      <FooterBar>
        <div>{new Date().getFullYear()}</div>
        <div>Designed and coded by Finn Winchester</div>
      </FooterBar>
    </FooterWrapper>
  );
}
