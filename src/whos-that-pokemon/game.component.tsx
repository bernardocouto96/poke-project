import React from 'react';
// import styled from 'styled-components';
// import Timer from './components/timer-component';
// import PokemonImages from './components/pokemon-image.component';
// import PokemonOptionList from './components/pokemon-option-list.component';
// import { GameStates } from '../types';
// import Loading from './components/loading.component';
// import StartButton from './components/button.component';
// import Score from './components/score.component';
// import runningPikachuGif from '../assets/images/running-pikachu.gif';

// type GameComponentProps = {

// };

// export const GameComponent: React.FC<GameComponentProps> = ({

// }) => {
//   return (
//     <GameScreen>
//       {isFetching ? (
//         <Loading />
//       ) : (
//         [
//           gameState === GameStates.Stopped && (
//             <StartButtonWrapper>
//               <StartButton className="--mainText" onClick={onGameStart}>
//                 start game
//               </StartButton>
//             </StartButtonWrapper>
//           ),
//           gameState === GameStates.Running && (
//             <PokemonGame>
//               <Timer onTimerFinished={onTimerFinished} initialTimer={initialTimer} />
//               <PokemonImages pokemonImage={pokemonImage} nextPokemonImage={nextPokemonImage} />
//               <PokemonOptionList
//                 pokemonOptions={pokemonOptions}
//                 onPokemonOptionSelected={onPokemonOptionSelected}
//                 optionIsSelected={optionIsSelected}
//                 correctAnswer={pokemonName}
//                 playerAnswer={playerAnswer}
//               />
//             </PokemonGame>
//           ),
//           gameState === GameStates.Finished && (
//             <ScoreAndRestartWrapper>
//               <Score correctAswers={correctAnswers} wrongAnswers={wrongAnswers} />
//               <StartButton className="--mainText" onClick={onGameRestart}>
//                 Restart
//               </StartButton>
//             </ScoreAndRestartWrapper>
//           )
//         ]
//       )}

//       {/* <RunningPikachu className="runningPikachu" src={runningPikachuGif} /> */}
//     </GameScreen>
//   );
// };

// const GameScreen = styled.div`
//   position: relative;
//   width: 100%;
//   height: 85%;
//   padding: 10px;
//   background-color: rgba(0, 0, 0, 0.6);
// `;

// const PokemonGame = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   z-index: 1;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   padding: 10px;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 13px;
//   box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.75);
// `;

// const StartButtonWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 200px;
//   text-align: center;
// `;

// const ScoreAndRestartWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-direction: column;
//   height: 200px;
//   justify-content: space-between;
// `;

// const RunningPikachu = styled.img`
//   position: absolute;
//   top: 80%;
//   width: 100px;
//   filter: brightness(60%);
// `;
