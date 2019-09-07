import React from 'react';
import styled from 'styled-components';
export const TimerComponent: React.FC = () => {
  return <TimerContainer>30</TimerContainer>;
};

const TimerContainer = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('http://www.sclance.com/pngs/pokeball-icon-png/pokeball_icon_png_1092594.png');
  background-size: contain;
  font-size: 5em;
  color: yellow;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  font-family: roboto;
  line-height: 1.2;
`;
