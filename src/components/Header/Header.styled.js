import styled from 'styled-components';

export const SectionStyles = styled.section`
  background-color: var(--primary-color);
`;

export const HeaderStyles = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    & span {
      color: var(--accent-color);
      font-style: italic;
    }
  }

  svg {
    fill: var(--white-color);
    width: 24px;
    height: 24px;
  }

  p {
    color: var(--white-color);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    padding: 0;
    line-height: 0;

    & svg {
      fill: var(--accent-color);
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 1240px) {
    font-size: 36px;
    svg {
      width: 46px;
      height: 46px;
    }
  }
`;
