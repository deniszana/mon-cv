import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />  
            <div className="homeContent">
                <div className="content">
                    <h1>Denis Zana</h1>
                    <h2>Developpeur FullStack</h2>
                    <div className="pdf">
                        <a href="http://cv.zanadenis.free.fr" target="_blank">Telecharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;