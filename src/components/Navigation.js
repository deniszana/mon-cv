import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/zana.jpeg" alt="profil" />
                    <h3>Denis ZANA</h3>
                </div>

            </div>
            <div className="navigation">
             <ul>
                 <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                        <i className="fas fa-mountain"></i>
                        <span>Compétences</span>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink exact to="/clients" activeClassName="navActive">
                        <i className="fas fa-images"></i>
                        <span>Clients</span>
                    </NavLink>
                 </li>                  
                 <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-images"></i>
                        <span>Porfolio</span>
                    </NavLink>
                 </li>  
                 <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"></i>
                        <span>Contacts</span>
                    </NavLink>
                 </li>                                  
             </ul>
            </div>     
            <div className="socialNetwork">
                <ul>
                    <li> <a href="http://google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a> </li>
                    <li> <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> </li>
                    <li> <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> </li>
                    <li> <a href="http://codepen.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a> </li>
                    <li> <a href="http://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a> </li>
                </ul>
                
                 
            <div className="signature">
                <a href="http://1001portails.com" target="_blank" rel="noopener noreferrer">Zana Denis</a>
            </div>  
            </div>   

        </div>
    );
};

export default Navigation;