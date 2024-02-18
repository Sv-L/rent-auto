import styled from 'styled-components';

export const HomePageStyles = styled.div`
  h2,
  p {
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: center;
  }

  li {
    border: 1px solid var(--accent-color);
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;

    & p {
      text-align: justify;
      font-size: 14px;
    }

    & svg {
      color: var(--accent-color);
      width: 24px;
      height: 24px;
    }
  }

  span {
    font-weight: bold;
  }

  a {
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    width: 174px;
    height: 44px;
    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--white-color);
    transition: var(--transition);

    &:hover {
      background-color: var(--hover-color);
    }
  }

  @media screen and (max-width: 319px) {
  }

  @media screen and (max-width: 767px) {
    li {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    li {
      width: 300px;
    }
  }

  @media screen and (min-width: 1240px) {
  }
`;
