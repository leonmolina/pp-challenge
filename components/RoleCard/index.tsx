import {
  Container,
  RoleItemArea,
  RoleItemText,
  RoleLeftSide,
  RoleOptions,
  RoleRightSide,
} from "./styles";

export const RoleCard = () => {
  return (
    <Container>
      {/* Lado Esquerdo */}
      <RoleLeftSide>
        {/* Cargo */}
        <RoleItemArea>
          <RoleItemText>Supervisor</RoleItemText>
        </RoleItemArea>
        {/* Departamento */}
        <RoleItemArea>
          <RoleItemText>SAC</RoleItemText>
        </RoleItemArea>
        {/* Colaboradores */}
        <RoleItemArea>
          <RoleItemText>2</RoleItemText>
        </RoleItemArea>
      </RoleLeftSide>
      {/* Lado Direito */}
      <RoleRightSide>
        {/* Opções */}
        <RoleItemArea>
          <RoleOptions>...</RoleOptions>
        </RoleItemArea>
      </RoleRightSide>
    </Container>
  );
};
