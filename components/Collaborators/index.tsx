import { useState } from "react";
import { CollaboratorsBoard } from "../CollaboratorsBoard";
import { SearchBar } from "../SearchBar";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  FooterNavButton,
  FooterSelect,
  FooterText,
  ListArea,
  ListContent,
  ListFooter,
  ListFooterLeftSide,
  ListFooterRightSide,
  ListTitle,
  SearchLabel,
} from "./styles";
import arrowLeft from "../../public/chevron-left.svg";
import arrowRight from "../../public/chevron-right.svg";
import Image from "next/image";

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
            <FooterText>Mostrando 10 de 50 registros</FooterText>
            {/* Select do footer */}
            <div className="dropdown">
              <FooterSelect
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                10
              </FooterSelect>
              <DropdownMenu
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    20
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </div>
          </ListFooterLeftSide>
          <ListFooterRightSide>

            <FooterNavButton value="prev" className="left">
              <Image
                width={24}
                height={24}
                src={arrowLeft}
                alt="Ícone flecha para a esquerda, simbolizando voltar na lista."
              />
            </FooterNavButton>
            
            <span>1 de 10</span>

            <FooterNavButton value="next" className="right">
            <Image
                width={24}
                height={24}
                src={arrowRight}
                alt="Ícone flecha para a direita, simbolizando continuar na lista."
              />
            </FooterNavButton>

          </ListFooterRightSide>

        </ListFooter>
      </ListArea>
    </Container>
  );
};
