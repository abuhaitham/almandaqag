
import React from 'react';
// Fix: Corrected import path to be relative.
import { PARTNER_LOGOS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary">
            شركاء النجاح
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 md:w-1/6 p-4">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`}
                  className="max-h-16 mx-auto"
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Partners;
