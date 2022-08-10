import styles from './pricesection.module.css';
import Button from '../../shared/components/Button/Button';

const PriceSection = ({priceSectionText}) => {
    const {title, text, price, mainpricetext, secondpricetext} = priceSectionText;
    return (
            <div className={styles.contentBox}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <p className={styles.mainText}>{text}</p>
                <div className={styles.secondTextBox}>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.mainPriceText}>{mainpricetext}</p>
                    <p className={styles.secondPriceText}>{secondpricetext}</p>
                    <Button text='Purchase Now' newClass="priceBtn"/>
                </div>
            </div>
    );
};

export default PriceSection;