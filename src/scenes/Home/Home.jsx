import React from 'react';

import Atv from 'src/components/Atv/components/Atv';
import react from 'src/assets/img/react.png';
import { HomeHeader, Skills } from 'src/scenes/Home/Home.Styles';
import Footer from 'src/components/Footer';
import TheHolyTrinity from 'src/components/TheHolyTrinity';
import ReactRedux from 'src/components/ReactRedux';
import JestCypress from 'src/components/JestCypress';
import { Card } from 'src/components/Card/Card.Styles';
import AboutMe from 'src/components/AboutMe';

export default function Home() {
  return (
    <>
      <HomeHeader>
        <Atv
          layers={[react]}
          staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
          style={{ width: 250, height: 250 }}
        />
      </HomeHeader>

      <Skills>
        <Card>
          <AboutMe />
        </Card>

        <Card>
          <TheHolyTrinity />
        </Card>

        <Card>
          <ReactRedux />
        </Card>

        <Card>
          <JestCypress />
        </Card>
      </Skills>

      <Footer />
    </>
  );
}
