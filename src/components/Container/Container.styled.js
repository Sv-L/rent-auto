import styled from 'styled-components';

export const ContainerStyles = styled.div`
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (max-width: 319px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1240px) {
    width: 768px;
  }

  @media screen and (min-width: 1240px) {
    width: 1240px;
  }
`;
