import {
  AgentItemArea,
  AgentItems,
  AgentItemText,
  Container,
  FooterMobileText,
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
    <Container>
      <AgentItems className="row">
        {/* Cargo */}
        <AgentItemArea className="col-2">
          <AgentItemText>{roles.name}</AgentItemText>
        </AgentItemArea>

        {/* Departamento */}
        <AgentItemArea className="col-2">
          <AgentItemText>{roles.departament}</AgentItemText>
        </AgentItemArea>

        {/* Colaboradores */}
        <AgentItemArea className="col-2">
          <AgentItemText>{roles.agents_quantity}</AgentItemText>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea className="more col-6">


                    {/* Web */}
          <OptionsWeb>
            <OptionsDropdown icon role />
          </OptionsWeb>

          {/* Mobile */}
          <OptionsMobile>
            <OptionsDropdown>
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
