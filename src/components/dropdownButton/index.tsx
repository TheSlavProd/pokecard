import React from "react";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

export const DropdownBtn = () => (
  <DropdownButton
    variant="success"
    id="dropdown-basic-button"
    title="Show per page"
  >
    <Dropdown.Item>9 Pokemons</Dropdown.Item>
    <Dropdown.Item>20 Pokemons</Dropdown.Item>
    <Dropdown.Item>30 Pokemons</Dropdown.Item>
  </DropdownButton>
);
