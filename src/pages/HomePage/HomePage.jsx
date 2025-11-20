import Header from "../../components/Header/Header"
import MenuDesktop from "../../components/MenuDesktop/MenuDesktop";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/ServicesSection/Services";
import FAQ from "../../components/FAQ/FAQ"
import Contact from "../../components/Contact/Contact";
import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="App">
      <Header />
      <MenuDesktop />
      <Banner />
      <Services />
      <FAQ />
      <Contact />
      <Address />
      <Footer />
    </div>
  );
}
