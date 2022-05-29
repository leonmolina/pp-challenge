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
import moreVertical from "../../public/more-vertical.svg";
import Image from "next/image";
import { RolesType } from "../../types/Roles";
import eyeIcon from '../../public/eye.svg';
import trashIcon from '../../public/trash.svg';

type Props = {
  roles: RolesType;
  index: number;
};

export const RoleCard = ({ roles, index }: Props) => {
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
                <Options className="dropdown-item" href={`/cargo/${index}`}>
                  <OptionsIcon>
                    <Image src={eyeIcon} width={24} height={24} alt="Ícone de um olho, para ver a página do colaborador." />
                  </OptionsIcon>
                  <OptionsText>Ver cargo</OptionsText>
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
