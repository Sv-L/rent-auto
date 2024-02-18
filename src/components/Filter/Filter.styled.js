import styled from 'styled-components';

export const FilterStyles = styled.select`
  margin: 30px auto 0;
  border: none;
  border-radius: 14px;
  padding: 14px;
  width: 224px;
  height: 48px;
  background-color: var(--grey-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  cursor: pointer;

  option {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: var(--select-color);
  }
`;
