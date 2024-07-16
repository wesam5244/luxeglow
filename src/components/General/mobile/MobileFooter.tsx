import logo from './../../../images/luxeglow_logo-transparent.png';
import './MobileFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"

function MobileFooter() {
    return (
        <div className='mobile-footer'>
            <a href="/" style={{ margin: '0' }}>
                <img className="footer-logo-pic" src={logo} alt="Logo" />
            </a>
            <p style={{ textAlign: 'center', margin: '0', marginLeft: '5%', marginRight: '5%', fontSize: '1.2em' }}>
                Ignite Brilliance, Embrace Elegance - LuxeGlow Auto Spa, where we specialize in transforming rides, one detail at a time.
            </p>
            <h2 className="mobile-footer-header">
                Hours of Operation
            </h2>
            <p className="mobile-footer-link">
                MON-THUR, SAT & SUN: 9 am - 6 pm
            </p>
            <h2 className="mobile-footer-header">
                Quick Links
            </h2>
            <p className="mobile-footer-link">
                About Us
            </p>
            <p className="mobile-footer-link">
                Our Services
            </p>
            <p className="mobile-footer-link">
                Pricing
            </p>
            <p className="mobile-footer-link">
                Contact Us
            </p>
            <h2 className="mobile-footer-header">
                Get In Touch
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', margin: '0', marginLeft: '10%' }}>
                <FontAwesomeIcon icon={faPhone} className='right-col-icon' />
                <p style={{ marginLeft: '5%' }}>
                    (519) 816-7258
                </p>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', margin: '0', marginLeft: '10%' }}>
                <FontAwesomeIcon icon={faEnvelope} className='right-col-icon' />
                <p style={{ marginLeft: '5%' }}>
                    luxeglowautospa@gmail.com
                </p>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', margin: '0', marginBottom: '0', marginLeft: '10%' }}>
                <FontAwesomeIcon icon={faInstagram} className='right-col-icon' />
                <p style={{ marginLeft: '5%', textAlign: 'left' }}>
                    @luxeglowautospa
                </p>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', margin: '0', marginBottom: '0', marginLeft: '10%' }}>
                <FontAwesomeIcon icon={faLocationDot} className='right-col-icon' />
                <p style={{ marginLeft: '5%', textAlign: 'left' }}>
                    1035 Crawford Ave, Windsor, ON N9A 5E1
                </p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.779145430004!2d-83.04638702508099!3d42.304577738606845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d005ff996f5%3A0x3d3c44730772afe3!2sLuxeGlow%20Auto%20Spa!5e0!3m2!1sen!2sca!4v1711861763548!5m2!1sen!2sca" style={{ border: '0', width: '85%', marginLeft: '10%', marginBottom: '10%' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    )
}

export default MobileFooter;