import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/competences" component={Knowledges}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/clients" component={Clients}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;