import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>EPDM (engins electriques)</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-biking"></i>
                    <span>Cyclisme</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-suitcase-rolling"></i>
                    <span>Voyages</span>
                </li>                                  
            </ul>
        </div>
    );
};

export default Hobbies;