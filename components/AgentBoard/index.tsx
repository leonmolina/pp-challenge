import Image from "next/image";
import { Agent } from "../../types/Agent";
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

type Props = {
  agent: Agent;
};

export const AgentBoard = ({ agent }: Props) => {
  return (
    <Container>
      <AgentHeader>
        <AgentAvatar>
          <Image
            src={agent.image}
            alt="Imagem do colaborador"
            width={80}
            height={80}
            style={{ borderRadius: 40 }}
          />
        </AgentAvatar>
        <AgentData>
          <AgentName>{agent.name}</AgentName>
          <AgentEmail>{agent.email}</AgentEmail>
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
              <InfoText>{agent.document.type}</InfoText>
              <InfoContent>{agent.document.number}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={phoneIcon} width={18} height={18} alt={"Ícone simbolizando um telefone."} />
            </InfoIcon>
            <InfoData>
              <InfoText>Telefone</InfoText>
              <InfoContent>{`+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={dateIcon} width={18} height={18} alt={"Ícone simbolizando um calendário."} />
            </InfoIcon>
            <InfoData>
              <InfoText>Nascimento</InfoText>
              <InfoContent>{agent.birth_date}</InfoContent>
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
              <OrgCardText>{agent.department}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Cargo</OrgCardTitle>
                <OrgCardText>{agent.role}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Unidade</OrgCardTitle>
                <OrgCardText>{agent.branch}</OrgCardText>
              </AgentCardSection>
              <AgentCardSection>
                <Image src={downIcon} width={24} height={24} alt={"Ícone de flecha apontando para baixo, indicando que há opções."} />
              </AgentCardSection>
            </AgentOrgCard>

            <AgentOrgCard>
              <AgentCardSection>
                <OrgCardTitle>Status</OrgCardTitle>
                <OrgCardText>
                  {agent.status === 'inactive' ? 'Inativo' : 'Ativo' }
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
