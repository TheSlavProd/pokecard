import React from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

export const PokemonTypeBtn: React.FC = () => {
  return (
    <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title="All types"
    >
      <Dropdown.Item>pok 1</Dropdown.Item>
      <Dropdown.Item>pok 2</Dropdown.Item>
      <Dropdown.Item>pok 3</Dropdown.Item>
    </DropdownButton>
  );
};
