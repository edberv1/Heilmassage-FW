import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Types from './Types';
import Health from './Health';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Scroll from './Scroll';



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/types" element={<Types/>}></Route>
      <Route path="/health" element={<Health/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  <Scroll></Scroll>
  <Footer></Footer>
  </Router>
  );
}

export default App;
