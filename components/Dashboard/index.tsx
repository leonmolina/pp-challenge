import { useState } from "react";
import { Collaborators } from "../Collaborators";
import { Roles } from "../Roles";
import { Container, DashboardContent, DashboardTabs, FillerTab, Tab, TabTitle } from "./styles";

export const Dashboard = () => {
  const [tabSelected, setTabSelected] = useState(true);
  return (
    <Container className="container">
      <DashboardTabs className="container">
        <Tab isTabSelected={true}>
          <TabTitle isTabSelected={true}>Colaboradores</TabTitle>
        </Tab>
        <Tab isTabSelected={false}>
          <TabTitle isTabSelected={false}>Cargos</TabTitle>
        </Tab>
        <FillerTab />
      </DashboardTabs>
      <DashboardContent className="container">
        {tabSelected ? <Collaborators /> : <Roles />}
      </DashboardContent>
    </Container>
  );
};
