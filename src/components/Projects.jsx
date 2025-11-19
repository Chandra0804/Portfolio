import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'US Visa Prediction System',
        description: 'End-to-end MLOps pipeline for US Visa approval prediction. Implements CI/CD, model monitoring, and deployment on AWS.',
        tags: ['MLOps', 'AWS', 'Docker', 'CI/CD'],
        link: 'https://github.com/Chandra0804/us_visa_MLOps'
    },
    {
        id: 2,
        title: 'Image Super-Resolution',
        description: 'Attention-based GAN architecture for enhancing low-resolution images. Focuses on preserving high-frequency details.',
        tags: ['PyTorch', 'GANs', 'Deep Learning'],
        link: 'https://github.com/Chandra0804/ImageSuperResolution'
    },
    {
        id: 3,
        title: 'Virtual Painter',
        description: 'Interactive AI application allowing users to paint in the air using hand gestures, powered by OpenCV and MediaPipe.',
        tags: ['OpenCV', 'Python', 'Computer Vision'],
        link: 'https://github.com/Chandra0804/Hand-Gesture-Controlled-Virtual-Painting-Application'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Selected <span className="highlight">Projects</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            whileHover={{
                                scale: 1.05,
                                rotateX: 5,
                                rotateY: 5,
                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="card-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                            </div>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
