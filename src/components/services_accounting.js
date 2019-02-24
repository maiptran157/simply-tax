import React, {Component} from 'react';
import ProductDesc from '../helpers/product_desc';
import servicesData from '../data/services_data';

export default class ServicesAccounting extends Component {
    render() {
        return <ProductDesc to={servicesData.to} mainDir={servicesData.mainDir} serviceName={servicesData.accounting.serviceName} serviceDetail={servicesData.accounting.serviceDetail} />
    }
}