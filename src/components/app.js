import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import NavBar from './nav_bar';
import Services from './services';
import ServicesAccounting from './services_accounting';
import Footer from './footer';

class App extends Component {
  render() {
    return <div>
      <NavBar />
      <div className="container main-content-area">
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route path="/services/accounting" component={ServicesAccounting} />
      </div>
      <Footer />
    </div>
  }
}

export default App;
