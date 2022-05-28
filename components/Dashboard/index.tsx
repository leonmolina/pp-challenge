import { useState } from "react";
import { Collaborators } from "../Collaborators";
import { Roles } from "../Roles";
import { Container, DashboardContent, DashboardTabs, FillerTab, Tab, TabTitle } from "./styles";

export const Dashboard = () => {
  const [tabSelected, setTabSelected] = useState(false);
  return (
    <Container className="container">
      <DashboardTabs className="container">
        <Tab isTabSelected={false}>
          <TabTitle isTabSelected={false}>Colaboradores</TabTitle>
        </Tab>
        <Tab isTabSelected={true}>
          <TabTitle isTabSelected={true}>Cargos</TabTitle>
        </Tab>
        <FillerTab />
      </DashboardTabs>
      <DashboardContent className="container">
        {tabSelected ? <Collaborators /> : <Roles />}
      </DashboardContent>
    </Container>
  );
};
