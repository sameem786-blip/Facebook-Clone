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
                <div className={styles.dashboardLeftShortcuts}>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;