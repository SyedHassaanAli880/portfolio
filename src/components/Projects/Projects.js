import React from 'react';
import BMS from './BMS.png';
import IMS from './IMS.webp';
import GP from './GP.png';
import e from './e.png';
import './Projects.css';

const Projects = () => {
 
  const projectData = [
    {
      id: 1,
      title: 'IMS',
      description: 'A simple inventory management system desktop application made in .NET windows forms to manage stocks, suppliers, users, and purchase invoices etc. The database used is MS SQL Server with ADO .NET for data accessing.',
      imageUrl: BMS,
      repoUrl: 'https://github.com/SyedHassaanAli880/Inventory-Management-System'
    },
    {
      id: 2,
      title: 'BMS',
      description: 'A simple billing management system desktop application built in .NET windows forms to manage all sorts of bills and invoices of a store/mart. The database used is MS SQL Server with ADO .NET for data accessing.',
      imageUrl: IMS,
      repoUrl: 'https://github.com/SyedHassaanAli880/Bill-Management-System'
    },
    {
      id: 3,
      title: 'Global Post',
      description: 'GlobalPost offers a range of domestic and international shipping solutions that simplifies parcel shipping while saving you money. By combining our easy-to-use technology and seamless integrations with the world’s top shipping platforms, we help e-commerce and warehouse sellers succeed domestically and around the world. Global Post is built using .NET 8 microservices architecture, React.js, MS SQL Server and REST APIs. Global Post is not an open-source software.',
      imageUrl: GP,
      repoUrl: 'https://www.goglobalpost.com/'
    },
    {
      id: 4,
      title: 'Khareed Lo (Buy It)',
      description: 'A simple e-commerce website which includes a shopping cart, users, login, authentication and feedback functionality. Built on ASP .NET 5.0 MVC, the database used for this project is MS SQL Server with Entity framework core for ORM.',
      imageUrl: e,
      repoUrl: 'https://github.com/SyedHassaanAli880/KhareedLo'
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      
      {/* Mapping through the projectData array to display cards */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {projectData.map((project) => (
          <div 
            key={project.id} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '20px', 
              width: '300px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              style={{ 
                width: '100%', 
                height: '239px', 
                objectFit: 'cover', 
                borderRadius: '8px 8px 0 0' 
              }} 
            />
            <h3 style={{ margin: '15px 0' }}>{project.title}</h3>
            <p style={{ flexGrow: 1, minHeight: '60px' }}>{project.description}</p>
            {
              project.title === 'Global Post' ? (
                <button 
                className='website-button' 
                style={{
                  fontWeight: '800', 
                  marginTop: 'auto', 
                  padding: '10px', 
                  backgroundColor: '#333', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out'
                }}
                onClick={() => window.open(project.repoUrl, '_blank') }
              >
                <i className="fas fa-globe"></i> WEBSITE
              </button>
              
              ) : (
                <button 
                  className='github-button' 
                  style={{ 
                    fontWeight: '800',
                    marginTop: 'auto',
                    padding: '10px',
                    backgroundColor: '#333',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px', 
                    cursor: 'pointer' ,
                    transition: 'box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out'
                  }}
                  onClick={() => window.open(project.repoUrl, '_blank') }
                  >
                  <i className="fab fa-github"></i> GITHUB
                </button>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
