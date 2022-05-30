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
  FooterMobileText,
  MainAreaLeftSide,
  MainAreaRightSide,
  MainContent,
  MainHeader,
  OptionsMobile,
  OptionsWeb,
} from "./styles";
import { AgentsType } from "../../types/Agents";
import { OptionsDropdown } from "../partials/OptionsDropdown";
import Image from "next/image";
import arrowDown from "../../public/chevron-down.svg";
import arrowUp from "../../public/up.svg";
import pageIcon from "../../public/file-plus.svg";
import { useState } from "react";

type Props = {
  agents: AgentsType;
};

export const AgentCard = ({ agents }: Props) => {
  const [arrow, setArrow] = useState(arrowDown);
  const [show, setShow] = useState("none");

  const handleCardOpen = () => {
    if (arrow === arrowUp) {
      setArrow(arrowDown);
    } else {
      setArrow(arrowUp);
    }

    if (show === "block") {
      setShow("none");
    } else {
      setShow("block");
    }
  };

  return (
    <Container show={show}>
      <AgentItems className="row">
        <AgentMainArea className="col-3">
          
          <MainHeader>
            <CardItemTitle show={show} className="main">Nome completo</CardItemTitle>
          </MainHeader>

          <MainContent>
            <MainAreaLeftSide>
              <AgentAvatar src={agents.image} />
              <AgentItemText className="mainName">{agents.name}</AgentItemText>
            </MainAreaLeftSide>

            <MainAreaRightSide>
              {/* Área do botão de expandir que aparece no Mobile */}
              <AgentExpandButton
                onClick={handleCardOpen}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={arrow}
                  width={24}
                  height={24}
                  alt="Ícone de flecha, simbolizando a abertura e fechamento de menu expansível"
                />
              </AgentExpandButton>
            </MainAreaRightSide>
          </MainContent>
        </AgentMainArea>

        {/* Departamento */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Departamento</CardItemTitle>
          <AgentItemText>{agents.department}</AgentItemText>
        </AgentItemArea>

        {/* Cargo */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Cargo</CardItemTitle>
          <AgentItemText>{agents.role}</AgentItemText>
        </AgentItemArea>

        {/* Unidade */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Unidade</CardItemTitle>
          <AgentItemText>{agents.branch}</AgentItemText>
        </AgentItemArea>

        {/* Status */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Status</CardItemTitle>
          <AgentStatus>
            <Status status={agents.status} />
          </AgentStatus>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea show={show} className="more col-1">

          {/* Web */}
          <OptionsWeb>
          <OptionsDropdown icon path={`/agente/${agents.agent_id}`} />
          </OptionsWeb>

          {/* Mobile */}
          <OptionsMobile>
            <OptionsDropdown path={`/agente/${agents.agent_id}`}>
              <>
                <Image
                  src={pageIcon}
                  width={24}
                  height={24}
                  alt="Ícone de 2 setas apontando em circulo, indicando a opção de carregar mais colaboradores."
                />
                <FooterMobileText>Ações</FooterMobileText>
              </>
            </OptionsDropdown>
          </OptionsMobile>


        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
