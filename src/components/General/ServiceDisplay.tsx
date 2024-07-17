import React from 'react';
import { Service } from './../../helpers/ServicesHelper';
import './ServiceDisplay.css';
import styles from './ServiceDisplay.module.css'; 
interface ServiceDisplayProps {
    screenWidth: number;
    service: Service;
}

const ServiceDisplay: React.FC<ServiceDisplayProps> = (props) => {
    const imagePath = "/images/" + props.service.image;
    return (
        <div className={styles.service_div} style={{
            maxWidth: props.screenWidth > 700 ? '30%' : '90%',
            minWidth: props.screenWidth > 700 ? '30%' : '90%',
            marginBottom: props.screenWidth > 700 ? '0' : '5%'
        }}>
            <h2 className={styles.service_name}>
                {props.service.name}
            </h2>
            
            <img 
                src={imagePath} 
                style={{ 
                    width: '100%', 
                    height: props.screenWidth > 700 ? (props.screenWidth < 1200 ? '22vh' : '30vh' ) : '30vh' 
                }} 
            />
            <div className={styles.prices}>
                {props.service.prices.map((price, index) => {
                    return (
                        <h3 className={index == 0 ? `${styles.top_price}` : `${styles.list_price}`}>
                            ${price.amount} {price.vehicle_type.toUpperCase()}
                        </h3>
                    )
                })}
            </div>
            <div className={styles.services_included}>
                {props.service.services_included.map((included_service) => {
                    return (
                        <p className={styles.service_included}>
                            {included_service}
                        </p>
                    )
                })}
                {props.service.addons.length > 0 && <h3 className={styles.addons}>
                    Optional Add-ons
                </h3>}
                {props.service.addons.map((addon) => {
                    return (
                        <p className={styles.service_included}>
                            {addon.service} for ${addon.price}
                        </p>
                        
                    )
                })}
            </div>
        </div>


    )
}

export default ServiceDisplay;