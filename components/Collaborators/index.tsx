import { useState } from "react";
import { CollaboratorsBoard } from "../CollaboratorsBoard";
import { SearchBar } from "../SearchBar";
import {
  Container,
  ListArea,
  ListContent,
  ListFooter,
  ListFooterLeftSide,
  ListFooterRightSide,
  ListTitle,
  SearchLabel,
} from "./styles";

interface Phone {
  ddd: number;
  ddi: number;
  number: number;
}

interface Document {
  type: string;
  number: number;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: Phone;
  document: Document;
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}
export interface Agents {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export const Collaborators = () => {

  return (
    <Container>
      {/* Barra de pesquisa dos Colaboradores */}
      <SearchLabel>Pesquisar por</SearchLabel>
      <SearchBar />

      <ListTitle>Listagem de colaboradores</ListTitle>
      
      <ListArea>

        <ListContent>
          <CollaboratorsBoard />
        </ListContent>

        <ListFooter>
          <ListFooterLeftSide>
            <span>Mostrando 10 de 50 registros</span>
            <select name="select" id="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </ListFooterLeftSide>
          <ListFooterRightSide>
            <button value="prev">{"<"}</button>
            <span>1 de 10</span>
            <button value="next">{">"}</button>
          </ListFooterRightSide>
        </ListFooter>
      </ListArea>
    </Container>
  );
};
