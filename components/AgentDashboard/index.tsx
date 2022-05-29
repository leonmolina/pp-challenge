import {
  Container,
  DashboardContent,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AgentBoard } from "../AgentBoard";
import { Agent } from "../../types/Agent";

export const AgentDashboard = () => {
  const [agent, setAgent] = useState<Agent>({} as Agent);
  
  useEffect(() => {
    const getAgent = async () => {
      const res = await api.get("/agent/1")
      setAgent(res.data.agent)
    }
    getAgent();
  }, []);
  return (
    <Container className="container">
      <DashboardContent className="container">
        <AgentBoard agent={agent} />
      </DashboardContent>
    </Container>
  );
};
