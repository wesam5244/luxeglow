import './WebFooter.css'
import logo from './../../../images/luxeglow_logo-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"

function WebFooter() {
    return (
        <div className="footer">
            <div className="footer-col" style={{
                textAlign: 'center',
            }}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left",
                    marginLeft: '3%'

                }}>
                    <img className="footer-logo" src={logo} alt="Logo" />
                    <p style={{ marginLeft: '3%' }}>
                        A little description of our amazing detailing business run by the greatest minds of our generation
                    </p>
                    <h3 style={{ margin: '0', marginLeft: '3%'}}>
                        Work Hours
                    </h3>
                    <p style={{ margin: '0', marginLeft: '3%', marginTop: '2%', marginBottom: '5%' }}>
                        Mon - Thur, Sat & Sun : 9am - 6pm<br/>
                    </p>
                </div>
            </div>
            <div className="footer-col" style={{
                textAlign: 'center',

            }}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left"
                }}>
                    <h2 className='footer-header'>
                        Quick Links
                    </h2>
                    <div style={{
                        width: '100%',
                        padding: '0',
                        margin: '0',
                        boxSizing: 'border-box'
                    }}>
                        <p className="service-text">
                            About Us
                        </p>
                    </div>
                    <p className="service-text">
                        Our Services
                    </p>
                    <p className="service-text">
                        Pricing
                    </p>
                    <p className="service-text">
                        Contact Us
                    </p>
                </div>
            </div>
            <div className="footer-col" style={{
                textAlign: 'center',
            }}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left"
                }}>
                    <h2 className='footer-header'>
                        Services
                    </h2>
                    <div style={{
                        width: '100%',
                        padding: '0',
                        margin: '0',
                        boxSizing: 'border-box'
                    }}>
                        <p className="service-text">
                            Interior Wash
                        </p>
                    </div>
                    <p className="service-text">
                        Exterior Wash
                    </p>
                    <p className="service-text">
                        Headlight Restoration
                    </p>
                    <p className="service-text">
                        Interior Shine and Protect
                    </p>
                </div>
            </div>
            <div className="footer-col" style={{
                textAlign: 'center',

            }}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left",
                    marginLeft: '3%',
                }}>
                    <h2 className='footer-header'>
                        Get In Touch
                    </h2>
                    <div style={{ display: 'inline-flex', alignItems: 'center', width: '100%' }}>
                        <FontAwesomeIcon icon={faPhone} className='right-col-icon' />
                        <p style={{ marginLeft: '5%' }}>
                            (519) 816-7258
                        </p>
                    </div>
                    <br />
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faEnvelope} className='right-col-icon' />
                        <p style={{ marginLeft: '5%' }}>
                            luxeglowautospace@gmail.com
                        </p>
                    </div>
                    <br />
                    <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '0' }}>
                        <FontAwesomeIcon icon={faLocationDot} className='right-col-icon' />
                        <p style={{ marginLeft: '5%' }}>
                            1035 Crawford Ave, Windsor, ON N9A 5E12
                        </p>
                    </div>
                    <div className="socials-row">
                        <button className="square-button">
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                        </button>
                        <button className="square-button">
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default WebFooter; 