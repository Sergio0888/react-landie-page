import styles from './mainsectionbox.module.css'
import MainSectionText from '../MainSectionText/MainSectionText';
import Button from '../../../shared/components/Button/Button';
import secondSection from "../../../db/secondsection.json";

const MainSectionBox = ({classImage, btnActive}) => {
    return (
    <div className={`${styles.sectionBox} `}>
        <div className={`container ${styles.direction} ${classImage}`}>
            <div className={styles.contentBox}>
            <MainSectionText secondSection={secondSection}/>
            {btnActive && <Button text='Purchase Now' newClass='mainSectionBtn'/>}
            </div>
        </div>
    </div>
    );
};

export default MainSectionBox;