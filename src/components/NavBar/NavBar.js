import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                {/* <li>
                    <Link to="/projects">
                        <i className="fas fa-project-diagram"></i> Projects
                    </Link>
                </li>
                <li>
                    <Link to="/tools">
                        <i className="fas fa-server"></i> TECHNOLOGIES
                    </Link>
                </li> */}
                <li>
                    <a href="/Hassan Ali - resume.pdf" download="Hassan Ali - resume.pdf">
                        <i className="fas fa-file-download"></i> Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
