import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import "./footer.css"

const Footer = () => {
    return (
        <footer>
        <div className="footer">
        <div className='contact'>
            <p>Have a Question?</p>
            <a href="/contact">Contact Us</a>
        </div>
        <div className='footer-container'>
    <div className="icons">
            <a data='Linkedin'className="icon" href='#' target='blank'><FaLinkedin color="black" size="2em" /></a>
            <a data='Twitter' className="icon" href='#' target='blank'><FaXTwitter color="black" size="2em" /></a>
            <a data='Instagram' className="icon"href='#' target='blank'><FaInstagram color="black" size="2em" /></a>
            <a data='Youtube' className="icon" href='#' target='blank'><FaYoutube color="black" size="2em" /></a>
            <a data='Github' className="icon" href='#' target='blank'><FaGithub color="black" size="2em" /></a>
    </div>
    </div>
    <br/>
    <hr/>
    <br/>
<p>Copyright2024; Designed by LegalSeva</p>
    </div>
        </footer>
    );
};

export default Footer;