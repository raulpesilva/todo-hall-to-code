import styled from 'styled-components';

export const Button = styled.button`
  height: ${({ size }) => (size === 'small' ? 26 : 40)}px;
  padding: 0 2em;
  color: #fff;
  background-color: #0099ff;
  border: none;
  border-radius: 30px;
  transition-duration: 300ms;
  &:hover {
    background-color: #0077ff;
    cursor: pointer;
  }
`;
