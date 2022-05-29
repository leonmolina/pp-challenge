import Image from "next/image";
import { Agent } from "../AgentDashboard";
import {
  AgentAvatar,
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
  OrgText,
  OrgTitle,
} from "./styles";

type Props = {
  agent: Agent;
};
export const AgentBoard = ( {agent} : Props) => {
  return (
    <Container>
      <AgentHeader>
        <AgentAvatar>
          {/* <Image src={agent.image} alt="Imagem do colaborador" width={50} height={50} /> */}
        </AgentAvatar>
        <AgentData>
          <AgentName>{agent.name}</AgentName>
          <AgentEmail>{agent.email}</AgentEmail>
        </AgentData>
      </AgentHeader>

      <AgentInfo>
        <InfoTitle>Informações pessoais</InfoTitle>

        <InfoCardsArea>

          {/* <AgentInfoCard>
            <InfoIcon>Ícone</InfoIcon>
            <InfoData>
              <InfoText>{agent.document.type}</InfoText>
              <InfoContent>{agent.document.number}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>Ícone</InfoIcon>
            <InfoData>
              <InfoText>Telefone</InfoText>
              <InfoContent>{`+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}</InfoContent>
            </InfoData>
          </AgentInfoCard> */}

          <AgentInfoCard>
            <InfoIcon>Ícone</InfoIcon>
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
            <OrgText>Departamento</OrgText>
          </AgentOrgCard>

          <AgentOrgCard>
            <OrgText>Cargo</OrgText>
          </AgentOrgCard>

          <AgentOrgCard>
            <OrgText>Unidade</OrgText>
          </AgentOrgCard>

          <AgentOrgCard>
            <OrgText>Status</OrgText>
          </AgentOrgCard>
        </OrgCardsArea>
      </AgentOrganizational>
    </Container>
  );
};
