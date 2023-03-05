import postPool from "../../../public/JSON/posts.js"

import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import RecommendIcon from '@mui/icons-material/Recommend';

function publicPosts() {
    return (
        <>
            <div className={styles.postHeader} >
                <div className={styles.postHeaderPicture}>
                    <Image src={postPool[0].ownerPicture} width={40} height={40} className={styles.headerProfilePic} />
                </div>
                <div className={styles.postOwnerTime}>
                    <p className={styles.owner}>{postPool[0].postOwner}</p>
                    <p className={styles.duration}>35 m.</p>
                </div>
                <div className={styles.postHeaderOptions}>
                    <MoreHorizIcon className={styles.headerOption} />
                </div>
                <div className={styles.postHeaderOptions}>
                    <CloseIcon className={styles.headerOption} />
                </div>

            </div>
            <div className={styles.postBody}>
                <p className={styles.postBodyText}>{postPool[0].postBody}</p>
            </div>
            <div className={styles.postMedia}>
                <Image src={postPool[0].postMedia} width={500} height={500} className={styles.postMediaPic} />
            </div>
            <div className={styles.postReactions}>
                <div className={styles.postLikes}>
                    <RecommendIcon />
                </div>
                <div className={styles.postCommentShares}>
                    <p className={styles.comments}>{postPool[0].postComments} comments</p>
                    <p className={styles.shares}>{postPool[0].shares} shares</p>
                </div>
            </div>
        </>
    )
}
export default publicPosts