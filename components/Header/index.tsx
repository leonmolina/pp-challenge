import { AvatarFirstLetters, Container, LogoArea, UserArea, UserAvatar, UserCard, UserData, UserName } from "./style"
import logo from '../../public/brand.svg'
import Image from "next/image"

export const Header = () => {
  return (
    <Container>
      <LogoArea>
        <Image src={logo} alt="Logo da Pedido Pago (duas letras 'P', uma sobrepondo a outra" />
      </LogoArea>
      <UserArea>
        <UserAvatar>
          <AvatarFirstLetters>LZ</AvatarFirstLetters>
        </UserAvatar>
        <UserCard>
          <UserName>Luiz Zlochevsky</UserName>
          <UserData>meus dados</UserData>
        </UserCard>
      </UserArea> 
    </Container>
  )
}