import { AgentAvatar, AgentData, AgentEmail, AgentHeader, AgentInfo, AgentName, Container, DashboardContent } from "./styles";

export const AgentDashboard = () => {
  return (
    <Container className="container">
      <DashboardContent className="container">

        <AgentHeader>
          <AgentAvatar></AgentAvatar>
          <AgentData>
            <AgentName></AgentName>
            <AgentEmail></AgentEmail>
          </AgentData>
        </AgentHeader>

        <AgentInfo>

        </AgentInfo>

      </DashboardContent>
    </Container>
  );
};
