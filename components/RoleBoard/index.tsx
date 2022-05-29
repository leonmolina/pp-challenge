import Image from "next/image";
import {
  AgentCardSection,
  AgentInfo,
  AgentOrganizational,
  AgentOrgCard,
  Container,
  InfoTitle,
  OrgCardText,
  OrgCardTitle,
} from "./styles";
import downIcon from "../../public/chevron-down.svg";
import { Role } from "../../types/Role";

type Props = {
  role: Role;
};

export const RoleBoard = ({ role }: Props) => {
  return (
    <Container>
      <AgentInfo>
        <InfoTitle>Dados do cargo</InfoTitle>
      </AgentInfo>

      {/* Dados do cargo */}
      <AgentOrganizational>
        <AgentOrgCard>
          <AgentCardSection>
            <OrgCardTitle>Departamento</OrgCardTitle>
            <OrgCardText>{role.department}</OrgCardText>
          </AgentCardSection>
          <AgentCardSection>
            <Image
              src={downIcon}
              width={24}
              height={24}
              alt={
                "Ícone de flecha apontando para baixo, indicando que há opções."
              }
            />
          </AgentCardSection>
        </AgentOrgCard>

        <AgentOrgCard>
          <AgentCardSection>
            <OrgCardTitle>Cargo</OrgCardTitle>
            <OrgCardText>{role.name}</OrgCardText>
          </AgentCardSection>
          <AgentCardSection>
            <Image
              src={downIcon}
              width={24}
              height={24}
              alt={
                "Ícone de flecha apontando para baixo, indicando que há opções."
              }
            />
          </AgentCardSection>
        </AgentOrgCard>
      </AgentOrganizational>

      {/* Área do board */}
    
    </Container>
  );
};
