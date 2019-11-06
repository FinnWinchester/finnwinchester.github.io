import styled from 'styled-components';

export const Description = styled.div`
  font-size: 18px;
  color: #3e3d40;
`;

export const Title = styled.div`
  font-size: 25px;
  color: #3e3d40;

  + ${Description} {
    margin-top: 10px;
  }
`;

export const P = styled.p`
  margin-bottom: 15px;
`;
