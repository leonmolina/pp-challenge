import { SearchBar } from "../SearchBar";
import {
  CollaboratorsBoard,
  Container,
  ListArea,
  ListContent,
  ListContentArea,
  ListTitle,
  SearchLabel,
} from "./styles";
import { AgentsFooter } from "../AgentsFooter";
import { AgentsHeader } from "../AgentsHeader";
import { Agents } from "../../types/Agents";
import { CollaboratorCard } from "../CollaboratorCard";

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
                <div key={k}>
                  <CollaboratorCard agents={i} />
                </div>
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
