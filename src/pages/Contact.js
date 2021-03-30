import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
             <Navigation />  
             <div className="contactContent">
                 <div className="header"></div>
                 <div className="contactBox">
                     <h1>Contactez moi</h1>
                     <ul>
                         <li>
                             <i className="fas fa-map-marker-alt"></i>
                             <span>Paris</span>
                         </li>
                         <li>
                             <i className="fas fa-mobile-alt"></i>
                             <CopyToClipboard text="0687828806">
                                 <span className="clickInput" onClick={() => {alert('Téléphone copié !')}} >06 87 82 88 06</span>
                             </CopyToClipboard>
                         </li>
                         <li>
                             <i className="fas fa-envelope"></i>
                             <CopyToClipboard text="denis.zana@gmail.com">
                                 <span className="clickInput" onClick={() => {alert('Email copié !')}} >denis.zana@gmail.com</span>
                             </CopyToClipboard>
                         </li>

                     </ul>
                 </div>
                 <div className="socialNetwork">
                     <ul>
                        
                             <a href="https://www.linkedin.com/in/deniszana/" rel="nooppener noreferrer" target="_blank">
                                 <h4>LinkedIn</h4>
                                 <i className="fab fa-linkedin"></i>
                             </a>
                        
                             <a href="https://github.com/deniszana/" rel="nooppener noreferrer"  target="_blank">
                                 <h4>Github</h4>
                                 <i className="fab fa-github"></i>
                             </a>
                        
                             <a href="https://twitter.com/deniszana/" rel="nooppener noreferrer"  target="_blank">
                                 <h4>Twitter</h4>
                                 <i className="fab fa-twitter"></i>
                             </a>
                        
                             <a href="https://codepen.io/deniszana" rel="nooppener noreferrer"  target="_blank">
                                 <h4>codePen</h4>
                                 <i className="fab fa-codepen"></i>
                             </a>
                        
                     </ul>
                 </div>
             </div>

            Contact
        </div>
    );
};

export default Contact;