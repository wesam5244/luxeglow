import React from 'react';
import { Service } from './../../helpers/ServicesHelper';
import './ServiceDisplay.css';
interface ServiceDisplayProps {
    screenWidth: number;
    service: Service;
}

const ServiceDisplay: React.FC<ServiceDisplayProps> = (props) => {
    const imagePath = "/images/" + props.service.image;
    return (
        <div className="service-div" style={{
            maxWidth: props.screenWidth > 700 ? '30%' : '90%',
            minWidth: props.screenWidth > 700 ? '30%' : '90%',
            marginBottom: props.screenWidth > 700 ? '0' : '5%'
        }}>
            <h2 className='service-name'>
                {props.service.name}
            </h2>
            
            <img src={imagePath} style={{ width: '100%', height: props.screenWidth > 700 ? '30vh' : '25vh' }} />
            <div className='prices'>
                {props.service.prices.map((price, index) => {
                    return (
                        <h3 className={index == 0 ? "top-price" : "list-price"}>
                            ${price.amount} {price.vehicle_type.toUpperCase()}
                        </h3>
                    )
                })}
            </div>
            <div className='services-included'>
                {props.service.services_included.map((included_service) => {
                    return (
                        <p className='service-included'>
                            {included_service}
                        </p>
                    )
                })}
                {props.service.addons.length > 0 && <h3 className="addons">
                    Optional Add-ons
                </h3>}
                {props.service.addons.map((addon) => {
                    return (
                        <p className='service-included'>
                            {addon.service} for ${addon.price}
                        </p>
                        
                    )
                })}
            </div>
        </div>


    )
}

export default ServiceDisplay;