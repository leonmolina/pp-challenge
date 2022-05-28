import { useState } from "react";
import { Collaborators } from "../Collaborators";
import { Roles } from "../Roles";
import { Container, DashboardTabs, FillerTab, Tab, TabTitle } from "./styles";

export const Dashboard = () => {
  const [tabSelected, setTabSelected] = useState(true);
  return (
    <Container>
      <DashboardTabs>
        <Tab isTabSelected={true}>
          <TabTitle isTabSelected={true}>Colaboradores</TabTitle>
        </Tab>
        <Tab isTabSelected={false}>
          <TabTitle isTabSelected={false}>Cargos</TabTitle>
        </Tab>
        <FillerTab />
      </DashboardTabs>
      {tabSelected ? <Collaborators /> : <Roles />}
    </Container>
  );
};
