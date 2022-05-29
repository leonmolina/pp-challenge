import { SearchBar } from "../partials/SearchBar";
import {
  CollaboratorsBoard,
  Container,
  ListArea,
  ListContent,
  ListContentArea,
  ListTitle,
} from "./styles";
import { AgentsFooter } from "../partials/AgentsFooter";
import { AgentsHeader } from "../partials/AgentsHeader";
import { AgentsType } from "../../types/Agents";
import { AgentCard } from "../AgentCard";

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

        {/* Footer */}
        <AgentsFooter />
      </ListArea>
    </Container>
  );
};
