import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return <div className="s12 m8 row">
        <h2><Link to="/services">Services</Link> > Accounting</h2>
        <hr />
        <ul>
            <li>General bookkeeping services</li>
            <li>Customized Reporting Services for small, medium- sized and large business</li>
        </ul>
    </div>
}