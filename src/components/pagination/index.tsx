import React, { useState } from "react";
import { EConfig } from "../../types/globals";
import * as S from "./styles";

export const PaginationBottom = ({
  pokPerPage,
  totalPokemons,
  currentPage,
  setCurrentPage,
  nextPageUrl,
  prevPageUrl,
  setCurrentPageUrl,
}: // TODO: add prop types and avoid using any
any) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5); // TODO: don't use unnecessary states
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  // TODO: try to isolate a util function for getting pageNumbers
  const pageNumbers = [];

  // TODO: do not use for loops inside components
  for (let i = 1; i <= Math.ceil(totalPokemons / pokPerPage); i++) {
    pageNumbers.push(i);
  }

  const setPageUrl = (offsetParam: Number) => {
    // TODO: store such urls in constants
    setCurrentPageUrl(
      `https://pokeapi.co/api/v2/pokemon?limit=${EConfig.limit}&offset=${offsetParam}`
    );
  };

  // TODO: never use any type!
  const nextPage = (number: any) => {
    setCurrentPage(number);
    const offsetParam = (number - 1) * EConfig.offset;
    setPageUrl(offsetParam);
  };

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // TODO: these two functions are almost identical, try to combine them in one
  const jumpNextPage = () => {
    // TODO: store these numbers in constants with good names
    const newPage = currentPage + 5;
    const offset = (newPage - 1) * 9;
    setCurrentPage(currentPage + 5);
    setPageUrl(offset);
    setMaxPageNumberLimit(maxPageNumberLimit + 5);
    setMinPageNumberLimit(minPageNumberLimit + 5);
  };

  const jumpPrevPage = () => {
    const newPage = currentPage - 5;
    const offset = (newPage - 1) * 9;
    setCurrentPage(currentPage - 5);
    setPageUrl(offset);
    setMaxPageNumberLimit(maxPageNumberLimit - 5);
    setMinPageNumberLimit(minPageNumberLimit - 5);
  };

  return (
    <S.Pagination>
      <S.Alink onClick={gotoPrevPage} disabled={currentPage === 1}>
        Prev.
      </S.Alink>
      {currentPage >= 6 && (
        <S.Alink onClick={jumpPrevPage}>&laquo;&hellip;</S.Alink>
      )}
      {pageNumbers.map((number) =>
        number < maxPageNumberLimit + 1 && number > minPageNumberLimit - 1 ? (
          <S.Alink
            key={number}
            // TODO: use styled components
            style={
              currentPage === number
                ? { backgroundColor: "green", color: "white" }
                : {}
            }
            onClick={() => {
              nextPage(number);
            }}
          >
            {number}
          </S.Alink>
        ) : null
      )}
      {currentPage >= 1 && (
        <S.Alink onClick={jumpNextPage}>&hellip;&raquo;</S.Alink>
      )}
      <S.Alink onClick={gotoNextPage}>Next.</S.Alink>
    </S.Pagination>
  );
};
