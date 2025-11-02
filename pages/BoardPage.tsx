import React from 'react';
import PageHeader from '../components/PageHeader';
import { BOARD_MEMBERS } from '../constants';

const BoardPage: React.FC = () => {
  return (
    <>
      <PageHeader title="مجلس الإدارة" breadcrumb="مجلس الإدارة" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary">أعضاء مجلس الإدارة</h2>
            <p className="text-gray-600 mt-2">قيادة حكيمة تسعى لتحقيق رؤية الجمعية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {BOARD_MEMBERS.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md text-center p-6">
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardPage;