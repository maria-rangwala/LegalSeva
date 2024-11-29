"use client";
import React, { useState} from 'react';
import "./header.css";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='header'>
            <div className={`navbar ${!showMenu ? 'responsive' : ''}`} id='navbar'>
            <div className='nav'>
            <img src="legalseva.svg" alt="logo" />
            <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? (<IoIosMenu  color="black" size="2em" alt="Menu"/>) : (<RxCross2 color="black" size="2em" alt="Close"/>)}</button>
            </div>
            <div className="menu">
            {!showMenu ?
            (<ul type="none">
                <li><a href="/" onClick={() => setShowMenu(!showMenu)}>Home</a></li>
                <li><a href="/contact" onClick={() => setShowMenu(!showMenu)}>Contact Us</a></li>
                <li id='login-btn'><a href="/login" onClick={() => setShowMenu(!showMenu)}>Login</a></li>
                <li id='signup-btn'><a href="/signup" onClick={() => setShowMenu(!showMenu)}>Sign up</a></li>
            </ul>) : null
            }
            </div>
            </div>
        </div>
    );
};

export default Header;