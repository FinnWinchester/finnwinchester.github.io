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
        <FooterRowTitle>Contact</FooterRowTitle>

        <FooterRowText>
          If you want to contact me you can do it throught my e-mail address{' '}
          <a href="mailto:rubensillero90@gmail.com" target="_blank" rel="noopener noreferrer" className="black-link">
            rubensillero90@gmail.com
          </a>
          .
        </FooterRowText>
      </FooterRow>

      <FooterRow>
        <FooterRowTitle>What am I up to</FooterRowTitle>

        <FooterRowText>Afterworks, learn, teach. Enjoy life.</FooterRowText>
      </FooterRow>

      <FooterRow>
        <FooterRowTitle>Who is this Finn Winchester?</FooterRowTitle>

        <FooterRowText>It is my nickname on the internet.</FooterRowText>
      </FooterRow>

      <FooterBar>
        <div>2019</div>
        <div>Designed and coded by Finn Winchester</div>
      </FooterBar>
    </FooterWrapper>
  );
}
