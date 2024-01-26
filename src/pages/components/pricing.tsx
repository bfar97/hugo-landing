// src/pages/pricing.tsx

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Layout from '../../components/layout';

const PriceBox = ({ title, price, features }: { title: string; price: string; features: any }) => {
  return (
    <div className="flex flex-col h-[30vh] justify-between mb-20 w-full sm:w-80 lg:w-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-6">
      <div className="px-6 py-4 flex flex-col justify-center h-[40%] items-center">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
      </div>
      <div className="text-gray-600 text-center italic text-sm">{price}</div>
      <div className="px-6 pt-4 pb-2 h=[50%]">
        <ul className="flex flex-col list-none list-inside">
          {features.map((feature: string, index: React.Key | null | undefined) => {
            if (feature === '.') return (
              <li key={index} className="text-transparent text-center py-2">
                {feature}
              </li>
            )
            
            return (
              <li key={index} className="text-gray-600 text-center py-2">
                {feature}
              </li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth <= 960; // Adjust the breakpoint as needed

  return (
    <Layout id="pricing">
      <div className="flex flex-col items-center justify-evenly min-h-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-8 mb-4">Preços</h1>
        {isMobile ? (
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination]}
            style={{ width: "90%" }}
            pagination={true}
          >
            <SwiperSlide>
              <PriceBox
                title="Consulta Psicológica Individual"
                price="45€"
                features={[
                  '50 minutos',
                  'Presencial ou Online',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PriceBox
                title="Intervenção Individual de Orientação Vocacional e Exploração de Carreira "
                price="45€"
                features={[
                  '50 minutos',
                  'Presencial ou Online',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PriceBox
                title="Intervenção em grupo de Orientação Vocacional e Exploração de Carreira"
                price="Sob consulta"
                features={[
                  'Presencial ou Online',
                  '',
                  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ]}
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="flex flex-row space-x-4">
            <PriceBox
                title="Consulta Psicológica Individual"
                price="45€"
                features={[
                  '50 minutos',
                  'Presencial ou Online',
                ]}
              />
            <PriceBox
                title="Intervenção Individual de Orientação Vocacional e Exploração de Carreira "
                price="45€"
                features={[
                  '50 minutos',
                  'Presencial ou Online',
                ]}
              />
            <PriceBox
                title="Intervenção em grupo de Orientação Vocacional e Exploração de Carreira"
                price="Sob consulta"
                features={[
                  'Presencial ou Online',
                  '.',
                  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ]}
              />
          </div>
        )}
        <div className="bg-red-100 h-1/4 w-full"></div>
      </div>
    </Layout>
  );
};

export default Pricing;
