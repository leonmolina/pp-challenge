import { SearchBar } from "../partials/SearchBar";
import {
  CollaboratorsBoard,
  Container,
  FooterMobile,
  FooterMobileText,
  FooterWeb,
  ListArea,
  ListContent,
  ListContentArea,
  ListTitle,
} from "./styles";
import { AgentsFooter } from "../partials/AgentsFooter";
import { AgentsHeader } from "../partials/AgentsHeader";
import { AgentsType } from "../../types/Agents";
import { AgentCard } from "../AgentCard";
import { OptionsDropdown } from "../partials/OptionsDropdown";
import loadIcon from '../../public/refresh-ccw.svg'
import Image from "next/image";

type Props = {
  agents: AgentsType[];
};

export const Agents = ({ agents }: Props) => {
  return (
    <Container>
      {/* Barra de pesquisa dos Colaboradores */}
      <SearchBar />

      <ListTitle>Listagem de colaboradores</ListTitle>

      <ListArea>
        {/* Conteúdo */}
        <ListContentArea>
          <CollaboratorsBoard>
            <AgentsHeader />

            <ListContent>
              {agents
                ?.map((i, k) => (
                  <AgentCard agents={i} key={k} />
                ))
                .slice(0, 6)}
            </ListContent>
          </CollaboratorsBoard>
        </ListContentArea>

        {/* Footer WEB */}
        <FooterWeb>
          <AgentsFooter />
        </FooterWeb>

        {/* Footer Mobile */}
        <FooterMobile>
          <OptionsDropdown>
            <>
                <Image src={loadIcon} width={24} height={24}alt="Ícone de 2 setas apontando em circulo, indicando a opção de carregar mais colaboradores." />
                <FooterMobileText>Carregar mais</FooterMobileText>
            </>
          </OptionsDropdown>
        </FooterMobile>
      </ListArea>
    </Container>
  );
};
