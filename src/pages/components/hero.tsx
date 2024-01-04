import React from 'react';

import Layout from '../../components/layout';


import Header from "../../images/header.jpg"

import Linkedin from '../../assets/icons/linkedin.svg'

const Hero: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth <= 800;
  return (
    <Layout id='home'>
        <div className="z-10 w-full">
          <nav className="absolute p-4 z-100 w-full">
            <div className="flex mx-5 justify-between">
              <ul className="flex space-x-4 md:space-x-16 w-[80%] md:w-[50%] text-gray-600 font-medium">
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#pricing">Preços</a>
                </li>
                <li>
                  <a href="#contact">Marcações</a>
                </li>
                {/* <li>
                  <a href="/contact">Blog</a>
                </li> */}
              </ul>
              <a className='self-end' href="https://linkedin.com/">
                <Linkedin width={20} color='black' height={20} />
              </a>
            </div>
          </nav>
          <div className='inline-flex flex-col md:flex-row w-full h-screen'>
            <div className="flex mt-[40%] md:mt-0 justify-center md:w-1/2">
              <img className="md:self-center self-start w-[45vh] h-[45vh] lg:w-[40vw] lg:h-[40vw]" src={Header} alt="header" />
            </div> 
            <div className="flex flex-col md:w-1/3 text-center items-center justify-start md:justify-center h-screen">
              <p className="font-mono font-medium italic text-gray-700 text-xl sm:text-2xl md:text-4xl lg:text-7xl pb-2">
                Hugo Araújo
              </p>
              <p className="font-mono text-gray-600 text-md sm:text-lg  md:text-3xl lg:text-3xl pb-2">
                Psicólogo
              </p>
              <p className="font-mono text-gray-600 text-md sm:text-lg  md:text-2xl lg:text-2xl">
                Membro Efectivo OPP 25545
              </p>
            </div>
          </div>
        </div>
      </Layout>
  );
}

export default Hero;