import NavBar from './modules/NavBar/NavBar';
import Header from "./modules/Header/Header";
import MainSection from './modules/MainSection/MainSection';
import MainSectionBox from './modules/MainSection/MainSectionBox/MainSectionBox';
import PriceSection from './modules/PriceSection/PriceSection';
import Footer from './modules/Footer/Footer'

import './shared/styles/style.css';

export const App = () => {
  return (
  <>
    <section className='headerSection'>
      <NavBar />
      <Header />
    </section>
    <section className='mainSection'>
      <MainSection />
      <MainSectionBox nameImage="imageOne"/>
      <MainSectionBox nameImage="imageTwo"/>
      <MainSectionBox nameImage="imageThree" btnActive/>
    </section>
    <section className='priceSection'>
      <PriceSection />
    </section>
    <footer className='footer'>
      <Footer />
    </footer>
  </>
  );
};
