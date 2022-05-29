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
  OptionsDropdown,
  OptionsIcon,
  OptionsLink,
  OptionsText,
} from "./styles";
import moreVertical from "../../public/more-vertical.svg";
import Image from "next/image";
import { AgentsType } from "../../types/Agents";
import eyeIcon from '../../public/eye.svg';
import trashIcon from '../../public/trash.svg';

type Props = {
  agents: AgentsType;
};

export const AgentCard = ({ agents }: Props) => {
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
          <OptionsDropdown className="dropdown">
            <AgentOptions
              className="btn btn-sm"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* Três pontos verticais */}
              <Image
                src={moreVertical}
                alt="Botão de mais opções"
                width={124}
                height={124}
              />
            </AgentOptions>
            {/* Dropdown items */}
            <MoreOptions
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <MoreOptionsItem>
                <Options className="dropdown-item" href="#">
                  <OptionsIcon>

                    <Image src={eyeIcon} width={24} height={24} alt="Ícone de um olho, para ver a página do colaborador." />

                  </OptionsIcon>

                  <OptionsText>
                    <OptionsLink href={`/agente/${agents.agent_id}`}>Ver colaborador</OptionsLink>
                  </OptionsText>
                </Options>
              </MoreOptionsItem>
              <MoreOptionsItem>
                <Options isDisabled className="dropdown-item">
                  <OptionsIcon>
                    <Image src={trashIcon} width={24} height={24} alt="ícone de um lixeiro, para excluir o colaborador."/>

                  </OptionsIcon>
                  <OptionsText>Excluir</OptionsText>
                </Options>
              </MoreOptionsItem>
            </MoreOptions>
          </OptionsDropdown>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
