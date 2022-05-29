import { SearchBar } from "../partials/SearchBar";
import {
  CardLink,
  CollaboratorsBoard,
  Container,
  ListArea,
  ListContent,
  ListContentArea,
  ListTitle,
  SearchLabel,
} from "./styles";
import { AgentsFooter } from "../partials/AgentsFooter";
import { AgentsHeader } from "../partials/AgentsHeader";
import { AgentsType } from "../../types/Agents";
import { AgentCard } from "../AgentCard";
import Link from "next/link";

type Props = {
  agents: AgentsType[];
};

export const Agents = ({ agents }: Props) => {
  return (
    <Container>
      {/* Barra de pesquisa dos Colaboradores */}
      <SearchLabel>Pesquisar por</SearchLabel>
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

        {/* Footer */}
        <AgentsFooter />
      </ListArea>
    </Container>
  );
};
