import styled from 'styled-components';

export const ListStyles = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  li {
    position: relative;
    width: 274px;
    height: 426px;
    overflow: hidden;

    & img {
      border-radius: 14px;
      width: 274px;
      height: 268px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 767px) {
    li {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1240px) {
  }
`;

export const ButtonFavoriteStyles = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;

  & svg {
    stroke-width: 1.5px;
    stroke: var(--second-light-color);
    width: 18px;
    height: 18px;
    fill: var(--accent-color);
  }
`;

export const TitelWrapStyles = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  height: 24px;
  overflow: auto;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1, 50;

    & span {
      color: var(--accent-color);
    }
  }
`;
export const DescriptionWrapStyles = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-height: 40px;
  overflow: auto;

  p {
    position: relative;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--second-color);
    margin-right: 12px;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 0;
      right: -6px;
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;
export const ButtonLearnMoreStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  border-radius: 12px;
  width: 274px;
  height: 44px;
  background-color: var(--accent-color);
  color: var(--white-color);
`;
