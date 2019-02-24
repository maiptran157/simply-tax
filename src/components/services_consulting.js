import React, { Component } from 'react';
import ProductDesc from '../helpers/product_desc';
import servicesData from '../data/services_data';

export default class ServicesConsulting extends Component {
    render() {
        return <ProductDesc to={servicesData.to} mainDir={servicesData.mainDir} serviceName={servicesData.consulting.serviceName} serviceDetail={servicesData.consulting.serviceDetail} />
    }
}