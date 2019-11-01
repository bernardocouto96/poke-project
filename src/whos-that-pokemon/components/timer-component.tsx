import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type TimerProps = {
  onTimerFinished: () => void;
  initialTimer: number;
};
const updateTimer = (timer: number, setTimer: React.Dispatch<React.SetStateAction<number>>) => {
  const interval = setInterval(() => {
    setTimer(timer - 1);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
};

const TimerComponent: React.FC<TimerProps> = ({ onTimerFinished, initialTimer }) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    return timer === 0 ? onTimerFinished() : updateTimer(timer, setTimer);
  }, [timer]);

  return <TimerContainer>{timer}</TimerContainer>;
};

const TimerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  padding: 10px;
  font-size: 3em;
  color: #f5f749;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  font-family: roboto;
  line-height: 1.2;
`;

export default TimerComponent;
