import Image from "next/image";
import {
  AgentOptions,
  Container,
  MoreOptions,
  MoreOptionsItem,
  Options,
  OptionsHeader,
  OptionsHeaderText,
  OptionsText,
  OptionsTitle,
} from "./styles";
import moreVertical from "../../../public/more-vertical.svg";
import { useState } from "react";
import closeIcon from '../../../public/x.svg'

type Props = {
  set: (select: string) => void;
}

export const TabsDropdown = ({set}: Props) => {
  const [tab, setTab] = useState('agents')
  const [tabTitle, setTabTitle] = useState('Colaboradores')

  const handleSelect = (page: string) => {
    if(page === 'agents') {
      setTabTitle('Colaboradores')
    } else {
      setTabTitle('Cargos')
    }
    setTab(page)
    set(page)
  }

  return (
    <Container className="dropdown">
      <AgentOptions
        className="btn btn-sm"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <OptionsTitle>{tabTitle}</OptionsTitle>
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
          <OptionsHeader>
            <OptionsHeaderText>Categorias</OptionsHeaderText>
            <Image style={{cursor: 'pointer'}} width={24} height={24} src={closeIcon} alt="Ícone em formato de X, indicando o fechamento da página." />
          </OptionsHeader>
          <Options
            className="dropdown-item"
            onClick={() => handleSelect('agents')}
          >

            <OptionsText>Colaboradores</OptionsText>
          </Options>
        </MoreOptionsItem>

        <MoreOptionsItem>
          <Options
            className="dropdown-item"
            onClick={() => handleSelect('roles')}
          >
            <OptionsText>Cargos</OptionsText>
          </Options>
        </MoreOptionsItem>

      </MoreOptions>
    </Container>
  );
};
