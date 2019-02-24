import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import NavBar from './nav_bar';
import servicesData from '../data/services_data';
import Services from './services';
import ServicesAccounting from './services_accounting';
import ServicesCorporate from './services_corportate';
import ServicesTaxation from './services_taxation';
import ServicesConsulting from './services_consulting';
import ServicesPayroll from './services_payroll';
import ServicesAnalytics from './services_analytics';
import Footer from './footer';

class App extends Component {
  render() {
    return <div>
      <NavBar />
      <div className="container main-content-area">
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route path={servicesData.accounting.to} component={ServicesAccounting} />
        <Route path={servicesData.corporateServices.to} component={ServicesCorporate} />
        <Route path={servicesData.taxation.to} component={ServicesTaxation} />
        <Route path={servicesData.consulting.to} component={ServicesConsulting} />
        <Route path={servicesData.payroll.to} component={ServicesPayroll} />
        <Route path={servicesData.analytics.to} component={ServicesAnalytics} />
      </div>
      <Footer />
    </div>
  }
}

export default App;
