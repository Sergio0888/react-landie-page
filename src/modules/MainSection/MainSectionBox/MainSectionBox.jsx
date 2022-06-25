import styles from './mainsectionbox.module.css'
import MainSectionText from '../MainSectionText/MainSectionText';
import Button from '../../../shared/components/Button/Button';

const MainSectionBox = ({nameImage, btnActive}) => {
    return (
    <div className={`${styles.sectionBox} `}>
        <div className={`container ${styles.direction} ${nameImage}`}>
            <div className={styles.contentBox}>
            <MainSectionText />
            {btnActive && <Button text='Purchase Now' newClass='mainSectionBtn'/>}
            </div>
        </div>
    </div>
    );
};

export default MainSectionBox;