import React, { useState, useEffect, useRef } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/svg/01.svg";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const firstLinkRef = useRef(null);

   
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
            }
        };
        
        if (menuOpen) {
            document.addEventListener('keydown', handleEsc);
           
            setTimeout(() => {
                if (firstLinkRef.current) {
                    firstLinkRef.current.focus();
                }
            }, 100);
        }
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [menuOpen]);

   
    const handleNavClick = () => {
        setMenuOpen(false);
    };

    
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setMenuOpen(false);
        }
    };

    const navLinks = [
        { to: "/", label: "SHOP ALL" },
        { to: "/catigori", label: "BY OCCASION" },
        { to: "/catigori", label: "BY CATEGORY" },
        { to: "/catigori", label: "BY PRICE" },
        { to: "/catigori", label: "SPECIAL" },
        { to: "/about", label: "FAQ" },
        { to: "/contact", label: "CONTACTS" },
    ];

    return (
        <header className='header__'>
            
            <div className='header__announcement'>
                <div className='container'>
                    <span className='header__announcement-text'>
                        7 DAYS A WEEK | Order by 5 pm For The Next Day Delivery | Delivering within 50 km from Sydney Olympic Park | Free Delivery Over $199 | Free Pick Up Available
                    </span>
                </div>
            </div>

            
            <div className='header__main'>
                <div className='container'>
                    <div className='header__content'>
                       
                        <div className='header__logo'>
                            <img src={logo} alt="Logo" />
                        </div>

                       
                        <div className='header__search'>
                            <input 
                                type="text" 
                                placeholder='Search...' 
                                className='header__search-input'
                            />
                            <FiSearch className='header__search-icon' />
                        </div>

                        
                        <div className='header__icons'>
                            <button className='header__icon-btn' aria-label="Wishlist">
                                <FaRegHeart />
                            </button>
                            <button className='header__icon-btn' aria-label="Cart">
                                <IoBagOutline />
                            </button>
                            
                            <button 
                                className='header__hamburger'
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                                aria-expanded={menuOpen}
                                aria-controls="mobileNav"
                            >
                                {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            <nav className='header__nav'>
                <div className='container'>
                    <div className='header__nav-links'>
                        {navLinks.map((link, index) => (
                            <Link 
                                key={index}
                                to={link.to} 
                                className='header__nav-link'
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            
            {menuOpen && (
                <div 
                    className='mnav__overlay'
                    onClick={handleOverlayClick}
                    aria-hidden="true"
                />
            )}

           
            <nav 
                id="mobileNav"
                ref={drawerRef}
                className={`mnav__drawer ${menuOpen ? 'mnav__drawer--open' : ''}`}
                aria-label="Mobile navigation"
            >
                <div className='mnav__drawer-header'>
                    <h2 className='mnav__drawer-title'>Menu</h2>
                    <button 
                        className='mnav__drawer-close'
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className='mnav__drawer-links'>
                    {navLinks.map((link, index) => (
                        <Link 
                            key={index}
                            ref={index === 0 ? firstLinkRef : null}
                            to={link.to} 
                            className='mnav__drawer-link'
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Header;
