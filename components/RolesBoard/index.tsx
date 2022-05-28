import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { RoleCard } from "../RoleCard";
import { Roles } from "../Roles";
import { Container, HeaderItem, HeaderItemTitle, ListContent, ListHeader } from "./styles";

export const RolesBoard = () => {

  const [agent, setAgent] = useState({});
  const [roles, setRoles] = useState<Roles[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      const res = await api.get("/roles")
      setRoles(res.data.roles)
    }
    getRoles();
  }, []);

  return (
    <Container>
      <ListHeader className="row">
        <HeaderItem className="main col-2">
          <HeaderItemTitle>Cargo</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Departamento</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2">
          <HeaderItemTitle>Colaboradores</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-6">
          <HeaderItemTitle></HeaderItemTitle>
        </HeaderItem>
      </ListHeader>

      <ListContent>
        {roles?.map((i, k) => (
          <div key={k}>
            <RoleCard roles={i} />
          </div>
        )).slice(0, 8)}
      </ListContent>
    </Container>
  );
};
