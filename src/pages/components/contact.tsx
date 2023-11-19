import React from 'react';

import Layout from '../../components/layout';

const Contact: React.FC = () => {
  return (
    <Layout id="pricing">
      <div className="bg-gray-50 py-1 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl font-bold mb-12">Contacta-me</h1>

        <div className="mb-6 w-3/4">
          <form className="max-w-md mx-auto" method='post' action='https://getform.io/f/06ca4527-de8f-43f9-8896-adae08661ca7'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name='name'
                type="text"
                placeholder="Your Name"
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
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                name='message'
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;