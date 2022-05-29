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
import { Agents } from "../../types/Agents";
import { CollaboratorCard } from "../CollaboratorCard";
import Link from "next/link";

type Props = {
  agents: Agents[]
}

export const Collaborators = ({agents}: Props) => {
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
              {agents?.map((i, k) => (
                  <Link key={k} href={`/agente/${i.agent_id}`}>
                    <CardLink>
                      <CollaboratorCard agents={i} />
                    </CardLink>
                  </Link>
              )).slice(0, 6)}
            </ListContent>
          </CollaboratorsBoard>
          
        </ListContentArea>

        {/* Footer */}
        <AgentsFooter />
      </ListArea>
    </Container>
  );
};
