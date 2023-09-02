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
          <Image src="/images/listedfy.png" width={"340"} height={"180"} />
          <div>
            <a href="https://github.com/muhammed-gumus/next.js-movie-app">
              Listedfy App
            </a>
            <p>
              Utilized Airtable as a database
              <br /> solution to facilitate user
              <br /> interaction with songs and playlist <br /> creation,
              contributing to a seamless <br /> user experience. Completed the
              <br /> project by incorporating the Spotify
              <br /> API into my design and developing
              <br /> the entire platform using Next.js
              <br /> and TailwindCSS.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image src="/images/kampus.png" width={"340"} height={"180"} />
          <div>
            <a href="https://github.com/muhammed-gumus/next.js-movie-app">
              kamp.us
            </a>
            <p>
              Kamp.us is an open source
              <br /> project developed on a discord
              <br /> server called kamp.us. In this
              <br /> project, I coded the components
              <br /> to be used in the interface with
              <br /> typescript and shadcn ui and
              <br /> wrote stories to list these
              <br /> components on the storybook.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image src="/images/silvermovie.png" width={"340"} height={"180"} />
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
          <Image src="/images/silversea.png" width={"340"} height={"180"} />
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
          <Image src="/images/sencha.png" width={"340"} height={"180"} />
          <div>
            <a href="https://github.com/muhammed-gumus/next.js-movie-app">
              SenchaBot
            </a>
            <p>
              SenchaBot is an open source <br />
              discord and twitch bot developed
              <br /> on the discord server kamp.us. In
              <br /> this project, I created components
              <br />
              to be displayed in the interface using
              <br /> typescript and material ui.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image src="/images/tfb.png" width={"340"} height={"180"} />
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
          <Image src="/images/mergebot.png" width={"340"} height={"180"} />
          <div>
            <a href="https://github.com/muhammed-gumus/todo-react">MergeBot</a>
            <p>
              MergeBot is a GitHub bot.
              <br /> Using Axios, I brought the
              <br /> data I pulled from GitHub API
              <br /> to the user with Node.js. Pull
              <br /> requests that are closed in
              <br /> the desired repository of the
              <br /> desired user are received and
              <br /> written to a file with md extension
              <br /> with the specified syntax.
            </p>
          </div>
        </div>
        <div className={utilStyles.Project}>
          <Image src="/images/host.jpeg" width={"340"} height={"180"} />
          <div>
            <a href="https://silver-host.vercel.app/">Silver Host</a>
            <p>
              I designed the layout using
              <br /> Figma and then coded a <br />
              responsive website using HTML
              <br /> and CSS. To improve the SEO of
              <br /> my website, I conducted keyword
              <br /> research and optimized meta
              <br /> descriptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
