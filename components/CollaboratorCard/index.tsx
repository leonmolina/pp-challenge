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
      <AgentMainArea>
        <button className="btn btn-primary">Button</button>
        <AgentAvatar src={agents.image} />
        <AgentName>{agents.name}</AgentName>
      </AgentMainArea> 
      <AgentItems>
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
        <AgentItemArea>
          <AgentStatus>
            <AgentStatusText>{agents.status}</AgentStatusText>
          </AgentStatus>
        </AgentItemArea>
        {/* Opções */}
        <AgentItemArea>
          <AgentOptions>...</AgentOptions>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
