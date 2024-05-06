import React from 'react';
import { Service } from './../../helpers/ServicesHelper';
import './ServiceDisplay.css';

interface ServiceDisplayProps {
    service: Service;
}

const ServiceDisplay: React.FC<ServiceDisplayProps> = (props) => {
    return (
        <div className="service-div">
            <h2 className='service-name'>
                {props.service.name}
            </h2>
        </div>


    )
}

export default ServiceDisplay;