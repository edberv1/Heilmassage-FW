import { FaBars} from "react-icons/fa";
import {NavLink } from 'react-router-dom'
import { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import logo from './images/logo.png'


const Navbar = () => {
  const {openSidebar} = useGlobalContext()

  const headerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            headerRef.current.classList.add('shrink');
            imageRef.current.classList.add('shrinkImg');
        } else {
            headerRef.current.classList.remove('shrink');
            imageRef.current.classList.remove('shrinkImg');
        }
        
    }

    window.addEventListener('scroll', shrinkHeader);
    return () => {
        window.removeEventListener('scroll', shrinkHeader);
    };
}, []);



  return (
    <nav ref={headerRef} className="nav" >
      <div className="nav-center">
        <div className="nav-header">
          <img  src={logo} ref={imageRef} alt="logo" className="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>

          
        </div>

        <ul className="nav-links">
          <li className="linkat">      
            <NavLink  to='/' activeclassname="active" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Home</NavLink>
          </li>

          <li className="linkat">
            <NavLink  to='/types' activeclassname="active" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Massagearten</NavLink>
          </li>

          <li className="linkat"> 
           <NavLink  to='/health' activeclassname="active" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}> Health & Fitness</NavLink>
           </li>

          <li className="linkat">
            <NavLink  to='/about' activeclassname="active" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Über uns</NavLink>
          </li>

          <li className="linkat">
            <NavLink  to='/contact' activeclassname="active" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Kontakt</NavLink>
          </li>

        </ul>
        
        
      </div>
    </nav>
  );
};
export default Navbar;
