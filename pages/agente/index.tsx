import type { NextPage } from "next";
import Head from "next/head";
import { AgentDashboard } from "../../components/AgentDashboard";
import { Collaborators } from "../../components/Collaborators";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { ContentArea, LeftSide, Main, RightSide, Title, TitleArea } from "./styles";

const Agent: NextPage = () => {
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
              <Title>Detalhes do colaborador</Title>
            </TitleArea>
            
            {/* Conteúdo */}
            {/* <Dashboard /> */}
            <AgentDashboard />

          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default Agent;
