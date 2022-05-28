import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CollaboratorCard } from "../CollaboratorCard";
import { Agents } from "../Collaborators";
import { Container, HeaderItem, HeaderItemTitle, ListContent, ListHeader } from "./styles";

export const RolesBoard = () => {

  const [agent, setAgent] = useState({});
  const [agents, setAgents] = useState<Agents[]>([]);

  useEffect(() => {
    const getAgents = async () => {
      const res = await api.get("/agents")
      setAgents(res.data.items)
    }
    getAgents();
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
        {agents?.map((i, k) => (
          <div key={k}>
            <CollaboratorCard agents={i} />
          </div>
        )).slice(0, 6)}
      </ListContent>
    </Container>
  );
};
