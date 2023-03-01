import styles from '../../../styles/Home.module.css';
import Image from 'next/image';

function Header() {
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
                <div className={styles.headerHome}>
                    Home
                </div>
                <div className={styles.headerWatch}>
                    Home
                </div>
                <div className={styles.headerMarketplace}>
                    Home
                </div>
                <div className={styles.headerGroups}>
                    Home
                </div>
                <div className={styles.headerGaming}>
                    Home
                </div>

            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerHome}>
                    Home
                </div>
                <div className={styles.headerWatch}>
                    Home
                </div>
                <div className={styles.headerMarketplace}>
                    Home
                </div>
                <div className={styles.headerGroups}>
                    Home
                </div>
                <div className={styles.headerGaming}>
                    Home
                </div>

            </div>

        </div>
    )
}
export default Header