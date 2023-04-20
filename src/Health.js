import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Health =()=>{


    return(
        
        <div className="health-container">
            
            <AnimatedOnScroll className="image-container">
                <h1>Traininsplan – Ernährung – Motivation Generation 50 plus</h1>
                <p>Sportwissenschaftliche Beratung</p>
            </AnimatedOnScroll>


            <div className="health-cards">
                <div className="left-img">
                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Personal-Training.jpg" alt="" className="health-images" animationin="fadeOut"/>
                        <h4>Personal Training</h4>
                        <p>Es handelt sich um eine spezielle Form des Trainings, das gerade dann eine gute Alternative ist und funktioniert, wenn man nicht gerne in einer Gruppe oder alleine trainieren will. Man trainiert zusammen mit einem persönlichen Coach, der zeitlich flexibel ist und sich nach dem Terminkalender des Kunden richtet.</p>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Trainingsplan.jpg" alt=""className="health-images"  animationin="fadeOut" />
                        <h4>Training</h4>
                        <p>Der Trainingsplan stellt die Grundlage für deinen sportlichen Erfolg dar. Mit einem individuell auf dich abgestimmten Plan kannst du Spaß und Fortschritte kombinieren, ohne dabei dein Privatleben darunter leiden lassen zu müssen.</p>
                        <br /><br />
                    </AnimatedOnScroll>

                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.healthifyme.com/blog/wp-content/uploads/2020/01/gym-diet-cover-1.jpg"alt="" className="health-images" animationin="fadeOut" />
                        <h4>Nutrition</h4>
                        <p>Ich biete Ihnen eine persönliche Ernährungsberatung im Sinne einer gesunden Nahrungsmittelaufnahme und einer bewussten Lebensführung oder aber auch eine Unterstützung bei der Reduzierung Ihres Körpergewichts.</p>
                    </AnimatedOnScroll>
                </div>

                <div className="right-img">
                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/371-mj-3703.jpg"alt="" className="health-images" animationin="fadeOut" />
                        <h4>Generation 50+</h4>
                        <p>Fit im Alter zu werden oder zu bleiben ist kein Hexenwerk, sondern kann wunderbar auch von Zuhause aus gestaltet werden. Will man jung bleiben, gehört Bewegung einfach dazu. Regelmäßige Bewegung ist ein Garant für Fitness und Gesundheit.</p>
                        <br />
                    </AnimatedOnScroll>

                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/Rehabilitation.jpg"alt="" className="health-images" animationin="fadeOut" />
                        <h4>Rehabilitation</h4>
                        <p>Das Rehabilitationstraining umfasst alle bewegungsorientierten Maßnahmen, die drauf zielen, durch Krankheiten oder Beschwerden geschwächte Zonen des Körpers wieder zu regenerieren und dauerhaft zu überwinden. Welche Art von Übungen dabei zum Einsatz kommt hängt in erste Linie von den Vorgaben und den individuellen Problemen ab.</p>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll className="animated-images">
                        <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/07/motivation.png"alt="" className="health-images" animationin="fadeOut" />
                        <h4>Motivation</h4>
                        <p>Böse Zungen behaupten, wer nach Trainingsmotivation suchen muss, der hat schon verloren. Doch zwischen Job, Familie und Hobbies, braucht es manchmal den kleinen Anstoß um sich fürs Training aufzuraffen. Raus aus dem Alltag und rein in das Training.</p>
                    </AnimatedOnScroll>
                </div>
            </div>
        </div>











    )
}

export default Health;