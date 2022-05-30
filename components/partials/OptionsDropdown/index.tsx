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
import repeatIcon from "../../../public/repeat.svg";
import duplicateIcon from "../../../public/duplicate.svg";
import editIcon from "../../../public/edit.svg";

type Props = {
  children?: JSX.Element;
  icon?: boolean;
  role?: boolean;
  path?: string;
};

export const OptionsDropdown = ({ children, icon, role, path }: Props) => {
  return (
    <Container className="dropdown">
      <AgentOptions
        className="btn btn-sm"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}

        {icon && (
          // Três pontos verticais
          <div className="icon" style={{ width: 24, height: 24 }}>
            <Image
              src={moreVertical}
              alt="Botão de mais opções"
              width={24}
              height={24}
            />
          </div>
        )}
      </AgentOptions>

      {/* Dropdown items */}
      <MoreOptions
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <MoreOptionsItem>
          {path ? (
            <Options className="dropdown-item" href={path}>
              <OptionsIcon>
                <Image
                  src={eyeIcon}
                  width={24}
                  height={24}
                  alt="Ícone de um olho, para ver a página do colaborador."
                />
              </OptionsIcon>

              <OptionsText>
                {role ? "Ver cargo" : "Ver colaborador"}
              </OptionsText>
            </Options>
          ) : (
            // Sem path
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
                {role ? "Ver cargo" : "Ver colaborador"}
              </OptionsText>
            </Options>
          )}
        </MoreOptionsItem>
        <MoreOptionsItem>
          {role ? (
            <>
              {/* Editar */}
              <Options isDisabled className="dropdown-item">
                <OptionsIcon>
                  <Image
                    src={editIcon}
                    width={24}
                    height={24}
                    alt="ícone de uma nota e caneta, indicando a possibilidade de editar o item."
                  />
                </OptionsIcon>
                <OptionsText isDisabled>Editar</OptionsText>
              </Options>

              {/* Duplicar */}
              <Options isDisabled className="dropdown-item">
                <OptionsIcon>
                  <Image
                    src={duplicateIcon}
                    width={24}
                    height={24}
                    alt="ícone de um item duplicado, indicando a possibilidade de duplicar."
                  />
                </OptionsIcon>
                <OptionsText isDisabled>Duplicar</OptionsText>
              </Options>

              {/* Exluir */}
              <Options isDisabled className="dropdown-item">
                <OptionsIcon>
                  <Image
                    src={repeatIcon}
                    width={24}
                    height={24}
                    alt="ícone de um lixeiro, para excluir o colaborador."
                  />
                </OptionsIcon>
                <OptionsText isDisabled>Excluir</OptionsText>
              </Options>
            </>
          ) : (
            <Options isDisabled className="dropdown-item">
              <OptionsIcon>
                <Image
                  src={trashIcon}
                  width={24}
                  height={24}
                  alt="ícone de um lixeiro, para excluir o colaborador."
                />
              </OptionsIcon>
              <OptionsText isDisabled>Excluir</OptionsText>
            </Options>
          )}
        </MoreOptionsItem>
      </MoreOptions>
    </Container>
  );
};
