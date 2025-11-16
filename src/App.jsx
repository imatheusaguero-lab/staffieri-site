import Header from "./components/Header/Header";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import Services from "./components/ServicesSection/Services";
import Contact from "./components/Contact/Contact"
import Address from "./components/Address/Address"
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuDesktop />
      <Services />
      <Contact />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
