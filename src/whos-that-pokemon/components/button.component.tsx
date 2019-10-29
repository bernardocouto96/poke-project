import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children?: string;
  [key: string]: any;
};

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: 2px solid #f5f749;
  border-radius: 15px;
  background-color: #26547c;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    &:hover {
      background-color: #397194;
    }
  }
`;

export default ButtonComponent;
