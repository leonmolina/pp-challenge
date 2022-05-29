import { SearchBar } from "../partials/SearchBar";
import {
  Container,
  ListArea,
  ListContent,
  ListTitle,
  RolesBoard,
  RolesContent,
  SearchLabel,
} from "./styles";
import { RolesFooter } from "../partials/RolesFooter";
import { RolesType } from "../../types/Roles";
import { RoleCard } from "../RoleCard";
import { RolesHeader } from "../partials/RolesHeader";

interface Rules {
  role: string;
  permissions: string[];
}

export interface Role {
  name: string;
  departament: string;
  grouprules: Rules[];
}

type Props = {
  roles: RolesType[];
};

export const Roles = ({ roles }: Props) => {
  return (
    <Container>
      {/* Barra de pesquisa dos Cargos */}
      <SearchLabel>Pesquisar por</SearchLabel>
      <SearchBar />

      <ListTitle>Listagem de cargos</ListTitle>

      <ListArea>
        {/* Conteúdo */}
        <ListContent>
          <RolesBoard>
            {/* Roles Header */}
            <RolesHeader />

            {/* Conteúdo */}
            <RolesContent>
              {roles
                ?.map((i, k) => (
                  <RoleCard roles={i} key={k} />
                ))
                .slice(0, 8)}
            </RolesContent>
          </RolesBoard>
        </ListContent>

        {/* Roles footer */}
        <RolesFooter />
      </ListArea>
    </Container>
  );
};
