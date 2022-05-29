import {
  AgentItemArea,
  AgentItems,
  AgentItemText,
  Container,
} from "./styles";

type Props = {
  role: string;
}

export const PermissionCard = ({role}: Props) => {
  return (
    <Container>
      <AgentItems className="row">
        {/* Cargo */}
        <AgentItemArea className="roleName col-6">
          <AgentItemText>{role}</AgentItemText>
        </AgentItemArea>

        {/* Departamento */}
        <AgentItemArea className="col-2">
          <AgentItemText>Ler</AgentItemText>
        </AgentItemArea>

        {/* Colaboradores */}
        <AgentItemArea className="col-2">
          <AgentItemText>Editar</AgentItemText>
        </AgentItemArea>

        {/* Opções */}
        <AgentItemArea className="col-2">
        <AgentItemText>Excluir</AgentItemText>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
