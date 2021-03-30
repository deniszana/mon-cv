import React from 'react';
import ClientsList from '../components/clients/ClientsList';
import Navigation from '../components/Navigation';

const Clients = () => {
    return (
        <div className="portfolio">
            <Navigation />
            <ClientsList />
        </div>
    );
};

export default Clients;