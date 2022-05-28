import { Eye, DotsThreeVertical, Trash } from "phosphor-react";
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
  Container,
  MainAreaLeftSide,
  MainAreaRightSide,
  MoreOptions,
  MoreOptionsItem,
  Options,
  OptionsIcon,
  OptionsText,
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
          <div className="dropdown">
            <AgentOptions
              className="btn btn-sm"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <DotsThreeVertical size={32} />
            </AgentOptions>
            {/* Dropdown items */}
            <MoreOptions
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <MoreOptionsItem>
                <Options className="dropdown-item" href="#">
                  <OptionsIcon>
                    <Eye size={20} />
                  </OptionsIcon>
                  <OptionsText>Ver colaborador</OptionsText>
                </Options>
              </MoreOptionsItem>
              <MoreOptionsItem>
                <Options isDisabled className="dropdown-item">
                <OptionsIcon>
                    <Trash size={20} />
                  </OptionsIcon>
                  <OptionsText>Excluir</OptionsText>
                </Options>
              </MoreOptionsItem>
            </MoreOptions>
          </div>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
