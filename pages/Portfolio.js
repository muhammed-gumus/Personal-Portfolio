import Head from "next/head";
import Navbar from "../components/navbar";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className={utilStyles.Portfolio}>
      <Head>
        <title>Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className={utilStyles.skillsTitle}>Portfolio</div>
      <div className={utilStyles.PortfolioContent}>
        <div className={utilStyles.Project}>
          <Image
            src="/images/silvermovie.png"
            width={"340"}
            height={"180"}
            style={{ borderRadius: "25px" }}
          />
          <div>
            <a href="https://github.com/muhammed-gumus/next.js-movie-app">
              Silver Movie
            </a>
            <p>
              Silver Movie is a movie website
              <br /> created using Next.js and Chakra.ui.
              <br />
              The user can easily access all kinds
              <br /> of data about any movie he wants
              <br /> from here.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image
            src="/images/silversea.png"
            width={"340"}
            height={"180"}
            style={{ borderRadius: "25px" }}
          />
          <div>
            <a href="https://github.com/muhammed-gumus/NFT-marketplace">
              SilverSea
            </a>
            <p>
              SilverSea is an NFT Marketplace
              <br /> project coded using Next.js and
              <br />
              Chakra.ui. Users can showcase
              <br /> their NFTs and exchange NFTs.
              <br /> The project, which is currently
              <br /> only in the design phase, will be
              <br /> put into use soon.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image
            src="/images/tfb.png"
            width={"340"}
            height={"180"}
            style={{ borderRadius: "25px" }}
          />
          <div>
            <a href="https://github.com/muhammed-gumus/TFB-website">
              TrueFeedBack
            </a>
            <p>
              A website I designed during my
              <br /> internship at TrueFeedBack. The
              <br /> design taken from Figma was
              <br />
              designed using only HTML and CSS.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image
            src="/images/todojs.png"
            width={"340"}
            height={"180"}
            style={{ borderRadius: "25px" }}
          />
          <div>
            <a href="https://github.com/muhammed-gumus/todo-react">ToDo List</a>
            <p>
              ToDo List is a simple to-do
              <br /> list app that I coded to improve
              <br /> my React and Chakra skills.
              <br /> You can categorize things to do
              <br /> as well as add and subtract.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
