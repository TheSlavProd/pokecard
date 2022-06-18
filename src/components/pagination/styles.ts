import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  width: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 25px;
`;

export const Alink = styled.button`
  color: black;
  border: none;
  padding: 8px 15px;
  text-decoration: none;
  transition: background-color 0.5s;

  :hover {
    color: white;
    background-color: green;
  }
`;
