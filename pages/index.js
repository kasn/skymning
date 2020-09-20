import Head from "next/head";
import Layout from "../components/Layout";
import Members from "../components/Members";

const Home = () => (
  <Layout>
    <Head>
      <title>SKYMNiNG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-gradient-to-b from-orange-400 via-red-500 to-blue-900">
      <div>
        <div className="triangle-wrapper block">
          <div className="triangle"></div>
        </div>
        <h1 className="title block flex">
          <img src="/destiny.svg" style={{ fill: "#ffffff" }} />
          SKYMNiNG
        </h1>
      </div>
    </div>

    <div className="container">
      <Members />
    </div>
  </Layout>
);

export default Home;
