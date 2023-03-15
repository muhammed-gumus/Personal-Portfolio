import utilStyles from "../styles/utils.module.css";
export default function Media() {
  return (
    <div className={utilStyles.navbar}>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <h1 style={{fontFamily: "Orbitron"}}>Muhammed Gümüş</h1>
      </div>
      <div className={utilStyles.navbarList}>
        <div >
          <a style={{fontFamily: "Orbitron"}} href="/" className={utilStyles.navbarListItem}>
            Home
          </a>
          <a style={{fontFamily: "Orbitron"}} href="FrontendSkills" className={utilStyles.navbarListItem}>
            Tech Stacks
          </a>
        </div>
        <div>
          <a style={{fontFamily: "Orbitron"}} href="Portfolio" className={utilStyles.navbarListItem}>
            Portfolio
          </a>
          <a style={{fontFamily: "Orbitron"}} href="Contact" className={utilStyles.navbarListItem}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
