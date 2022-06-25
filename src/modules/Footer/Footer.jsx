import styles from './footer.module.css';
import menu from '../../db/menu';
import Button from '../../shared/components/Button/Button';
import Logo from '../../shared/components/Logo/Logo';
import NavBarMenu from '../NavBar/NavBarMenu/NavBarMenu';
import Socials from '../../shared/components/Socials/Socails'


const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.mainBox}>
                <p className={styles.Copy}>©2020 Yourcompany</p>
                <Logo />
                <Button text="Purchase now" newClass="footerBtn" />
            </div>
            <span className={styles.line}></span>
            <div className={styles.footerMenu}>
            <NavBarMenu items={menu} newClass="footerMenu"/>
            <Socials />
            </div>
        </div>
    );
};

export default Footer;