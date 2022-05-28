import { useState } from "react";
import { Collaborators } from "../Collaborators";
import { Roles } from "../Roles";
import { Container, DashboardContent, DashboardTabs, FillerTab, Tab, TabTitle } from "./styles";

export const AgentDashboard = () => {
  const [tabSelected, setTabSelected] = useState(false);
  return (
    <Container className="container">
      <DashboardContent className="container">
        {tabSelected ? <Collaborators /> : <Roles />}
      </DashboardContent>
    </Container>
  );
};
