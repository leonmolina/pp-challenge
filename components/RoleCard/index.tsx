import { Eye, Trash } from "phosphor-react";
import {
  AgentItemArea,
  AgentItems,
  AgentItemText,
  AgentOptions,
  Container,
  MoreOptions,
  MoreOptionsItem,
  Options,
  OptionsDropdown,
  OptionsIcon,
  OptionsText,
} from "./styles";
import moreVertical from '../../public/more-vertical.svg'
import Image from "next/image";
import { RolesType } from "../../types/Roles";

type Props = {
  roles: RolesType;
};

export const RoleCard = ({ roles }: Props) => {
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
              width={24}
              height={24}
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
          </OptionsDropdown>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
