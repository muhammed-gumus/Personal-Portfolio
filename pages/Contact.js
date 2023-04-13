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
      <div className={utilStyles.ContactContent}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <p>You can reach me by clicking the links.</p>
        <div style={{ display: "flex", flexDirection: "column", marginTop: ".5rem", gap: ".5rem"}}>        
        <a style={{display: "inline-block", WebkitTextFillColor: "transparent",background: "linear-gradient(90deg, rgba(8,133,27,1) 0%, rgba(233,233,233,1) 76%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: "text", textDecoration: "none", display: "flex", flexDirection: "row"}} href="mailto:mgumus4102@gmail.com"><img src="/images/gmail.png" />Send me Mail</a>
        <a style={{display: "inline-block", WebkitTextFillColor: "transparent",background: "linear-gradient(90deg, rgba(0,119,181,1) 0%, rgba(53,205,255,1) 50%, rgba(255,255,255,1) 90%)", WebkitBackgroundClip: "text", textDecoration: "none", display: "flex", flexDirection: "row"}} href="https://www.linkedin.com/in/muhammedgums"><img src="/images/linkedin.png" />Connect with me on LinkedIn</a>
        <a style={{display: "inline-block", WebkitTextFillColor: "transparent",background: "linear-gradient(90deg, rgba(89,89,89,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: "text", textDecoration: "none", display: "flex", flexDirection: "row"}} href="https://github.com/muhammed-gumus"><img src="/images/Github.png" />Check out my Github projects</a>
        <a style={{display: "inline-block", WebkitTextFillColor: "transparent",background: "linear-gradient(90deg, rgba(29,161,242,1) 0%, rgba(163,221,255,1) 50%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: "text", textDecoration: "none", display: "flex", flexDirection: "row"}} href="https://twitter.com/devmamidev"><img src="/images/twitter.png" />Follow me on Twitter</a>
        </div>
      </div>
      <Image 
        src="/images/contact.png"
        width={"150"}
        height={"140"}
        style={{borderRadius: "40px"}} />
        
      </div>
    </div>
  );
}








// <div className={utilStyles.ContactContent} style={{display: "flex", flexDirection: "column"}}>
        
//         <div style={{ position: "relative" }}>
//           <div className={utilStyles.macContent}>
//             <Image
//               src="/images/profile.jpg"
//               width={"35"}
//               height={"35"}
//               style={{ borderRadius: "30px" }}
//             />
//             <h3>Muhammed Gümüş</h3>
//             <p>Frontend Developer</p>
//             <div className={utilStyles.macBtnGroup}>
//               <Link href={"mailto:mr.silver.mg@gmail.com"}>
//                 <button className={utilStyles.macBtn}>Mail</button>
//               </Link>
//               <Link href={"https://www.linkedin.com/in/muhammedgums"}>
//                 <button className={utilStyles.macBtn}>LinkedIn</button>
//               </Link>
//               <Link href={"https://github.com/muhammed-gumus"}>
//                 <button className={utilStyles.macBtn}>Github</button>
//               </Link>
//               <Link href={"https://twitter.com/1silvermami1"}>
//                 <button className={utilStyles.macBtn}>Twitter</button>
//               </Link>
//             </div>
//           </div>
//           <img src="/images/mac.png" className={utilStyles.ContactImg2}></img>
//         </div>
//         <div style={{ position: "relative", display: "flex", flexDirection: "row", marginTop: ".5rem", gap: "20rem"}}>
//           <div className={utilStyles.ipadContent}>
//             <Image
//               src="/images/profile.jpg"
//               width={"30"}
//               height={"30"}
//               style={{ borderRadius: "30px" }}
//             />
//             <h3>Muhammed Gümüş</h3>
//             <p>Frontend Developer</p>
//             <div className={utilStyles.ipadBtnGroup}>
//               <Link href={"mailto:mr.silver.mg@gmail.com"}>
//                 <button className={utilStyles.ipadBtn}>Mail</button>
//               </Link>
//               <Link href={"https://www.linkedin.com/in/muhammedgums"}>
//                 <button className={utilStyles.ipadBtn}>Linkedin</button>
//               </Link>
//               <Link href={"https://github.com/muhammed-gumus"}>
//                 <button className={utilStyles.ipadBtn}>Github</button>
//               </Link>
//               <Link href={"https://twitter.com/1silvermami1"}>
//                 <button className={utilStyles.ipadBtn}>Twitter</button>
//               </Link>
//               <Link href={"https://medium.com/@mr.silver.mg"}>
//                 <button className={utilStyles.ipadBtn}>Medium</button>
//               </Link>
//             </div>
//           </div>
//           <img src="/images/ipad.png" className={utilStyles.ContactImg3}></img>
//           <div className={utilStyles.iphoneContent1} style={{ position: "relative" }}>
//           <div className={utilStyles.iphoneContent}>
//             <Image
//               src="/images/profile.jpg"
//               width={"20"}
//               height={"20"}
//               style={{ borderRadius: "30px" }}
//             />
//             <h5>Muhammed Gümüş</h5>
//             <p>Frontend Developer</p>
//             <div className={utilStyles.iphoneBtnGroup}>
//               <Link href={"mailto:mr.silver.mg@gmail.com"}>
//                 <button className={utilStyles.iphoneBtn}>Mail</button>
//               </Link>
//               <Link href={"https://www.linkedin.com/in/muhammedgums"}>
//                 <button className={utilStyles.iphoneBtn}>Linkedin</button>
//               </Link>
//               <Link href={"https://github.com/muhammed-gumus"}>
//                 <button className={utilStyles.iphoneBtn}>Github</button>
//               </Link>
//               <Link href={"https://twitter.com/1silvermami1"}>
//                 <button className={utilStyles.iphoneBtn}>Twitter</button>
//               </Link>
//               <Link href={"https://medium.com/@mr.silver.mg"}>
//                 <button className={utilStyles.iphoneBtn}>Medium</button>
//               </Link>
//             </div>
//           </div>
//           <img
//             src="/images/iphone.png"
//             className={utilStyles.ContactImg1}
//           ></img>
//         </div>
//         </div>
//       </div>