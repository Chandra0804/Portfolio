import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experienceData = [
    {
        id: 1,
        role: 'SDE1-AIML',
        company: 'Samespace',
        period: 'Feb 2025 - Present',
        description: [
            'Built internal multi-agent workflows with Google ADK, deployed fine-tuned open-source LLMs on self-managed infra to reduce dependency on third-party APIs.',
            'Designed low-latency gRPC-based STT and TTS services for a production voice bot platform using Whisper, Silero VAD, and Triton; reduced response latency by 30%.',
            'Implemented hybrid RAG pipelines (Qdrant + BM25) for document-based Q&A, tuned chunking and retrieval to improve answer relevance by 18%.',
            'Led issue resolution and model tuning for a Philippines telecom client, improving STT accuracy in noisy call center environments by 12%.'
        ]
    },
    {
        id: 2,
        role: 'AI/ML Intern',
        company: 'BrainLamp Solutions',
        period: 'May 2024 - Aug 2024',
        description: [
            'Addressed domain shift in remote sensing by designing a ResNet-18 based framework (DDASLA) with attention modules and hybrid loss functions (angular, LMMD, entropy).',
            'Improved cross-domain classification accuracy on benchmark datasets (e.g., NWPU-RESISC45, RSSCN7) compared to baseline models.',
            'Co-authored paper in MDPI Sensors.'
        ]
    },
    {
        id: 3,
        role: 'Full Stack Developer',
        company: '1-on-1 Teaching Friend Technologies',
        period: 'July 2023 - Oct 2023',
        description: [
            'Built responsive web apps using React, Node.js, and MongoDB; reduced page load times by optimizing API usage and lazy loading strategies.',
            'Configured and deployed web infrastructure on AWS (EC2 + Route53).',
            'Integrated OTP-based mobile verification via Firebase, increasing user sign-up completion rate by 15%.'
        ]
    }
];

const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Indian Institute of Information Technology, Sri City',
        period: 'Dec 2021 - May 2025',
        score: 'CGPA: 8.39'
    },
    {
        id: 2,
        degree: 'Mathematics',
        institution: 'Ascent Junior College',
        period: 'June 2019 - May 2021',
        score: '94.1%'
    }
];

const Experience = () => {
    const [expandedId, setExpandedId] = React.useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`timeline-item ${expandedId === item.id ? 'expanded' : ''}`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            onClick={() => toggleExpand(item.id)}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <span className="period">{item.period}</span>
                                        <h3>{item.role}</h3>
                                        <h4>{item.company}</h4>
                                    </div>
                                    <div className="expand-icon">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{
                                                transform: expandedId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{ height: expandedId === item.id ? 'auto' : 0, opacity: expandedId === item.id ? 1 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <ul className="experience-list">
                                        {item.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '5rem' }}>Education</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <span className="period">{item.period}</span>
                                <h3>{item.degree}</h3>
                                <h4>{item.institution}</h4>
                                <p className="score">{item.score}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
