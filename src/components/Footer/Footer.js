import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] footer bg-dark text-light h-26 flex flex-col items-center justify-center">
      <div className="connect translate-y-[-22px]">
        <a href="https://github.com/SyedHassaanAli880" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github text-white"></i>
        </a>
        <a href="https://www.linkedin.com/in/sayyad-hassaan-ali-0135921a5" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin text-white"></i>
        </a>
        <a href="https://x.com/hassanali520" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter text-white"></i>
        </a>
        <a href="https://www.upwork.com/freelancers/~01ce67a365fb2f9e53" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-upwork text-white"></i>
        </a>
      </div>
      <h6 className="text-white">Syed Hassaan Ali © 2025. All Rights Reserved.</h6>
      <h6 className="text-white">Designed and developed by Syed Hassaan Ali.</h6>
    </footer>
  );
};



export default Footer;
