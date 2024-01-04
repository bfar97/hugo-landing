// src/pages/info.tsx

import React from 'react';

import Layout from '../../components/layout';

const Info: React.FC = () => {

  const onClick = () => {
    console.log('button clicked');
    const targetElement = document.getElementById('contact'); // Replace with the actual ID of the element you want to scroll to
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Layout id='about'>
      <div className="bg-gray-50 py-12 h-full">
        <div className="flex flex-col items-center justify-around h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
          <h2 className="text-2xl md:text-5xl font-bold mt-8 mb-4">Sobre Mim</h2>
          <section className="flex flex-col self-center w-5/6 md:w-[40vw] mb-6">
            <h2 className="text-lg md:text-3xl text-center font-semibold mb-4 md:mb-12">Actividade Profissional</h2>
            <p className="text-gray-700 text-md md:text-lg mb-6">
              <a href="https://catolicabs.porto.ucp.pt/pt-pt/career-and-development-office?change-language=1" className="text-blue-500 font-bold hover:underline">Católica Porto Business School</a> | Orientação Vocacional, Gestão de Carreira e Aprendizagem ao Longo da Vida
            </p>
            <p className="text-gray-700 text-md md:text-lg mb-6">
              <a href="https://consultorio-de-psicologia-do-porto.negocio.site/" className="text-blue-500 font-bold hover:underline">Consultório de Psicologia do Porto</a> | Psicologia Clínica e Orientação Vocacional
            </p>
            <p className="text-gray-700 text-md md:text-lg">
              <a href="https://www.linkedin.com/company/consultoriodepsicologiaporto/about/" className="text-blue-500 font-bold hover:underline">Consultório de Psicologia Porto</a> | Psicologia Clínica e Orientação Vocacional
            </p>
          </section>
          <section className="flex flex-col self-center w-5/6 md:w-[40vw]">
            <h2 className="text-2xl md:text-5xl text-center font-semibold mb-4 md:mb-12">Áreas de Intervenção e destinatários</h2>
            <p className="text-gray-700 text-md md:text-lg mb-6">
              <a className="text-gray-600 font-bold">Consulta Psicológica Individual </a> | Problemas psico-emocionais (ansiedade, depressão, stress, etc); Problemas relacionais; 
              Problemas de comportamento; Transições de vida (reacção à mudança, dificuldades de adaptação, etc)
            </p>
            <p className="text-gray-700 text-md md:text-lg mb-6">
              <a className="text-gray-600 font-bold">Orientação Vocacional e Exploração de Carreira</a> | Apoio nas tomadas de decisão no percurso académico; 
              Intervenção nas carreiras e apoio nas transições para o mercado de trabalho.
            </p>
          </section>
          <div className="text-center">
            <button onClick={onClick} className="bg-[#AF0000] hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
              Marcações
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Info;
