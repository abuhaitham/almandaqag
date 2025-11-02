
import React from 'react';
import CountUp from './CountUp';
import { STATS_DATA } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat, index) => (
            <div key={index}>
              <div className="text-secondary mb-2">
                <stat.icon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-4xl font-extrabold">
                {typeof stat.value === 'number' ? <CountUp end={stat.value} /> : stat.value}
              </h3>
              <p className="text-lg text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
