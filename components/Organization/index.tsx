import { Collaborators } from "../Collaborators"
import { Roles } from "../Roles"

export const Organization = () => {
  return (
    <div>
      <h3>Colaboradores | Cargos</h3>
      <Collaborators />
      <Roles />
    </div>
  )
}