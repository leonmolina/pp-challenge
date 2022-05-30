import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Agents } from "../components/Agents";
import { Header } from "../components/Header";
import { Roles } from "../components/Roles";
import { api } from "../services/api";
import { AgentsType } from "../types/Agents";
import { RolesType } from "../types/Roles";
import {
  ContentArea,
  Dashboard,
  DashboardContent,
  DashboardTabs,
  FillerTab,
  LeftSide,
  Main,
  MobileTabs,
  RightSide,
  Tab,
  TabTitle,
  Title,
  TitleArea,
} from "../styles/styles";
import { TabsDropdown } from "../components/partials/TabsDropdown";

type Props = {
  agents: AgentsType[];
  roles: RolesType[];
};
// :NextPage
const Home = ({ agents, roles }: Props) => {
  const [tabSelected, setTabSelected] = useState("agents");
  const [agentsSelected, setAgentsSelected] = useState(true);
  const [rolesSelected, setRolesSelected] = useState(false);

  const handleTab = (tab: string) => {
    setTabSelected(tab);
    if (tab === 'agents') {
      setAgentsSelected(true);
      setRolesSelected(false);
    } else {
      setAgentsSelected(false);
      setRolesSelected(true);
    }
  }

  return (
    <>
      <Head>
        <title>Organização</title>
        <meta name="description" content="Organization dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main className="container-fluid">
        {/* Sidebar */}
        <LeftSide className="container" />

        {/* Main content */}
        <RightSide className="container">
          <ContentArea className="container">
            {/* Título da página */}
            <TitleArea>
              <Title>Organização</Title>
            </TitleArea>

            {/* Conteúdo */}

            <Dashboard className="container">
              <DashboardTabs className="container">

                  <Tab className="form-check-label" isTabSelected={agentsSelected} onClick={() => handleTab('agents')}>
                    <TabTitle isTabSelected={agentsSelected}>Colaboradores</TabTitle>
                  </Tab>

                  <Tab className="form-check-label" isTabSelected={rolesSelected} onClick={() => handleTab('roles')}>
                    <TabTitle isTabSelected={rolesSelected}>Cargos</TabTitle>
                  </Tab>
                {/* Barra horizontal fixa */}
                <FillerTab />


              </DashboardTabs>
                {/* Tabs no celular */}
                <MobileTabs>
                    <TabsDropdown set={setTabSelected}>
                    {tabSelected === "agents" ? (
                      <span>Colaboradores</span>
                    ) : (
                      <span>Cargos</span>
                    )}
                    </TabsDropdown>
                </MobileTabs>

              {/* Conteúdo */}
              <DashboardContent className="container">
                {tabSelected === "agents" ? (
                  <Agents agents={agents} />
                ) : (
                  <Roles roles={roles} />
                )}
              </DashboardContent>
            </Dashboard>
          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const agentsRes = await api.get("/agents");
  const rolesRes = await api.get("/roles");
  const agents = agentsRes.data.items;
  const roles = rolesRes.data.roles;
  return {
    props: {
      agents,
      roles,
    },
    revalidate: 3600,
  };
};

