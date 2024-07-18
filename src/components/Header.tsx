import React, { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import styles from './Header.module.css';
import logo from './../images/luxeglow_logo-transparent.png';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faX } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    screenWidth: number;
}

const Header: React.FC<HeaderProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add(styles.menu_open);
        } else {
            document.body.classList.remove(styles.menu_open);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove(styles.menu_open);
        };
    }, [menuOpen]);

    const handlePhoneCall = () => {
        const phoneNumber = '5198167258';
        window.open(`tel:${phoneNumber}`, '_blank');
    };

    if (props.screenWidth > 700) {
        return (
            <>
                <Link to="/" style={{ margin: '0 auto', width: '20%'}}>
                    <img src={logo} style={{ width: '100%' }} />
                </Link>
                <nav className={styles.web_nav_items}>
                    <ul className={styles.web_nav_menu_list}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <ScrollLink to='about-us' smooth={true} duration={500}>
                                About Us
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='prices' smooth={true} duration={500}>
                                Pricing
                            </ScrollLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to='/contact'>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </>
        );
    } else {
        return (
            <div className={styles.mobile_top_bar}>
                <FontAwesomeIcon className={styles.call_icon} icon={faPhone} onClick={handlePhoneCall} />
                <Link to="/" style={{ margin: '0 auto', width: '50%'}}>
                    <img src={logo} style={{ width: '100%' }} />
                </Link>
                <FontAwesomeIcon className={styles.hamburger} icon={faBars} onClick={() => setMenuOpen((prev) => (!prev))} />
                <div className={`${styles.hamburger_menu} ${menuOpen ? styles.open : ''}`} ref={menuRef}>
                    <div className={styles.hamburger_menu_items}>
                        <div className={styles.menu_top}>
                            <img className={styles.mobile_logo} src={logo} alt="Logo" />
                            <FontAwesomeIcon style={{ flex: 1, textAlign: 'right', margin: '0', padding: '0' }} icon={faX} onClick={() => setMenuOpen((prev) => (!prev))} />
                        </div>
                        <a href="/">Home</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <li>
                            <ScrollLink to='about-us' smooth={true} duration={500}>
                                About Us
                            </ScrollLink>
                        </li>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <li>
                            <ScrollLink to='prices' smooth={true} duration={500}>
                                About Us
                            </ScrollLink>
                        </li>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <a href="/contact-us">Contact Us</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <div className={styles.hamburger_call}>
                            Call Now
                        </div>
                        <div className={styles.hamburger_book}>
                            Book Now
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
