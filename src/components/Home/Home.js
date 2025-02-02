import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import profilePicture from './PortfolioPicture.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Who is Syed Hassaan Ali?'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80
    });

    const textRef = useRef(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            setUnderlineWidth(textRef.current.offsetWidth);
        }
    }, [text]);

    return (
        <div className="home-container flex justify-between items-center -mt-24">
            <div className="content w-1/2 mx-auto">
                <h1 className="name text-left text-white m-50 text-4xl relative">
                    <span ref={textRef} className="font-bold">
                        {text}
                    </span>
                    <span className="text-green-500">
                        <Cursor cursorStyle="|" />
                    </span>
                    {/* Animated Underline */}
                    <span
                        className="absolute left-0 bottom-[-4px] h-1 bg-green-500 transition-all duration-150 ease-linear"
                        style={{ width: `${underlineWidth}px` }}
                    />
                </h1>
                <p className="interests text-white mt-4">
                    I am a motivated individual and a skilled full-stack software developer with expertise in building scalable, high-performance applications. I specialize in web development, leveraging modern technologies like React, .NET, and SQL Server, along with a strong understanding of microservices architecture and REST APIs. Whether it's creating new web applications or enhancing existing ones, I focus on delivering clean, efficient, and maintainable code that aligns with your business objectives. Additionally, I have a keen interest in emerging fields such as Natural Language Processing, Computer Vision, and the Internet of Things (IoT), continuously expanding my skill set to tackle diverse challenges in the tech industry.
                </p>
            </div>
            <div className="flex-shrink-0 mr-20">
                <img src={profilePicture} alt="Profile"/>
            </div>
        </div>
    );
};

export default Home;
