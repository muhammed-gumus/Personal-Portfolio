import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
export default function Media () {
    return(
        <div className={utilStyles.banner}>
            <Image className={utilStyles.profile} src="/images/profile.jpg" width={"400px"} height={"400px"} />
            <div>
                mami
            </div>
        </div>
    )
 
}
