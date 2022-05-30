import Image from "next/image";
import {
  AgentOptions,
  Container,
  MoreOptions,
  MoreOptionsItem,
  Options,
  OptionsText,
  OptionsTitle,
} from "./styles";
import moreVertical from "../../../public/more-vertical.svg";
import { useState } from "react";

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
