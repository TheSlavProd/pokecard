import React from "react";
import * as S from "./styles";

export const PokemonInfo = ({
  weight,
  height,
  type,
  type_other,
  ability,
}: any) => {
  return (
    <S.PokContent>
      <S.PokInfo>
        When hunting, it skims the surface of water at high speed to pick off
        unwary prey such as MAGIKARP.
      </S.PokInfo>
      <S.PokInfoGrid>
        <S.PokInfoItems>
          <S.PokInfoP>Height</S.PokInfoP>
          <S.PokInfoPValue>{height}m (4'11")</S.PokInfoPValue>
        </S.PokInfoItems>
        <S.PokInfoItems>
          <S.PokInfoP>Weight</S.PokInfoP>
          <S.PokInfoPValue>{weight}kg (87.1lbs)</S.PokInfoPValue>
        </S.PokInfoItems>
        <S.PokInfoItems>
          <S.PokInfoP>Category</S.PokInfoP>
          <S.PokInfoPValue>Bird</S.PokInfoPValue>
        </S.PokInfoItems>
      </S.PokInfoGrid>
      <S.PokInfoGrid>
        <S.PokInfoItems>
          <S.PokInfoP>Types</S.PokInfoP>
          <S.PokInfoPValue>
            {type}
            <br />
            {type_other}
          </S.PokInfoPValue>
        </S.PokInfoItems>
        <S.PokInfoItems>
          <S.PokInfoP>Abilities</S.PokInfoP>
          <S.PokInfoPValue>{ability}</S.PokInfoPValue>
        </S.PokInfoItems>
        <S.PokInfoItems>
          <S.PokInfoP>Genders</S.PokInfoP>
          <S.PokInfoPValue>Bird</S.PokInfoPValue>
        </S.PokInfoItems>
      </S.PokInfoGrid>
    </S.PokContent>
  );
};
