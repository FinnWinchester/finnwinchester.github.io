import styled from 'styled-components';

export const ReactReduxImages = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: calc(100% / 3) !important;
  }
`;

export const ReactReduxWrapper = styled.div`
  width: 100%;

  img {
    width: inherit;
    margin-bottom: 20px;
  }
`;
