import { Agents } from "../Collaborators";
import {
  AgentAvatar,
  AgentItemArea,
  AgentItems,
  AgentItemText,
  AgentMainArea,
  AgentName,
  AgentOptions,
  AgentStatus,
  AgentStatusText,
  Container,
} from "./styles";

type Props = {
  agents: Agents;
};

export const CollaboratorCard = ({ agents }: Props) => {
  return (
      <Container>
        <AgentItems className="row">
          <AgentMainArea className="col">
            <AgentAvatar src={agents.image} />
            <AgentName>{agents.name}</AgentName>
          </AgentMainArea>

          {/* Departamento */}
          <AgentItemArea className="col">
            <AgentItemText>{agents.department}</AgentItemText>
          </AgentItemArea>

          {/* Cargo */}
          <AgentItemArea className="col">
            <AgentItemText>{agents.role}</AgentItemText>
          </AgentItemArea>

          {/* Unidade */}
          <AgentItemArea className="col">
            <AgentItemText>{agents.branch}</AgentItemText>
          </AgentItemArea>

          {/* Status */}
          <AgentItemArea className="col">
            <AgentStatus>
              <AgentStatusText>{agents.status}</AgentStatusText>
            </AgentStatus>
          </AgentItemArea>

          {/* Opções */}
          <AgentItemArea className="col">
            <AgentOptions>...</AgentOptions>
          </AgentItemArea>
        </AgentItems>
      </Container>
  );
};
