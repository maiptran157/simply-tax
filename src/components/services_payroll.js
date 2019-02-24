import React, { Component } from 'react';
import ProductDesc from '../helpers/product_desc';
import servicesData from '../data/services_data';

export default class ServicesPayroll extends Component {
    render() {
        return <ProductDesc to={servicesData.to} mainDir={servicesData.mainDir} serviceName={servicesData.payroll.serviceName} serviceDetail={servicesData.payroll.serviceDetail} />
    }
}