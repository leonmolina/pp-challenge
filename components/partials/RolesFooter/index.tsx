import {
  Container,
  FooterNavButton,
  FooterNavText,
  ListFooterRightSide,
} from "./styles";
import arrowLeft from "../../../public/chevron-left.svg";
import arrowRight from "../../../public/chevron-right.svg";
import Image from "next/image";

export const RolesFooter = () => {
  return (
    <Container>
          <ListFooterRightSide>
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

          </ListFooterRightSide>

        </Container>
  );
};
