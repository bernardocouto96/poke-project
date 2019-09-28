import React from 'react';
import styled from 'styled-components';
import Timer from './components/timer-component';
import PokemonImages from './components/pokemon-image.component';
import PokemonOptionList from './components/pokemon-option-list.component';
import { GameStates } from '../types';
import Loading from './components/loading.component';
import StartButton from './components/button.component';
import Score from './components/score.component';

type GameComponentProps = {
  gameState: GameStates;
  pokemonName: string;
  pokemonImage: string;
  pokemonOptions: Array<string>;
  playerAnswer: string;
  optionIsSelected: boolean;
  nextPokemonImage: string;
  correctAnswers: number;
  wrongAnswers: number;
  initialTimer: number;
  isFetching: boolean;
  onGameStart: () => void;
  onPokemonOptionSelected: (playerAnswer: string) => void;
  onTimerFinished: () => void;
  onGameRestart: () => void;
};

export const GameComponent: React.FC<GameComponentProps> = ({
  gameState,
  onGameStart,
  onPokemonOptionSelected,
  onTimerFinished,
  onGameRestart,
  pokemonName,
  pokemonImage,
  pokemonOptions,
  playerAnswer,
  optionIsSelected,
  nextPokemonImage,
  correctAnswers,
  wrongAnswers,
  initialTimer,
  isFetching
}) => {
  if (isFetching) {
    return (
      <GameScreen>
        <Loading />
      </GameScreen>
    );
  } else {
    return (
      <GameScreen>
        {gameState === GameStates.Stopped && (
          <StartButtonWrapper>
            <StartButton className="--mainText" onClick={onGameStart}>
              start game
            </StartButton>
          </StartButtonWrapper>
        )}
        {gameState === GameStates.Running && [
          <Timer onTimerFinished={onTimerFinished} initialTimer={initialTimer} />,
          <PokemonImageAndOptionsWrapper>
            <PokemonImages pokemonImage={pokemonImage} nextPokemonImage={nextPokemonImage} />
            <PokemonOptionList
              pokemonOptions={pokemonOptions}
              onPokemonOptionSelected={onPokemonOptionSelected}
              optionIsSelected={optionIsSelected}
              correctAnswer={pokemonName}
              playerAnswer={playerAnswer}
            />
          </PokemonImageAndOptionsWrapper>
        ]}
        {gameState === GameStates.Finished && (
          <ScoreAndRestartWrapper>
            <Score correctAswers={correctAnswers} wrongAnswers={wrongAnswers}></Score>
            <StartButton className="--mainText" onClick={onGameRestart}>
              Restart
            </StartButton>
          </ScoreAndRestartWrapper>
        )}
      </GameScreen>
    );
  }
};

const GameScreen = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const PokemonImageAndOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 13px;
  border: 1px solid #f1f1f0;
`;

const StartButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  text-align: center;
`;

const ScoreAndRestartWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`;
