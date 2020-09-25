import Head from "next/head";
import Layout from "../components/Layout";
import Members from "../components/Members";
import Destiny from "../svg/destiny.svg";
import Footer from "../components/Footer";

const Home = () => (
  <Layout>
    <Head>
      <title>SKYMNiNG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="banner">
      <div>
        <div className="triangle-wrapper block">
          <div className="triangle"></div>
        </div>
        <h1 className="title">
          <Destiny
            fill="#fff"
            style={{
              width: "60px",
              height: "60px",
            }}
          />
          SKYMNiNG
        </h1>
      </div>
    </div>
    <div className="hero container">
      Destiny 2 Clan since 2017.{" "}
      <a
        href="https://discord.gg/SuXxaUb"
        target="_blank"
        rel="noopener norefferer"
      >
        Join our discord
      </a>
    </div>
    <div className="container">
      <Members />
    </div>
    <div>
      <Footer />
    </div>
  </Layout>
);

export default Home;
