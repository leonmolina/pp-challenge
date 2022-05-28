import { Container, StatusText } from "./styles"

type Props = {
  status: string
}

export const Status = ({status}: Props) => {
  return (
    <Container isActive={(status === 'inactive' ? false : true)}>
      <StatusText>{status === 'inactive' ? 'Inativo' : 'Ativo'}</StatusText>
    </Container>
  )
}