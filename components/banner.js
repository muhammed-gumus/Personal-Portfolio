import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Media () {
    return(
        <div className={utilStyles.banner}>
            <Image className={utilStyles.BannerProfile} src="/images/profile.jpg" width={"450px"} height={"450px"} />
            <div className={utilStyles.BannerRight}>
                <div className={utilStyles.BannerTexts}>
                    <p className={utilStyles.BannerTitle}>Frontend Developer</p>
                    <p className={utilStyles.BannerName}>Muhammed Gümüş</p>
                    <p className={utilStyles.BannerAbout}>Hi. I'm Muhammed. I am a 3rd year Computer Engineering student. I have been <br/> 
                    continuing my programming adventure, which started 2 years ago, as a Frontend<br/>  
                    Developer for 1 year. I am open to learning and development.</p>
                </div>
                <div>
                    <a href='Contact'><button className={utilStyles.BannerBtn}>Contact Me</button></a>
                </div>
            </div>
        </div>
    )
 
}
