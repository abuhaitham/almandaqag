import React from 'react';
import { VALUES_DATA } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">قيمنا</h2>
          <p className="text-gray-600 mt-2">القيم التي نؤمن بها و توجه عملنا</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {VALUES_DATA.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                    <div className="text-primary mb-4">
                      <value.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    {value.description && <p className="text-gray-600 leading-relaxed">{value.description}</p>}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
