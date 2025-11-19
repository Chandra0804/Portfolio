import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Research.css';

const researchData = [
    {
        id: 1,
        title: 'A Unified Deep-Domain Adaptation Framework: Advancing Feature Separability and Local Alignment',
        journal: 'Sensors (MDPI)',
        date: 'June 2025',
        description: 'Introduced DDASLA, a novel method incorporating attention mechanisms into ResNet-18 to address domain shift. Utilizes angular loss, LMMD, and entropy minimization to improve feature discrimination and alignment.',
        link: 'https://www.mdpi.com/1424-8220/25/12/3671',
        type: 'Journal Paper'
    },
    {
        id: 2,
        title: 'Underwater Object Detection and Image Enhancement',
        journal: 'Research Project',
        date: 'Feb 2024 - Present',
        description: 'Developing a real-time detection system for underwater environments using A2CNet and Faster R-CNN. Deployed on NVIDIA Jetson Nano for edge processing, focusing on enhancing visibility in turbid conditions.',
        link: '#',
        type: 'Ongoing Research'
    }
];

const Research = () => {
    return (
        <section id="research" className="research-section">
            <div className="container">
                <h2 className="section-title">Research <span className="highlight">& Publications</span></h2>
                <div className="research-grid">
                    {researchData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="research-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            onClick={() => item.link !== '#' && window.open(item.link, '_blank')}
                            style={{ cursor: item.link !== '#' ? 'pointer' : 'default' }}
                        >
                            <div className="research-header">
                                <span className="research-type">{item.type}</span>
                                <span className="research-date">{item.date}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <div className="research-journal">{item.journal}</div>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
