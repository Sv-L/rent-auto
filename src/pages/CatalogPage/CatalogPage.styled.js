import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--accent-color);
  border: none;

  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 30px auto 0;
  }
`;
