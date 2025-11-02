

import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import { BASIC_DATA } from '../constants';

const BasicDataPage: React.FC = () => {
  return (
    <>
      <PageHeader title="البيانات الأساسية" breadcrumb="الشفافية / البيانات الأساسية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
              البيانات الأساسية للجمعية
            </h2>
            <div className="space-y-4">
              {BASIC_DATA.map((item) => (
                <div key={item.label} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-primary text-lg">{item.label}</p>
                  <p className="text-gray-800 text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasicDataPage;
