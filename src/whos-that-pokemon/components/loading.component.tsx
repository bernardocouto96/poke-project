import React from 'react';
import styled, { keyframes } from 'styled-components';
const LoadingComponent: React.FC = () => {
  return (
    <Loading>
      <Pokeball />
      <LoadingText className="--mainText">Loading...</LoadingText>
    </Loading>
  );
};

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 70px);
`;

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
   100% {
    transform: rotate(360deg);
  }
`;

const Pokeball = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  background-color: white;
  border: 5px solid black;
  animation: ${spin} 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;

  &:before,
  &:after {
    content: '';
    display: block;
    border-radius: 50%;
  }

  &::before {
    border-radius: 50px 50px 0 0;
    width: 90px;
    height: 42px;
    border-bottom: 6px solid black;
    background-color: red;
  }

  &::after {
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0px 0px 0px 2px black, 0px 0px 0px 4px #ddd, 0px 0px 0px 6px black;
  }
`;
const LoadingText = styled.p``;

export default LoadingComponent;
