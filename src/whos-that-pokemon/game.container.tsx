import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
// import { GameComponent as Game } from './game.component';
import { Pokemon } from '../types';
import { getNextPokemonNumbers, getPokeApiRequestUrl } from './game.service';

const GameContainer: React.FC = () => {
  const [selectedPokemonNumber, setSelectedPokemonNumber] = useState({ current: 0, next: 0 });

  const [pastSelectedPokemonNumbers, setPastSelectedPokemonNumbers] = useState<number[]>([]);

  const [pokemonNumberOptions, setPokemonNumberOptions] = useState<{ current: number[]; next: number[] }>({ current: [], next: [] });

  const [pokemonNumberToRequest, setPokemonNumberToRequest] = useState(0);

  const [pokemonOptions, setPokemonOptions] = useState<{ current: Pokemon[]; next: Pokemon[] }>({ current: [], next: [] });

  useEffect(() => {
    const initialPokemonNumbers = getNextPokemonNumbers(pastSelectedPokemonNumbers, (n: number) => setSelectedPokemonNumber({ current: n, next: 0 }));
    setPokemonNumberOptions({ current: initialPokemonNumbers, next: [] });
  }, []);

  useEffect(() => {
    const updateNumbersToRequest = async (pokemonNumberOptions: number[]) => {
      for (const index in pokemonNumberOptions) {
        const pokemonNumber = pokemonNumberOptions[index];
        await setPokemonNumberToRequest(pokemonNumber);
      }
    };

    if (pokemonNumberOptions.next.length) {
      updateNumbersToRequest(pokemonNumberOptions.next);
    } else if (pokemonNumberOptions.current.length) {
      updateNumbersToRequest(pokemonNumberOptions.current);
    }
  }, [pokemonNumberOptions]);

  const onSuccess = (res: Pokemon) =>
    pokemonOptions.current ? setPokemonOptions({ ...pokemonOptions, next: [res] }) : setPokemonOptions({ ...pokemonOptions, current: [res] });

  useSWR<Pokemon>(getPokeApiRequestUrl(pokemonNumberToRequest), { onSuccess, revalidateOnFocus: false });

  const onPokemonSelection = () => {
    setPastSelectedPokemonNumbers([...pastSelectedPokemonNumbers, selectedPokemonNumber.current]);

    const nextPokemonNumbers = getNextPokemonNumbers(pastSelectedPokemonNumbers, (n: number) =>
      setSelectedPokemonNumber({ current: selectedPokemonNumber.next, next: n }),
    );

    setPokemonNumberOptions({ current: pokemonNumberOptions.next, next: nextPokemonNumbers });
  };

  return <button onClick={onPokemonSelection}>tega</button>;

  // return <Game {...data}></Game>;
};

export default GameContainer;
