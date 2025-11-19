import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
                <div className="contact-content">
                    <p className="contact-text">
                        Interested in collaborating or have a project in mind?
                        Feel free to reach out via email or connect on LinkedIn.
                    </p>

                    <motion.a
                        href="mailto:chandrasaiteja0804@gmail.com"
                        className="email-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Say Hello
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
