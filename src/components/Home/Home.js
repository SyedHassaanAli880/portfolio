import React from 'react';
import './Home.css';
import profilePicture from './PortfolioPicture.jpg'; // Update the path to your image

const Home = () => {
    return (
        <div class="home-container flex justify-between items-center -mt-24">
            <div class="content w-1/2 mx-auto">
                <h1 class="name text-left text-white">Who is Syed Hassaan Ali?</h1>
                <p class="interests">
                I am an aspiring entrepreneur and a skilled full-stack software developer with expertise in building scalable, high-performance applications. I specialize in web development, leveraging modern technologies like React, .NET, and SQL Server, along with a strong understanding of microservices architecture and REST APIs. Whether it's creating new web applications or enhancing existing ones, I focus on delivering clean, efficient, and maintainable code that aligns with your business objectives. Additionally, I have a keen interest in emerging fields such as Natural Language Processing, Computer Vision, and the Internet of Things (IoT), continuously expanding my skill set to tackle diverse challenges in the tech industry.
                </p>
            </div>
            <div class="flex-shrink-0 mr-20">
                <img src={profilePicture} alt="Profile" />
            </div>
        </div>

    );
};

export default Home;
