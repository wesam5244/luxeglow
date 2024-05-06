import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import logo from './../images/luxeglow_logo-transparent.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faX } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    screenWidth: number;
    activePage: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
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
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

    const handlePhoneCall = () => {
        // Replace '1234567890' with the phone number you want to call
        const phoneNumber = '5198167258';

        // Open the phone app with the phone number
        window.open(`tel:${phoneNumber}`, '_blank');
    };


    if (props.screenWidth > 700) {
        return (
            <>
                <img src={logo} className='logo' style={{
                    width: '20%'
                }} />
                <nav className='web-nav-items'>
                    <ul className='web-nav-menu-list'>
                        <li><Link className={props.activePage == "home" ? "active" : ""} to='/'>Home</Link></li>
                        <li><Link className={props.activePage == "about_us" ? "active" : ""} to='/'>About Us</Link></li>
                        <li><Link className={props.activePage == "services" ? "active" : ""} to='/'>Services</Link></li>
                        <li><Link className={props.activePage == "contact_us" ? "active" : ""} to='/'>Contact Us</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
    else {
        return (
            <div className='mobile-top-bar'>
                <FontAwesomeIcon className="call-icon" icon={faPhone} onClick={handlePhoneCall}/>
                <img src={logo} className='logo' style={{
                    width: '50%'
                }} />
                <FontAwesomeIcon className="hamburger" icon={faBars} onClick={() => setMenuOpen((prev) => (!prev))} />
                <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
                    <div className="hamburger-menu-items">
                        <div className="menu-top">
                            <img className="mobile-logo" src={logo} alt="Logo" />
                            <FontAwesomeIcon style={{ flex: '1', textAlign: 'right', margin: '0', padding: '0' }} icon={faX} onClick={() => setMenuOpen((prev) => (!prev))} />
                        </div>
                        <a href="/">Home</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <a href="/about">About Us</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <a href="/services">Services</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <a href="/pricing">Pricing</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <a href="/contact-us">Contact Us</a>
                        <hr style={{ height: '1px', backgroundColor: 'white', border: 'none' }} />
                        <div className='hamburger-call'>
                            Call Now
                        </div>
                        <div className='hamburger-book'>
                            Book Now
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header; 