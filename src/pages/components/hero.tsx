import React from 'react';

import Layout from '../../components/layout';


import Header from "../../images/header.png"

import Linkedin from '../../assets/icons/linkedin.svg'

const Hero: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth <= 800;
  return (
    <Layout id='home'>
        <div className="z-10 w-full">
          <nav className="absolute p-4 z-100 w-full">
            <div className="flex mx-5 justify-between">
              <ul className="hidden md:flex space-x-16 w-[50%] text-white">
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#pricing">Preços</a>
                </li>
                <li>
                  <a href="#contacts">Contactos</a>
                </li>
                <li>
                  <a href="/contact">Blog</a>
                </li>
              </ul>
              <a className='self-end' href="https://linkedin.com/">
                <Linkedin width={20} color={isMobile ? 'white': 'black' } height={20} />
              </a>
            </div>
          </nav>
          <div className='inline-flex w-full h-screen'>
            <div className="flex md:w-3/4 lg:w-2/3 xl:w-1/2">
              <img className="w-full h-[90vh]" src={Header} alt="header" />
            </div> 
            <div className="flex absolute lg:relative lg:w-1/3 items-center justify-center h-screen">
              <p className="font-mono text-xl sm:text-2xl  md:text-4xl lg:text-7xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>
        </div>
      </Layout>
  );
}

export default Hero;