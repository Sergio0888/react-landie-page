import styles from './mainsectiontext.module.css'

const MainSectionText = () => {
    return (
        <div className={styles.box}>
        <h2 className={styles.title}>Light, Fast & Powerful</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
    );
};

export default MainSectionText;