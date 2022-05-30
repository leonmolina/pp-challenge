import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
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
} from "../../styles/role-styles";
import backButton from "../../public/arrow-left.svg";
import Link from "next/link";
import { Role } from "../../types/Role";
import { RoleBoard } from "../../components/RoleBoard";
import { RolesType } from "../../types/Roles";

type Props = {
  role: Role;
};

const RoleQuery = ({ role }: Props) => {
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
              <Title>Cargos e permissões</Title>
            </TitleArea>

            {/* Conteúdo */}
            <AgentDashboard className="container">
              <DashboardContent className="container">
                <RoleBoard role={role} />
              </DashboardContent>
            </AgentDashboard>
          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default RoleQuery;

// Só percebi que não existia rota pra cada um dos agents depois que fiz as static paths.
export const getStaticPaths = async () => {
  const rolesRes = await api.get("/roles");
  const roles: RolesType[] = rolesRes.data.roles;

  const paths = roles.map((role, index) => ({
    params: { id: index.toString()},
  }));
  return { paths, fallback: false };
};

interface IdParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IdParams;

  // const res = await api.get(`/role/${id}`);   -- se houvesse rota para cada um dos colaboradores.
  const res = await api.get(`/role/1`);

  const role = res.data.role;

  return {
    props: {
      role,
    },
  };
};
