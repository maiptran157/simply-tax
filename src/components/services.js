import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services_data';

export default class Services extends Component {
    render() {
        return <div className="col s12 m8 row">
            <h4>Services</h4>
            <hr />
            <ul>
                <li><Link to={servicesData.accounting.to} className="#1e88e5 blue-text text-darken-1">Accounting</Link></li>
                <li><Link to={servicesData.corporateServices.to} className="#1e88e5 blue-text text-darken-1">Corporate Services</Link></li>
                <li><Link to={servicesData.taxation.to} className="#1e88e5 blue-text text-darken-1">Taxation</Link></li>
                <li><Link to={servicesData.consulting.to} className="#1e88e5 blue-text text-darken-1">Consulting</Link></li>
                <li><Link to={servicesData.payroll.to} className="#1e88e5 blue-text text-darken-1">Payroll</Link></li>
                <li><Link to={servicesData.analytics.to} className="#1e88e5 blue-text text-darken-1">Analytics</Link></li>
            </ul>
        </div>
    }
}