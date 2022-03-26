import styled from 'styled-components';

export const JestCypressImages = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: calc((100% / 3) - 10px) !important;
  }
`;

export const JestCypressWrapper = styled.div`
  width: 100%;
  text-align: justify;

  img {
    width: 100%;
    margin-bottom: 20px;
  }
`;
