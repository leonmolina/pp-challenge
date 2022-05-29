import Image from "next/image";
import { Agent } from "../../types/Agent";
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
import idIcon from '../../public/id.svg';
import phoneIcon from '../../public/phone-call.svg';
import dateIcon from '../../public/calendar.svg'

type Props = {
  agent: Agent;
};
export const AgentBoard = ( {agent} : Props) => {
  return (
    <Container>
      <AgentHeader>
        <AgentAvatar>
          <Image src={agent.image} alt="Imagem do colaborador" width={80} height={80} style={{borderRadius: 40}} />
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
              <Image src={idIcon} alt={'Ícone simbolizando um documento.'} />
            </InfoIcon>
            <InfoData>
              <InfoText>{agent.document.type}</InfoText>
              <InfoContent>{agent.document.number}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={phoneIcon} alt={'Ícone simbolizando um telefone.'} />
            </InfoIcon>
            <InfoData>
              <InfoText>Telefone</InfoText>
              <InfoContent>{`+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}</InfoContent>
            </InfoData>
          </AgentInfoCard>

          <AgentInfoCard>
            <InfoIcon>
              <Image src={dateIcon} alt={'Ícone simbolizando um calendário.'} />
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
