import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDesc extends Component {
    renderListOnDOM() {
        return this.props.serviceDetail.map((value, index) => {
            return <li key={index}>{value}</li>
        })
    }

    render() {
        return (
            <div className="s12 m8 row">
                <h4><Link to={this.props.to} className="#1e88e5 blue-text text-darken-1">{this.props.mainDir}</Link> > {this.props.serviceName}</h4>
                <hr />
                <ul>
                    {this.props.serviceDetail.length ? this.renderListOnDOM() : null}
                </ul>
            </div>
        )
    }
}