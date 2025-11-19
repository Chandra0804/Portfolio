import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About <span className="highlight">Me</span></h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm <strong>Chandra Sai Teja Adhikarla</strong>, a passionate software engineer based in Mumbai.
                            I specialize in bridging the gap between full-stack development and artificial intelligence.
                        </p>
                        <p>
                            With experience in building multi-agent workflows, deploying LLMs, and optimizing low-latency pipelines,
                            I love tackling complex problems that require both systems engineering and ML expertise.
                        </p>
                        <p>
                            Currently working as an SDE-AIML at Samespace, I'm constantly exploring new technologies to build smarter, faster applications.
                        </p>
                    </div>
                    <div className="about-visual">
                        <div className="glass-card float-card">
                            <h3>Tech Stack</h3>
                            <div className="skills-container">
                                <div className="skill-category">
                                    <h3>Languages</h3>
                                    <div className="tags">
                                        <span>Python</span><span>Java</span><span>C++</span><span>JavaScript</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h3>AI / ML & GenAI</h3>
                                    <div className="tags">
                                        <span>PyTorch</span><span>Transformers</span><span>RAG</span><span>LangChain</span>
                                        <span>Computer Vision</span><span>GANs</span><span>Qdrant</span><span>Triton Server</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h3>Web Development</h3>
                                    <div className="tags">
                                        <span>React.js</span><span>Node.js</span><span>TailwindCSS</span><span>MongoDB</span>
                                        <span>gRPC</span><span>ScyllaDB</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h3>Tools & Cloud</h3>
                                    <div className="tags">
                                        <span>AWS</span><span>Docker</span><span>Git</span><span>Firebase</span>
                                        <span>Streamlit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
