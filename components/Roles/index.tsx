import { SearchBar } from "../SearchBar";
import {
  Container,
  FooterNavButton,
  FooterNavText,
  ListArea,
  ListContent,
  ListFooter,
  ListFooterRightSide,
  ListTitle,
  SearchLabel,
} from "./styles";
import arrowLeft from "../../public/chevron-left.svg";
import arrowRight from "../../public/chevron-right.svg";
import Image from "next/image";
import { RolesBoard } from "../RolesBoard";

interface Rules {
  role: string;
  permissions: string[];
}

export interface Role {
  name: string;
  departament: string;
  grouprules: Rules[];
}
export interface Roles {
  name: string;
  departament: string;
  agents_quantity: number;
}

export const Roles = () => {
  return (
    <Container>
      {/* Barra de pesquisa dos Cargos */}
      <SearchLabel>Pesquisar por</SearchLabel>
      <SearchBar />

      <ListTitle>Listagem de cargos</ListTitle>

      <ListArea>
        <ListContent>
          <RolesBoard />
        </ListContent>

        <ListFooter>
          <ListFooterRightSide>
            <FooterNavButton value="prev" className="left">
              <Image
                width={24}
                height={24}
                src={arrowLeft}
                alt="Ícone flecha para a esquerda, simbolizando voltar na lista."
              />
            </FooterNavButton>
            
            <FooterNavText>1 de 10</FooterNavText>

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
  )
}