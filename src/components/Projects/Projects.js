import React from 'react';
import BMS from './BMS.png';
import IMS from './IMS.webp';
import GP from './GP.png';
import e from './e.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
    <div className="text-center p-5">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="relative font-bold text-white text-3xl mb-8 inline-block group">
            PROJECTS I HAVE DELIVERED
            <span className="absolute left-0 bottom-[-4px] h-1 bg-green-500 w-0 transition-all duration-300 group-hover:w-full"></span>
          </h1>
          <Swiper 
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 7000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Keeps autoplay even after user interaction
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col h-full bg-[#121212] p-8 rounded-lg w-full max-w-[550px] mx-auto">
                <img src={BMS} alt="BMS" className="w-full h-48 object-cover rounded-lg mb-3" />
                <h1 className="text-white text-lg title-font font-medium flex-shrink-0 font-extrabold mb-4">BMS</h1>
                <p className="leading-relaxed text-base text-white h-auto text-justify">
                A simple billing management system desktop application built in .NET windows forms to manage all sorts of bills and invoices of a store/mart. The database used is MS SQL Server with ADO .NET for data accessing.
                </p>
                <button 
                className="font-semibold mt-4 mb-2 p-[10px] bg-[#333] text-white border-none rounded-md cursor-pointer max-w-[250px] mx-auto
                "
                onClick={() => window.open('https://github.com/SyedHassaanAli880/Inventory-Management-System', '_blank')}
              >
                VIEW CODE
              </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex rounded-lg h-full bg-[#121212] p-8 flex-col w-full max-w-[550px] mx-auto">
                <img src={IMS} alt="IMS" className="w-full h-48 object-cover rounded-lg mb-3" />
                <h2 className="text-white text-lg title-font font-medium font-extrabold mb-4">IMS</h2>
                <p className="leading-relaxed text-base text-white h-auto text-justify">
                A simple inventory management system desktop application made in .NET windows forms to manage stocks, suppliers, users, and purchase invoices etc.
                </p>
                <button 
                className="font-semibold mt-4 mb-2 p-[10px] bg-[#333] text-white border-none rounded-md cursor-pointer max-w-[250px] mx-auto
                "
                onClick={() => window.open('https://github.com/SyedHassaanAli880/Inventory-Management-System', '_blank')}
              >
                VIEW CODE
              </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex rounded-lg h-full bg-[#121212] p-8 flex-col w-full max-w-[550px] mx-auto">
                <img src={GP} alt="Global Post" className="w-full h-48 object-cover rounded-lg mb-3" />
                <h2 className="text-white text-lg title-font font-medium font-extrabold mb-4">GLOBAL POST</h2>
                <p className="leading-relaxed text-base text-white h-auto text-justify">
                GlobalPost from Auctane is a shipping solution that offers cost-effective domestic and international parcel shipping services. It integrates with e-commerce platforms & shipping carriers to provide automated customs forms & tracking services.
                </p>
                <button 
                className="font-semibold mt-4 mb-2 p-[10px] bg-[#333] text-white border-none rounded-md cursor-pointer max-w-[250px] mx-auto
                "
                onClick={() => window.open('https://www.goglobalpost.com/', '_blank')}
              >
                VIEW WEBSITE
              </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex rounded-lg h-full bg-[#121212] p-8 flex-col w-full max-w-[550px] mx-auto">
                <img src={e} alt="KhareedLo" className="w-full h-48 object-cover rounded-lg mb-3" />
                <h2 className="text-white text-lg title-font font-medium font-extrabold mb-4">KhareedLo</h2>
                <p className="leading-relaxed text-base text-white h-auto text-justify">
                KhareedLo which translates to "Buy it!" is a simple e-commerce website which includes a shopping cart, users, login, authentication and feedback functionality.
                </p>
                <button 
                className="font-semibold mt-4 mb-2 p-[10px] bg-[#333] text-white border-none rounded-md cursor-pointer max-w-[250px] mx-auto
                "
                onClick={() => window.open('https://github.com/SyedHassaanAli880/KhareedLo', '_blank')}
              >
                VIEW CODE
              </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
