import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Media() {
  return (
    <div className={utilStyles.skillsPage}>
      <Head>
        <title>Tech Stacks</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar className={utilStyles.navbar} />
      <div className={utilStyles.skills}>
        <div className={utilStyles.skillsTitle}>Tech Stacks</div>
        <div className={utilStyles.skillsContent}>
          <Image
            src="/images/HTML.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image src="/images/CSS.png" width={"120"} height={"120"}></Image>
          <Image
            src="/images/JavaScript.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/TypeScript.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/React.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Next.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Ethers.jpg"
            width={"120"}
            height={"120"}
            style={{ borderRadius: "90" }}
          ></Image>
          <Image
            src="/images/Solidity.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/C.png"
            width={"120"}
            height={"120"}
            style={{ borderRadius: "90" }}
          ></Image>
          <Image
            src="/images/Redux.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Chakra.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Tailwind.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Github.png"
            width={"120"}
            height={"120"}
          ></Image>
          <Image
            src="/images/Figma.png"
            width={"120"}
            height={"120"}
          ></Image>
        </div>
        <Link
          href="/Junior_Frontend_Developer_Muhammed_Gümüş_CV.pdf"
          target="_blank"
          download
        >
          <button className={utilStyles.BannerBtn}>Review My Cv</button>
        </Link>
      </div>
    </div>
  );
}
