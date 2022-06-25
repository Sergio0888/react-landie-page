import styles from './mainsection.module.css';
import MainSectionText from './MainSectionText/MainSectionText';


const MainSection = () => {
    return (
    <div>
       <div className={`container ${styles.backgroundImage}`}>
        <div className={styles.mainContentBox}>
          <MainSectionText />
            <div className={styles.mainBox}>
                <div className={styles.boxContent}>
                    <span className={styles.svg}></span>
                    <h2 className={styles.boxTitle}>Title Goes Here</h2>
                    <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div className={styles.boxContent}>
                    <span className={styles.svg}></span>
                    <h2 className={styles.boxTitle}>Title Goes Here</h2>
                    <p className={styles.boxText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
            </div>
            </div>
          </div>
        </div>     
    );
};

export default MainSection;