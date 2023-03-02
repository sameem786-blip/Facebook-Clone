//styles.module.css
import styles from '../../../styles/Home.module.css';
//next modules
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'
//icons
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {

    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <div>
                    <Image src="/facebook.png" alt="facebook" width={37} height={37} />
                </div>
                <div className={styles.headerSearchContainer}>
                    <input type="text" placeholder="Search Facebook" className={styles.headerSearch} />
                </div>
            </div>
            <div className={styles.headerCenter}>
                <Link href="/" >
                    <div className={`${router.pathname == '/' ? styles.headerIconParentActive : styles.headerIconParent}`}>
                        <div className={styles.headerIconContainer}>
                            <HouseOutlinedIcon className={styles.headerIcon} />
                        </div>
                    </div>
                </Link>
                <Link href="/watch" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <OndemandVideoOutlinedIcon className={styles.headerIcon} />
                        </div>
                    </div>
                </Link>
                <Link href="/marketplace" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <StoreOutlinedIcon className={styles.headerIcon} />
                        </div>
                    </div>
                </Link>
                <Link href="/groups" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <GroupsIcon className={styles.headerIcon} />
                        </div>
                    </div>
                </Link>
                <Link href="/gaming" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <VideogameAssetOutlinedIcon className={styles.headerIcon} />
                        </div>
                    </div>
                </Link>

            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerRightCircle}>
                    <WidgetsIcon />
                </div>
                <div className={styles.headerRightCircle}>
                    <QuestionAnswerIcon />
                </div>
                <div className={styles.headerRightCircle}>
                    <NotificationsIcon />
                </div>
                <div className={styles.headerRightCircle}>
                    <Image src="/profile.jpg" width={45} height={45} className={styles.headerProfilePic} />
                </div>

            </div>

        </div >
    )
}
export default Header