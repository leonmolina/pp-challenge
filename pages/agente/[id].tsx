import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { AgentBoard } from "../../components/AgentBoard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Agent } from "../../types/Agent";
import { AgentsType } from "../../types/Agents";
import { DashboardContent } from "../../styles/styles";
import {
  AgentDashboard,
  ContentArea,
  LeftSide,
  Main,
  RightSide,
  Title,
  TitleArea,
  TitleBackButton,
} from "../../styles/agent-styles";
import backButton from "../../public/arrow-left.svg";
import Link from "next/link";

type Props = {
  agent: Agent;
};

const AgentQuery = ({ agent }: Props) => {
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
              <Link href="/">
                <TitleBackButton>
                  <Image
                    src={backButton}
                    alt="Ícone de flecha para a esquerda, indicando voltar à pagina anterior."
                  />
                </TitleBackButton>
              </Link>
              <Title>Detalhes do colaborador</Title>
            </TitleArea>

            {/* Conteúdo */}
            <AgentDashboard className="container">
              <DashboardContent className="container">
                <AgentBoard agent={agent} />
              </DashboardContent>
            </AgentDashboard>
          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default AgentQuery;

// Só percebi que não existia rota pra cada um dos agents depois que fiz as static paths.
export const getStaticPaths = async () => {
  const agentsRes = await api.get("/agents");
  const agents: AgentsType[] = agentsRes.data.items;

  const paths = agents.map((agent) => ({
    params: { id: agent.agent_id.toString() },
  }));
  return { paths, fallback: false };
};

interface IdParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IdParams;

  // const res = await api.get(`/agent/${id}`);   -- se houvesse rota para cada um dos colaboradores.
  const res = await api.get(`/agent/1`);

  const agent = res.data.agent;

  return {
    props: {
      agent,
    },
  };
};
