import Head from "next/head";
import Navbar from "../components/navbar";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={utilStyles.Contact}>
      <Head>
        <title>Contact</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className={utilStyles.skillsTitle}>Contact</div>
      <did className={utilStyles.ContactContent}>
        <div style={{ position: "relative" }}>
          <div className={utilStyles.iphoneContent}>
            <Image
              src="/images/profile.jpg"
              width={"20px"}
              height={"20px"}
              style={{ borderRadius: "30px" }}
            />
            <h5>Muhammed Gümüş</h5>
            <p>Frontend Developer</p>
            <div className={utilStyles.iphoneBtnGroup}>
              <Link href={"mailto:mr.silver.mg@gmail.com"}>
                <button className={utilStyles.iphoneBtn}>Mail</button>
              </Link>
              <Link href={"https://www.linkedin.com/in/muhammedgums"}>
                <button className={utilStyles.iphoneBtn}>Linkedin</button>
              </Link>
              <Link href={"https://github.com/muhammed-gumus"}>
                <button className={utilStyles.iphoneBtn}>Github</button>
              </Link>
              <Link href={"https://twitter.com/1silvermami1"}>
                <button className={utilStyles.iphoneBtn}>Twitter</button>
              </Link>
              <Link href={"https://medium.com/@mr.silver.mg"}>
                <button className={utilStyles.iphoneBtn}>Medium</button>
              </Link>
            </div>
          </div>
          <img
            src="/images/iphone.png"
            className={utilStyles.ContactImg1}
          ></img>
        </div>
        <div style={{ position: "relative" }}>
          <div className={utilStyles.macContent}>
            <Image
              src="/images/profile.jpg"
              width={"35px"}
              height={"35px"}
              style={{ borderRadius: "30px" }}
            />
            <h3>Muhammed Gümüş</h3>
            <p>Frontend Developer</p>
            <div className={utilStyles.macBtnGroup}>
              <Link href={"mailto:mr.silver.mg@gmail.com"}>
                <button className={utilStyles.macBtn}>Mail</button>
              </Link>
              <Link href={"https://www.linkedin.com/in/muhammedgums"}>
                <button className={utilStyles.macBtn}>Linkedin</button>
              </Link>
              <Link href={"https://github.com/muhammed-gumus"}>
                <button className={utilStyles.macBtn}>Github</button>
              </Link>
              <Link href={"https://twitter.com/1silvermami1"}>
                <button className={utilStyles.macBtn}>Twitter</button>
              </Link>
              <Link href={"https://medium.com/@mr.silver.mg"}>
                <button className={utilStyles.macBtn}>Medium</button>
              </Link>
            </div>
          </div>
          <img src="/images/mac.png" className={utilStyles.ContactImg2}></img>
        </div>
        <div style={{ position: "relative" }}>
          <div className={utilStyles.ipadContent}>
            <Image
              src="/images/profile.jpg"
              width={"30px"}
              height={"30px"}
              style={{ borderRadius: "30px" }}
            />
            <h3>Muhammed Gümüş</h3>
            <p>Frontend Developer</p>
            <div className={utilStyles.ipadBtnGroup}>
              <Link href={"mailto:mr.silver.mg@gmail.com"}>
                <button className={utilStyles.ipadBtn}>Mail</button>
              </Link>
              <Link href={"https://www.linkedin.com/in/muhammedgums"}>
                <button className={utilStyles.ipadBtn}>Linkedin</button>
              </Link>
              <Link href={"https://github.com/muhammed-gumus"}>
                <button className={utilStyles.ipadBtn}>Github</button>
              </Link>
              <Link href={"https://twitter.com/1silvermami1"}>
                <button className={utilStyles.ipadBtn}>Twitter</button>
              </Link>
              <Link href={"https://medium.com/@mr.silver.mg"}>
                <button className={utilStyles.ipadBtn}>Medium</button>
              </Link>
            </div>
          </div>
          <img src="/images/ipad.png" className={utilStyles.ContactImg3}></img>
        </div>
      </did>
    </div>
  );
}
