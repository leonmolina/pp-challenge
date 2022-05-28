import { useState } from "react";
import { Agents } from "../Collaborators";
import { Status } from "../partials/Status";
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
  MainAreaLeftSide,
  MainAreaRightSide,
} from "./styles";

type Props = {
  agents: Agents;
};


export const CollaboratorCard = ({ agents }: Props) => {
  return (
    <Container>
      <AgentItems className="row">
        <AgentMainArea className="col-3">
          <MainAreaLeftSide>
            <AgentAvatar src={agents.image} />
          </MainAreaLeftSide>
          <MainAreaRightSide>
            <AgentItemText>{agents.name}</AgentItemText>
          </MainAreaRightSide>
        </AgentMainArea>

        {/* Departamento */}
        <AgentItemArea className="col-2">
          <AgentItemText>{agents.department}</AgentItemText>
        </AgentItemArea>

        {/* Cargo */}
        <AgentItemArea className="col-2">
          <AgentItemText>{agents.role}</AgentItemText>
        </AgentItemArea>

        {/* Unidade */}
        <AgentItemArea className="col-2">
          <AgentItemText>{agents.branch}</AgentItemText>
        </AgentItemArea>

        {/* Status */}
        <AgentItemArea className="col-2">
          <AgentStatus>
            <Status status={agents.status} />
          </AgentStatus>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea className="more col-1">
          <AgentOptions>...</AgentOptions>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
