import * as React from "react"
import type { PageProps } from "gatsby"

import "./styles.css";

import Layout from "../components/layout"

import Header from "../images/header.png"

import Linkedin from '../assets/icons/linkedin.svg'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <main className="w-screen h-screen" style={{ overflowX: 'hidden' }}>
      <Layout id='home'>
        <div className="z-10 w-full">
          <nav className="absolute p-4 z-100 w-full">
            <div className="flex mx-5 justify-between">
              <ul className="flex space-x-16 w-[50%] text-white">
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="/features">Preços</a>
                </li>
                <li>
                  <a href="/pricing">Contactos</a>
                </li>
                <li>
                  <a href="/contact">Blog</a>
                </li>
              </ul>
              <a href="https://linkedin.com/">
                <Linkedin width={20} height={20} />
              </a>
            </div>
          </nav>
          <div className='inline-flex w-full h-screen'>
            <div className="flex w-1/2">
              <img className="w-full h-[90vh]" src={Header} alt="header" />
            </div> 
            <div className="flex w-1/2 items-center justify-center h-screen">
              <p className="font-mono text-8xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>
        </div>
      </Layout>
      <Layout id='about'>
        <div className="bg-gray-100 py-12 h-full w-full">
          <div className="mx-8 w-full h-full">
              <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Meet Your Compassionate Psychologist</h2>
              </div>

              <div className="text-center mb-6">
                  <p className="text-lg text-gray-700">
                      Hello, I'm [Psychologist's Name], a licensed psychologist dedicated to helping individuals find their path to emotional well-being and personal growth.
                  </p>
              </div>

              <div className="text-center mb-6">
                  <p className="text-lg text-gray-700">
                      With over [X years] of experience in the field, I specialize in [List of Specialties] and have helped countless clients navigate life's challenges. My approach to therapy is rooted in [Therapeutic Approach], which is known for its effectiveness in promoting lasting change and personal transformation.
                  </p>
              </div>

              <div className="text-center mb-6">
                  <p className="text-lg text-gray-700">
                      I believe that therapy is a collaborative journey, and I am here to support you every step of the way. Your privacy and well-being are my top priorities, and I adhere to the highest ethical standards.
                  </p>
              </div>

              <div className="text-center mb-6">
                  <p className="text-lg text-gray-700">
                      But don't just take my word for it—here's what some of my clients have to say:
                  </p>
              </div>

              <div className="text-center mb-6">
                  <p className="text-lg text-gray-700">
                      I hold [Degrees and Certifications], and I am a proud member of the [Professional Organization], ensuring that you receive the best care.
                  </p>
              </div>

              <div className="text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      [Contact CTA Button]
                  </button>
              </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage