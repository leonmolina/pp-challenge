import {
  AgentItemArea,
  AgentItems,
  AgentItemText,
  Container,
} from "./styles";


export const PermissionCard = () => {
  return (
    <Container>
      <AgentItems className="row">
        {/* Cargo */}
        <AgentItemArea className="col-2">
          <AgentItemText>Cargo</AgentItemText>
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
        <AgentItemArea className="more col-6">
        <AgentItemText>Excluir</AgentItemText>
        </AgentItemArea>
      </AgentItems>
    </Container>
  );
};
