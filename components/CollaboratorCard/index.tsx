import { Agents } from "../Collaborators";
import {
  AgentAvatar,
  AgentItemArea,
  AgentItems,
  AgentItemText,
  AgentMainArea,
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
          <AgentMainArea>
            <AgentAvatar src={agents.image} />
            <AgentItemText>{agents.name}</AgentItemText>
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
          <AgentItemArea className="more col">
            <AgentOptions>...</AgentOptions>
          </AgentItemArea>
        </AgentItems>
      </Container>
  );
};
