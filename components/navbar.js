import utilStyles from '../styles/utils.module.css'
export default function Media () {
    return(
        <div  className={utilStyles.navbar}>
            <h1>Muhammed Gümüş</h1>
            <ul className={utilStyles.navbarList}>
                <li className={utilStyles.navbarListItem}>Home</li>
                <li className={utilStyles.navbarListItem}>Frontend Skills</li>
                <li className={utilStyles.navbarListItem}>Portfolio</li>
                <li className={utilStyles.navbarListItem}>Contact</li>
            </ul>
        </div>
    )
 
}
