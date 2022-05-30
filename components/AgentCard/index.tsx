import { Status } from "../partials/Status";
import {
  AgentAvatar,
  AgentItemArea,
  AgentItems,
  AgentItemText,
  AgentMainArea,
  AgentStatus,
  CardItemTitle,
  Container,
  MainAreaLeftSide,
  MainAreaRightSide,
} from "./styles";
import { AgentsType } from "../../types/Agents";
import { OptionsDropdown } from "../partials/OptionsDropdown";

type Props = {
  agents: AgentsType;
};

export const AgentCard = ({ agents }: Props) => {
  return (
    <Container>
      <AgentItems className="row">
        <AgentMainArea className="col-3">
          <MainAreaLeftSide>
          <CardItemTitle className="main">Nome completo</CardItemTitle>
            <AgentAvatar src={agents.image} />
          </MainAreaLeftSide>
          <MainAreaRightSide>
            <AgentItemText className="mainName">{agents.name}</AgentItemText>
          </MainAreaRightSide>
        </AgentMainArea>

        {/* Departamento */}
        <AgentItemArea className="col-2">
          <CardItemTitle>Departamento</CardItemTitle>
          <AgentItemText>{agents.department}</AgentItemText>
        </AgentItemArea>

        {/* Cargo */}
        <AgentItemArea className="col-2">
          <CardItemTitle>Cargo</CardItemTitle>
          <AgentItemText>{agents.role}</AgentItemText>
        </AgentItemArea>

        {/* Unidade */}
        <AgentItemArea className="col-2">
          <CardItemTitle>Unidade</CardItemTitle>
          <AgentItemText>{agents.branch}</AgentItemText>
        </AgentItemArea>

        {/* Status */}
        <AgentItemArea className="col-2">
          <CardItemTitle>Status</CardItemTitle>
          <AgentStatus>
            <Status status={agents.status} />
          </AgentStatus>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea className="more col-1">
          <OptionsDropdown />
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
