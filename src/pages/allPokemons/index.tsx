import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { getPokemons } from "../../api/getPokemons";
import { DropdownBtn } from "../../components/dropdownButton";
import { HeaderTitle } from "../../components/header";
import { PaginationBottom } from "../../components/pagination";
import PokemonCard from "../../components/pokemonCard";
import { PokemonTypeBtn } from "../../components/pokemonTypes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetPokemonList } from "../../redux/actions/pokemonListAction";

const pokPerPage = 10;

const AllPokemons = () => {
  const dispach = useDispatch();
  // TODO: create and use selectors in redux folder
  const allPokemons = useTypedSelector((state) => state.pokemon.allPokemons);
  // TODO: keep limit and offset in redux. you will dispatch setPage, and all the calculations will be done in redux
  // TODO: do all the fetching in redux with thunks
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon" // TODO: store this url in constants
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, sePrevPageUrl] = useState(""); // TODO: this data should be available in redux store
  const [currentPage, setCurrentPage] = useState(1);
  const [countPok, setCount] = useState(null);

  const callback = useCallback(() => {}, []);
  const memo = useMemo(() => {
    return { name: "ssss" };
  }, []);
  console.log(callback);
  console.log(memo);
  const pokemons = async () => {
    const pokemonsList = await getPokemons(currentPageUrl, pokPerPage, 0);
    setCount(pokemonsList.count);
    setNextPageUrl(pokemonsList.next);
    sePrevPageUrl(pokemonsList.previous);
    dispach(GetPokemonList(pokemonsList.results));
  };
  useEffect(() => {
    pokemons();
    // TODO: review the dependencies. if it is supposed to miss some dependencies, leave a comment
  }, [currentPageUrl]);

  return (
    <div className="App">
      <Container className="align-items-middle">
        <Row>
          <Col>
            <HeaderTitle />
          </Col>
        </Row>
        {/* TODO: use className instead of inline styles */ ""}
        <Row
          style={{
            padding: "10px 0px",
            marginTop: "25px",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Col>
            <DropdownBtn />
          </Col>
          <Col>
            <PokemonTypeBtn />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* TODO: never use any type! */}
          {allPokemons.map((pokemon: any) => (
            <Col md="auto" key={pokemon.name}>
              <PokemonCard url={pokemon.url} />
            </Col>
          ))}
        </Row>
        <Row
          style={{ marginTop: "35px" }}
          className="justify-content-md-center"
        >
          <Col md="auto">
            <PaginationBottom
              pokPerPage={pokPerPage}
              totalPokemons={countPok}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setCurrentPageUrl={setCurrentPageUrl}
              nextPageUrl={nextPageUrl}
              prevPageUrl={prevPageUrl}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllPokemons;
