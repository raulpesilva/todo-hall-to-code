import styled from 'styled-components';

export const Checkbox = styled.div`
  width: 5px;
  height: 5px;
  border: 2px solid #9197bb;
  border-radius: 5px;
  background-color: ${({ checked }) => (checked ? '#D0A3FE' : 'transparent')};
`;
