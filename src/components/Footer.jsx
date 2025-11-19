import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Chandra Sai Teja. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Chandra0804" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/chandra-sai-teja-adhikarla/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:chandrasaiteja0804@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
