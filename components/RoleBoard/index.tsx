import Image from "next/image";
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
import downIcon from "../../public/chevron-down.svg";
import { Role } from "../../types/Role";
import { RoleHeader } from "../partials/RoleHeader";
import { PermissionsBoard } from "../partials/PermissionsBoard";

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
          <RoleCardSection>
            <Image
              src={downIcon}
              width={24}
              height={24}
              alt={
                "Ícone de flecha apontando para baixo, indicando que há opções."
              }
            />
          </RoleCardSection>
        </RoleOrgCard>

        <RoleOrgCard>
          <RoleCardSection>
            <OrgCardTitle>Cargo</OrgCardTitle>
            <OrgCardText>{role.name}</OrgCardText>
          </RoleCardSection>
          <RoleCardSection>
            <Image
              src={downIcon}
              width={24}
              height={24}
              alt={
                "Ícone de flecha apontando para baixo, indicando que há opções."
              }
            />
          </RoleCardSection>
        </RoleOrgCard>
      </RoleData>

      {/* Área do board */}

      <RoleInfo>
        <InfoTitle>Listagem de permissões</InfoTitle>
      </RoleInfo>
      <RoleHeader />
      <RolePermissions>
        <PermissionsBoard />
      </RolePermissions>
    
    </Container>
  );
};
