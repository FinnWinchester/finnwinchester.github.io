import styled from 'styled-components';

import PolygonBlue from 'src/assets/img/polygon_blue.png';
import { Card } from 'src/components/Card/Card.Styles';

export const HomeHeader = styled.div`
  width: 100%;
  height: 500px;
  background-image: ${`url(${PolygonBlue})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 5px 15px #9c9c9c;
`;

export const Skills = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 570px;
  }

  ${Card} {
    margin: 30px 0;
  }
`;
