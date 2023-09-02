import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
