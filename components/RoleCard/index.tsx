import {
  AgentExpandButton,
  AgentItemArea,
  AgentItems,
  AgentItemText,
  CardItemTitle,
  Container,
  FooterMobileText,
  MobileHeader,
  OptionsMobile,
  OptionsWeb,
} from "./styles";
import Image from "next/image";
import { RolesType } from "../../types/Roles";
import { useState } from "react";
import arrowDown from "../../public/chevron-down.svg";
import arrowUp from "../../public/up.svg";
import { OptionsDropdown } from "../partials/OptionsDropdown";
import pageIcon from "../../public/file-plus.svg";

type Props = {
  roles: RolesType;
  index: number;
};

export const RoleCard = ({ roles, index }: Props) => {
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
      <AgentItems show={show} className="row">
        {/* Cargo */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Cargo</CardItemTitle>
          <AgentItemText>{roles.name}</AgentItemText>
        </AgentItemArea>

        {/* Departamento */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Departamento</CardItemTitle>
          <AgentItemText>{roles.departament}</AgentItemText>
        </AgentItemArea>



        <AgentItemArea show={show} className="mobile col-2">
          <MobileHeader show={show}>
            <CardItemTitle show={show} className="header">Cargo</CardItemTitle>
            <AgentItemText>{roles.name}</AgentItemText>
          </MobileHeader>
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
        </AgentItemArea>




        {/* Colaboradores */}
        <AgentItemArea show={show} className="col-2">
          <CardItemTitle show={show}>Colaboradores</CardItemTitle>
          <AgentItemText>{roles.agents_quantity}</AgentItemText>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea show={show} className="more col-6">

        {/* Web */}
          <OptionsWeb>
            <OptionsDropdown icon role />
          </OptionsWeb>

          {/* Mobile */}
          <OptionsMobile>
            <OptionsDropdown role path={`/cargo/${index}`}>
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
