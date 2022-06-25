import styles from './pricesection.module.css';
import Button from '../../shared/components/Button/Button';

const PriceSection = () => {
    return (
            <div className={styles.contentBox}>
                <h2 className={styles.mainTitle}>A Price To Suit Everyone</h2>
                <p className={styles.mainText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                <div className={styles.secondTextBox}>
                    <p className={styles.price}>$40</p>
                    <p className={styles.mainPriceText}>UI Design Kit</p>
                    <p className={styles.secondPriceText}>See, One price. Simple.</p>
                    <Button text='Purchase Now' newClass="priceBtn"/>
                </div>
            </div>
    );
};

export default PriceSection;