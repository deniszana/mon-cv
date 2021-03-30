import React from 'react';
import ProjectList from '../components/portfolio/ProjectList';
import Navigation from '../components/Navigation';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation />
            <ProjectList />
        </div>
    );
};

export default Portfolio;