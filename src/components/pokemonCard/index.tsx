import React, { useEffect, useState, useCallback, useRef, memo } from "react";
import { Link } from "react-router-dom";

import { textToUP } from "../../utils";
import * as S from "./styles";

type PokemonCardProps = {
  url: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ url }) => {
  // TODO: do not use any type
  const [pokemonCard, setPokemonCard] = useState<any | null>(null);

  const getPokemonCard = useCallback(async () => {
    /// TODO: use functions for requests
    const data = await (await fetch(url)).json();
    setPokemonCard(data);
  }, [url]);

  useEffect(() => {
    getPokemonCard();
  }, [getPokemonCard]);

  return (
    pokemonCard && (
      <S.card>
        <S.imgDiv>
          {/* TODO: use Routes constant */}
          <Link to={`/pokemon/${pokemonCard.id}`}>
            <S.image
              src={pokemonCard.sprites.other.dream_world.front_default}
            />
          </Link>
        </S.imgDiv>
        <S.content>
          <h3>{textToUP(pokemonCard.name)}</h3>
          <S.typeText>{pokemonCard.types[0].type.name}</S.typeText>
          {/* TODO: check if adding 0 in front doesn't cause issues (like #0800) */}
          <S.idSpan>#0{pokemonCard.id}</S.idSpan>
          <p>
            DIn publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate
          </p>
        </S.content>
      </S.card>
    )
  );
};

export default memo(PokemonCard);
