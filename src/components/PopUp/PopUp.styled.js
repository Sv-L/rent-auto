import styled from 'styled-components';

export const PopUpStyles = styled.div`
  padding: 20px;
  border-radius: 24px;
  width: 541px;
  height: 752px;

  img {
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
  }

  a {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    width: 168px;
    height: 44px;
    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--white-color);
    transition: var(--transition);

    &:hover {
      background-color: var(--hover-color);
    }
  }
`;

export const PopUpTitleStyles = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  span {
    color: var(--accent-color);
  }
`;

export const AccessoriesStyles = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-height: 40px;
  overflow: auto;

  li {
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

export const DescrStyles = styled.ul`
  margin-top: 12px;
`;

export const RentalStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;

  span {
    color: var(--accent-color);
  }
`;
