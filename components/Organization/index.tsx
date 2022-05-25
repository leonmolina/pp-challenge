import { Collaborators } from "../Collaborators"
import { Roles } from "../Roles"
import { Container } from "./styles"

export const Organization = () => {
  return (
    <Container>
      <h3>Colaboradores | Cargos</h3>
      <Collaborators />
      <Roles />
    </Container>
  )
}