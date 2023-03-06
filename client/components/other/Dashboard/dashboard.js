import styles from '../../../styles/Home.module.css';

import Image from 'next/image';

import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';

import PublicPosts from "../publicPosts/publicPosts";

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardLeft}>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Sameem Abbas
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <GroupIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Friends
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <CalendarMonthIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Events
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <RecentActorsIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Most recent
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <GroupsIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Groups
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <StoreIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Marketplace
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <OndemandVideoIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Watch
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <svg width={0} height={0}>
                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                <stop offset={0} stopColor="rgba(13,215,205,1)" />
                                <stop offset={1} stopColor="rgba(24,123,232,1)" />
                            </linearGradient>
                        </svg>
                        <HistoryIcon className={styles.dashboardLeftIcon} sx={{ fill: "url(#linearColors)" }} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Memories
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.headerRightCircle}>

                        <KeyboardArrowDownIcon />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        See More
                    </div>
                </div>
                <div className={styles.dashboardLeftLineBreak}>
                </div>
                <div className={styles.dashboardRightHeading}>
                    <div className={styles.dashboardRightHeadingText}>
                        Shortcuts
                    </div>
                    <div className={styles.dashboardRightHeadingIcon}>
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/studentcommunity.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Student Community @ DHA Suffa University
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/studentcommunity.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        DHA Suffa University Model United Nations
                    </div>
                </div>
            </div>
            <div className={styles.dashboardCenter}>
                <div className={styles.dashboardCreatePost}>
                    <div className={styles.dashboardCreatePostContainer}>
                        <div className={styles.dashboardLeftActionsIconContainer}>
                            <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                        </div>
                        <div className={styles.headerSearchContainer}>
                            <input type="text" placeholder="Search Facebook" className={styles.dashboardCreatePostInput} />
                        </div>

                    </div>
                    <div className={styles.dashboardCreatePostContainer}>
                        <div className={styles.dashboardCreatePostLineBreak}>
                        </div>
                    </div>
                    <div className={styles.dashboardCreatePostContainer}>
                        <div className={styles.dashboardCreatePostActions}>
                            <VideoCameraFrontRoundedIcon className={styles.createPostVideo} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Live Video
                            </div>
                        </div>
                        <div className={styles.dashboardCreatePostActions}>
                            <CollectionsRoundedIcon className={styles.createPostGallery} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Photo/video
                            </div>
                        </div>
                        <div className={styles.dashboardCreatePostActions}>
                            <MoodRoundedIcon className={styles.createPostEmoji} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Feeling/activity
                            </div>
                        </div>
                    </div>
                </div>

                <PublicPosts />

            </div>
            <div className={styles.dashboardRight}>
                <div className={styles.dashboardRightHeading}>
                    <div className={styles.dashboardRightHeadingText}>
                        Your Pages and profiles
                    </div>
                    <div className={styles.dashboardRightHeadingIcon}>
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/studentcommunity.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        DHA Suffa University Model United Nations
                    </div>
                </div>
                <div className={styles.dashboardLeftLineBreak}>
                </div>
                <div className={styles.dashboardRightHeading}>
                    <div className={styles.dashboardRightHeadingText}>
                        Contacts
                    </div>
                    <div className={styles.dashboardRightHeadingIcon}>
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Muhammad Ali
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Shyam Gopal Bajaj
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Ram Gopal Bajaj
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Murli Prasad Sharma
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Saleem Jahanzaib
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Saifullah Khan
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Akbar Khan
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Aurangzeb Alamgir
                    </div>
                </div>
                <div className={styles.dashboardLeftActions}>
                    <div className={styles.dashboardLeftActionsIconContainer}>
                        <Image src="/profile.jpg" width={40} height={40} className={styles.headerProfilePic} />
                    </div>
                    <div className={styles.dashboardLeftText}>
                        Babar Azam
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard;