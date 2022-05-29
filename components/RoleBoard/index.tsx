import {
  Container,
  InfoTitle,
  OrgCardText,
  OrgCardTitle,
  RoleCardSection,
  RoleData,
  RoleInfo,
  RoleOrgCard,
  RolePermissions,
} from "./styles";
import { Role } from "../../types/Role";
import { RoleHeader } from "../partials/RoleHeader";
import { PermissionsBoard } from "../PermissionsBoard";

type Props = {
  role: Role;
};

export const RoleBoard = ({ role }: Props) => {
  return (
    <Container>
      <RoleInfo>
        <InfoTitle>Dados do cargo</InfoTitle>
      </RoleInfo>

      {/* Dados do cargo */}
      <RoleData>
        <RoleOrgCard>
          <RoleCardSection>
            <OrgCardTitle>Departamento</OrgCardTitle>
            <OrgCardText>{role.department}</OrgCardText>
          </RoleCardSection>
        </RoleOrgCard>

        <RoleOrgCard>
          <RoleCardSection>
            <OrgCardTitle>Cargo</OrgCardTitle>
            <OrgCardText>{role.name}</OrgCardText>
          </RoleCardSection>
        </RoleOrgCard>
      </RoleData>

      {/* Área do board */}

      <RoleInfo>
        <InfoTitle>Listagem de permissões</InfoTitle>
      </RoleInfo>

      {/* Header permissões */}
      <RoleHeader />
      {/* Conteúdo cards de permissões */}

      <RolePermissions>
        <PermissionsBoard permissions={role.grouprules} />
      </RolePermissions>
    
    </Container>
  );
};
