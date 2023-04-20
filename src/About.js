import visitkarte from "./images/visitkarte.png" 
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const About =()=>{
    return (
        <div className="about-container">
            <div className="top-container">
                <div className="red-back">
                    <AnimatedOnScroll className="about-animated">
                    <h1>Über uns</h1>
                    <img src={visitkarte} alt="IMAGE"/>
                    </AnimatedOnScroll>
                </div>
                
            </div>

            <div className="under">

            
            <div className="mid-container">
                <h2>Felix Winkler</h2>
                <p>Professioneller massuer</p>
                <p>Fitnesstrainer</p>
                <p>Phone +43(0) 677 64 65 4734</p>

                <ul>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                </ul>
                
            </div>

            <div className="bottom-about">
                <h2>Felix Winkler</h2>  
                <p>Professionelle massage + </p>
                <p>Fitnesstrainer für ihr persönliches körperliches wohlbefinden</p>
                <p>Phone +43(0) 677 64 65 4734</p>
                

                <ul>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                    <li> • Lorem ipsum </li>
                </ul>
            </div>
            </div>

        </div>
    );

}

export default About;