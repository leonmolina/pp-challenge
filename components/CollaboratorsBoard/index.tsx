import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Agents } from "../../types/Agents";
import { AgentsHeader } from "../AgentsHeader";
import { CollaboratorCard } from "../CollaboratorCard";
import { Container, ListContent} from "./styles";

export const CollaboratorsBoard = () => {

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
      <AgentsHeader />

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
