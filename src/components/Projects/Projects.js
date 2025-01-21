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
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="font-bold text-white">PROJECTS I HAVE DELIVERED</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <h2 class="text-black text-lg title-font font-medium">BMS</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">A simple billing management system desktop application built in .NET windows forms to manage all sorts of bills and invoices of a store/mart. The database used is MS SQL Server with ADO .NET for data accessing.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <h2 class="text-black text-lg title-font font-medium">IMS</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">A simple inventory management system desktop application made in .NET windows forms to manage stocks, suppliers, users, and purchase invoices etc. The database used is MS SQL Server with ADO .NET for data accessing.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <h2 class="text-black text-lg title-font font-medium">Global Post</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">GlobalPost offers a range of domestic and international shipping solutions that simplifies parcel shipping while saving you money. By combining our easy-to-use technology and seamless integrations with the world’s top shipping platforms, we help e-commerce and warehouse sellers succeed domestically and around the world. Global Post is built using .NET 8 microservices architecture, React.js, MS SQL Server and REST APIs. Global Post is not an open-source software.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Projects;
