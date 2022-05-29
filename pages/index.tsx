import Head from "next/head";
import { useState } from "react";
import { Agents } from "../components/Agents";
import { Header } from "../components/Header";
import { Roles } from "../components/Roles";
import { api } from "../services/api";
import { AgentsType } from "../types/Agents";
import { RolesType } from "../types/Roles";
import { ContentArea, Dashboard, DashboardContent, DashboardTabs, FillerTab, LeftSide, Main, RightSide, Tab, TabTitle, Title, TitleArea } from "./styles";

type Props = {
  agents: AgentsType[],
  roles: RolesType[]
}
// :NextPage
const Home = ({agents, roles}: Props) => {
  const [tabSelected, setTabSelected] = useState('agents');
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
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setTabSelected('agents')} />
                      <Tab className="form-check-label" isTabSelected={false}>
                        <TabTitle isTabSelected={false}>Colaboradores</TabTitle>
                      </Tab>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setTabSelected('roles')} />
                      <Tab className="form-check-label" isTabSelected={true}>
                        <TabTitle isTabSelected={true}>Cargos</TabTitle>
                      </Tab>
                  </div>
                  <FillerTab />
                </DashboardTabs>

                
                {/* Conteúdo */}
                <DashboardContent className="container">

                  {tabSelected === 'agents' ? <Agents agents={agents} /> : <Roles roles={roles} />}
                  
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
    },
    revalidate: 3600
  }
}

export default Home;
