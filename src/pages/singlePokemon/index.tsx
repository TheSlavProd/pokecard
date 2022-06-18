import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { textToUP } from "../../utils";
import { StatDiagram } from "../../components/diagram";
import { PokemonInfo } from "../../components/pokemonInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetCurrentPokemon } from "../../redux/actions/currentPokAction";
import * as S from "./styles";

export const SinglePokemon = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: use selector functions
  const currentPokemon = useTypedSelector(
    (state) => state.pokemon.currentPokemon
  );

  // TODO: use thunks
  const getCurrentPokemon = async () => {
    // TODO: use constants for such urls
    const data = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    ).json();

    dispach(GetCurrentPokemon(data));
  };

  useEffect(() => {
    getCurrentPokemon();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container className="justify-content-center mb-3">
      {currentPokemon && (
        <Row style={{ marginTop: "50px" }}>
          <S.BackRef onClick={goBack}>← Explore more PokeCARDS</S.BackRef>
          <S.PokName>
            {`${textToUP(currentPokemon.name)} #0${currentPokemon.id}`}
          </S.PokName>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <S.IMG
              src={currentPokemon.sprites.other.dream_world.front_default}
            ></S.IMG>
          </Col>

          <Col>
            <PokemonInfo
              weight={currentPokemon.weight}
              height={currentPokemon.height}
              type={currentPokemon.types[0].type.name}
              type_other={currentPokemon.types[1]?.type.name}
              ability={currentPokemon.abilities[0].ability.name}
            />
            <S.Stats>Stats</S.Stats>
            {/* TODO: move this logic into the component. pass the stats only */}
            <StatDiagram
              statHP={currentPokemon.stats[0].stat.name}
              statHP_V={currentPokemon.stats[0].base_stat}
              statAttack={currentPokemon.stats[1].stat.name}
              statAttack_V={currentPokemon.stats[1].base_stat}
              statDefense={currentPokemon.stats[2].stat.name}
              statDefense_V={currentPokemon.stats[2].base_stat}
              statSpecAttack={currentPokemon.stats[3].stat.name}
              statSpecAttack_V={currentPokemon.stats[3].base_stat}
              statSpecDef={currentPokemon.stats[4].stat.name}
              statSpecDef_V={currentPokemon.stats[4].base_stat}
              statSpeed={currentPokemon.stats[5].stat.name}
              statSpeed_V={currentPokemon.stats[5].base_stat}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};
