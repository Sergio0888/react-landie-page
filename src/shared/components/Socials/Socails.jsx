import styles from './socials.module.css'

const Socials = () => {
    return (
        <ul className={styles.socialsList}>
            <li className={styles.socialsItem}>
                <span className={styles.facebook}></span>
            </li>
            <li className={styles.socialsItem}>
                <span className={styles.linkedin}></span>
            </li>
            <li className={styles.socialsItem}>
                <span className={styles.twitter}></span>
            </li>
            <li className={styles.socialsItem}>
                <span className={styles.youtube}></span>
            </li>
            <li className={styles.socialsItem}>
                <span className={styles.instagram}></span>
            </li>
    </ul>
    );
};

export default Socials;