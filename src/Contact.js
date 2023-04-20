import logo from './images/logo.png'
const Contact =()=>{    
    return(
        
        <div className="contact-container">
            <div className="up-container">
            <h1 className="title">Kontakt</h1>
            </div>
            
            
                <div className="qr-container">
                
                <p>
                Mobile Heil u. Sportmassage <br/><br/> 
                staatlich geprüfter Heilmasseur<br/><br/>
                Sportwissenschaftliche Beratung
                </p>
                    <p>+43(0) 677 64 65 4734</p>
                    <p>Heiligenstädterstrasse 115, Top 5, A-1190 Wien</p>
                    <img src="https://www.therapeutic-concepts.at/wp-content/uploads/2020/09/qrcode.jpeg" alt="QRCODE"/>
                </div>

                <div className="bottom-container">
                    
                    <div className="red-container" >
                        <p>E-mail: office@heilmassage-fw.at</p>
                    </div>
                <img src={logo} alt="LOGO" />
                </div>

        </div>




    )
}

export default Contact;