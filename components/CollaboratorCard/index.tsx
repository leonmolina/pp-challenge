import {
  AgentAvatar,
  AgentItemArea,
  AgentItemText,
  AgentMainArea,
  AgentName,
  AgentOptions,
  AgentStatus,
  AgentStatusText,
  Container,
} from "./styles";

export const CollaboratorCard = () => {
  return (
    <Container>
      <AgentMainArea>
        <AgentAvatar src="https://github.com/leonmolina.png" />
        <AgentName>Leon Molina Aguiar</AgentName>
      </AgentMainArea>
      {/* Departamento */}
      <AgentItemArea>
        <AgentItemText>Administrativo</AgentItemText>
      </AgentItemArea>
      {/* Cargo */}
      <AgentItemArea>
        <AgentItemText>Diretor</AgentItemText>
      </AgentItemArea>
      {/* Unidade */}
      <AgentItemArea>
        <AgentItemText>Quartel General</AgentItemText>
      </AgentItemArea>
      {/* Status */}
      <AgentStatus>
        <AgentStatusText>Ativo</AgentStatusText>
      </AgentStatus>
      {/* Opções */}
      <AgentItemArea>
        <AgentOptions>...</AgentOptions>
      </AgentItemArea>
    </Container>
  );
};
