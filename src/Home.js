import {AnimatedOnScroll} from "react-animated-css-onscroll"
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import data from './data';
import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home =()=>{

    const [quote] = useState(data);
    const [index, setIndex] = React.useState(0);
    const navigate = useNavigate();

    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const navigateTypes = () => {
        navigate('/types');
      };
    
      const navigateHealth = () => {
        navigate('/health');
      };
      

    useEffect(() => {
        const lastIndex = quote.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, quote]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 2000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

    return(
        <div className="main-container">

            <AnimatedOnScroll className="home-img-container">
                <div className="in-div">
                <h1>Heilmassage-FW</h1>
                <p>Therapeutic Concepts
                    Mobile Heil u. Sportmassage
                    staatlich geprüfter Heilmasseur
                    Sportwissenschaftliche Beratung
                    Es gibt tausend Krankheiten, aber nur eine Gesundheit.
                </p>
                </div>
            </AnimatedOnScroll>

           

          <div className="home-bottom">

                <div className="home-left">
                    <AnimatedOnScroll><img className="first-left" src="https://www.relaxdays.cz/www/upload/categories/images/20201017121712873.webp" alt="" /></AnimatedOnScroll>
                
                    <h1>Das Effektivste Fitness Training</h1>
                    <p>Gibt es wirklich sowas wie die beste Trainingszeit fürs Abnehmen, für den Muskelaufbau, für einen Wettkampf? <br /> <br />
                     Ein effektives Training verlangt nach mehr, als einfach nur einige zufällig ausgewählte Übungen aneinanderzureihen. Es braucht Methodik.
                    <br /> <br /> Du träumst von einer schlanken, durchtrainierten Figur, hast aber keine Zeit für viel Sport? Dann ist Therapeutic Concepts perfekt für dich!
                    </p>

                    <div className="small-img">
                        <div className="home-img-left">
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/m7.png" alt="" />
                            <h3>Personal Training</h3>
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/m5.png" alt="" />
                            <h3>Ernährungsumstellung</h3>
                        </div>
                        <div className="home-img-right">
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/physical-therapist-53.jpg" alt="" />
                            <h3>Trainingsplan</h3>
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/m6.png" alt="" />
                            <h3>Generation 50+</h3>
                            
                        </div>
                    </div>
                    <button className="weiter-btn" onClick={() => {navigateTypes();scrollToTop()}}>Weiter</button> 

                </div>


                <div className="home-right">
                    <h1>Mobile Heil u. Sportmassage</h1>
                    <p>Eine Heilmassage dient zur Muskelentspannung und Behandlung verschiedenster Krankheitsbilder. Sie geht dabei stets schonend vor und regt gezielt die Selbstheilungskräfte des Menschen an. 
                        <br /> <br /> Die Sportmassage ist eine spezielle Gewebestimulation für intensive Leistung und Bewegung der Muskulatur. Sie kann vor oder nach sportlichen Tätigkeiten zum Einsatz kommen und wird meist lokal am entsprechenden Muskel durchgeführt.
                    </p>

                    <div className="small-img">
                        <div className="home-img-left">
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Klassische_Massage.png" alt="" />
                            <h3>Klassische Massage</h3>
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Schroepfkopf-Massage.jpg" alt="" />
                            <h3>Schröpfkopf Massage</h3>
                        </div>
                        <div className="home-img-right">
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Manuelle_Lymphdrainage.jpg" alt="" />
                            <h3>Manuelle Lymphdrainage</h3>
                            <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Wirbelsaeulenstatik.jpg" alt="" />
                            <h3>Wirbelsäulenstatik und Mobilisation</h3>
                            
                        </div>
                    </div>
                    <button className="weiter-btn" onClick={() => {navigateTypes();scrollToTop()}}>Weiter</button> 


                    <AnimatedOnScroll className="animate-scroll-right"><img className="first-right" src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/401-felix-6939-chim.jpg" alt="" /></AnimatedOnScroll>

                    




                </div>
                
            </div>
            
            <div className="quotes">
                        <button style={{background: "none", border:"none"}}><FaAngleLeft  className="left-arrow"  onClick={() => setIndex(index - 1)}/></button>
                                
                                {quote.map((person, personIndex) => {
                                const { id, quote } = person;

                                let position = 'nextSlide';
                                if (personIndex === index) {
                                    position = 'activeSlide';
                                }
                                if (
                                    personIndex === index - 1 ||
                                    (index === 0 && personIndex === quote.length - 1)
                                ) {
                                    position = 'lastSlide';
                                }
                                return(
                                    <article className={position} key={id}>
                                        <p>{quote}</p>
                                    </article>
                                );
                            })}
                            
                        <button style={{background: "none", border:"none"}}><FaAngleRight className="right-arrow" onClick={() => setIndex(index + 1)}/></button>
                    </div>
                
                    <div className="home-left">
                    <AnimatedOnScroll className="animate-scroll-bottom"><img className="bottom-img" src="https://img.freepik.com/premium-photo/runner-man-with-sports-running-knee-injury-hands-holding-knee-with-painful-ankle-knee-twist_38335-582.jpg" alt="" /></AnimatedOnScroll>
                
                    <h1 className="teksti">Schnell wieder im Einsatz: Training und Ernährung nach Sportverletzungen</h1>

                    <div className="small-img">
                        
                    </div>
                    <button className="weiter-btn" onClick={() => {navigateHealth();scrollToTop()}}>Weiter</button> 

                </div> 

        </div>
    )
}

export default Home;