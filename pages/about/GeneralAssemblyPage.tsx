

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { GENERAL_ASSEMBLY_MEMBERS } from '../../constants';

const GeneralAssemblyPage: React.FC = () => {
  return (
    <>
      <PageHeader title="الجمعية العمومية" breadcrumb="عن الجمعية / الجمعية العمومية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">أعضاء الجمعية العمومية</h2>
              <ul className="space-y-4 text-gray-700">
                {GENERAL_ASSEMBLY_MEMBERS.map((member, index) => (
                  <li key={index} className="bg-light p-4 rounded-md">
                    <p className="font-semibold">{member.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralAssemblyPage;
