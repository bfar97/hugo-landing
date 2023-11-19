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
    <div className="flex flex-col justify-between mb-6 w-full sm:w-80 lg:w-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden py-6">
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <div className="text-gray-600 text-center italic text-sm">{price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ul className="flex flex-col list-none list-inside">
          {features.map((feature: string, index: React.Key | null | undefined) => (
            <li key={index} className="text-gray-600 text-center py-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined"
  const isMobile = isBrowser() && window.innerWidth <= 800; // Adjust the breakpoint as needed

  return (
    <Layout id="pricing">
      <div className="flex flex-col items-center justify-evenly min-h-full">
        <h1 className="text-3xl font-bold mt-8 mb-4">Our Pricing Plans</h1>
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
                price="45€/mês"
                features={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PriceBox
                title="Intervenção Individual de Orientação Vocacional e Exploração de Carreira "
                price="45€/mês"
                features={[
                  'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
                  'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
                  'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PriceBox
                title="Intervenção em grupo de Orientação Vocacional e Exploração de Carreira"
                price="sob consulta"
                features={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ]}
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="flex flex-row space-x-4">
            <PriceBox
              title="Consulta Psicológica Individual"
              price="45€/mês"
              features={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              ]}
            />
            <PriceBox
              title="Intervenção Individual de Orientação Vocacional e Exploração de Carreira "
              price="45€/mês"
              features={[
                'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
                'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
                'Nulla viverra hendrerit magna, hendrerit accumsan elit malesuada in.',
              ]}
            />
            <PriceBox
              title="Intervenção em grupo de Orientação Vocacional e Exploração de Carreira"
              price="sob consulta"
              features={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
