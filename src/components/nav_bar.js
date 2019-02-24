import M from 'materialize-css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services_data';

class NavBar extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    }

    render() {
        return <Fragment>
            <ul id="dropdown1" className="dropdown-content">
                <li><Link to="/services" className="#1e88e5 blue-text text-darken-1">Services</Link></li>
                <li className="divider"></li>
                <li><Link to={servicesData.accounting.to} className="#1e88e5 blue-text text-darken-1">Accounting</Link></li>
                <li><Link to={servicesData.corporateServices.to} className="#1e88e5 blue-text text-darken-1">Corporate Services</Link></li>
                <li><Link to={servicesData.taxation.to} className="#1e88e5 blue-text text-darken-1">Taxation</Link></li>
                <li><Link to={servicesData.consulting.to} className="#1e88e5 blue-text text-darken-1">Consulting</Link></li>
                <li><Link to={servicesData.payroll.to} className="#1e88e5 blue-text text-darken-1">Payroll</Link></li>
                <li><Link to={servicesData.analytics.to} className="#1e88e5 blue-text text-darken-1">Analytics</Link></li>
            </ul>
            <nav>
                <div className="nav-wrapper #1e88e5 blue darken-1">
                    <Link to="/" className="brand-logo">Simply Tax</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Services<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="#!">Industries</a></li>
                        <li><a href="#!">Reports</a></li>
                        <li><a href="#!">Archives</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    }
}

export default NavBar;