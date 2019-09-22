import React from 'react';
import styled from 'styled-components';

type ScoreProps = {
  correctAswers: number;
  wrongAnswers: number;
};

const ScoreComponent: React.FC<ScoreProps> = ({ correctAswers, wrongAnswers }) => {
  const score = correctAswers - wrongAnswers;

  return (
    <Score>
      <ScoreTitle className="--mainText">Your Score</ScoreTitle>
      <ScoreAmount className="--mainText">{score < 0 ? 0 : score}</ScoreAmount>
    </Score>
  );
};

const Score = styled.div``;
const ScoreTitle = styled.h2``;
const ScoreAmount = styled.p``;

export default ScoreComponent;
