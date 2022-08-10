import styles from './mainsectiontext.module.css'

const MainSectionText = ({secondSection}) => {
    const {title, text} = secondSection;
    return (
        <div className={styles.box}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        </div>
    );
};

export default MainSectionText;