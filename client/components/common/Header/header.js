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
import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';


const Header = () => {

    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <div>
                    <Link href="/home" >
                        <Image src="/facebook.png" alt="facebook" width={37} height={37} />
                    </Link>
                </div>
                <div className={styles.headerSearchContainer}>
                    <input type="text" placeholder="Search Facebook" className={styles.headerSearch} />
                </div>
            </div>
            <div className={styles.headerCenter}>
                <Link href="/home" >
                    <div className={`${router.asPath == '/home' ? styles.headerIconParentActive : styles.headerIconParent}`}>
                        <div className={styles.headerIconContainer}>
                            <HouseOutlinedIcon className={styles.headerIcon} />
                            <span className={styles.headerCenterSpan}>Home</span>
                        </div>
                    </div>
                </Link>
                <Link href="/watch" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <OndemandVideoOutlinedIcon className={styles.headerIcon} />
                            <span className={styles.headerCenterSpan}>Watch</span>
                        </div>
                    </div>
                </Link>
                <Link href="/marketplace" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <StoreOutlinedIcon className={styles.headerIcon} />
                            <span className={styles.headerCenterSpan}>Marketplace</span>
                        </div>
                    </div>
                </Link>
                <Link href="/groups" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <GroupsIcon className={styles.headerIcon} />
                            <span className={styles.headerCenterSpan}>Groups</span>
                        </div>
                    </div>
                </Link>
                <Link href="/gaming" >
                    <div className={styles.headerIconParent}>
                        <div className={styles.headerIconContainer}>
                            <VideogameAssetOutlinedIcon className={styles.headerIcon} />
                            <span className={styles.headerCenterSpan}>Gaming</span>
                        </div>
                    </div>
                </Link>

            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerRightCircle}>
                    <WidgetsIcon />
                    <span className={styles.headerCenterSpan}>Menu</span>
                </div>
                <div className={styles.headerRightCircle}>
                    <QuestionAnswerIcon />
                    <span className={styles.headerCenterSpan}>Chats</span>
                </div>
                <div className={styles.headerRightCircle}>
                    <NotificationsIcon />
                    <span className={styles.headerCenterSpan}>Notifications</span>
                </div>
                <div className={styles.headerRightCircle}>
                    <Image src="/profile.jpg" width={45} height={45} className={styles.headerProfilePic} />
                    <span className={styles.headerCenterSpan}>Account</span>
                </div>

            </div>

        </div >
    )
}
export default Header