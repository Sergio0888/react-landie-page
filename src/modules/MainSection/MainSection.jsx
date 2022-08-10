import styles from './mainsection.module.css';
import MainSectionText from './MainSectionText/MainSectionText';
import secondSection from "../../db/secondsection.json";


const MainSection = ({sectionText}) => {
    const {title, text } = sectionText;
    return (
    <div>
       <div className={`container ${styles.backgroundImage}`}>
        <div className={styles.mainContentBox}>
          <MainSectionText secondSection={secondSection}/>
            <div className={styles.mainBox}>
                <div className={styles.boxContent}>
                    <span className={styles.svg}></span>
                    <h2 className={styles.boxTitle}>{title}</h2>
                    <p className={styles.boxText}>{text}</p>
                </div>
                <div className={styles.boxContent}>
                    <span className={styles.svg}></span>
                    <h2 className={styles.boxTitle}>{title}</h2>
                    <p className={styles.boxText}>{text}</p>
                </div>
            </div>
            </div>
          </div>
        </div>     
    );
};

export default MainSection;