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
      <Container className="container">

        <AgentItems className="row">
          <AgentMainArea className="col-2 col-sm">
            <AgentAvatar src={agents.image} />
            <AgentName>{agents.name}</AgentName>
          </AgentMainArea>

          {/* Departamento */}
          <AgentItemArea className="col-2 col-sm">
            <AgentItemText>{agents.department}</AgentItemText>
          </AgentItemArea>

          {/* Cargo */}
          <AgentItemArea className="col-2 col-sm">
            <AgentItemText>{agents.role}</AgentItemText>
          </AgentItemArea>

          {/* Unidade */}
          <AgentItemArea className="col- col-sm">
            <AgentItemText>{agents.branch}</AgentItemText>
          </AgentItemArea>

          {/* Status */}
          <AgentItemArea className="col- col-sm">
            <AgentStatus>
              <AgentStatusText>{agents.status}</AgentStatusText>
            </AgentStatus>
          </AgentItemArea>

          {/* Opções */}
          <AgentItemArea className="col- col-sm">
            <AgentOptions>...</AgentOptions>
          </AgentItemArea>
        </AgentItems>
      </Container>
  );
};
