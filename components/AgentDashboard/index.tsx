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
  DashboardContent,
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

export const AgentDashboard = () => {
  return (
    <Container className="container">
      <DashboardContent className="container">
        <AgentHeader>
          <AgentAvatar>Imagem</AgentAvatar>
          <AgentData>
            <AgentName>Mothra Fernandes</AgentName>
            <AgentEmail>mothrafernandes@gmail.com</AgentEmail>
          </AgentData>
        </AgentHeader>

        <AgentInfo>
          <InfoTitle>Informações pessoais</InfoTitle>

          <InfoCardsArea>
            <AgentInfoCard>
              <InfoIcon>Ícone</InfoIcon>
              <InfoData>
                <InfoText>CPF</InfoText>
                <InfoContent>601 189 760 60</InfoContent>
              </InfoData>
            </AgentInfoCard>

            <AgentInfoCard>
              <InfoIcon>Ícone</InfoIcon>
              <InfoData>
                <InfoText>Telefone</InfoText>
                <InfoContent>+55 89 2635 5467</InfoContent>
              </InfoData>
            </AgentInfoCard>

            <AgentInfoCard>
              <InfoIcon>Ícone</InfoIcon>
              <InfoData>
                <InfoText>Nascimento</InfoText>
                <InfoContent>29/11/1990</InfoContent>
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
      </DashboardContent>
    </Container>
  );
};
