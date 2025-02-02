import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Tools = () => {
  const technologies = [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Microsoft SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    { name: 'Github', icon: 'fa-brands fa-github' },
    { name: 'Microsoft Entity Framework Core', icon: 'fa-brands fa-microsoft' },
    { name: 'Microsoft ADO.NET', icon: 'fa-brands fa-microsoft' },
    { name: 'Microsoft Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg' },
    { name: 'Microsoft Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'React Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  ];

  // Animation controls
  const controls = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to start the animation
  const startAnimation = async () => {
    await controls.start('hidden'); // Reset to hidden state
    await controls.start('visible'); // Animate to visible state
  };

  // Use useEffect to create an animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, 8000); // Repeat every 5 seconds

    // Start the animation immediately on mount
    startAnimation();

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-8">
      <h1 className="relative font-bold text-white text-3xl mb-8 inline-block group">
        TECHNOLOGIES I USE
        <span className="absolute left-0 bottom-[-4px] h-1 bg-green-500 w-0 transition-all duration-300 group-hover:w-full"></span>
      </h1>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls} // Use the controls to animate
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            {tech.icon.startsWith('http') ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-20 h-20 hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <i className={`${tech.icon} text-white text-6xl hover:scale-110 transition-transform duration-300`}></i>
            )}
            <h6 className="mt-2 text-center text-white">{tech.name}</h6>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;