 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faFacebook,faTwitter,faInstagram,faYoutube} from  '@fortawesome/fontawesome-free-solid'
import {faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons';
 
export default function Footer() {

    return (
      <footer>
 <div className="footer-content">
        <div className='footerlogo'>
        <img src="./images/footer.png" alt="little lemon"/>
        </div>
 

        <div className='footecontact'>
        <p className="footer-head">Contacts</p>
             080-000-000     
        </div>


        <div className='footeMedia'>
        <p className="footer-head">Social Media</p>
        <a href="https://www.facebook.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                  <a href="https://www.twitter.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                  <a href="https://www.instagram.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                  <a href="https://www.youtube.com"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
               
        </div>

  
        
        
        
           
           
        </div>
      </footer>
    )
  }
