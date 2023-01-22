import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Media() {
  return (
    <div className={utilStyles.navbar}>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <h1>Muhammed Gümüş</h1>
      </div>
      <div className={utilStyles.navbarList}>
        <div>
          <a href="/" className={utilStyles.navbarListItem}>
            Home
          </a>
          <a href="FrontendSkills" className={utilStyles.navbarListItem}>
            Tech Stacks
          </a>
        </div>
        <div>
          <a href="Portfolio" className={utilStyles.navbarListItem}>
            Portfolio
          </a>
          <a href="Contact" className={utilStyles.navbarListItem}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
