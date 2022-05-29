import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { CollaboratorCard } from "../components/CollaboratorCard";
import { Collaborators } from "../components/Collaborators";
import { Header } from "../components/Header";
import { Roles } from "../components/Roles";
import { api } from "../services/api";
import { Agents } from "../types/Agents";
import { RolesType } from "../types/Roles";
import { ContentArea, Dashboard, DashboardContent, DashboardTabs, FillerTab, LeftSide, Main, RightSide, Tab, TabTitle, Title, TitleArea } from "./styles";

type Props = {
  agents: Agents[],
  roles: RolesType[]
}
// :NextPage
const Home = ({agents, roles}: Props) => {
  const [tabSelected, setTabSelected] = useState(false);
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
                  <Tab isTabSelected={false}>
                    <TabTitle isTabSelected={false}>Colaboradores</TabTitle>
                  </Tab>
                  <Tab isTabSelected={true}>
                    <TabTitle isTabSelected={true}>Cargos</TabTitle>
                  </Tab>
                  <FillerTab />
                </DashboardTabs>
                
                {/* Conteúdo */}
                <DashboardContent className="container">
                  {tabSelected ? <Collaborators agents={agents} /> : <Roles roles={roles} />}
                </DashboardContent>

            </Dashboard>

          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const agentsRes = await api.get("/agents");
  const rolesRes = await api.get("/roles");
  const agents = agentsRes.data.items;
  const roles = rolesRes.data.roles;
  return {
    props: {
      agents,
      roles
    }
  }
}

export default Home;
