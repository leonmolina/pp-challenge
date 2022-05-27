import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CollaboratorCard } from "../CollaboratorCard";
import { Agents } from "../Collaborators";
import { Container, ListContent, ListHeader } from "./styles";

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
      <ListHeader>
        <span>Nome completo</span>
        <span>Departamento</span>
        <span>Cargo</span>
        <span>Unidade</span>
        <span>Status</span>
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
