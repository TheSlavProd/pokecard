import styled from "styled-components";

export const content = styled.div`
  padding: 10px 15px;
  text-align: center;
`;

export const card = styled.div`
  position: relative;
  max-width: 300px;
  height: 470px;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;

  :hover {
    background: rgba(180, 245, 255, 0.5);
  }
`;

export const imgDiv = styled.div`
  width: 260px;
  height: 260px;
  text-align: center;
  top: -40%;
  left: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 2px 5px 10px #4caf50;
  }
`;

export const image = styled.img`
  max-width: 100%;
  border-radius: 15px;
  width: 225px;
  height: 225px;
`;

// TODO: use constants for colors
export const typeText = styled.h5`
  color: green;
`;

export const idSpan = styled.span`
  color: red;
`;
