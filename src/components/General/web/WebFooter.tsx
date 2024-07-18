import styles from './WebFooter.module.css';
import logo from './../../../images/luxeglow_logo-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"

function WebFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_col}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left",
                    marginLeft: '3%'
                }}>
                    <img className={styles.footer_logo} src={logo} alt="Logo" />
                    <p style={{ marginLeft: '3%' }}>
                        Ignite Brilliance, Embrace Elegance - LuxeGlow Auto Spa, where we specialize in transforming rides, one detail at a time.
                    </p>
                    <h3 style={{ margin: '0', marginLeft: '3%'}}>
                        Work Hours
                    </h3>
                    <p style={{ margin: '0', marginLeft: '3%', marginTop: '2%', marginBottom: '5%' }}>
                        Mon - Thur, Sat & Sun : 9am - 6pm<br/>
                    </p>
                </div>
            </div>
            <div className={styles.footer_col}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left"
                }}>
                    <h2 className={styles.footer_header}>
                        Quick Links
                    </h2>
                    <div style={{
                        width: '100%',
                        padding: '0',
                        margin: '0',
                        boxSizing: 'border-box'
                    }}>
                        
                        <p className={styles.service_text}>
                            About Us
                        </p>
                    </div>
                    <p className={styles.service_text}>
                        Pricing
                    </p>
                    <p className={styles.service_text}>
                        Contact Us
                    </p>
                </div>
            </div>
            <div className={styles.footer_col}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left"
                }}>
                    <h2 className={styles.footer_header}>
                        Services
                    </h2>
                    <div style={{
                        width: '100%',
                        padding: '0',
                        margin: '0',
                        boxSizing: 'border-box'
                    }}>
                        
                        <p className={styles.service_text}>
                            Interior Wash
                        </p>
                    </div>
                    <p className={styles.service_text}>
                        Exterior Wash
                    </p>
                    <p className={styles.service_text}>
                        Headlight Restoration
                    </p>
                    <p className={styles.service_text}>
                        Interior Shine and Protect
                    </p>
                </div>
            </div>
            <div className={styles.footer_col}>
                <div style={{
                    display: "inline-block",
                    textAlign: "left",
                    marginLeft: '3%',
                }}>
                    <h2 className={styles.footer_header}>
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
                        <FontAwesomeIcon icon={faEnvelope} className={styles.right_col_icon} />
                        <p style={{ marginLeft: '5%' }}>
                            luxeglowautospace@gmail.com
                        </p>
                    </div>
                    <br />
                    <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '0' }}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.right_col_icon} />
                        <p style={{ marginLeft: '5%' }}>
                            1035 Crawford Ave, Windsor, ON N9A 5E12
                        </p>
                    </div>
                    <div>
                        <button className={styles.square_button}>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </button>
                        <button className={styles.square_button}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default WebFooter; 