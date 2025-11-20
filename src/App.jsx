import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Portfolio from "./pages/Portfolio/Portfolio";
import useScrollToHash from "./hooks/UseScrollToHash/UseScrollToHash";
import './App.css';

function App() {
  
  return (
    <Router>
      <ScrollHandler  />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </Router>
  );
}

function ScrollHandler(){
  useScrollToHash();
  return null;
}

export default App;
