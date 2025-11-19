import React from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <Scene />
            </div>

            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    CHANDRA <span className="highlight">SAI TEJA</span>
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    Full Stack Developer & AI/ML Engineer. Building intelligent systems that scale.
                </motion.p>
                <motion.button
                    className="cta-button"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Work
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
