import {
  Container,
  DropdownItem,
  DropdownMenu,
  FooterNavButton,
  FooterNavText,
  FooterSelect,
  FooterText,
  FooterWeb,
  ListFooter,
  ListFooterLeftSide,
  ListFooterRightSide,
} from "./styles";
import arrowLeft from "../../../public/chevron-left.svg";
import arrowRight from "../../../public/chevron-right.svg";
import Image from "next/image";

export const AgentsFooter = () => {
  return (
    <Container>
        <ListFooter>
          <ListFooterLeftSide>
            <FooterText>Mostrando 10 de 50 registros</FooterText>
            {/* Select do footer */}
            <FooterWeb className="dropdown">
              <FooterSelect
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                10
              </FooterSelect>
              <DropdownMenu
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    10
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    20
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="#">
                    30
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </FooterWeb>
          </ListFooterLeftSide>
          {/* <ListFooterRightSide>

            <FooterNavButton value="prev" className="left">
              <Image
                width={24}
                height={24}
                src={arrowLeft}
                alt="Ícone flecha para a esquerda, simbolizando voltar na lista."
              />
            </FooterNavButton>
            
            <FooterNavText>1 de 10</FooterNavText>

            <FooterNavButton value="next" className="right">
            <Image
                width={24}
                height={24}
                src={arrowRight}
                alt="Ícone flecha para a direita, simbolizando continuar na lista."
              />
            </FooterNavButton>

          </ListFooterRightSide> */}

        </ListFooter>
    </Container>
  );
};
