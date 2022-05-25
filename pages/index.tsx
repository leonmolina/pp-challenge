import type { NextPage } from "next";
import Head from "next/head";
import { Dashboard } from "../components/Dashboard";
import { ContentArea, LeftSide, Main, RightSide, TitleArea } from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Organização</title>
        <meta name="description" content="Organization dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <LeftSide />
        <RightSide>
          <ContentArea>
            <TitleArea>
              <h1>Organização</h1>
            </TitleArea>
            <Dashboard />
          </ContentArea>
        </RightSide>
      </Main>
    </>
  );
};

export default Home;
