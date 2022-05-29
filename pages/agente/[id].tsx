import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { AgentDashboard } from "../../components/AgentDashboard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Agent } from "../../types/Agent";
import { Agents } from "../../types/Agents";
import { ContentArea, LeftSide, Main, RightSide, Title, TitleArea } from "./styles";

type Props = {
  agent: Agent;
}

const AgentQuery = ({agent}: Props) => {
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
            <AgentDashboard />

          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default AgentQuery;

export const getStaticPaths = async () => {
  
  const agentsRes = await api.get("/agents");
  const agents: Agents[] = agentsRes.data.items;
  
  const paths = agents.map(agent => ({
    params: { id: agent.agent_id.toString() }
  }));
  return {paths, fallback: false};
}

interface IdParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  
  const { id } = context.params as IdParams;

  const res = await api.get(`/agent/${id}`);
  const agent = res.data.agent;

  return {
    props: {
      agent
    }
  }
}