import { Agents } from "../Collaborators";
import {
  AgentAvatar,
  AgentItemArea,
  AgentItemText,
  AgentMainArea,
  AgentName,
  AgentOptions,
  AgentStatus,
  AgentStatusText,
  Container,
} from "./styles";

type Props = {
  agents: Agents
}

export const CollaboratorCard = ({agents}: Props) => {
  return (
    <Container>
      <AgentMainArea>
        {/* <AgentAvatar src="https://github.com/leonmolina.png" /> */}
        <AgentName>{agents.name}</AgentName>
      </AgentMainArea>
      {/* Departamento */}
      <AgentItemArea>
        <AgentItemText>{agents.department}</AgentItemText>
      </AgentItemArea>
      {/* Cargo */}
      <AgentItemArea>
        <AgentItemText>{agents.role}</AgentItemText>
      </AgentItemArea>
      {/* Unidade */}
      <AgentItemArea>
        <AgentItemText>{agents.branch}</AgentItemText>
      </AgentItemArea>
      {/* Status */}
      <AgentStatus>
        <AgentStatusText>{agents.status}</AgentStatusText>
      </AgentStatus>
      {/* Opções */}
      <AgentItemArea>
        <AgentOptions>...</AgentOptions>
      </AgentItemArea>
    </Container>
  );
};
