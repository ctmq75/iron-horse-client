import React from 'react';
import './App.css';
import About from './About/About'
import { Route, BrowserRouter } from "react-router-dom";
import Navigation from './Navigation/Navigation'
import Nav from './Nav/Nav'

import Email from './Email/Email'
import OurServices from './OurServices/OurServices'
import Millitary from './Millitary/Millitary.js'
import Shop from './Shop/Shop.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Email} />
      <Route exact path="/ourServices" component={OurServices} />
      <Route exact path="/millitary" component={Millitary} />
      <Route exact path="/shop" component={Shop} />
      </BrowserRouter>
    </div>
  );
}

export default App;
