import styles from './header.module.css';

import Button from '../../shared/components/Button/Button';

const Header = () => {
    return (
    <header className={styles.header}>
        <div className='container'>
        <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Introduce Your Product Quickly & Effectively</h1>
            <p className={styles.headerText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/> <br/>
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
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