import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CollaboratorCard } from "../CollaboratorCard";
import { Agents } from "../Collaborators";
import { Container, HeaderItem, HeaderItemTitle, ListContent, ListHeader } from "./styles";

export const CollaboratorsBoard = () => {

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
        <HeaderItem className="col-2 col-sm">
          <HeaderItemTitle>Nome Completo</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2 col-sm">
          <HeaderItemTitle>Departamento</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2 col-sm">
          <HeaderItemTitle>Cargo</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2 col-sm">
          <HeaderItemTitle>Unidade</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem className="col-2 col-sm">
          <HeaderItemTitle>Status</HeaderItemTitle>
        </HeaderItem>
      </ListHeader>

      <ListContent>
        {agents?.map((i, k) => (
          <div key={k}>
            <CollaboratorCard agents={i} />
          </div>
        ))}
      </ListContent>
    </Container>
  );
};
