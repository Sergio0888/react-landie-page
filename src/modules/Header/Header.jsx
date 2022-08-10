import styles from './header.module.css';

import Button from '../../shared/components/Button/Button';

const Header = ({headerText}) => {
    const {title, text} = headerText;
    return (
    <header className={styles.header}>
        <div className='container'>
        <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>{title}</h1>
            <p className={styles.headerText}>{text}</p>
            <div className={styles.headerBtnBox}>
                <Button text="Purchase UI Kit" newClass="headerBtn"/>
                <Button text="Learn More" newClass="headerBtn" outline/>
            </div>
        </div>
        </div>
    </header>
    );
};

export default Header;