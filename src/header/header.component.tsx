import React from 'react';
import styled from 'styled-components';

import logoImage from '../assets/images/logo.png';

export const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <Logo src={logoImage}></Logo>
    </Header>
  );
};

const Header = styled.div`
  background-color: #dd403a;
  padding: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;
