import React from 'react';

import Layout from '../../components/layout';

const Contact: React.FC = () => {
  return (
    <Layout id="contact">
      <div className="bg-gray-50 py-1 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-12">Marcações</h1>

        <div className="mb-6 w-3/4">
          <form className="max-w-md mx-auto" method='post' action='https://getform.io/f/06ca4527-de8f-43f9-8896-adae08661ca7'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name='name'
                type="text"
                placeholder="O seu nome"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name='email'
                type="email"
                placeholder="O seu email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                name='message'
                placeholder="A sua mensagem"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-[#AF0000] hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;