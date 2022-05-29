import Image from "next/image";
import {
  AgentAvatar,
  AgentCardSection,
  AgentData,
  AgentEmail,
  AgentHeader,
  AgentInfo,
  AgentInfoCard,
  AgentName,
  AgentOrganizational,
  AgentOrgCard,
  Container,
  InfoCardsArea,
  InfoContent,
  InfoData,
  InfoIcon,
  InfoText,
  InfoTitle,
  OrgCardsArea,
  OrgCardText,
  OrgCardTitle,
  OrgTitle,
} from "./styles";
import idIcon from "../../public/id.svg";
import phoneIcon from "../../public/phone-call.svg";
import dateIcon from "../../public/calendar.svg";
import downIcon from "../../public/chevron-down.svg";
import { Role } from "../../types/Role";

type Props = {
  role: Role;
};

export const RoleBoard = ({ role }: Props) => {
  return (
    <Container>
      <AgentHeader>
        <AgentAvatar>
        </AgentAvatar>
        <AgentData>
          <AgentName>{role.department}</AgentName>
          <AgentEmail>{role.name}</AgentEmail>
        </AgentData>
      </AgentHeader>

      <AgentInfo>
        <InfoTitle>Informações pessoais</InfoTitle>

        <InfoCardsArea>
          <AgentInfoCard>
            <InfoIcon>
              <Image src={idIcon} width={18} height={18} alt={"Ícone simbolizando um documento."} />
            </InfoIcon>
            <InfoData>
              <InfoText>{role.department}</InfoText>
              <InfoContent>{role.department}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={phoneIcon} width={18} height={18} alt={"Ícone simbolizando um telefone."} />
            </InfoIcon>
            <InfoData>
              <InfoText>Telefone</InfoText>
              <InfoContent>{role.name}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={dateIcon} width={18} height={18} alt={"Ícone simbolizando um calendário."} />
            </InfoIcon>
            <InfoData>
              <InfoText>Nascimento</InfoText>
              <InfoContent>{role.department}</InfoContent>
            </InfoData>
          </AgentInfoCard>
        </InfoCardsArea>
      </AgentInfo>

      <AgentOrganizational>
        <OrgTitle>Dados organizacionais</OrgTitle>

        <OrgCardsArea>

            <AgentOrgCard>
              <AgentCardSection>
              <OrgCardTitle>Departamento</OrgCardTitle>
              <OrgCardText>{role.department}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Cargo</OrgCardTitle>
                <OrgCardText>{role.name}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Unidade</OrgCardTitle>
                <OrgCardText>{role.name}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Status</OrgCardTitle>
                <OrgCardText>
                  {role.department}
                </OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>


        </OrgCardsArea>
      </AgentOrganizational>
    </Container>
  );
};
