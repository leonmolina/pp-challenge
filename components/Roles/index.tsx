import { SearchBar } from "../partials/SearchBar";
import {
  Container,
  ListArea,
  ListContent,
  ListTitle,
  RolesBoard,
  RolesContent,
} from "./styles";
import { RolesFooter } from "../partials/RolesFooter";
import { RolesType } from "../../types/Roles";
import { RoleCard } from "../RoleCard";
import { RolesHeader } from "../partials/RolesHeader";

type Props = {
  roles: RolesType[];
};

export const Roles = ({ roles }: Props) => {
  return (
    <Container>
      {/* Barra de pesquisa dos Cargos */}
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
              {roles?.map((i, k) => <RoleCard roles={i} index={(k + 1)} key={k} />).slice(0, 8)}
            </RolesContent>
          </RolesBoard>
        </ListContent>

        {/* Roles footer */}
        <RolesFooter />
      </ListArea>
    </Container>
  );
};
