import M from 'materialize-css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    }

    render() {
        return <Fragment>
            <ul id="dropdown1" className="dropdown-content">
                <li><Link to="/services">Services</Link></li>
                <li className="divider"></li>
                <li><Link to="/services/accounting">Accounting</Link></li>
                <li><a href="#!">Corporate Services</a></li>
                <li><a href="#!">Taxation</a></li>
                <li><a href="#!">Consulting</a></li>
                <li><a href="#!">Payroll</a></li>
                <li><a href="#!">Analytics</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" href="#!" className="brand-logo">Simply Tax</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Services<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="sass.html">Industries</a></li>
                        <li><a href="badges.html">Reports</a></li>
                        <li><a href="sass.html">Archives</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    }
}

export default NavBar;