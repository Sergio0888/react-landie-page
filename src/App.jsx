import NavBar from './modules/NavBar/NavBar';
import Header from "./modules/Header/Header";
import MainSection from './modules/MainSection/MainSection';
import MainSectionBox from './modules/MainSection/MainSectionBox/MainSectionBox';
import PriceSection from './modules/PriceSection/PriceSection';
import Footer from './modules/Footer/Footer';

import mainSectionText from "./db/mainsection";
import headerText from "./db/header";
import menuNavbar from "./db/menu";
import priceSectionText from "./db/pricesection"

import './shared/styles/style.css';


export const App = () => {
  return (
  <main>
    <section className='headerSection'>
      <NavBar menu={menuNavbar}/>
      <Header headerText={headerText}/>
    </section>
    <section className='mainSection'>
      <MainSection sectionText={mainSectionText}/>
      <MainSectionBox classImage="imageOne"/>
      <MainSectionBox classImage="imageTwo"/>
      <MainSectionBox classImage="imageThree" btnActive/>
    </section>
    <section className='priceSection'>
      <PriceSection priceSectionText={priceSectionText}/>
    </section>
    <footer className='footer'>
      <Footer copyText="©2022 Sergio Maznoi"/>
    </footer>
  </main>
  );
};
