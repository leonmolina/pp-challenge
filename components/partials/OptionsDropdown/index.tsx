import Image from "next/image";
import {
  AgentOptions,
  Container,
  MoreOptions,
  MoreOptionsItem,
  Options,
  OptionsIcon,
  OptionsText,
} from "./styles";
import eyeIcon from "../../../public/eye.svg";
import trashIcon from "../../../public/trash.svg";
import moreVertical from "../../../public/more-vertical.svg";

type Props = {
  children?: JSX.Element;
  icon?: boolean;
  role?: boolean;
};

export const OptionsDropdown = ({ children, icon, role }: Props) => {
  return (
    <Container className="dropdown">
      <AgentOptions
        className="btn btn-sm"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}

        {icon &&
          // Três pontos verticais
          <div className="icon" style={{width: 24, height: 24}}>
            <Image
              src={moreVertical}
              alt="Botão de mais opções"
              width={24}
              height={24}
            />
          </div>
        
        }
        
      </AgentOptions>

      {/* Dropdown items */}
      <MoreOptions
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <MoreOptionsItem>
          <Options className="dropdown-item" href={"#"}>
            <OptionsIcon>
              <Image
                src={eyeIcon}
                width={24}
                height={24}
                alt="Ícone de um olho, para ver a página do colaborador."
              />
            </OptionsIcon>

            <OptionsText>
              {role ? 'Ver cargo' : 'Ver colaborador'
              }
              </OptionsText>
          </Options>
        </MoreOptionsItem>
        <MoreOptionsItem>
          <Options isDisabled className="dropdown-item">
            <OptionsIcon>
              <Image
                src={trashIcon}
                width={24}
                height={24}
                alt="ícone de um lixeiro, para excluir o colaborador."
              />
            </OptionsIcon>
            <OptionsText>Excluir</OptionsText>
          </Options>
        </MoreOptionsItem>
      </MoreOptions>
    </Container>
  );
};
