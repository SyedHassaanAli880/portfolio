import React from 'react';
import './Home.css';
import profilePicture from './PortfolioPicture.jpg'; // Update the path to your image

const Home = () => {
    return (
        <div className="home-container">
            <div className="card">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <div className="content">
                    <h1 className="name">Syed Hassaan Ali - Full Stack Software Developer</h1>
                    
                    <div className="introduction">
                        <h2 className="intro-heading">LET ME INTRODUCE MYSELF</h2>
                        <p className="interests">
                            <i className="fas fa-circle" style={{ marginRight: '8px', color: '#00ffc3' }}></i> 
                            I am a full stack software developer currently working at BaritechSol which provides services to "Auctane" a U.S-based company that provides internet-based mailing and shipping services to e-commerce businesses.
                            With over 1 year of professional experience in software development, specializing in web development, I offer expertise in creating responsive, high-performance websites using modern technologies like React, .NET, and SQL Server, microservices architecture and REST APIs. Whether you need a new web application built from scratch or improvements to an existing one, I am committed to delivering clean, efficient code and outstanding results tailored to your business needs.
                        </p>
                        <p className="interests">
                            <i className="fas fa-circle" style={{ marginRight: '8px', color: '#00ffc3' }}></i> 
                            Other than web technologies, I also have an interest in Computer Vision and the Internet Of Things (IoT).
                        </p>
                    </div>

                    <div className="connect">
                        <h2 className="connect-heading">FIND ME ON</h2>
                        <a href="https://github.com/SyedHassaanAli880" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sayyad-hassaan-ali-0135921a5" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/hassanali520" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
