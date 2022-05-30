import { Status } from "../partials/Status";
import {
  AgentAvatar,
  AgentExpandButton,
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
import Image from "next/image";
import arrowDown from '../../public/chevron-down.svg';
import arrowUp from '../../public/up.svg'
import { useState } from "react";

type Props = {
  agents: AgentsType;
};

export const AgentCard = ({ agents }: Props) => {
  const [arrow, setArrow] = useState(arrowDown);
  const [show, setShow] = useState("none")

  const handleCardOpen = () => {

    if (arrow === arrowUp) {
      setArrow(arrowDown)
    } else {
      setArrow(arrowUp)
    }

    if (show === "block") {
      setShow("none")
    } else {
      setShow("block")
    }
  }

  return (
    <Container show={show}>
      <AgentItems className="row">
        <AgentMainArea className="col-3">
          <MainAreaLeftSide>
          <CardItemTitle className="main">Nome completo</CardItemTitle>
            <AgentAvatar src={agents.image} />
          </MainAreaLeftSide>
          <MainAreaRightSide>
            <AgentItemText className="mainName">{agents.name}</AgentItemText>

            {/* Área do botão de expandir que aparece no Mobile */}
            <AgentExpandButton
              onClick={handleCardOpen}
              style={{cursor: 'pointer'}}
            >
              <Image src={arrow} alt="Ícone de flecha, simbolizando a abertura e fechamento de menu expansível" />
            </AgentExpandButton>

          </MainAreaRightSide>
        </AgentMainArea>

        {/* Departamento */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle>Departamento</CardItemTitle>
          <AgentItemText>{agents.department}</AgentItemText>
        </AgentItemArea>

        {/* Cargo */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle>Cargo</CardItemTitle>
          <AgentItemText>{agents.role}</AgentItemText>
        </AgentItemArea>

        {/* Unidade */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle>Unidade</CardItemTitle>
          <AgentItemText>{agents.branch}</AgentItemText>
        </AgentItemArea>

        {/* Status */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle>Status</CardItemTitle>
          <AgentStatus>
            <Status status={agents.status} />
          </AgentStatus>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea show={show} className="more col-1">
          <OptionsDropdown />
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
