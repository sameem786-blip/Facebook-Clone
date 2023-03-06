import postPool from "../../../public/JSON/posts.js"

import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import { Key } from "@mui/icons-material";

function publicPosts() {
    return (
        <>
            {postPool.map((post) => (
                < div className={styles.dashboardPublicPost}>
                    < div className={styles.postHeader} >
                        <div className={styles.postHeaderPicture}>
                            <Image src={post.ownerPicture} width={40} height={40} className={styles.headerProfilePic} />
                        </div>
                        <div className={styles.postOwnerTime}>
                            <p className={styles.owner}>{post.postOwner}</p>
                            <p className={styles.duration}>35 m.</p>
                        </div>
                        <div className={styles.postHeaderOptions}>
                            <MoreHorizIcon className={styles.headerOption} />
                        </div>
                        <div className={styles.postHeaderOptions}>
                            <CloseIcon className={styles.headerOption} />
                        </div>

                    </div >
                    <div className={styles.postBody}>
                        <p className={styles.postBodyText}>{post.postBody}</p>
                    </div>
                    <div className={styles.postMedia}>
                        <Image src={post.postMedia} width={500} height={500} className={styles.postMediaPic} />

                    </div>
                    <div className={styles.postReactions}>
                        <div className={styles.postLikes}>
                            <RecommendIcon className={styles.postLikeIcon} />
                            <p clas>{post.postLikes}</p>
                        </div>
                        <div className={styles.postCommentShares}>
                            <p className={styles.comments}>{post.postComments} comments</p>
                            <p className={styles.shares}>{post.shares} shares</p>
                        </div>
                    </div>
                    <div className={styles.postLineBreak}></div>
                    <div className={styles.postFooter}>
                        <div className={styles.dashboardCreatePostActions}>
                            <ThumbUpIcon className={styles.postLikeBtn} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Likes
                            </div>
                        </div>
                        <div className={styles.dashboardCreatePostActions}>
                            <MessageIcon className={styles.postCommentBtn} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Comments
                            </div>
                        </div>
                        <div className={styles.dashboardCreatePostActions}>
                            <NotificationsIcon className={styles.postSendBtn} />
                            <div className={styles.dashboardCreatePostActionsDesc}>
                                Share
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}
export default publicPosts