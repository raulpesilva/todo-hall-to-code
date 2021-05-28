import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.header`
  background-color: #0099ff;
  height: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  color: #ffffff;
  font-size: 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 20px;
  margin: 0 auto;
`;
